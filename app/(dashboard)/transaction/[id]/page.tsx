"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { DeleteConfirmModal } from '@/components/DeleteConfirmModal';

export default function TransactionDetail() {
    const router = useRouter();
    const { id } = useParams();
    const { transactions, deleteTransaction } = useFinance();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // id can be string or string[]
    const transactionId = Array.isArray(id) ? id[0] : id;
    const transaction = transactions.find(t => t.id === transactionId);

    if (!transaction) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-10">
                <p className="text-text-muted">Transacción no encontrada.</p>
                <button onClick={() => router.back()} className="mt-4 text-primary font-bold">Volver</button>
            </div>
        );
    }

    const handleConfirmDelete = () => {
        deleteTransaction(transaction.id);
        router.push('/transactions');
    };

    return (
        <div className="flex-1 overflow-y-auto relative p-6 md:p-10 flex flex-col items-center scrollbar-hide">
            <div className="w-full max-w-[700px] glass-card shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col animate-fade-in mt-4 lg:mt-10">
                <div className="flex justify-between items-center px-8 pt-10 pb-6">
                    <div>
                        <h2 className="text-2xl font-black text-text-main dark:text-white tracking-tight">Detalle del Movimiento</h2>
                        <p className="text-text-muted dark:text-slate-500 text-[10px] font-black uppercase tracking-widest mt-2">Ref: #TRX-{transaction.id}</p>
                    </div>
                    <button onClick={() => router.back()} className="size-10 flex items-center justify-center rounded-2xl hover:bg-gray-100 dark:hover:bg-slate-800 text-text-muted transition-all duration-300">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center py-10 gap-4 bg-gray-50/30 dark:bg-slate-800/30 border-y border-gray-100 dark:border-slate-800/50">
                    <div className="size-20 rounded-[2rem] bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-primary mb-2">
                        <span className="material-symbols-outlined text-4xl">{transaction.icon}</span>
                    </div>
                    <h1 className={`text-4xl md:text-5xl font-black tracking-tighter ${transaction.type === 'INCOME' ? 'text-success' : 'text-text-main dark:text-white'}`}>
                        {transaction.type === 'EXPENSE' ? '-' : '+'}${transaction.amount.toFixed(2)}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-2 px-6">
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm">
                            <span className="material-symbols-outlined text-base text-primary">account_balance</span>
                            <span className="text-[10px] font-black text-text-muted dark:text-slate-400 uppercase tracking-widest">{transaction.account}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm">
                            <span className="material-symbols-outlined text-base text-warning">category</span>
                            <span className="text-[10px] font-black text-text-muted dark:text-slate-400 uppercase tracking-widest">{transaction.category}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-10">
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                                <span className="material-symbols-outlined">storefront</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-text-muted dark:text-slate-500 uppercase tracking-widest mb-1">Comercio</p>
                                <p className="text-lg font-bold text-text-main dark:text-white">{transaction.description}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                                <span className="material-symbols-outlined">calendar_today</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-text-muted dark:text-slate-500 uppercase tracking-widest mb-1">Fecha y Hora</p>
                                <p className="text-lg font-bold text-text-main dark:text-white">{new Date(transaction.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex-1 glass-card bg-white/20 dark:bg-slate-800/20 rounded-[2rem] p-6 border border-gray-100/50 dark:border-slate-700/50">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="material-symbols-outlined text-text-muted text-lg">edit_note</span>
                                <p className="text-[10px] font-black text-text-muted dark:text-slate-500 uppercase tracking-widest">Anotaciones</p>
                            </div>
                            <p className="text-sm text-text-muted dark:text-slate-400 font-medium italic leading-relaxed">"Transacción automática registrada en el sistema."</p>
                        </div>
                        <button className="w-full py-4 rounded-2xl bg-gray-100 dark:bg-slate-800 text-text-main dark:text-white font-black uppercase text-xs tracking-widest hover:bg-gray-200 dark:hover:bg-slate-700 transition-all">
                            Editar Transacción
                        </button>
                    </div>
                </div>
            </div>
            <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="mt-8 text-danger font-black text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
            >
                Eliminar Registro
            </button>

            <DeleteConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                itemName={transaction.description}
                message="¿Estás seguro de que deseas eliminar la transacción"
            />
        </div>
    );
}
