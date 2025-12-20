"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { MOCK_INSTALLMENTS } from '@/constants';

export default function CardDetails() {
    const router = useRouter();
    const { accounts } = useFinance();

    const creditCards = accounts.filter(acc => acc.type === 'CREDIT');
    const installments = MOCK_INSTALLMENTS;

    // KPIs
    const totalToPayThisMonth = creditCards.reduce((sum, card) => sum + (card.balance * 0.15), 1250); // Mocked logic to match image
    const totalPendingDebt = creditCards.reduce((sum, card) => sum + card.balance, 4200);
    const activePlans = installments.length + 2;

    const renderPills = (total: number, current: number, colorClass: string) => {
        return (
            <div className="flex gap-1 h-2.5 w-full">
                {Array.from({ length: total }).map((_, i) => {
                    const isPaid = i < current - 1;
                    const isCurrent = i === current - 1;
                    return (
                        <div
                            key={i}
                            className={`flex-1 rounded-full transition-all duration-500 ${isPaid ? colorClass : isCurrent ? `${colorClass} opacity-50` : 'bg-gray-200 dark:bg-slate-700'
                                }`}
                        ></div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex-1 w-full h-full overflow-y-auto scrollbar-hide pb-28 lg:pb-12 bg-background-light dark:bg-background-dark relative z-10">
            {/* Background Mesh Gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-10 -z-10">
                <div className="absolute top-0 left-0 w-[40vw] h-[40vh] bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-primary/10 rounded-full blur-[100px]"></div>
            </div>

            <main className="max-w-7xl mx-auto p-6 md:p-8 lg:px-12 flex flex-col gap-10">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 animate-fade-in">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white tracking-tight mb-2 uppercase">Mis Tarjetas y Cuotas</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">Controla tus pagos futuros sin estrés.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="glass-card px-4 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:bg-white transition shadow-sm flex items-center gap-2 border border-white/50 dark:border-slate-700">
                            <span className="material-symbols-outlined text-[18px]">calculate</span>
                            Simular Pago
                        </button>
                        <button
                            onClick={() => router.push('/edit-transaction')}
                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            Nueva Compra
                        </button>
                    </div>
                </header>

                {/* KPI Stats Row */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="glass-card rounded-2xl p-6 shadow-glass relative overflow-hidden group border border-white/60 dark:border-slate-800">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-primary">calendar_month</span>
                        </div>
                        <p className="text-gray-500 dark:text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">Total a Pagar este Mes</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">${totalToPayThisMonth.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                            <span className="text-[10px] font-black text-gray-400 dark:text-slate-500">USD</span>
                        </div>
                        <div className="mt-4 w-full bg-gray-200 dark:bg-slate-800 rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full transition-all duration-1000" style={{ width: '45%' }}></div>
                        </div>
                        <p className="text-[10px] font-bold text-gray-500 dark:text-slate-500 mt-2">45% del límite mensual sugerido</p>
                    </div>

                    <div className="glass-card rounded-2xl p-6 shadow-glass relative overflow-hidden group border border-white/60 dark:border-slate-800">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-gray-800 dark:text-white/20">account_balance_wallet</span>
                        </div>
                        <p className="text-gray-500 dark:text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">Deuda Total Pendiente</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">${totalPendingDebt.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                            <span className="text-[10px] font-black text-gray-400 dark:text-slate-500">USD</span>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center border border-emerald-100/50 dark:border-emerald-800/30">
                                <span className="material-symbols-outlined text-[14px] mr-1">trending_down</span> -2% vs mes pasado
                            </span>
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl p-6 shadow-glass relative overflow-hidden group border border-white/60 dark:border-slate-800">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-orange-500">pie_chart</span>
                        </div>
                        <p className="text-gray-500 dark:text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">Cuotas Activas</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">{activePlans} Planes</h3>
                        </div>
                        <p className="text-[10px] font-bold text-gray-500 dark:text-slate-500 mt-4">2 finalizan este mes</p>
                    </div>
                </section>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-12 gap-8 items-start animate-fade-in" style={{ animationDelay: '0.2s' }}>

                    {/* Left Column: Cards */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <h2 className="text-lg font-black text-gray-800 dark:text-white px-1 uppercase tracking-widest">Mis Tarjetas</h2>

                        {creditCards.map((card, i) => (
                            <div key={card.id} className={`glass-card p-6 rounded-[2rem] shadow-glass hover:shadow-md transition-all cursor-pointer border-l-[6px] relative overflow-hidden ${i === 0 ? 'border-l-primary' : 'border-l-indigo-500'}`}>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-2xl bg-white dark:bg-slate-800 shadow-inner flex items-center justify-center border border-slate-100 dark:border-slate-700">
                                            <img
                                                src={`https://logo.clearbit.com/${card.name.toLowerCase().includes('visa') ? 'visa.com' : 'mastercard.com'}`}
                                                className="h-4 w-auto object-contain opacity-80"
                                                alt="Logo"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-gray-900 dark:text-white text-base leading-tight">{card.name}</h3>
                                            <p className="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">**** {card.lastFour}</p>
                                        </div>
                                    </div>
                                    {i === 0 && <span className="bg-primary/10 text-primary dark:text-blue-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Principal</span>}
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] font-black text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1">Pendiente</p>
                                            <p className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">${card.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1">Disponible</p>
                                            <p className="text-sm font-black text-gray-600 dark:text-slate-300 tabular-nums">${((card.limit || 5000) - card.balance).toLocaleString()}</p>
                                        </div>
                                    </div>

                                    <div className="h-2 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-1000 ${i === 0 ? 'bg-primary' : 'bg-indigo-500'}`} style={{ width: `${(card.balance / (card.limit || 5000)) * 100}%` }}></div>
                                    </div>

                                    <div className="flex justify-between pt-4 border-t border-gray-100 dark:border-slate-800">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 dark:text-slate-500 uppercase font-black tracking-widest">Cierre</span>
                                            <span className="text-sm font-bold text-gray-700 dark:text-slate-300">{card.closingDate || '15 Oct'}</span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] text-gray-400 dark:text-slate-500 uppercase font-black tracking-widest">Pagar el</span>
                                            <span className={`text-sm font-black ${i === 0 ? 'text-primary' : 'text-slate-800 dark:text-white'}`}>{card.dueDate || '28 Oct'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button onClick={() => router.push('/accounts/add')} className="w-full border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-3xl p-6 text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest h-20 group">
                            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add_card</span>
                            Agregar Nueva Tarjeta
                        </button>
                    </div>

                    {/* Right Column: Installments */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="flex justify-between items-center px-1">
                            <h2 className="text-lg font-black text-gray-800 dark:text-white uppercase tracking-widest">Planes de Cuotas Activos</h2>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ordenar por:</span>
                                <select className="bg-transparent text-[10px] font-black text-gray-700 dark:text-slate-300 border-none p-0 pr-6 focus:ring-0 cursor-pointer uppercase tracking-widest">
                                    <option>Fecha Finalización</option>
                                    <option>Monto Restante</option>
                                </select>
                            </div>
                        </div>

                        {/* List of Installment Plans */}
                        <div className="space-y-4">
                            {[
                                { name: 'MacBook Air M2', icon: 'laptop_mac', card: 'Visa Platinum', date: 'Jun 2024', monthly: 200, total: 2400, paid: 800, current: 4, all: 12, color: 'bg-primary', iconBg: 'bg-blue-50 text-blue-600', end: 'Mayo 2025' },
                                { name: 'Muebles de Sala', icon: 'chair', card: 'Mastercard Gold', date: 'Ago 2024', monthly: 85, total: 510, paid: 340, current: 4, all: 6, color: 'bg-purple-500', iconBg: 'bg-purple-50 text-purple-600', end: 'Dic 2024' },
                                { name: 'Vuelos a Japón', icon: 'flight', card: 'Visa Platinum', date: 'Sep 2024', monthly: 310, total: 3100, paid: 310, current: 1, all: 10, color: 'bg-orange-500', iconBg: 'bg-orange-50 text-orange-600', end: 'Jul 2025' }
                            ].map((plan, i) => (
                                <div key={i} className="glass-card p-6 rounded-[2.5rem] shadow-glass flex flex-col sm:flex-row gap-6 items-center group hover:bg-white transition-all border border-white/40 dark:border-slate-800">
                                    <div className={`size-16 rounded-[1.5rem] ${plan.iconBg} dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-inner`}>
                                        <span className="material-symbols-outlined text-[32px]">{plan.icon}</span>
                                    </div>
                                    <div className="flex-1 w-full">
                                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                                            <div>
                                                <h4 className="font-black text-gray-900 dark:text-white text-lg tracking-tight">{plan.name}</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[10px] font-black text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-md uppercase tracking-widest">{plan.card}</span>
                                                    <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500">• Compra: {plan.date}</span>
                                                </div>
                                            </div>
                                            <div className="text-left sm:text-right">
                                                <p className="text-xl font-black text-gray-900 dark:text-white tracking-tighter">${plan.monthly.toFixed(2)} <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black">/ mes</span></p>
                                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Restante: <span className="font-black text-gray-700 dark:text-slate-300">${(plan.total - plan.paid).toLocaleString()}</span></p>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <div className="flex justify-between text-[10px] text-gray-400 dark:text-slate-500 mb-2 font-black uppercase tracking-widest">
                                                <span>Progreso: {plan.current} de {plan.all} cuotas</span>
                                                <span className={`${plan.color.replace('bg-', 'text-')} font-black`}>Finaliza: {plan.end}</span>
                                            </div>
                                            {renderPills(plan.all, plan.current, plan.color)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Projection Summary Box */}
                        <div className="glass-card p-8 rounded-[2.5rem] shadow-glass mt-4 bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                            <h3 className="text-[10px] font-black text-gray-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-6">Proyección Noviembre</h3>
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                                <div className="flex flex-wrap gap-12">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Cuotas Fijas</p>
                                        <p className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">$595.00</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Estimado Nuevos Consumos</p>
                                        <p className="text-2xl font-black text-gray-500 dark:text-slate-400 tracking-tighter">~ $850.00</p>
                                    </div>
                                </div>
                                <div className="text-center sm:text-right bg-white dark:bg-slate-800 px-6 py-4 rounded-3xl shadow-soft border border-white dark:border-slate-700 min-w-[200px]">
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Total Estimado</p>
                                    <p className="text-3xl font-black text-primary tracking-tighter">$1,445.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
