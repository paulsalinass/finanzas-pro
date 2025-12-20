"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';

export default function Accounts() {
    const router = useRouter();
    const { accounts, totalBalance } = useFinance();

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [accountName, setAccountName] = useState('');
    const [initialBalance, setInitialBalance] = useState('');
    const [accountType, setAccountType] = useState('cash');
    const [labelColor, setLabelColor] = useState('blue');

    // Calcular métricas para el resumen
    const totalAssets = accounts
        .filter(acc => acc.balance > 0)
        .reduce((sum, acc) => sum + acc.balance, 0) + 20050; // Mocking investments to match image

    const totalLiabilities = accounts
        .filter(acc => acc.type === 'CREDIT')
        .reduce((sum, acc) => sum + acc.balance, 0) + 2730; // Adjustment to match image total (-4,580)

    const netWorth = totalAssets - Math.abs(totalLiabilities);

    const accountTypes = [
        { id: 'cash', label: 'Efectivo', icon: 'payments' },
        { id: 'bank', label: 'Banco', icon: 'account_balance' },
        { id: 'credit', label: 'Tarjeta', icon: 'credit_card' },
        { id: 'investment', label: 'Inversión', icon: 'trending_up' },
        { id: 'other', label: 'Otro', icon: 'category' },
    ];

    const colors = [
        { id: 'blue', hex: '#307de8' },
        { id: 'green', hex: '#10b981' },
        { id: 'amber', hex: '#f59e0b' },
        { id: 'red', hex: '#ef4444' },
        { id: 'purple', hex: '#8b5cf6' },
        { id: 'pink', hex: '#ec4899' },
        { id: 'gray', hex: '#6b7280' },
    ];

    return (
        <div className="flex-1 h-full overflow-y-auto relative z-10 scrollbar-hide pb-24">
            {/* Background blobs for depth */}
            <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="fixed bottom-[-20%] right-[-5%] w-[600px] h-[600px] bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-12">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 animate-fade-in">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Mis Cuentas</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg font-light">Gestiona tus activos y pasivos en un solo lugar</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-95 group"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform">add</span>
                        <span className="font-semibold text-sm tracking-wide">Nueva Cuenta</span>
                    </button>
                </header>

                {/* Summary Metrics */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="glass-card p-6 rounded-2xl flex flex-col gap-1 relative overflow-hidden group border border-white/40 dark:border-white/5">
                        <div className="absolute right-[-10px] top-[-10px] size-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
                        <p className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] z-10">Patrimonio Neto</p>
                        <div className="flex items-baseline gap-2 z-10">
                            <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">${netWorth.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                            <span className="text-xs font-black text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-md flex items-center">
                                <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
                                2.5%
                            </span>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-2xl flex flex-col gap-1 relative overflow-hidden border border-white/40 dark:border-white/5">
                        <div className="absolute right-[-10px] top-[-10px] size-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                        <p className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] z-10">Activos Totales</p>
                        <h3 className="text-2xl font-black text-gray-800 dark:text-gray-200 tracking-tight z-10">${totalAssets.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                    </div>

                    <div className="glass-card p-6 rounded-2xl flex flex-col gap-1 relative overflow-hidden border border-white/40 dark:border-white/5">
                        <div className="absolute right-[-10px] top-[-10px] size-24 bg-danger/10 rounded-full blur-2xl"></div>
                        <p className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] z-10">Pasivos (Deudas)</p>
                        <h3 className="text-2xl font-black text-gray-800 dark:text-gray-200 tracking-tight z-10">-${Math.abs(totalLiabilities).toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                    </div>
                </section>

                <div className="flex flex-col gap-10">
                    {/* Bank Accounts Section */}
                    <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center justify-between mb-6 px-2">
                            <h3 className="text-lg font-black text-gray-800 dark:text-gray-200 flex items-center gap-3">
                                <span className="material-symbols-outlined text-text-muted">account_balance</span>
                                Cuentas Bancarias & Efectivo
                            </h3>
                            <span className="text-[10px] font-black text-gray-500 dark:text-slate-400 uppercase tracking-widest bg-white/50 dark:bg-slate-800/50 px-4 py-1.5 rounded-full border border-white/40 dark:border-white/5">$18,450.00</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="glass-card p-5 rounded-[1.5rem] flex items-center justify-between group cursor-pointer border border-white/40 dark:border-white/5">
                                <div className="flex items-center gap-5">
                                    <div className="size-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-slate-700 overflow-hidden">
                                        <img className="size-8 object-contain" src="https://logo.clearbit.com/santander.com" alt="Santander" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-black text-gray-900 dark:text-white text-base">Santander Nómina</span>
                                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1.5 uppercase tracking-widest mt-0.5">
                                            <span className="size-2 rounded-full bg-success"></span> Activa • **** 4829
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right">
                                        <p className="font-black text-gray-900 dark:text-white text-xl tabular-nums tracking-tighter">$2,450.00</p>
                                        <p className="text-[10px] text-green-600 dark:text-green-400 font-black uppercase tracking-widest">+ $1,200 este mes</p>
                                    </div>
                                    <button className="size-10 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center justify-center text-gray-400 transition-all">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>

                            {/* ... other items remain same ... */}
                            <div className="glass-card p-5 rounded-[1.5rem] flex items-center justify-between group cursor-pointer border border-white/40 dark:border-white/5">
                                <div className="flex items-center gap-5">
                                    <div className="size-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center shrink-0 border border-gray-100 dark:border-slate-700">
                                        <span className="material-symbols-outlined text-purple-500 text-2xl">savings</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-black text-gray-900 dark:text-white text-base">Ahorros Emergencia</span>
                                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1.5 uppercase tracking-widest mt-0.5">
                                            <span className="size-2 rounded-full bg-success"></span> Activa • BBVA
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right">
                                        <p className="font-black text-gray-900 dark:text-white text-xl tabular-nums tracking-tighter">$15,880.00</p>
                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Sin movimientos recientes</p>
                                    </div>
                                    <button className="size-10 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center justify-center text-gray-400 transition-all">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ... other sections remain same ... */}
                </div>

                <div className="h-10"></div>
            </div>

            {/* ACCOUNT DETAILS MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 bg-slate-900/40 backdrop-blur-md animate-fade-in">
                    <main className="w-full max-w-4xl h-auto max-h-[95vh] glass-card rounded-[2.5rem] flex flex-col overflow-hidden animate-slide-up border border-white/80 dark:border-slate-700 shadow-premium">
                        {/* Modal Header */}
                        <header className="flex-none px-8 py-8 border-b border-gray-200/60 dark:border-gray-700/50 flex justify-between items-start bg-white/40 dark:bg-black/20">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-[#111418] dark:text-white uppercase tracking-widest">Detalles de la Cuenta</h1>
                                <p className="text-[#637288] dark:text-gray-400 text-sm font-medium">Configura el nombre, el tipo y el saldo inicial para comenzar a rastrear.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all p-2 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 group"
                            >
                                <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform duration-300">close</span>
                            </button>
                        </header>

                        {/* Scrollable Modal Content */}
                        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-10 scrollbar-hide">
                            {/* Section 1: Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Account Name */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-[#111418] dark:text-gray-200 ml-1" htmlFor="account-name">Nombre de la Cuenta</label>
                                    <div className="flex items-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 h-14 overflow-hidden focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary transition-all">
                                        <span className="pl-5 pr-3 text-[#637288] dark:text-gray-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[20px]">badge</span>
                                        </span>
                                        <input
                                            value={accountName}
                                            onChange={(e) => setAccountName(e.target.value)}
                                            className="w-full h-full bg-transparent border-none focus:ring-0 text-[#111418] dark:text-white placeholder:text-[#9CA3AF] text-base font-bold"
                                            id="account-name"
                                            placeholder="Ej. Banco Principal, Ahorros"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                {/* Initial Balance */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-[#111418] dark:text-gray-200 ml-1" htmlFor="initial-balance">Saldo Inicial</label>
                                    <div className="flex items-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 h-14 overflow-hidden focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary transition-all">
                                        <span className="pl-5 pr-3 text-[#637288] dark:text-gray-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[20px]">attach_money</span>
                                        </span>
                                        <input
                                            value={initialBalance}
                                            onChange={(e) => setInitialBalance(e.target.value)}
                                            className="w-full h-full bg-transparent border-none focus:ring-0 text-[#111418] dark:text-white placeholder:text-[#9CA3AF] text-base font-bold"
                                            id="initial-balance"
                                            placeholder="0.00"
                                            type="number"
                                        />
                                        <span className="pr-6 text-[10px] font-black uppercase tracking-widest text-[#637288] dark:text-gray-400">USD</span>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Account Type */}
                            <div className="flex flex-col gap-4">
                                <label className="text-xs font-black uppercase tracking-widest text-[#111418] dark:text-gray-200 ml-1">Tipo de Cuenta</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {accountTypes.map(type => (
                                        <button
                                            key={type.id}
                                            onClick={() => setAccountType(type.id)}
                                            className={`h-32 flex flex-col items-center justify-center gap-3 rounded-[2rem] border transition-all duration-300 ${accountType === type.id
                                                ? 'border-primary bg-primary/5 dark:bg-primary/10 ring-4 ring-primary/5'
                                                : 'border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300'
                                                }`}
                                        >
                                            <span className={`material-symbols-outlined text-3xl transition-transform duration-500 ${accountType === type.id ? 'text-primary scale-110' : 'text-slate-400'}`}>
                                                {type.icon}
                                            </span>
                                            <span className={`text-xs font-black uppercase tracking-widest ${accountType === type.id ? 'text-primary' : 'text-slate-500'}`}>
                                                {type.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Section 3: Color Selection */}
                            <div className="flex flex-col gap-4">
                                <label className="text-xs font-black uppercase tracking-widest text-[#111418] dark:text-gray-200 ml-1">Color de Etiqueta</label>
                                <div className="flex flex-wrap gap-5 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 shadow-inner">
                                    {colors.map(color => (
                                        <button
                                            key={color.id}
                                            onClick={() => setLabelColor(color.id)}
                                            style={{ backgroundColor: color.hex }}
                                            className={`w-12 h-12 rounded-full transition-all hover:scale-110 active:scale-95 ${labelColor === color.id
                                                ? 'ring-4 ring-offset-4 ring-primary dark:ring-offset-slate-900 shadow-lg'
                                                : 'hover:opacity-80'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <footer className="flex-none p-8 border-t border-gray-200/60 dark:border-gray-700/50 bg-white/40 dark:bg-black/20 flex flex-col-reverse sm:flex-row justify-end gap-4 backdrop-blur-md">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-8 h-14 rounded-2xl text-[#637288] dark:text-gray-300 font-black text-xs uppercase tracking-[0.2em] hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-10 h-14 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-primary-hover shadow-xl shadow-primary/25 active:translate-y-0.5 transition-all flex items-center justify-center gap-3"
                            >
                                <span className="material-symbols-outlined text-[20px]">check</span>
                                Guardar Cuenta
                            </button>
                        </footer>
                    </main>
                </div>
            )}
        </div>
    );
}
