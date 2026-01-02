"use client";

import React, { useState, useEffect } from 'react';
import { useFinance } from '@/context/FinanceContext';
import { Commitment } from '@/types';

interface CommitmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    commitmentToEdit?: Commitment | null;
}

export const CommitmentModal = ({ isOpen, onClose, commitmentToEdit }: CommitmentModalProps) => {
    const {
        addCommitment,
        updateCommitment,
        accounts,
        categories,
        ledgers,
        activeBookId
    } = useFinance();

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [frequency, setFrequency] = useState<'MONTHLY' | 'WEEKLY' | 'ANNUAL' | 'DAILY' | 'BIWEEKLY' | 'QUARTERLY' | 'SEMIANNUAL'>('MONTHLY');
    const [type, setType] = useState<'FIXED' | 'TEMPORAL'>('FIXED');
    const [status, setStatus] = useState<'PENDING' | 'PAID' | 'LATE' | 'SKIPPED'>('PENDING');
    const [transactionType, setTransactionType] = useState<'INCOME' | 'EXPENSE'>('EXPENSE');
    const [nextDueDate, setNextDueDate] = useState('');
    const [endDate, setEndDate] = useState(''); // Optional
    const [categoryId, setCategoryId] = useState('');
    const [accountId, setAccountId] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [isAutoPay, setIsAutoPay] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);
            // Small delay to ensure DOM is present before opacity transition
            const timer = setTimeout(() => setIsVisible(true), 10);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => setShowModal(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Populate form on open
    useEffect(() => {
        if (!isOpen) return; // Only run when opening

        if (commitmentToEdit) {
            setName(commitmentToEdit.name);
            setAmount(commitmentToEdit.amount.toString());
            setFrequency(commitmentToEdit.frequency);
            setType(commitmentToEdit.type || 'FIXED');
            setStatus(commitmentToEdit.status || 'PENDING');
            setTransactionType(commitmentToEdit.transaction_type || 'EXPENSE');

            // Format date for input type="date"
            const dueDate = commitmentToEdit.nextDueDate ? new Date(commitmentToEdit.nextDueDate).toISOString().split('T')[0] : '';
            setNextDueDate(dueDate);

            const endD = commitmentToEdit.endDate ? new Date(commitmentToEdit.endDate).toISOString().split('T')[0] : '';
            setEndDate(endD);

            setCategoryId(commitmentToEdit.categoryId || categories.find(c => c.name === commitmentToEdit.category)?.id || '');
            setAccountId(commitmentToEdit.accountId || accounts.find(a => a.name === commitmentToEdit.account)?.id || '');
            setIsActive(commitmentToEdit.isActive ?? true);
            setIsAutoPay(commitmentToEdit.isAutoPay ?? false);
        } else {
            setName('');
            setAmount('');
            setFrequency('MONTHLY');
            setType('FIXED');
            setStatus('PENDING');
            setTransactionType('EXPENSE');
            setNextDueDate(new Date().toISOString().split('T')[0]);
            setEndDate('');
            setCategoryId('');
            setAccountId(accounts[0]?.id || '');
            setIsActive(true);
            setIsAutoPay(false);
        }
    }, [isOpen, commitmentToEdit, accounts, categories]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
            alert('Por favor ingresa un monto válido');
            return;
        }

        if (!name.trim()) {
            alert('Por favor ingresa un nombre para el compromiso');
            return;
        }

        const data: any = {
            name,
            amount: numAmount,
            frequency,
            type,
            status,
            transaction_type: transactionType,
            nextDueDate: new Date(nextDueDate).toISOString(),
            isActive,
            isAutoPay,
            categoryId: categoryId || undefined,
            accountId: accountId || undefined,
            category: categories.find(c => c.id === categoryId)?.name,
            account: accounts.find(a => a.id === accountId)?.name
        };

        if (endDate) {
            data.endDate = new Date(endDate).toISOString();
        }

        try {
            if (commitmentToEdit) {
                await updateCommitment(commitmentToEdit.id, data);
            } else {
                await addCommitment(data);
            }
            onClose();
        } catch (error) {
            console.error("Error saving commitment:", error);
        }
    };

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!showModal) return null;

    const activeLedger = ledgers.find(l => l.id === activeBookId);
    const currencyCode = activeLedger?.currency || 'USD';
    const currencySymbol = currencyCode === 'PEN' ? 'S/.' : (currencyCode === 'EUR' ? '€' : '$');

    // Helper to get frequency label
    const getFrequencyLabel = (freq: string) => {
        const map: any = { 'WEEKLY': 'Semanas', 'BIWEEKLY': 'Quincenas', 'MONTHLY': 'Meses', 'QUARTERLY': 'Trimestres', 'SEMIANNUAL': 'Semestres', 'ANNUAL': 'Años' };
        return map[freq] || 'Meses';
    };

    // Helper text for summary
    const frequencyText = frequency === 'MONTHLY' ? '1 mes' :
        frequency === 'WEEKLY' ? '1 semana' :
            frequency === 'ANNUAL' ? '1 año' :
                frequency === 'BIWEEKLY' ? '2 semanas' :
                    frequency === 'QUARTERLY' ? '3 meses' : '1 periodo';

    const accountName = accounts.find(a => a.id === accountId)?.name || '...';
    const categoryName = categories.find(c => c.id === categoryId)?.name || '...';
    const startDateFormatted = nextDueDate ? new Date(nextDueDate).toLocaleDateString('es-ES') : '...';

    return (
        <div
            className={`fixed top-0 bottom-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-[100] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
        >
            <div
                className={`bg-white dark:bg-[#1e2530] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90dvh] transition-all duration-300 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-100 dark:border-white/5 flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {commitmentToEdit ? 'Editar Compromiso' : 'Nuevo Compromiso'}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Configura los detalles de tus transacciones automáticas.</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-gray-500 text-2xl">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-6 scrollbar-hide">

                    {/* Tabs (Visual only for now as Commitments are typically Expenses) */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-100 dark:bg-slate-800 p-1 rounded-2xl flex w-full max-w-md">
                            <button
                                type="button"
                                onClick={() => setTransactionType('INCOME')}
                                className={`flex-1 py-1.5 rounded-xl text-sm font-bold transition-all ${transactionType === 'INCOME' ? 'bg-white dark:bg-[#1e2530] text-success shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}
                            >
                                Ingreso
                            </button>
                            <button
                                type="button"
                                onClick={() => setTransactionType('EXPENSE')}
                                className={`flex-1 py-1.5 rounded-xl text-sm font-bold transition-all ${transactionType === 'EXPENSE' ? 'bg-white dark:bg-[#1e2530] text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}
                            >
                                Gasto
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

                        {/* Name */}
                        <div className="col-span-1">
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Nombre del Compromiso</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
                                placeholder="Ej. Netflix Premium"
                            />
                        </div>

                        {/* Amount */}
                        <div className="col-span-1">
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Monto</label>
                            <div className="relative">
                                <span className={`absolute left-4 top-1/2 -translate-y-1/2 font-bold ${transactionType === 'INCOME' ? 'text-success' : 'text-gray-500'}`}>{currencySymbol}</span>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className={`w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white font-mono font-bold ${transactionType === 'INCOME' ? 'text-success' : ''}`}
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        {/* Frequency Section */}
                        <div className="col-span-2 mt-2">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Frecuencia</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Repetir cada */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Repetir cada</label>
                                    <div className="flex gap-3">
                                        <input
                                            type="number"
                                            value="1"
                                            disabled
                                            className="w-16 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-3 text-center outline-none text-gray-500 cursor-not-allowed"
                                        />
                                        <select
                                            value={frequency}
                                            onChange={(e: any) => setFrequency(e.target.value)}
                                            className="flex-1 bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white cursor-pointer"
                                        >
                                            <option value="WEEKLY">Semana(s)</option>
                                            <option value="BIWEEKLY">Quincena(s)</option>
                                            <option value="MONTHLY">Mes(es)</option>
                                            <option value="QUARTERLY">Trimestre(s)</option>
                                            <option value="SEMIANNUAL">Semestre(s)</option>
                                            <option value="ANNUAL">Año(s)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Próxima ocurrencia */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Próxima ocurrencia</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={nextDueDate}
                                            onChange={(e) => setNextDueDate(e.target.value)}
                                            className="w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Toggle End Date */}
                            <div className="mt-4 flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setEndDate(endDate ? '' : new Date().toISOString().split('T')[0])}
                                    className={`relative w-11 h-6 rounded-full transition-colors ${endDate ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}
                                >
                                    <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${endDate ? 'translate-x-5' : ''}`} />
                                </button>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Terminar después de una fecha</span>
                            </div>

                            {endDate && (
                                <div className="mt-4 animate-fade-in-down">
                                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Fecha de Finalización</label>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="w-full md:w-1/2 bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Classification Section */}
                        <div className="col-span-2 mt-2">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Clasificación</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Account */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Cuenta</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">account_balance_wallet</span>
                                        <select
                                            value={accountId}
                                            onChange={(e) => setAccountId(e.target.value)}
                                            className="w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white appearance-none cursor-pointer"
                                        >
                                            <option value="">Seleccionar Cuenta</option>
                                            {accounts.map(acc => (
                                                <option key={acc.id} value={acc.id}>{acc.name}</option>
                                            ))}
                                        </select>
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Categoría</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">category</span>
                                        <select
                                            value={categoryId}
                                            onChange={(e) => setCategoryId(e.target.value)}
                                            className="w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white appearance-none cursor-pointer"
                                        >
                                            <option value="">Seleccionar Categoría</option>
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Auto Pay Toggle */}
                        <div className="col-span-2 mt-2">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-11 h-6 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 duration-300 ease-in-out ${isAutoPay ? 'bg-primary' : ''}`}>
                                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isAutoPay ? 'translate-x-5' : ''}`}></div>
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={isAutoPay}
                                    onChange={(e) => setIsAutoPay(e.target.checked)}
                                />
                                <span className="text-gray-800 dark:text-white font-medium group-hover:text-primary transition-colors">Facturación Automática</span>
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 pl-14">
                                Si activas esta opción, el compromiso se marcará automáticamente como pagado en la fecha de vencimiento.
                            </p>
                        </div>

                    </div>

                    {/* Summary Box */}
                    <div className={`mt-8 p-4 rounded-2xl flex gap-3 text-sm border ${transactionType === 'INCOME' ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-100 dark:border-green-800/50' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border-blue-100 dark:border-blue-800/50'}`}>
                        <span className="material-symbols-outlined shrink-0">info</span>
                        <div>
                            {isAutoPay ? (
                                <p>
                                    <span className="font-bold">Resumen:</span> Se registrará automáticamente un <span className="font-bold">{transactionType === 'INCOME' ? 'Ingreso' : 'Gasto'}</span> de <span className="font-bold">{currencySymbol}{amount || '0.00'}</span> cada <span className="font-bold">{frequencyText}</span>, comenzando el <span className="font-bold">{startDateFormatted}</span>.
                                </p>
                            ) : (
                                <p>
                                    <span className="font-bold">Resumen:</span> Se creará un recordatorio de <span className="font-bold">{transactionType === 'INCOME' ? 'Ingreso' : 'Gasto'}</span> de <span className="font-bold">{currencySymbol}{amount || '0.00'}</span> para <span className="font-bold">{name || '...'}</span> cada <span className="font-bold">{frequencyText}</span>.
                                </p>
                            )}
                        </div>
                    </div>

                </form>

                {/* Footer buttons */}
                <div className="p-6 bg-white dark:bg-[#1e2530] border-t border-gray-100 dark:border-white/5 flex gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-4 py-3 rounded-xl font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className={`flex-1 px-4 py-3 rounded-xl font-bold text-white shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${transactionType === 'INCOME' ? 'bg-green-600 shadow-green-600/30 hover:bg-green-700' : 'bg-primary shadow-primary/30 hover:bg-primary/90'}`}
                    >
                        {commitmentToEdit ? 'Guardar' : 'Crear'}
                    </button>
                </div>
            </div>
        </div>
    );
};
