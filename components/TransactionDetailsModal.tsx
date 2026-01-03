"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import { Transaction } from '@/types';
import { useFinance } from '@/context/FinanceContext';
import { DeleteConfirmModal } from './DeleteConfirmModal';
import { CategoryIcon } from './CategoryIcon';

interface TransactionDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    transaction: Transaction | null;
    onEdit: (t: Transaction) => void;
}

export const TransactionDetailsModal = ({ isOpen, onClose, transaction, onEdit }: TransactionDetailsModalProps) => {
    const { deleteTransaction, duplicateTransaction, ledgers, activeBookId, categories, accounts } = useFinance();
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

    // Animation states
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
    const [cachedTransaction, setCachedTransaction] = useState<Transaction | null>(null);

    // Init Portal
    useEffect(() => {
        setIsMounted(true);
        setPortalElement(document.body);
        return () => setIsMounted(false);
    }, []);

    // Handle open/close animations and caching
    useEffect(() => {
        if (isOpen && transaction) {
            setIsMounted(true);
            setCachedTransaction(transaction);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsVisible(true));
            });
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => {
                setCachedTransaction(null);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen, transaction]);

    // Handle Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isVisible) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isVisible]);

    const handleClose = () => {
        onClose();
    };

    const handleConfirmDelete = async () => {
        if (cachedTransaction) {
            await deleteTransaction(cachedTransaction.id);
            handleClose();
        }
    };

    if (!isMounted || !portalElement) return null;

    // Use cached transaction for exit animation
    const trx = isOpen ? transaction : cachedTransaction;
    if (!trx) return null;

    // Derived data
    const activeLedger = ledgers.find(l => l.id === activeBookId);
    const currency = activeLedger?.currency || 'USD';
    const currencySymbol = currency === 'PEN' ? 'S/.' : (currency === 'EUR' ? '€' : '$');

    return createPortal(
        <>
            <div
                className={`fixed inset-0 z-40 flex items-center justify-center p-4 lg:pl-[var(--sidebar-width)] bg-black/10 backdrop-blur-md transition-all duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
            >
                <div
                    className={`bg-white dark:bg-[#1e2530] w-full max-w-2xl rounded-[2.5rem] shadow-premium overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center px-8 pt-8 pb-4">
                        <div>
                            <h2 className="text-2xl font-black text-text-main dark:text-white tracking-tight">Detalle de Transacción</h2>
                            <p className="text-text-muted dark:text-slate-500 text-[10px] font-light uppercase tracking-widest mt-1">ID: #{trx.id.substring(0, 8)}</p>
                        </div>
                        <button onClick={handleClose} className="size-10 flex items-center justify-center rounded-2xl hover:bg-gray-100 dark:hover:bg-slate-800 text-text-muted transition-all duration-300 cursor-pointer">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div className="overflow-y-auto custom-scrollbar">
                        {/* Hero Section */}
                        <div className="flex flex-col items-center justify-center py-8 gap-4 bg-gray-50/30 dark:bg-black/20 border-b border-gray-100 dark:border-white/5">
                            <div className="size-16 rounded-3xl bg-white dark:bg-white/5 shadow-xl flex items-center justify-center text-primary transform hover:scale-105 transition-transform duration-300">
                                <CategoryIcon icon={trx.icon || 'payments'} className="text-3xl" />
                            </div>
                            <h1 className="text-4xl font-black tracking-tighter text-text-main dark:text-white">
                                {trx.type === 'EXPENSE' ? '-' : '+'}{currencySymbol}{trx.amount.toFixed(2)}
                            </h1>
                            <div className="flex flex-wrap justify-center gap-2 px-6">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm">
                                    <span className="material-symbols-outlined text-base text-primary">account_balance</span>
                                    <span className="text-[10px] font-black text-text-muted dark:text-slate-400 uppercase tracking-widest">{trx.account}</span>
                                </div>
                                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm ${trx.type === 'EXPENSE'
                                    ? 'bg-rose-50 border-rose-100 text-rose-600 dark:bg-rose-900/20 dark:border-rose-900/30 dark:text-rose-400'
                                    : 'bg-emerald-50 border-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:border-emerald-900/30 dark:text-emerald-400'
                                    }`}>
                                    <span className="material-symbols-outlined text-base">{trx.type === 'EXPENSE' ? 'trending_down' : 'trending_up'}</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest">{trx.type === 'EXPENSE' ? 'Gasto' : 'Ingreso'}</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm">
                                    <CategoryIcon icon={trx.icon || 'category'} className="text-base text-amber-500" />
                                    <span className="text-[10px] font-black text-text-muted dark:text-slate-400 uppercase tracking-widest">{trx.category}</span>
                                </div>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-6 md:px-8 py-6">
                            {/* Date Card */}
                            <div className="p-4 rounded-3xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100/50 dark:border-indigo-500/10 flex items-start gap-3 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                                <div className="size-10 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] font-black text-indigo-400 dark:text-indigo-300 uppercase tracking-widest mb-1">Fecha y Hora</p>
                                    <p className="text-base font-bold text-gray-800 dark:text-white capitalize leading-tight mb-0.5 truncate">
                                        {new Date(trx.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                                    </p>
                                    <p className="text-xs font-medium text-gray-500 dark:text-indigo-200/60 lowercase">
                                        {new Date(trx.date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true })}
                                    </p>
                                </div>
                            </div>

                            {/* Beneficiary/Description Card */}
                            <div className="p-4 rounded-3xl bg-purple-50/50 dark:bg-purple-900/10 border border-purple-100/50 dark:border-purple-500/10 flex items-start gap-3 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                                <div className="size-10 rounded-2xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400">
                                    <span className="material-symbols-outlined text-[20px]">storefront</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] font-black text-purple-400 dark:text-purple-300 uppercase tracking-widest mb-1">Beneficiario / Descripción</p>
                                    <p className="text-base font-bold text-gray-800 dark:text-white line-clamp-2 leading-tight">
                                        {trx.beneficiary || trx.description}
                                    </p>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="p-4 rounded-3xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100/50 dark:border-emerald-500/10 flex items-start gap-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                                <div className="size-10 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400">
                                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[9px] font-black text-emerald-400 dark:text-emerald-300 uppercase tracking-widest mb-1">Ubicación</p>
                                    <p className="text-base font-bold text-gray-800 dark:text-white capitalize leading-tight truncate">
                                        {trx.location || 'No registrada'}
                                    </p>
                                </div>
                            </div>

                            {/* Notes Card */}
                            <div className="p-4 rounded-3xl bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100/50 dark:border-amber-500/10 flex items-start gap-3 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
                                <div className="size-10 rounded-2xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-600 dark:text-amber-400">
                                    <span className="material-symbols-outlined text-[20px]">notes</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[9px] font-black text-amber-400 dark:text-amber-300 uppercase tracking-widest mb-1">Notas</p>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed line-clamp-2">
                                        {trx.notes ? `"${trx.notes}"` : '"Sin notas adicionales"'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Last Edited Timestamp */}
                        <div className="px-8 pb-4 text-center">
                            <p className="text-[10px] text-text-muted dark:text-slate-500 font-medium">
                                Última edición: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })} a las {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-4 border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/20 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="group flex items-center bg-rose-100 dark:bg-rose-900/40 rounded-2xl hover:bg-rose-200 dark:hover:bg-rose-900/60 transition-all overflow-hidden w-[52px] hover:w-[130px] h-[52px] cursor-pointer" onClick={() => setIsDeleteConfirmOpen(true)}>
                                <div className="min-w-[52px] h-full flex items-center justify-center text-rose-600 dark:text-rose-400">
                                    <span className="material-symbols-outlined text-[20px]">delete</span>
                                </div>
                                <span className="text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest whitespace-nowrap pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Eliminar
                                </span>
                            </div>

                            <button
                                onClick={async () => {
                                    if (trx) {
                                        await duplicateTransaction(trx.id);
                                        handleClose();
                                    }
                                }}
                                className="group flex items-center bg-gray-200 dark:bg-slate-700 rounded-2xl hover:bg-gray-300 dark:hover:bg-slate-600 transition-all overflow-hidden w-[52px] hover:w-[130px] h-[52px] cursor-pointer"
                            >
                                <div className="min-w-[52px] h-full flex items-center justify-center text-gray-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-[20px]">content_copy</span>
                                </div>
                                <span className="text-[10px] font-black text-gray-700 dark:text-slate-300 uppercase tracking-widest whitespace-nowrap pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Duplicar
                                </span>
                            </button>
                        </div>

                        <button
                            onClick={() => onEdit(trx)}
                            className="group flex items-center bg-gray-900 dark:bg-black rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-900 transition-all overflow-hidden w-[52px] hover:w-[110px] h-[52px] shadow-lg shadow-black/10 dark:shadow-white/5 cursor-pointer"
                        >
                            <div className="min-w-[52px] h-full flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-[20px]">edit</span>
                            </div>
                            <span className="text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Editar
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <DeleteConfirmModal
                isOpen={isDeleteConfirmOpen}
                onClose={() => setIsDeleteConfirmOpen(false)}
                onConfirm={handleConfirmDelete}
                itemName={trx.description}
                message="¿Estás seguro de que deseas eliminar esta transacción?"
            />
        </>,
        portalElement
    );
};
