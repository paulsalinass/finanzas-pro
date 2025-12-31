"use client";

import React from 'react';
import { Transaction } from '@/types';
import { useFinance } from '@/context/FinanceContext';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CategoryIcon } from './CategoryIcon';

const COLOR_MAP: Record<string, { bg: string, text: string, ring: string, border: string }> = {
    red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', ring: 'ring-red-500/10', border: 'border-red-200' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', ring: 'ring-orange-500/10', border: 'border-orange-200' },
    amber: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', ring: 'ring-amber-500/10', border: 'border-amber-200' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400', ring: 'ring-yellow-500/10', border: 'border-yellow-200' },
    lime: { bg: 'bg-lime-100 dark:bg-lime-900/30', text: 'text-lime-600 dark:text-lime-400', ring: 'ring-lime-500/10', border: 'border-lime-200' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', ring: 'ring-green-500/10', border: 'border-green-200' },
    emerald: { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', ring: 'ring-emerald-500/10', border: 'border-emerald-200' },
    teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', ring: 'ring-teal-500/10', border: 'border-teal-200' },
    cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400', ring: 'ring-cyan-500/10', border: 'border-cyan-200' },
    sky: { bg: 'bg-sky-100 dark:bg-sky-900/30', text: 'text-sky-600 dark:text-sky-400', ring: 'ring-sky-500/10', border: 'border-sky-200' },
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', ring: 'ring-blue-500/10', border: 'border-blue-200' },
    indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', ring: 'ring-indigo-500/10', border: 'border-indigo-200' },
    violet: { bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400', ring: 'ring-violet-500/10', border: 'border-violet-200' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', ring: 'ring-purple-500/10', border: 'border-purple-200' },
    fuchsia: { bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30', text: 'text-fuchsia-600 dark:text-fuchsia-400', ring: 'ring-fuchsia-500/10', border: 'border-fuchsia-200' },
    pink: { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400', ring: 'ring-pink-500/10', border: 'border-pink-200' },
    rose: { bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400', ring: 'ring-rose-500/10', border: 'border-rose-200' },
    slate: { bg: 'bg-slate-100 dark:bg-slate-800', text: 'text-slate-600 dark:text-slate-400', ring: 'ring-slate-500/10', border: 'border-slate-200' },
};

interface TransactionDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    transaction: Transaction | null;
    onEdit: (t: Transaction) => void;
}

import { DeleteConfirmModal } from './DeleteConfirmModal';

export const TransactionDetailsModal = ({ isOpen, onClose, transaction, onEdit }: TransactionDetailsModalProps) => {
    const { formatAmount, deleteTransaction, duplicateTransaction, ledgers, activeBookId, categories } = useFinance();
    const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);

    // Reset delete confirmation state when transaction changes or modal opens
    React.useEffect(() => {
        if (isOpen) {
            setShowDeleteConfirm(false);
        }
    }, [isOpen, transaction?.id]);

    // Animation & Interaction Logic
    const [isVisible, setIsVisible] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) {
            // Small delay to ensure browser paints initial state before animating
            const timer = setTimeout(() => {
                setIsVisible(true);
                setIsClosing(false);
            }, 10);
            return () => clearTimeout(timer);
        } else {
            setIsClosing(true);
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsVisible(false);
        }, 300);
    };

    // Close on Escape key
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Only close detail modal if delete confirmation is NOT open
            if (e.key === 'Escape' && isOpen && !showDeleteConfirm) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, showDeleteConfirm]);

    if (!isOpen && !isVisible) return null;
    if (!transaction) return null;

    const handleDelete = async () => {
        setShowDeleteConfirm(true);
    };

    const confirmDelete = async () => {
        if (transaction) {
            await deleteTransaction(transaction.id);
            handleClose();
        }
    };

    const handleDuplicate = async () => {
        await duplicateTransaction(transaction.id);
        handleClose();
    };

    const activeLedger = ledgers.find(l => l.id === activeBookId);
    const currency = activeLedger?.currency === 'PEN' ? 'S/' : activeLedger?.currency || '$';

    return (
        <>
            <div
                className={`fixed top-0 bottom-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
            >
                {/* ... existing modal content ... */}
                <div
                    className={`bg-white dark:bg-[#1e2530] w-full max-w-2xl rounded-3xl shadow-premium overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 transform ${isVisible && !isClosing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-white/5">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Detalle de Transacción</h2>
                            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">ID: #{transaction.id.slice(0, 8)}</p>
                        </div>
                        <button onClick={handleClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors">
                            <span className="material-symbols-outlined text-gray-500">close</span>
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-8 overflow-y-auto custom-scrollbar flex-1">

                        {/* Big Amount */}
                        <div className="text-center mb-10">
                            <div className={`text-5xl font-black mb-2 ${transaction.type === 'INCOME' ? 'text-success' : 'text-gray-900 dark:text-white'}`}>
                                {transaction.type === 'EXPENSE' ? '-' : '+'}{currency} {transaction.amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                            </div>
                            <div className="flex flex-wrap justify-center gap-3">
                                {/* 1. Account */}
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-outlined text-[16px] mr-2">account_balance</span>
                                    {transaction.account}
                                </span>

                                {/* 2. Type */}
                                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${transaction.type === 'INCOME'
                                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                                    : 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800'
                                    }`}>
                                    <span className="material-symbols-outlined text-[16px] mr-2">
                                        {transaction.type === 'INCOME' ? 'trending_up' : 'trending_down'}
                                    </span>
                                    {transaction.type === 'INCOME' ? 'Ingreso' : 'Gasto'}
                                </span>

                                {/* 3. Category */}
                                {(() => {
                                    const cat = categories.find(c => c.name === transaction.category);
                                    const colorKey = cat?.color || 'slate';
                                    const colors = COLOR_MAP[colorKey] || COLOR_MAP.slate;

                                    return (
                                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${colors.bg} ${colors.text} ${colors.border}`}>
                                            <CategoryIcon icon={cat?.icon || 'category'} className="text-[16px] mr-2" />
                                            {transaction.category}
                                        </span>
                                    );
                                })()}
                            </div>
                        </div>

                        {/* Meta Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Date/Time */}
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-[#252b36]">
                                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <span className="material-symbols-outlined">calendar_today</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">FECHA Y HORA</p>
                                    <p className="font-bold text-gray-800 dark:text-white text-lg capitalize">
                                        {format(new Date(transaction.date), "dd MMM, yyyy", { locale: es })}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {format(new Date(transaction.date), "h:mm a")}
                                    </p>
                                </div>
                            </div>

                            {/* Beneficiary/Description */}
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-[#252b36]">
                                <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                    <span className="material-symbols-outlined">storefront</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">BENEFICIARIO / DESCRIPCIÓN</p>
                                    <p className="font-bold text-gray-800 dark:text-white text-lg">
                                        {transaction.beneficiary || transaction.description}
                                    </p>
                                    {transaction.beneficiary && transaction.description && transaction.description !== transaction.beneficiary && (
                                        <p className="text-sm text-gray-500">{transaction.description}</p>
                                    )}
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-[#252b36]">
                                <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">UBICACIÓN</p>
                                    <p className="font-bold text-gray-800 dark:text-white text-lg">
                                        {transaction.location || 'No registrada'}
                                    </p>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-[#252b36]">
                                <div className="size-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                                    <span className="material-symbols-outlined">notes</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">NOTAS</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                                        "{transaction.notes || 'Sin notas adicionales'}"
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer Timestamps */}
                        <div className="text-xs text-gray-400 text-center mb-0">
                            {transaction.updated_at && (
                                <p>Última edición: {format(new Date(transaction.updated_at), "dd MMM yyyy 'a las' HH:mm", { locale: es })}</p>
                            )}
                            {!transaction.updated_at && transaction.created_at && (
                                <p>Creado: {format(new Date(transaction.created_at), "dd MMM yyyy 'a las' HH:mm", { locale: es })}</p>
                            )}
                        </div>

                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-[#252b36]/50 flex justify-end gap-3">
                        <button
                            onClick={handleDelete}
                            className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-danger hover:bg-danger/10 font-bold transition-all flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                            Eliminar
                        </button>
                        <button
                            onClick={handleDuplicate}
                            className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/5 font-bold transition-all flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-[18px]">content_copy</span>
                            Duplicar
                        </button>
                        <button
                            onClick={() => onEdit(transaction)}
                            className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                            Editar
                        </button>
                    </div>

                </div>
            </div>

            <DeleteConfirmModal
                isOpen={showDeleteConfirm}
                onClose={() => setShowDeleteConfirm(false)}
                onConfirm={confirmDelete}
                title="¿Eliminar transacción?"
                message="Estás a punto de eliminar esta transacción permanentemente. Esta acción no se puede deshacer."
            />
        </>
    );
};
