"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import { useFinance } from '@/context/FinanceContext';
import { Transaction, TransactionType } from '@/types';
import { format } from 'date-fns';
import CustomDatePicker from './CustomDatePicker';
import CustomTimePicker from './CustomTimePicker';

interface TransactionModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    transactionToEdit?: Transaction | null;
}

export const TransactionModal = ({ isOpen, onClose, transactionToEdit }: TransactionModalProps) => {
    const {
        isTransactionModalOpen,
        closeTransactionModal,
        addTransaction,
        updateTransaction,
        accounts,
        categories,
        formatAmount,
        ledgers,
        activeBookId,
        transactionToEdit: contextTransactionToEdit
    } = useFinance();

    const finalIsOpen = isOpen !== undefined ? isOpen : isTransactionModalOpen;
    const finalOnClose = onClose || closeTransactionModal;
    const activeTransaction = transactionToEdit || contextTransactionToEdit;

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState<TransactionType>('EXPENSE');
    const [categoryId, setCategoryId] = useState('');
    const [accountId, setAccountId] = useState('');
    // Initialize with local date
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [time, setTime] = useState(new Date().toTimeString().slice(0, 5));
    // To track changes
    const [originalDate, setOriginalDate] = useState('');
    const [originalTime, setOriginalTime] = useState('');
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');
    const [beneficiary, setBeneficiary] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [isRecurring, setIsRecurring] = useState(false);
    const [frequency, setFrequency] = useState('MONTHLY');
    const [endDate, setEndDate] = useState('');

    const [activePicker, setActivePicker] = useState<'DATE' | 'TIME' | 'END_DATE' | null>(null);

    // Animation states
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setIsMounted(true);
        setPortalElement(document.body);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        if (finalIsOpen) {
            setIsMounted(true);
            // Double rAF ensures the browser validates the 'closed' state first, then transitions to 'open' in the next frame
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsVisible(true));
            });
        } else {
            setIsVisible(false);
            // Wait for animation to finish before unmounting (300ms matches CSS transition)
            const timer = setTimeout(() => setIsMounted(false), 300);
            return () => clearTimeout(timer);
        }
    }, [finalIsOpen]);

    // Reset or Populate form
    useEffect(() => {
        if (finalIsOpen) {
            if (activeTransaction) {
                // Edit Mode
                setAmount(activeTransaction.amount.toString());
                setDescription(activeTransaction.description);
                setType(activeTransaction.type);
                setCategoryId(activeTransaction.category_id || categories.find(c => c.name === activeTransaction.category)?.id || '');
                setAccountId(activeTransaction.account_id || accounts.find(a => a.name === activeTransaction.account)?.id || '');

                const d = new Date(activeTransaction.date);
                // Use local formatting to avoid UTC drift
                const localDate = format(d, 'yyyy-MM-dd');
                const localTime = format(d, 'HH:mm');

                setDate(localDate);
                setTime(localTime);
                // Track original values to prevent updates if unchanged
                setOriginalDate(localDate);
                setOriginalTime(localTime);

                setLocation(activeTransaction.location || '');
                setNotes(activeTransaction.notes || '');
                setBeneficiary(activeTransaction.beneficiary || '');
                setIsPending(activeTransaction.status === 'PENDING');
                setIsRecurring(activeTransaction.isRecurring || false);
                setFrequency(activeTransaction.frequency || 'MONTHLY');
                const endDateVal = activeTransaction.end_date ? new Date(activeTransaction.end_date).toISOString().split('T')[0] : '';
                setEndDate(endDateVal);
            } else {
                // Create Mode
                setAmount('');
                setDescription('');
                setType('EXPENSE');
                setCategoryId('');
                setCategoryId('');
                // Default account selection
                const defaultAccount = accounts.find(a => a.isDefault);
                setAccountId(defaultAccount?.id || accounts[0]?.id || '');

                // Use local time for new transactions
                const now = new Date();
                const localDate = format(now, 'yyyy-MM-dd');
                const localTime = format(now, 'HH:mm');
                setDate(localDate);
                setTime(localTime);
                setOriginalDate('');
                setOriginalTime('');

                setLocation('');
                setNotes('');
                setBeneficiary('');
                setIsPending(false);
                setIsRecurring(false);
                setFrequency('MONTHLY');
                setEndDate('');
            }
        }
    }, [finalIsOpen, transactionToEdit, accounts, categories]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
            alert('Por favor ingresa un monto válido');
            return;
        }

        if (!accountId) {
            alert('Por favor selecciona una cuenta');
            return;
        }

        const dateTime = new Date(`${date}T${time}`);
        const selectedAccount = accounts.find(a => a.id === accountId);

        // Only update date if it changed
        const dateChanged = date !== originalDate || time !== originalTime;

        const transactionData: any = {
            amount: numAmount,
            type: type,
            description: description || (type === 'INCOME' ? 'Ingreso' : 'Gasto'),
            account: selectedAccount?.name || 'Unknown',
            account_id: accountId,
            category_id: categoryId || undefined,
            category: categories.find(c => c.id === categoryId)?.name || 'Sin categoría',
            status: (isPending ? 'PENDING' : 'COMPLETED') as 'PENDING' | 'COMPLETED',
            location: location,
            notes: notes,
            beneficiary: beneficiary,
            icon: type === 'INCOME' ? 'trending_up' : 'trending_down',
            isRecurring: isRecurring,
            frequency: isRecurring ? frequency : null,
        };

        // Only include date if creating new OR if user changed it
        if (!activeTransaction || dateChanged) {
            transactionData.date = dateTime.toISOString();
        }

        if (isRecurring && endDate) {
            transactionData.end_date = new Date(endDate).toISOString();
        } else if (isRecurring) {
            transactionData.end_date = null;
        }

        if (activeTransaction) {
            await updateTransaction(activeTransaction.id, transactionData);
        } else {
            await addTransaction(transactionData);
        }

        finalOnClose();
    };

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && finalIsOpen) {
                finalOnClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [finalIsOpen, finalOnClose]);

    if (!isMounted || !portalElement) return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-40 flex items-center justify-center p-4 lg:pl-[var(--sidebar-width)] bg-black/10 backdrop-blur-md transition-all duration-300 ease-out ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            onClick={finalOnClose}
        >
            <div
                className={`bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl w-full max-w-4xl rounded-3xl shadow-glass border border-white/20 dark:border-white/10 overflow-hidden flex flex-col md:flex-row max-h-[90vh] relative transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Mobile Close Button (Subtle, Top Right) */}
                <button
                    onClick={finalOnClose}
                    className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full text-gray-500 dark:text-gray-300 md:hidden hover:bg-black/10 transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                </button>

                {/* Left Side - Amount & Type */}
                <div className="w-full md:w-5/12 bg-gray-50/50 dark:bg-white/5 p-6 flex flex-col justify-center items-center relative border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-gray-200 dark:bg-[#2f3642] p-1 rounded-xl flex">
                        <button
                            onClick={() => setType('EXPENSE')}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${type === 'EXPENSE' ? 'bg-white dark:bg-[#1e2530] shadow-sm text-danger' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`}
                        >
                            Gasto
                        </button>
                        <button
                            onClick={() => setType('INCOME')}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${type === 'INCOME' ? 'bg-white dark:bg-[#1e2530] shadow-sm text-success' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`}
                        >
                            Ingreso
                        </button>
                    </div>

                    <div className="mt-8 text-center w-full">
                        <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">MONTO TOTAL</p>
                        <div className="relative w-full max-w-[280px] mx-auto flex justify-center items-center">
                            <span className={`text-4xl font-bold mr-2 ${type === 'INCOME' ? 'text-success/70' : 'text-gray-400 dark:text-gray-500'}`}>
                                {(() => {
                                    const curr = ledgers.find(l => l.id === activeBookId)?.currency || 'PEN';
                                    return curr === 'PEN' ? 'S/' : '$';
                                })()}
                            </span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0"
                                className={`w-40 bg-transparent text-6xl font-black text-center outline-none border-b-2 border-transparent focus:border-primary/50 transition-colors pb-1 placeholder-gray-200 dark:placeholder-gray-700 ${type === 'INCOME' ? 'text-success' : 'text-danger'}`}
                                autoFocus
                            />
                        </div>
                    </div>

                    <div className="mt-auto w-full">
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Cuenta de Origen</label>
                        <div className="relative">
                            <select
                                value={accountId}
                                onChange={(e) => setAccountId(e.target.value)}
                                className="w-full appearance-none bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white rounded-xl px-4 py-3 pr-10 font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                            >
                                {accounts.map(acc => (
                                    <option key={acc.id} value={acc.id}>
                                        {acc.name} ({formatAmount(acc.balance)})
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Details Form */}
                <div className="w-full md:w-7/12 p-5 md:p-6 overflow-y-auto overflow-x-hidden custom-scrollbar bg-transparent">
                    <div className="hidden md:flex justify-between items-center mb-6">
                        <h2 className="text-xl md:text-2xl font-black text-text-main dark:text-white">
                            {activeTransaction ? 'Editar Transacción' : 'Nueva Transacción'}
                        </h2>    <button onClick={finalOnClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-gray-500">close</span>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Category */}
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Categoría</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">category</span>
                                </div>
                                <select
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-sm text-gray-700 dark:text-white cursor-pointer"
                                >
                                    <option value="">Selecciona una categoría...</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Descripción / Beneficiario</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">description</span>
                                </div>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Ej. Compra semanal, Starbucks, Nómina..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-sm text-text-main dark:text-white placeholder-text-light"
                                />
                            </div>
                        </div>

                        {/* Date & Time Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Fecha</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">calendar_today</span>
                                    </div>
                                    <div
                                        onClick={() => setActivePicker('DATE')}
                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all flex items-center cursor-pointer"
                                    >
                                        <span className="font-medium text-sm text-gray-700 dark:text-white">
                                            {date ? format(new Date(date), 'dd/MM/yyyy') : 'dd/mm/aaaa'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Hora</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">schedule</span>
                                    </div>
                                    <div
                                        onClick={() => setActivePicker('TIME')}
                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all flex items-center cursor-pointer"
                                    >
                                        <span className="font-medium text-sm text-gray-700 dark:text-white">
                                            {/* Convert 24h to 12h for display */}
                                            {(() => {
                                                if (!time) return '--:--';
                                                const [h, m] = time.split(':');
                                                const dateObj = new Date();
                                                dateObj.setHours(parseInt(h), parseInt(m));
                                                return format(dateObj, 'hh:mm a');
                                            })()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Ubicación</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">location_on</span>
                                </div>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Añadir ubicación..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-sm text-gray-700 dark:text-white placeholder-gray-400"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button type="button" className="p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-colors text-gray-400" title="Usar ubicación actual">
                                        <span className="material-symbols-outlined text-[18px]">my_location</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Notas</label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Notas adicionales..."
                                rows={2}
                                className="w-full p-4 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-sm text-gray-700 dark:text-white placeholder-gray-400 resize-none"
                            />
                        </div>

                        {/* Toggles */}
                        <div className="flex gap-6 py-2">
                            <label className="flex items-center gap-3 cursor-pointer group select-none">
                                <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isPending ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                    <div className={`bg-white size-4 rounded-full shadow-md transform transition-transform duration-300 ${isPending ? 'translate-x-6' : ''}`}></div>
                                </div>
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Pendiente</span>
                                <input type="checkbox" checked={isPending} onChange={(e) => setIsPending(e.target.checked)} className="hidden" />
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group select-none">
                                <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isRecurring ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                    <div className={`bg-white size-4 rounded-full shadow-md transform transition-transform duration-300 ${isRecurring ? 'translate-x-6' : ''}`}></div>
                                </div>
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Recurrente</span>
                                <input type="checkbox" checked={isRecurring} onChange={(e) => setIsRecurring(e.target.checked)} className="hidden" />
                            </label>
                        </div>

                        {/* Frequency Dropdown */}
                        {isRecurring && (
                            <div className="animate-fade-in-down">
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Frecuencia</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">repeat</span>
                                    </div>
                                    <select
                                        value={frequency}
                                        onChange={(e) => setFrequency(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white cursor-pointer appearance-none"
                                    >
                                        <option value="DAILY">Diariamente</option>
                                        <option value="WEEKLY">Semanalmente</option>
                                        <option value="BIWEEKLY">Cada 2 semanas</option>
                                        <option value="WEEKLY_3">Cada 3 semanas</option>
                                        <option value="WEEKLY_4">Cada 4 semanas</option>
                                        <option value="MONTHLY">Mensual</option>
                                        <option value="BIMONTHLY">Cada 2 meses</option>
                                        <option value="QUARTERLY">Trimestral</option>
                                        <option value="SEMIANNUAL">Semestral</option>
                                        <option value="ANNUAL">Anual</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* End Date */}
                        {isRecurring && (
                            <div className="animate-fade-in-down delay-75">
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Fecha de Finalización (Opcional)</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">event_busy</span>
                                    </div>
                                    <div
                                        onClick={() => setActivePicker('END_DATE')}
                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all flex items-center cursor-pointer"
                                    >
                                        <span className={`font-medium text-sm ${endDate ? 'text-gray-700 dark:text-white' : 'text-gray-400'}`}>
                                            {endDate ? format(new Date(endDate), 'dd/MM/yyyy') : 'dd/mm/aaaa'}
                                        </span>
                                    </div>
                                    {endDate && (
                                        <button
                                            type="button"
                                            onClick={() => setEndDate('')}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-danger transition-colors"
                                            title="Limpiar fecha"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">close</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Footer Buttons */}
                        <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
                            <button
                                type="button"
                                onClick={finalOnClose}
                                className="flex-1 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-all cursor-pointer"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-3.5 rounded-xl bg-primary hover:bg-gray-800 text-white font-bold shadow-lg shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">save</span>
                                Guardar
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <CustomDatePicker
                isOpen={!!activePicker && (activePicker === 'DATE' || activePicker === 'END_DATE')}
                onClose={() => setActivePicker(null)}
                value={
                    activePicker === 'DATE' ? new Date(date + 'T12:00:00') : // Append time to avoid TZ issues
                        activePicker === 'END_DATE' && endDate ? new Date(endDate + 'T12:00:00') :
                            new Date()
                }
                onChange={(newDate) => {
                    const isoDate = newDate.toISOString().split('T')[0];
                    if (activePicker === 'DATE') setDate(isoDate);
                    if (activePicker === 'END_DATE') setEndDate(isoDate);
                    setActivePicker(null);
                }}
            />

            <CustomTimePicker
                isOpen={activePicker === 'TIME'}
                onClose={() => setActivePicker(null)}
                value={time}
                onChange={(newTime) => {
                    setTime(newTime);
                    setActivePicker(null);
                }}
            />
        </div>,
        portalElement
    );
};
