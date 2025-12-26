import React, { useState, useEffect } from 'react';
import { useFinance } from '@/context/FinanceContext';
import { Budget } from '@/types';
import CustomDatePicker from './CustomDatePicker';
import { format } from 'date-fns';

interface BudgetEditorModalProps {
    isOpen: boolean;
    onClose: () => void;
    budgetToEdit?: Budget | null;
}

export default function CreateBudgetModal({ isOpen, onClose, budgetToEdit }: BudgetEditorModalProps) {
    const { categories, addBudget, updateBudget, ledgers, activeBookId } = useFinance();

    // Form State
    const [amount, setAmount] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [recurrenceOption, setRecurrenceOption] = useState<'MONTHLY' | 'WEEKLY' | 'ANNUAL'>('MONTHLY');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isRecurring, setIsRecurring] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeDatePicker, setActiveDatePicker] = useState<'START' | 'END' | null>(null);

    // Animation State
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsClosing(false);
            setActiveDatePicker(null); // Reset date picker state

            if (budgetToEdit) {
                // Edit Mode
                setAmount(budgetToEdit.limit.toString());
                setCategoryId(budgetToEdit.category_id || '');
                // Map recurrence
                const recInterval = budgetToEdit.recurrence_interval || 1;
                const recType = budgetToEdit.recurrence_type || 'MONTHLY';

                if (recType === 'WEEKLY' && recInterval === 1) setRecurrenceOption('WEEKLY');
                else if (recType === 'YEARLY' || (recType === 'MONTHLY' && recInterval === 12)) setRecurrenceOption('ANNUAL');
                else setRecurrenceOption('MONTHLY');

                setStartDate(budgetToEdit.start_date ? new Date(budgetToEdit.start_date).toISOString() : '');
                setEndDate(budgetToEdit.end_date ? new Date(budgetToEdit.end_date).toISOString() : '');
                setIsRecurring(!!budgetToEdit.recurrence_type);
            } else {
                // Create Mode - Defaults
                setAmount('');
                setCategoryId('');
                setRecurrenceOption('MONTHLY');
                const now = new Date();
                const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
                setStartDate(firstDay.toISOString());
                setEndDate('');
                setIsRecurring(true);
            }
        }
    }, [isOpen, budgetToEdit]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 300);
    };

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Only close if no date picker is active
            if (e.key === 'Escape' && isOpen && !activeDatePicker) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, activeDatePicker]);

    if (!isOpen && !isVisible) return null;

    const currencyCode = ledgers.find(l => l.id === activeBookId)?.currency || 'USD';
    const getCurrencySymbol = (code: string) => {
        if (code === 'PEN') return 'S/';
        if (code === 'USD') return '$';
        if (code === 'EUR') return '€';
        if (code === 'MXN') return '$';
        return code;
    };
    const currencySymbol = getCurrencySymbol(currencyCode);

    const handleSubmit = async () => {
        if (!amount || !categoryId) return;
        setIsSubmitting(true);

        try {
            let rType = 'MONTHLY';
            let rInterval = 1;

            if (recurrenceOption === 'WEEKLY') { rType = 'WEEKLY'; rInterval = 1; }
            if (recurrenceOption === 'ANNUAL') { rType = 'YEARLY'; rInterval = 1; }

            const payload = {
                amount: parseFloat(amount),
                categoryId,
                recurrenceType: isRecurring ? rType : undefined,
                recurrenceInterval: isRecurring ? rInterval : undefined,
                startDate: startDate || new Date().toISOString(),
                endDate: isRecurring && endDate ? endDate : undefined
            };

            if (budgetToEdit) {
                await updateBudget(budgetToEdit.id, payload);
            } else {
                await addBudget(payload);
            }

            handleClose();
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) handleClose();
    };

    return (
        <div
            className={`fixed top-0 right-0 bottom-0 left-0 lg:left-[var(--sidebar-width)] z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleBackdropClick}
        >
            <div
                className={`w-full max-w-[500px] bg-white dark:bg-[#1e293b] rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-200 dark:border-slate-700 transition-all duration-300 transform ${isVisible && !isClosing ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-start pt-8 px-8 pb-2">
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Editor de Presupuesto</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Configura tus límites financieros con claridad y sin estrés.</p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    >
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-6 scrollbar-hide">

                    {/* Amount Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Monto Límite</label>
                        <div className="flex items-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 h-14 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all shadow-sm">
                            <span className="text-slate-400 font-medium text-lg mr-2">{currencySymbol}</span>
                            <input
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white text-2xl font-bold placeholder:text-slate-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                placeholder="0.00"
                                type="number"
                                autoFocus={!budgetToEdit}
                            />
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 ml-1">
                            <span className="material-symbols-outlined text-[14px]">info</span>
                            <span>No te preocupes, puedes ajustar este monto en cualquier momento.</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category Select */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Categoría</label>
                            <div className="relative">
                                <select
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    className="w-full h-12 pl-4 pr-10 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none shadow-sm transition-all"
                                >
                                    <option value="">Selecciona una...</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none material-symbols-outlined text-xl">expand_more</span>
                            </div>
                        </div>

                        {/* Frequency Tabs */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Frecuencia</label>
                            <div className="relative">
                                <select
                                    value={recurrenceOption}
                                    onChange={(e) => setRecurrenceOption(e.target.value as any)}
                                    className="w-full h-12 pl-4 pr-10 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none shadow-sm transition-all"
                                >
                                    <option value="WEEKLY">Semanal</option>
                                    <option value="BIWEEKLY">Quincenal</option>
                                    <option value="MONTHLY">Mensual</option>
                                    <option value="ANNUAL">Anual</option>
                                </select>
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none material-symbols-outlined text-xl">expand_more</span>
                            </div>
                        </div>
                    </div>

                    {/* Validity Section */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Vigencia del Presupuesto</label>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-500">Recurrente</span>
                                <div
                                    onClick={() => setIsRecurring(!isRecurring)}
                                    className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${isRecurring ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'}`}
                                >
                                    <div className={`size-4 bg-white rounded-full shadow-sm transition-transform ${isRecurring ? 'translate-x-4' : ''}`} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Start Date */}
                            <div className="relative group">
                                <span className="absolute left-3 top-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Inicio</span>
                                <div
                                    onClick={() => setActiveDatePicker('START')}
                                    className="w-full h-14 pt-4 px-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold shadow-sm transition-all cursor-pointer flex items-center"
                                >
                                    {startDate ? format(new Date(startDate), 'dd/MM/yyyy') : 'dd/mm/aaaa'}
                                </div>
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none material-symbols-outlined text-[18px]">calendar_today</span>

                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none material-symbols-outlined text-[18px]">calendar_today</span>
                            </div>

                            {/* End Date */}
                            <div className="relative group">
                                <span className="absolute left-3 top-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fin (Opcional)</span>
                                <div
                                    onClick={() => setActiveDatePicker('END')}
                                    className="w-full h-14 pt-4 px-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold shadow-sm transition-all cursor-pointer flex items-center"
                                >
                                    {endDate ? format(new Date(endDate), 'dd/MM/yyyy') : 'dd/mm/aaaa'}
                                </div>
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none material-symbols-outlined text-[18px]">calendar_today</span>

                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none material-symbols-outlined text-[18px]">calendar_today</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-8 pt-0 flex justify-end items-center gap-4">
                        <button
                            onClick={handleClose}
                            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-bold text-sm transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={!amount || !categoryId || isSubmitting}
                            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-xl shadow-blue-600/20 transition-all flex items-center gap-2 active:scale-95"
                        >
                            {isSubmitting ? (
                                <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : (
                                <span className="material-symbols-outlined text-[18px]">check</span>
                            )}
                            Guardar Presupuesto
                        </button>
                    </div>
                </div>

                {/* Local Date Picker Overlay */}
                <CustomDatePicker
                    isOpen={!!activeDatePicker}
                    onClose={() => setActiveDatePicker(null)}
                    value={activeDatePicker === 'START' && startDate ? new Date(startDate) : activeDatePicker === 'END' && endDate ? new Date(endDate) : null}
                    onChange={(date) => {
                        if (activeDatePicker === 'START') setStartDate(date.toISOString());
                        if (activeDatePicker === 'END') setEndDate(date.toISOString());
                        setActiveDatePicker(null);
                    }}
                />
            </div>
        </div>
    );
}
