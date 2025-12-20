"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { useFinance } from '@/context/FinanceContext';
import { DeleteConfirmModal } from '@/components/DeleteConfirmModal';

export default function CommitmentDetail() {
    const router = useRouter();
    const { id } = useParams();
    const { commitments, toggleCommitmentStatus } = useFinance();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // id can be string or string[]
    const commitmentId = Array.isArray(id) ? id[0] : id;
    const commitment = commitments.find(c => c.id === commitmentId);

    if (!commitment) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-10">
                <p className="text-text-muted">Compromiso no encontrado.</p>
                <button onClick={() => router.back()} className="mt-4 text-primary font-bold">Volver</button>
            </div>
        );
    }

    const isPaid = commitment.status === 'PAID';
    const initial = commitment.name.charAt(0);

    // Mock history data
    const history = [
        { date: '15 Sep, 2023', status: 'Pagado', amount: commitment.amount },
        { date: '15 Ago, 2023', status: 'Pagado', amount: commitment.amount },
        { date: '15 Jul, 2023', status: 'Pagado', amount: commitment.amount },
    ];

    const handleConfirmDelete = () => {
        // Aquí iría la lógica de eliminación real si el contexto lo soportara
        // Por ahora solo navegamos atrás para simular el flujo
        router.push('/commitments');
    };

    return (
        <div className="flex-1 flex flex-col items-center overflow-y-auto scrollbar-hide relative z-10 p-4 sm:p-8">
            {/* Decorative Background Blobs */}
            <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-300/10 dark:bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

            <div className="w-full max-w-[800px] flex flex-col gap-6 animate-fade-in">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link href="/commitments" className="hover:text-primary flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Volver a Gastos Fijos
                    </Link>
                    <span className="opacity-50">/</span>
                    <span className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-[10px]">Detalle</span>
                </div>

                {/* Main Detail Card */}
                <div className="glass-card w-full rounded-[2.5rem] shadow-premium overflow-hidden flex flex-col border border-white/60 dark:border-slate-800 animate-slide-up">
                    {/* Header */}
                    <div className="px-8 pt-10 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-gray-100 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30">
                        <div className="flex gap-6">
                            <div className="size-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0 border border-primary/10 shadow-inner">
                                <span className="text-primary text-3xl font-black">{initial}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                    {commitment.name}
                                </h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                                    <span className="material-symbols-outlined text-[18px]">movie</span>
                                    Entretenimiento • {commitment.frequency === 'MONTHLY' ? 'Mensual' : commitment.frequency}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 self-start">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${isPaid
                                ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50'
                                : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800/50'
                                }`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${isPaid ? 'bg-green-500' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'}`}></span>
                                {isPaid ? 'Pagado' : 'Pendiente'}
                            </span>
                            <button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-white transition-all">
                                <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button
                                onClick={() => setIsDeleteModalOpen(true)}
                                className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-all"
                            >
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-col lg:flex-row gap-10 mb-10">
                            {/* Main Info */}
                            <div className="flex-1 space-y-10">
                                <div>
                                    <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2 ml-1">Monto a pagar</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">${commitment.amount.toFixed(2)}</span>
                                        <span className="text-sm text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest">USD</span>
                                    </div>
                                </div>

                                <div className="bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-inner">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <p className="text-slate-900 dark:text-white text-base font-black tracking-tight">Próximo Vencimiento</p>
                                            <p className="text-primary font-black text-xl">{commitment.nextDueDate}</p>
                                        </div>
                                        {!isPaid && (
                                            <div className="text-right">
                                                <span className="text-[10px] font-black text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2.5 py-1 rounded-lg uppercase tracking-widest mb-1 inline-block">Vence pronto</span>
                                                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold mt-1 uppercase tracking-wider">5 días restantes</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden shadow-inner">
                                        <div className={`h-full rounded-full transition-all duration-1000 ${isPaid ? 'bg-success' : 'bg-primary'}`} style={{ width: isPaid ? '100%' : '83%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Details */}
                            <div className="lg:w-[320px] bg-slate-100/30 dark:bg-white/5 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 flex flex-col gap-6">
                                <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2 px-1">Detalles</h3>
                                <div className="flex items-start gap-4">
                                    <div className="size-10 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 dark:border-slate-700 shrink-0">
                                        <span className="material-symbols-outlined text-[20px]">credit_card</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Método de Pago</p>
                                        <p className="text-sm font-black text-slate-800 dark:text-white">Visa ending in 4242</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="size-10 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 dark:border-slate-700 shrink-0">
                                        <span className="material-symbols-outlined text-[20px]">update</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Frecuencia</p>
                                        <p className="text-sm font-black text-slate-800 dark:text-white">Mensual, día 15</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="size-10 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 dark:border-slate-700 shrink-0">
                                        <span className="material-symbols-outlined text-[20px]">category</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Categoría</p>
                                        <p className="text-sm font-black text-slate-800 dark:text-white">Servicios Digitales</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* History */}
                        <div className="mb-10">
                            <div className="flex items-center justify-between mb-5 px-1">
                                <h3 className="text-slate-900 dark:text-white text-lg font-black tracking-tight">Historial de Pagos</h3>
                                <button className="text-primary text-xs font-black uppercase tracking-[0.2em] hover:underline">Ver todo</button>
                            </div>
                            <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-soft">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                            <th className="py-4 px-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Fecha</th>
                                            <th className="py-4 px-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Estado</th>
                                            <th className="py-4 px-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Monto</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white/50 dark:bg-slate-900/50">
                                        {history.map((h, i) => (
                                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group cursor-pointer">
                                                <td className="py-4 px-6 text-sm font-bold text-slate-600 dark:text-slate-300">{h.date}</td>
                                                <td className="py-4 px-6">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50">
                                                        <span className="material-symbols-outlined text-[14px]">check</span>
                                                        Pagado
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-black text-slate-900 dark:text-white text-right">${h.amount.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                            <button
                                onClick={() => toggleCommitmentStatus(commitment.id, commitment.status)}
                                className={`flex-1 flex items-center justify-center gap-3 h-14 px-8 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl transition-all active:scale-95 ${isPaid
                                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                                    : 'bg-primary text-white hover:bg-primary-hover shadow-primary/25'
                                    }`}
                            >
                                <span className="material-symbols-outlined">{isPaid ? 'undo' : 'check_circle'}</span>
                                {isPaid ? 'Marcar como Pendiente' : 'Marcar como Pagado'}
                            </button>
                            <button className="flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm active:scale-95">
                                <span className="material-symbols-outlined text-slate-400">event_repeat</span>
                                Posponer
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">La información mostrada es privada y segura • Actualizado hace 2h</p>
                </div>
            </div>

            <DeleteConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                itemName={commitment.name}
                message="¿Estás seguro de que deseas eliminar el compromiso"
            />
        </div>
    );
}
