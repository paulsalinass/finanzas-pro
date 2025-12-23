"use client";

import React, { useState, useEffect } from 'react';
import { useFinance } from '@/context/FinanceContext';
import { Transaction, TransactionType } from '@/types';
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
        activeBookId
    } = useFinance();

    const finalIsOpen = isOpen !== undefined ? isOpen : isTransactionModalOpen;
    const finalOnClose = onClose || closeTransactionModal;

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState<TransactionType>('EXPENSE');
    const [categoryId, setCategoryId] = useState('');
    const [accountId, setAccountId] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState(new Date().toTimeString().slice(0, 5));
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');
    const [beneficiary, setBeneficiary] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [isRecurring, setIsRecurring] = useState(false);
    const [frequency, setFrequency] = useState('MONTHLY');
    const [endDate, setEndDate] = useState('');

    // Reset or Populate form
    useEffect(() => {
        if (finalIsOpen) {
            if (transactionToEdit) {
                // Edit Mode
                setAmount(transactionToEdit.amount.toString());
                setDescription(transactionToEdit.description);
                setType(transactionToEdit.type);
                setCategoryId(transactionToEdit.category_id || categories.find(c => c.name === transactionToEdit.category)?.id || '');
                setAccountId(transactionToEdit.account_id || accounts.find(a => a.name === transactionToEdit.account)?.id || '');

                const d = new Date(transactionToEdit.date);
                setDate(d.toISOString().split('T')[0]);
                setTime(d.toTimeString().slice(0, 5));

                setLocation(transactionToEdit.location || '');
                setNotes(transactionToEdit.notes || '');
                setBeneficiary(transactionToEdit.beneficiary || '');
                setIsPending(transactionToEdit.status === 'PENDING');
                setIsRecurring(transactionToEdit.isRecurring || false);
                setFrequency(transactionToEdit.frequency || 'MONTHLY');
                const endDateVal = transactionToEdit.end_date ? new Date(transactionToEdit.end_date).toISOString().split('T')[0] : '';
                setEndDate(endDateVal);
            } else {
                // Create Mode
                setAmount('');
                setDescription('');
                setType('EXPENSE');
                setCategoryId('');
                setAccountId(accounts[0]?.id || '');
                const now = new Date();
                setDate(now.toISOString().split('T')[0]);
                setTime(now.toTimeString().slice(0, 5));
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

        const transactionData = {
            amount: numAmount,
            type: type,
            description: description || (type === 'INCOME' ? 'Ingreso' : 'Gasto'),
            account: selectedAccount?.name || 'Unknown',
            account_id: accountId,
            category_id: categoryId || undefined,
            category: categories.find(c => c.id === categoryId)?.name || 'Sin categoría',
            date: dateTime.toISOString(),
            status: (isPending ? 'PENDING' : 'COMPLETED') as 'PENDING' | 'COMPLETED',
            location: location,
            notes: notes,
            beneficiary: beneficiary,
            icon: type === 'INCOME' ? 'trending_up' : 'trending_down',
            isRecurring: isRecurring,
            frequency: isRecurring ? frequency : null,
            end_date: isRecurring && endDate ? new Date(endDate).toISOString() : null
        };

        if (transactionToEdit) {
            await updateTransaction(transactionToEdit.id, transactionData);
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

    if (!finalIsOpen) return null;

    return (
        <div
            className="fixed top-0 bottom-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in transition-[left] duration-300"
            onClick={finalOnClose}
        >
            <div
                className="bg-white dark:bg-[#1e2530] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Left Side - Amount & Type */}
                <div className="w-full md:w-5/12 bg-gray-50 dark:bg-[#252b36] p-8 flex flex-col justify-center items-center relative border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-gray-200 dark:bg-[#2f3642] p-1 rounded-xl flex">
                        <button
                            onClick={() => setType('EXPENSE')}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${type === 'EXPENSE' ? 'bg-white dark:bg-[#1e2530] shadow-sm text-danger' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`}
                        >
                            Gasto
                        </button>
                        <button
                            onClick={() => setType('INCOME')}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${type === 'INCOME' ? 'bg-white dark:bg-[#1e2530] shadow-sm text-success' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`}
                        >
                            Ingreso
                        </button>
                    </div>

                    <div className="mt-12 text-center w-full">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">MONTO TOTAL</p>
                        <div className="relative w-full max-w-[280px] mx-auto">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className={`w-full bg-transparent text-6xl font-black text-center outline-none border-b-2 border-transparent focus:border-primary/50 transition-colors pb-2 placeholder-gray-200 dark:placeholder-gray-700 ${type === 'INCOME' ? 'text-success' : 'text-text-main dark:text-white'}`}
                                autoFocus
                            />
                            <span className={`absolute top-2 -left-6 text-4xl font-medium ${type === 'INCOME' ? 'text-success/50' : 'text-gray-300 dark:text-gray-600'}`}>
                                {ledgers.find(l => l.id === activeBookId)?.currency || '$'}
                            </span>
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
                <div className="w-full md:w-7/12 p-8 overflow-y-auto custom-scrollbar bg-white dark:bg-[#1e2530]">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Nueva Transacción</h2>
                        <button onClick={finalOnClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors">
                            <span className="material-symbols-outlined text-gray-500">close</span>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Categoría</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">category</span>
                                </div>
                                <select
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white cursor-pointer"
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
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Descripción / Beneficiario</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">description</span>
                                </div>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Ej. Compra semanal, Starbucks, Nómina..."
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Date & Time Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Fecha</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">calendar_today</span>
                                    </div>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Hora</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">schedule</span>
                                    </div>
                                    <input
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Ubicación</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">location_on</span>
                                </div>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Añadir ubicación..."
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400"
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
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Notas</label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Notas adicionales..."
                                rows={2}
                                className="w-full p-4 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400 resize-none"
                            />
                        </div>

                        {/* Toggles */}
                        <div className="flex gap-6 py-2">
                            <label className="flex items-center gap-3 cursor-pointer group select-none">
                                <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isPending ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                    <div className={`bg-white size-4 rounded-full shadow-md transform transition-transform duration-300 ${isPending ? 'translate-x-6' : ''}`}></div>
                                </div>
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Pendiente</span>
                                <input type="checkbox" checked={isPending} onChange={(e) => setIsPending(e.target.checked)} className="hidden" />
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group select-none">
                                <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isRecurring ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                    <div className={`bg-white size-4 rounded-full shadow-md transform transition-transform duration-300 ${isRecurring ? 'translate-x-6' : ''}`}></div>
                                </div>
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Recurrente</span>
                                <input type="checkbox" checked={isRecurring} onChange={(e) => setIsRecurring(e.target.checked)} className="hidden" />
                            </label>
                        </div>

                        {/* Frequency Dropdown */}
                        {isRecurring && (
                            <div className="animate-fade-in-down">
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Frecuencia</label>
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
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Fecha de Finalización (Opcional)</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">event_busy</span>
                                    </div>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        min={date} // Cannot end before start
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400"
                                    />
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
                                className="flex-1 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="flex-[2] py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">save</span>
                                Guardar Transacción
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
