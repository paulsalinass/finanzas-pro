"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';

export default function Commitments() {
    const router = useRouter();
    const { commitments, toggleCommitmentStatus } = useFinance();
    const [filter, setFilter] = useState<'all' | 'pending' | 'paid'>('all');

    const totalPlanificado = commitments.reduce((sum, c) => sum + c.amount, 0);
    const yaPagado = commitments.filter(c => c.status === 'PAID').reduce((sum, c) => sum + c.amount, 0);
    const porPagar = totalPlanificado - yaPagado;
    const progressPercent = totalPlanificado > 0 ? (yaPagado / totalPlanificado) * 100 : 0;
    const pendingCount = commitments.filter(c => c.status === 'PENDING').length;

    const filteredCommitments = commitments.filter(c => {
        if (filter === 'pending') return c.status === 'PENDING';
        if (filter === 'paid') return c.status === 'PAID';
        return true;
    });

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            <header className="h-20 flex-shrink-0 flex items-center justify-between px-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-b border-white/50 dark:border-slate-800 z-30 transition-all">
                <div className="flex items-center bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 rounded-xl px-4 h-11 w-80 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50 focus-within:bg-white shadow-sm transition-all">
                    <span className="material-symbols-outlined text-[#637288] text-[20px]">search</span>
                    <input className="bg-transparent border-none text-sm w-full focus:ring-0 placeholder:text-[#94a3b8] text-[#111418] dark:text-white ml-2" placeholder="Buscar compromisos..." />
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative p-2.5 rounded-xl hover:bg-white/80 dark:hover:bg-slate-800 text-[#637288] transition-colors border border-transparent hover:border-white/50">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
                    </button>
                    <button onClick={() => router.push('/settings')} className="p-2.5 rounded-xl text-[#637288] hover:bg-white/80 dark:hover:bg-slate-800 border border-transparent hover:border-white/50">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth scrollbar-hide">
                <div className="max-w-[1200px] mx-auto pb-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 animate-fade-in">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white">Compromisos y Gastos Fijos</h1>
                                <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-lg border border-primary/20">Octubre 2024</span>
                            </div>
                            <p className="text-[#637288] dark:text-slate-400 text-base">Planifica y controla tus pagos recurrentes sin estrés.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-white dark:bg-slate-800 border border-[#dce0e5] dark:border-slate-700 text-[#111418] dark:text-white text-sm font-semibold shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-all">
                                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                                <span>Ver Calendario</span>
                            </button>
                            <button onClick={() => router.push('/commitments/add')} className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                <span>Nuevo Gasto Fijo</span>
                            </button>
                        </div>
                    </div>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-primary">account_balance</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-sm">savings</span>
                                </div>
                                <p className="text-[#637288] dark:text-slate-400 text-sm font-medium">Total Planificado</p>
                            </div>
                            <div>
                                <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">${totalPlanificado.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                <p className="text-[#637288] dark:text-slate-500 text-xs mt-1">Estimación mensual</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-success">check_circle</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-8 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-success">
                                    <span className="material-symbols-outlined text-sm">payments</span>
                                </div>
                                <p className="text-[#637288] dark:text-slate-400 text-sm font-medium">Ya Pagado</p>
                            </div>
                            <div>
                                <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">${yaPagado.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                                    <div className="bg-success h-full rounded-full transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
                                </div>
                                <p className="text-success text-xs font-medium mt-1">{progressPercent.toFixed(0)}% completado</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group border-orange-100 dark:border-orange-900/30">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-orange-500">pending_actions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-8 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                                    <span className="material-symbols-outlined text-sm">hourglass_top</span>
                                </div>
                                <p className="text-[#637288] dark:text-slate-400 text-sm font-medium">Por Pagar</p>
                            </div>
                            <div>
                                <p className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">${porPagar.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                <p className="text-[#637288] dark:text-slate-500 text-xs mt-1">{pendingCount} compromisos pendientes</p>
                            </div>
                        </div>
                    </section>

                    <section className="glass-card rounded-2xl shadow-glass overflow-hidden flex flex-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-white/40 dark:bg-slate-900/40">
                            <h3 className="text-[#111418] dark:text-white text-lg font-bold">Listado de Compromisos</h3>
                            <div className="flex bg-[#f0f2f4] dark:bg-slate-800 p-1 rounded-lg">
                                <button
                                    onClick={() => setFilter('all')}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${filter === 'all' ? 'bg-white dark:bg-slate-700 text-[#111418] dark:text-white shadow-sm' : 'text-[#637288] hover:text-[#111418] dark:hover:text-white'}`}
                                >
                                    Todos
                                </button>
                                <button
                                    onClick={() => setFilter('pending')}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${filter === 'pending' ? 'bg-white dark:bg-slate-700 text-[#111418] dark:text-white shadow-sm' : 'text-[#637288] hover:text-[#111418] dark:hover:text-white'}`}
                                >
                                    Pendientes
                                </button>
                                <button
                                    onClick={() => setFilter('paid')}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${filter === 'paid' ? 'bg-white dark:bg-slate-700 text-[#111418] dark:text-white shadow-sm' : 'text-[#637288] hover:text-[#111418] dark:hover:text-white'}`}
                                >
                                    Completados
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto w-full">
                            <table className="w-full min-w-[800px]">
                                <thead className="bg-gray-50/50 dark:bg-slate-800/50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[30%]">Concepto</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[20%]">Fecha Vencimiento</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[15%]">Monto</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[15%]">Estado</th>
                                        <th className="px-6 py-4 text-right text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[20%]">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#f0f2f4] dark:divide-slate-800">
                                    {filteredCommitments.map((item) => {
                                        const isOverdue = new Date(item.nextDueDate) < new Date();
                                        const isPaid = item.status === 'PAID';

                                        return (
                                            <tr key={item.id} className={`group hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors ${isPaid ? 'bg-gray-50/50 dark:bg-slate-900/50' : ''}`}>
                                                <td className="px-6 py-4">
                                                    <div
                                                        onClick={() => router.push(`/commitment/${item.id}`)}
                                                        className={`flex items-center gap-4 cursor-pointer ${isPaid ? 'opacity-60' : ''}`}
                                                    >
                                                        <div className={`size-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${isPaid ? 'bg-gray-200 dark:bg-slate-700 text-gray-500' : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600'
                                                            }`}>
                                                            <span className="material-symbols-outlined text-[20px]">
                                                                {item.name.toLowerCase().includes('internet') ? 'wifi' :
                                                                    item.name.toLowerCase().includes('spotify') ? 'music_note' :
                                                                        item.name.toLowerCase().includes('alquiler') ? 'home' : 'event_repeat'}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className={`text-[#111418] dark:text-white text-sm font-bold group-hover:text-primary transition-colors ${isPaid ? 'line-through decoration-slate-400' : ''}`}>{item.name}</p>
                                                            <p className="text-[#637288] dark:text-slate-500 text-xs">{item.frequency}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className={`flex items-center gap-2 w-fit px-2 py-1 rounded-md ${isPaid ? 'opacity-60 text-slate-500' :
                                                        isOverdue ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/20' : 'text-[#111418] dark:text-slate-300'
                                                        }`}>
                                                        {isOverdue && !isPaid && <span className="material-symbols-outlined text-[16px]">warning</span>}
                                                        <span className="text-sm font-medium">{item.nextDueDate}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-base font-bold ${isPaid ? 'text-[#637288] opacity-60' : 'text-[#111418] dark:text-white'}`}>-${item.amount.toFixed(2)}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${isPaid
                                                        ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                                                        : isOverdue
                                                            ? 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800'
                                                            : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                                                        }`}>
                                                        {!isPaid && <span className={`size-1.5 rounded-full ${isOverdue ? 'bg-orange-500 animate-pulse' : 'bg-slate-400'}`}></span>}
                                                        {isPaid ? <span className="material-symbols-outlined text-[14px]">check</span> : ''}
                                                        {isPaid ? 'Completado' : isOverdue ? 'Urgente' : 'Pendiente'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    {isPaid ? (
                                                        <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                            <span className="text-[10px] text-[#637288] dark:text-slate-500 italic bg-white/50 dark:bg-slate-800/50 px-2 py-1 rounded border border-gray-100 dark:border-slate-700">Transacción Generada</span>
                                                            <button onClick={() => router.push(`/commitment/${item.id}`)} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 text-[#637288]" title="Ver Detalle">
                                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="flex justify-end gap-2">
                                                            <button
                                                                onClick={() => toggleCommitmentStatus(item.id, item.status)}
                                                                className={`group/btn relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 ${isOverdue
                                                                    ? 'bg-primary text-white hover:bg-blue-700 shadow-primary/20 hover:scale-105'
                                                                    : 'border border-[#dce0e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#111418] dark:text-white hover:text-green-600 hover:border-green-200'
                                                                    }`}
                                                            >
                                                                <span className="material-symbols-outlined text-[16px]">{isOverdue ? 'payments' : 'done'}</span>
                                                                <span>{isOverdue ? 'Pagar Ahora' : 'Marcar Pagado'}</span>
                                                            </button>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 border-t border-[#f0f2f4] dark:border-slate-800 flex items-center justify-center bg-gray-50/30 dark:bg-slate-900/30">
                            <button className="text-[#637288] dark:text-slate-400 text-sm hover:text-primary transition-colors font-medium flex items-center gap-1 px-4 py-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg">
                                Mostrar más compromisos
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
