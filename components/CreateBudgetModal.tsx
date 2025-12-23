"use client";
import React, { useState, useEffect } from 'react';
import { useFinance } from '@/context/FinanceContext';

interface CreateBudgetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateBudgetModal({ isOpen, onClose }: CreateBudgetModalProps) {
    const { categories, addBudget, ledgers, activeBookId } = useFinance();
    const [amount, setAmount] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);
    const [recurrenceOption, setRecurrenceOption] = useState('MONTHLY');
    const [endDate, setEndDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset form when opening
    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const currencySymbol = ledgers.find(l => l.id === activeBookId)?.currency || '$';

    const recurrenceOptions = [
        { label: 'Diariamente', value: 'DAILY_1' },
        { label: 'Semanalmente', value: 'WEEKLY_1' },
        { label: 'Cada 2 semanas', value: 'WEEKLY_2' },
        { label: 'Cada 3 semanas', value: 'WEEKLY_3' },
        { label: 'Cada 4 semanas', value: 'WEEKLY_4' },
        { label: 'Mensual', value: 'MONTHLY_1' },
        { label: 'Cada 2 meses', value: 'MONTHLY_2' },
        { label: 'Trimestral', value: 'MONTHLY_3' },
        { label: 'Semestral', value: 'MONTHLY_6' },
        { label: 'Anual', value: 'YEARLY_1' },
    ];

    const handleSubmit = async () => {
        if (!amount || !categoryId) return;
        setIsSubmitting(true);

        try {
            let recurrenceType = 'MONTHLY';
            let recurrenceInterval = 1;

            if (isRecurring) {
                const [type, interval] = recurrenceOption.split('_');
                recurrenceType = type;
                recurrenceInterval = parseInt(interval);
            }

            await addBudget({
                amount: parseFloat(amount),
                categoryId,
                recurrenceType: isRecurring ? recurrenceType : undefined,
                recurrenceInterval: isRecurring ? recurrenceInterval : undefined,
                startDate: new Date().toISOString(), // Starts now
                endDate: isRecurring && endDate ? endDate : undefined
            });

            onClose();
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="fixed top-0 bottom-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in transition-[left] duration-300"
            onClick={onClose}
        >
            <div
                className="w-full max-w-lg bg-white dark:bg-[#1e293b] rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-scale-in border border-slate-200 dark:border-slate-700"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <header className="flex-none px-8 py-6 flex justify-between items-start border-b border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Nuevo Presupuesto</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Define un límite de gasto para una categoría.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors bg-slate-50 dark:bg-slate-800 p-2 rounded-full"
                    >
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </header>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-6 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">

                    {/* Amount */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Monto ({currencySymbol})</label>
                        <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 h-14 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                            <span className="text-slate-900 dark:text-white font-bold text-lg mr-2">{currencySymbol}</span>
                            <input
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white text-2xl font-bold placeholder:text-slate-300"
                                placeholder="0.00"
                                type="number"
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Categoría</label>
                        <select
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold appearance-none cursor-pointer focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        >
                            <option value="">Seleccionar categoría</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Recurrence Toggle */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isRecurring ? 'bg-primary/10 text-primary' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
                                <span className="material-symbols-outlined">update</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Repetir Presupuesto</span>
                                <span className="text-xs text-slate-500">Renovar automáticamente</span>
                            </div>
                        </div>
                        <div
                            onClick={() => setIsRecurring(!isRecurring)}
                            className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${isRecurring ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}
                        >
                            <div className={`size-4 bg-white rounded-full shadow-sm transition-transform ${isRecurring ? 'translate-x-5' : ''}`} />
                        </div>
                    </div>

                    {/* Recurrence Options */}
                    {isRecurring && (
                        <div className="space-y-4 animate-slide-down pl-2 border-l-2 border-primary/20 ml-4 py-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Frecuencia</label>
                                <select
                                    value={recurrenceOption}
                                    onChange={(e) => setRecurrenceOption(e.target.value)}
                                    className="w-full h-10 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none"
                                >
                                    {recurrenceOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Fecha de Finalización (Opcional)</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full h-10 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <footer className="flex-none px-8 py-5 flex justify-end gap-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-bold text-sm transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!amount || !categoryId || isSubmitting}
                        className="px-6 py-2.5 rounded-xl bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 active:scale-95"
                    >
                        {isSubmitting ? (
                            <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                            <span className="material-symbols-outlined text-[18px]">check</span>
                        )}
                        Crear Presupuesto
                    </button>
                </footer>
            </div>
        </div>
    );
}
