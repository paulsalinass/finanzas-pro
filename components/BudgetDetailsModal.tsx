"use client";
import React, { useMemo } from 'react';
import { useFinance } from '@/context/FinanceContext';
import { Budget } from '@/types';
import { format, subMonths, isSameMonth, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';
import { es } from 'date-fns/locale';

interface BudgetDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    budget: Budget | null;
    onEdit?: (budget: Budget) => void;
}

export default function BudgetDetailsModal({ isOpen, onClose, budget, onEdit }: BudgetDetailsModalProps) {
    const { transactions, formatAmount, categories, deleteBudget } = useFinance();

    const [isVisible, setIsVisible] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);
    const [isDeleteClosing, setIsDeleteClosing] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsClosing(false);
            setIsClosing(false);
            setShowDeleteConfirm(false);
            setIsDeleteClosing(false);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    const handleClose = React.useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 300);
    }, [onClose]);

    const handleEditClick = () => {
        if (budget && onEdit) {
            onEdit(budget);
            // We don't verify if we need to close here or if the parent handles it. 
            // Usually parent closes details when opening edit. 
            // Based on previous code in page.tsx:
            // <BudgetDetailsModal ... onEdit={(b) => { setIsDetailsModalOpen(false); setEditingBudget(b); setIsCreateModalOpen(true); }} />
            // So we just call onEdit. Parent closes.
        }
    };

    const confirmDelete = async () => {
        if (budget) {
            await deleteBudget(budget.id);
            handleClose();
        }
    };

    const handleDeleteClose = () => {
        setIsDeleteClosing(true);
        setTimeout(() => {
            setShowDeleteConfirm(false);
            setIsDeleteClosing(false);
        }, 300);
    };

    // Close on ESC
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (showDeleteConfirm) {
                    handleDeleteClose();
                    e.stopPropagation();
                } else if (isOpen) {
                    handleClose();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleClose]);



    // Get category details
    const categoryObj = categories.find(c => c.id === budget?.category_id);
    const categoryName = categoryObj ? categoryObj.name : (budget?.category || 'Sin categoría');
    const categoryIcon = categoryObj?.icon || 'category';

    // Current Status (Safeguard against null budget during close animation)
    const spent = budget?.spent || 0;
    const limit = budget?.limit || 0;
    const remaining = limit - spent;
    const percentage = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
    const isExceeded = spent > limit;

    // History Logic (Last 3 months including current)
    const history = useMemo(() => {
        // If no budget selected, return empty to satisfy hook stability
        if (!isOpen && !budget) return [];

        const months = [0, 1, 2].map(i => subMonths(new Date(), i));

        return months.map(date => {
            const start = startOfMonth(date);
            const end = endOfMonth(date);

            const monthSpent = transactions
                .filter(t => {
                    if (t.type !== 'EXPENSE') return false;
                    // Category match
                    const matchesCategory = budget?.category_id
                        ? t.category_id === budget.category_id
                        : t.category === budget?.category;

                    if (!matchesCategory) return false;

                    const txDate = new Date(t.date);
                    return isWithinInterval(txDate, { start, end });
                })
                .reduce((sum, t) => sum + t.amount, 0);

            return {
                date,
                spent: monthSpent,
                limit: budget?.limit || 0,
                isCurrent: isSameMonth(date, new Date())
            };
        });
    }, [transactions, budget, isOpen]);

    if (!isOpen && !isVisible) return null;

    return (
        <>
            <div
                className={`fixed inset-0 z-40 flex items-center justify-center p-4 lg:pl-[var(--sidebar-width)] bg-black/10 backdrop-blur-md transition-opacity duration-300 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
                onClick={handleClose}
            >
                <div
                    className={`w-full max-w-2xl bg-white dark:bg-[#1e293b] rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transition-all duration-300 ${isClosing ? 'animate-scale-out' : 'animate-scale-in'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header Section with Icon and Actions */}
                    <div className="p-8 pb-0 flex items-start justify-between">
                        <div className="flex items-center gap-4">
                            <div className="size-16 rounded-full bg-green-100/50 dark:bg-green-900/20 flex items-center justify-center text-emerald-600">
                                <span className="material-symbols-outlined text-3xl">{categoryIcon}</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{categoryName}</h2>
                                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-xs font-bold rounded-full flex items-center gap-1">
                                        <div className="size-1.5 rounded-full bg-blue-500"></div>
                                        Activo
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 mt-1 text-sm font-medium">
                                    <span className="material-symbols-outlined text-sm">shopping_bag</span>
                                    <span>Gastos Variables</span>
                                    <span>•</span>
                                    <span>Mensual</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handleEditClick}
                                className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button
                                onClick={() => setShowDeleteConfirm(true)}
                                className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                            <button
                                onClick={handleClose}
                                className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>
                    </div>

                    <div className="p-8 flex-1 overflow-y-auto scrollbar-hide">
                        {/* Budget Status Card */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Left: Main Stats */}
                            <div className="flex-1">
                                <p className="text-slate-500 font-medium text-sm mb-1">Presupuesto Asignado</p>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">{formatAmount(limit).replace('MXN', '').trim()}</span>
                                </div>

                                <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl p-6 shadow-sm">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Estado del Periodo</h3>
                                            <p className="text-sm text-slate-500 mt-1">
                                                Gastado: <span className="text-slate-900 dark:text-white font-semibold">{formatAmount(spent)}</span>
                                            </p>
                                        </div>
                                        <div className={`px-3 py-1 rounded-lg text-xs font-bold ${isExceeded ? 'bg-red-50 text-red-600' :
                                            percentage >= 100 ? 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300' :
                                                percentage >= 80 ? 'bg-orange-50 text-orange-600' :
                                                    'bg-emerald-50 text-emerald-600'
                                            }`}>
                                            {isExceeded ? 'Excedido' :
                                                percentage >= 100 ? 'Al Límite' :
                                                    percentage >= 80 ? 'Cuidado' :
                                                        'Controlado'}
                                        </div>
                                    </div>

                                    <div className={`text-right mb-2 text-sm font-bold ${remaining < 0 ? 'text-red-500' :
                                        remaining === 0 ? 'text-slate-500' :
                                            percentage >= 80 ? 'text-orange-500' :
                                                'text-emerald-500'
                                        }`}>
                                        {remaining > 0 ? `${formatAmount(remaining)} disponible` :
                                            remaining === 0 ? 'Límite alcanzado' :
                                                `${formatAmount(Math.abs(remaining))} excedido`}
                                    </div>

                                    <div className="h-4 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                                        <div
                                            className={`h-full rounded-full ${isExceeded ? 'bg-red-500' :
                                                percentage >= 100 ? 'bg-slate-500' :
                                                    percentage >= 80 ? 'bg-orange-500' :
                                                        'bg-emerald-500'
                                                }`}
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>

                                    <div className="flex justify-between text-xs font-medium text-slate-400">
                                        <span>0%</span>
                                        <span>{(percentage).toFixed(0)}% utilizado</span>
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Info Card */}
                            <div className="md:w-[320px] bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Información Clave</h4>

                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="size-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-500 shadow-sm">
                                            <span className="material-symbols-outlined text-[20px]">category</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-medium">Categoría</p>
                                            <p className="font-bold text-slate-900 dark:text-white">{categoryName}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="size-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-500 shadow-sm">
                                            <span className="material-symbols-outlined text-[20px]">update</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-medium">Frecuencia</p>
                                            <p className="font-bold text-slate-900 dark:text-white">Mensual (Reinicia día 1)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="size-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-500 shadow-sm">
                                            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-medium">Fecha de Creación</p>
                                            <p className="font-bold text-slate-900 dark:text-white">
                                                {budget?.created_at
                                                    ? format(new Date(budget.created_at), 'd MMMM, yyyy', { locale: es })
                                                    : 'No disponible'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Projection */}
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Historial</h3>
                        </div>

                        <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden mb-8">
                            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-3 flex text-xs font-bold text-slate-400 uppercase tracking-wider">
                                <div className="flex-1">Mes</div>
                                <div className="flex-1">Notas</div>
                                <div className="w-32 text-right">Presupuesto</div>
                            </div>

                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                {history.map((item, idx) => {
                                    // Determine text for "Notas"
                                    let statusNote = 'Estándar';
                                    let statusClass = 'text-slate-500';
                                    const itemSpent = item.spent;
                                    const itemLimit = item.limit;
                                    const hasData = item.spent > 0; // Simplified "has data" check. In a real app check transaction count.

                                    if (!hasData && !item.isCurrent) {
                                        statusNote = 'Sin datos';
                                        statusClass = 'text-slate-400 italic';
                                    } else if (itemSpent > itemLimit) {
                                        statusNote = `Excedido (${formatAmount(itemSpent - itemLimit)})`;
                                        statusClass = 'text-red-500 font-bold';
                                    } else if (itemLimit > 0 && (itemSpent / itemLimit) >= 1) {
                                        statusNote = 'Al Límite';
                                        statusClass = 'text-slate-500 font-bold';
                                    } else if (itemLimit > 0 && (itemSpent / itemLimit) >= 0.8) {
                                        statusNote = 'Cuidado';
                                        statusClass = 'text-orange-500 font-bold';
                                    } else if (hasData) {
                                        statusNote = 'Controlado';
                                        statusClass = 'text-emerald-600 font-bold';
                                    }

                                    return (
                                        <div key={idx} className="bg-white dark:bg-[#1e293b] px-6 py-5 flex items-center">
                                            <div className="flex-1 flex items-center gap-3">
                                                <div className={`size-2 rounded-full ${item.isCurrent ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                                                <span className="font-bold text-slate-700 dark:text-slate-200 capitalize">
                                                    {format(item.date, 'MMMM', { locale: es })}
                                                    {item.isCurrent && <span className="text-slate-400 font-normal ml-1">(Actual)</span>}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <span className={`text-sm ${statusClass}`}>{statusNote}</span>
                                            </div>
                                            <div className="w-32 text-right font-bold text-slate-900 dark:text-white">
                                                {(!hasData && !item.isCurrent) ? '-' : formatAmount(item.limit)}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Overlay */}
            {showDeleteConfirm && (
                <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md transition-opacity duration-300 lg:pl-[var(--sidebar-width)] ${isDeleteClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
                    <div className={`w-[400px] bg-white dark:bg-[#1e293b] rounded-[2rem] p-8 shadow-2xl transition-all duration-300 flex flex-col items-center text-center ${isDeleteClosing ? 'animate-scale-out' : 'animate-scale-in'}`}>
                        <div className="size-16 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 mb-6">
                            <span className="font-bold text-3xl">!</span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">¿Eliminar presupuesto?</h3>
                        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                            Estás a punto de eliminar este presupuesto permanentemente. Esta acción no se puede deshacer.
                        </p>

                        <div className="flex gap-4 w-full">
                            <button
                                onClick={handleDeleteClose}
                                className="flex-1 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 hover:bg-gray-800 hover:text-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="flex-1 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 shadow-lg shadow-red-500/30 transition-all"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
