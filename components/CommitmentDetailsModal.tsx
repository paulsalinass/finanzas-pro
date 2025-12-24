"use client";

import React, { useState, useEffect } from 'react';
import { Commitment } from '@/types';
import { useFinance } from '@/context/FinanceContext';
import { CategoryIcon } from './CategoryIcon';
import { DeleteConfirmModal } from './DeleteConfirmModal';

interface CommitmentDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    commitment: Commitment | null;
    onEdit: (c: Commitment) => void;
    onDelete: (id: string) => void;
}

export const CommitmentDetailsModal = ({ isOpen, onClose, commitment, onEdit, onDelete }: CommitmentDetailsModalProps) => {
    const {
        ledgers,
        activeBookId,
        accounts,
        categories,
        toggleCommitmentStatus,
        transactions
    } = useFinance();

    const [history, setHistory] = useState<any[]>([]);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

    // Fetch history when commitment changes
    useEffect(() => {
        if (!commitment || !isOpen) return;

        // Try to find transactions linked by ID first, then by name (legacy)
        const related = transactions.filter(t =>
            (t.commitment_id === commitment.id) ||
            (t.description.includes(commitment.name) && t.description.includes('[Compromiso]'))
        ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5);

        setHistory(related);
    }, [commitment, isOpen, transactions]);

    if (!isOpen || !commitment) return null;

    const activeLedger = ledgers.find(l => l.id === activeBookId);
    const currency = activeLedger?.currency || 'USD';
    const currencySymbol = currency === 'PEN' ? 'S/.' : (currency === 'EUR' ? '€' : '$');

    const accountName = accounts.find(a => a.id === commitment.accountId)?.name || commitment.account || 'Sin cuenta';
    const categoryObj = categories.find(c => c.id === commitment.categoryId) || categories.find(c => c.name === commitment.category);
    const categoryName = categoryObj?.name || commitment.category || 'General';
    const categoryIcon = categoryObj?.icon || 'grid_view';
    const categoryColor = categoryObj?.color || 'slate';

    const getDaysRemaining = (dateStr: string) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Parse YYYY-MM-DD manually to prevent UTC timezone shift
        const [year, month, day] = dateStr.split('-').map(Number);
        const due = new Date(year, month - 1, day);
        due.setHours(0, 0, 0, 0);
        const diff = due.getTime() - today.getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    const daysRemaining = getDaysRemaining(commitment.nextDueDate);
    const isOverdue = daysRemaining < 0 && commitment.status === 'PENDING';
    const isPaid = commitment.status === 'PAID';

    const frequencyMap: Record<string, string> = {
        'ONCE': 'Una vez',
        'DAILY': 'Diario',
        'WEEKLY': 'Semanal',
        'BIWEEKLY': 'Quincenal',
        'MONTHLY': 'Mensual',
        'YEARLY': 'Anual'
    };
    const translatedFrequency = frequencyMap[commitment.frequency] || commitment.frequency;

    const handleToggleStatus = async () => {
        await toggleCommitmentStatus(commitment.id, commitment.status);
        onClose(); // Close after action? or stay open? User might want to see update. 
        // Better to close or refresh.
    };

    const handleDeleteClick = () => {
        setIsDeleteConfirmOpen(true);
    };

    const confirmDelete = () => {
        onDelete(commitment.id);
        setIsDeleteConfirmOpen(false);
        onClose();
    };

    return (
        <>
            <div
                className="fixed top-0 bottom-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in transition-[left] duration-300"
                onClick={onClose}
            >
                <div
                    className="bg-white dark:bg-[#1e2530] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-start p-6 border-b border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="size-14 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-3xl">
                                {commitment.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">{commitment.name}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-2">
                                    <span className="capitalize">{categoryName}</span>
                                    <span className="size-1 rounded-full bg-gray-300"></span>
                                    <span className="capitalize">{translatedFrequency}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`px-3 py-1 rounded-full text-xs font-bold border ${isPaid ? 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' :
                                isOverdue ? 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20' :
                                    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20'
                                }`}>
                                {isPaid ? 'Pagado' : isOverdue ? 'Vencido' : 'Pendiente'}
                            </div>
                            <button onClick={() => onEdit(commitment)} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl text-gray-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button onClick={handleDeleteClick} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl text-gray-400 hover:text-rose-500 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
                        {/* Main Payment Info */}
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Monto a pagar</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-gray-800 dark:text-white tracking-tight">
                                    {currencySymbol}{commitment.amount.toFixed(2)}
                                </span>
                                <span className="text-sm font-bold text-gray-400 uppercase">{currency}</span>
                            </div>
                        </div>

                        {/* Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Next Due */}
                            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Próximo Vencimiento</span>
                                </div>
                                <div className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-1">
                                    {(() => {
                                        const [y, m, d] = commitment.nextDueDate.split('-').map(Number);
                                        const localDate = new Date(y, m - 1, d);
                                        return localDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
                                    })()}
                                </div>
                                <div className="w-full bg-blue-200 dark:bg-blue-800/30 h-1.5 rounded-full overflow-hidden mt-2">
                                    {/* Simple progress visual: 100% full if overdue/today, partial otherwise */}
                                    <div
                                        className={`h-full rounded-full ${daysRemaining < 3 ? 'bg-rose-500' : 'bg-blue-500'}`}
                                        style={{ width: `${Math.max(0, Math.min(100, 100 - (daysRemaining * 3)))}%` }} // Arbitrary filling logic
                                    ></div>
                                </div>
                                <p className="text-xs font-medium text-blue-600/70 dark:text-blue-400/70 mt-2 text-right">
                                    {daysRemaining < 0 ? `${Math.abs(daysRemaining)} días vencido` : daysRemaining === 0 ? 'Vence hoy' : `${daysRemaining} días restantes`}
                                </p>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 gap-2">
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500">
                                        <span className="material-symbols-outlined text-[18px]">credit_card</span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Método de Pago</p>
                                        <p className="text-sm font-bold text-gray-700 dark:text-gray-200 truncate">{accountName}</p>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500">
                                        <span className="material-symbols-outlined text-[18px]">update</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Frecuencia</p>
                                        <p className="text-sm font-bold text-gray-700 dark:text-gray-200 capitalize">{translatedFrequency}</p>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center gap-3">
                                    <div className={`size-8 rounded-lg flex items-center justify-center text-white shadow-sm ring-1 ring-white/20`} style={{ backgroundColor: categoryColor }}>
                                        <span className="material-symbols-outlined text-[18px]">{categoryIcon}</span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Categoría</p>
                                        <p className="text-sm font-bold text-gray-700 dark:text-gray-200 truncate">{categoryName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* History */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-sm font-bold text-gray-800 dark:text-white">Historial de Pagos</h3>
                                <button className="text-xs font-medium text-primary hover:underline">Ver todo</button>
                            </div>
                            <div className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden">
                                {history.length === 0 ? (
                                    <div className="p-8 text-center text-gray-400 text-sm">No hay historial reciente</div>
                                ) : (
                                    <table className="w-full">
                                        <thead className="bg-gray-50 dark:bg-white/5 text-xs text-gray-400 font-semibold uppercase tracking-wider text-left">
                                            <tr>
                                                <th className="px-4 py-3">Fecha</th>
                                                <th className="px-4 py-3">Estado</th>
                                                <th className="px-4 py-3 text-right">Monto</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                            {history.map((h, i) => (
                                                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                                        {new Date(h.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                                                            <span className="material-symbols-outlined text-[12px]">check</span> Pagado
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-right text-sm font-bold text-gray-800 dark:text-white">
                                                        {currencySymbol}{Number(h.amount).toFixed(2)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/20 flex gap-3">
                        <button
                            onClick={handleToggleStatus}
                            disabled={isPaid}
                            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] ${isPaid
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                                : 'bg-primary text-white hover:bg-blue-600'
                                }`}
                        >
                            {isPaid ? (
                                <>
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Pagado
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Marcar como Pagado
                                </>
                            )}
                        </button>
                        {!isPaid && (
                            <button className="px-6 py-3.5 rounded-xl font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined">calendar_clock</span>
                                Posponer
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <DeleteConfirmModal
                isOpen={isDeleteConfirmOpen}
                onClose={() => setIsDeleteConfirmOpen(false)}
                onConfirm={confirmDelete}
                title="¿Eliminar Compromiso?"
                message="Estás a punto de eliminar este compromiso. Si existen transacciones pasadas, se mantendrán en el historial."
                itemName={commitment.name}
            />
        </>
    );
};
