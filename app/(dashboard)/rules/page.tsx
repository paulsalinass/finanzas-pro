"use client";

import React, { useState, useMemo } from 'react';
import { useFinance } from '@/context/FinanceContext';
import { RecurringRule, TransactionType } from '@/types';

export default function Rules() {
    const { recurringRules, toggleRuleStatus } = useFinance();
    const [filter, setFilter] = useState<'ALL' | 'INCOME' | 'EXPENSE' | 'TRANSFER'>('ALL');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ruleType, setRuleType] = useState<TransactionType>('EXPENSE');
    const [ruleName, setRuleName] = useState('Netflix Premium');
    const [amount, setAmount] = useState('15.00');
    const [freqNumber, setFreqNumber] = useState('1');
    const [freqUnit, setFreqUnit] = useState('Meses');
    const [nextOccurrence, setNextOccurrence] = useState('2023-10-01');
    const [selectedAccount, setSelectedAccount] = useState('Chase Sapphire');
    const [selectedCategory, setSelectedCategory] = useState('Entretenimiento');

    const stats = useMemo(() => {
        const totalMonthly = recurringRules
            .filter(r => r.active && r.type === 'EXPENSE')
            .reduce((sum, r) => sum + r.amount, 0);
        const activeCount = recurringRules.filter(r => r.active).length;
        const nextCharge = recurringRules.find(r => r.active && r.name === 'Suscripción Spotify') || recurringRules[0];

        return { totalMonthly, activeCount, nextCharge };
    }, [recurringRules]);

    const filteredRules = useMemo(() => {
        if (filter === 'ALL') return recurringRules;
        return recurringRules.filter(r => r.type === filter);
    }, [recurringRules, filter]);

    return (
        <div className="flex-1 w-full h-full overflow-y-auto scrollbar-hide relative pb-24">
            {/* Mesh Background blobs */}
            <div className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-10 -z-10">
                <div className="absolute top-0 left-[20%] w-[30vw] h-[30vh] bg-blue-400/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-[20%] w-[30vw] h-[30vh] bg-purple-400/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-[1024px] mx-auto p-6 md:p-10 flex flex-col gap-8 animate-fade-in">
                {/* Page Heading & Actions */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight uppercase">Reglas Recurrentes</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-medium max-w-xl">
                            Automatiza tus movimientos habituales. Simplifica tu gestión financiera sin perder el control.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group flex items-center justify-center gap-3 rounded-2xl h-12 px-6 bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20 transition-all active:scale-95 font-black uppercase text-xs tracking-widest"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-500">add_circle</span>
                        <span>Nueva Regla</span>
                    </button>
                </div>

                {/* Stats Overview */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="glass-card p-6 rounded-3xl flex flex-col gap-2 relative overflow-hidden group border border-white/60 dark:border-slate-800">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 z-10 font-black uppercase text-[10px] tracking-widest">
                            <span className="material-symbols-outlined text-lg text-primary">calendar_month</span>
                            <p>Total Mensual</p>
                        </div>
                        <p className="text-slate-900 dark:text-white text-3xl font-black tracking-tighter z-10">${stats.totalMonthly.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                    </div>

                    <div className="glass-card p-6 rounded-3xl flex flex-col gap-2 relative overflow-hidden group border border-white/60 dark:border-slate-800">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 z-10 font-black uppercase text-[10px] tracking-widest">
                            <span className="material-symbols-outlined text-lg text-purple-500">upcoming</span>
                            <p>Próximo Cargo</p>
                        </div>
                        <div className="z-10">
                            <p className="text-slate-900 dark:text-white text-xl font-black truncate tracking-tight">{stats.nextCharge?.name || 'Sin cobros'}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{stats.nextCharge?.nextDate || '---'}</p>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-3xl flex flex-col gap-2 relative overflow-hidden group border border-white/60 dark:border-slate-800">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-100 dark:bg-green-900/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 z-10 font-black uppercase text-[10px] tracking-widest">
                            <span className="material-symbols-outlined text-lg text-success">sync_saved_locally</span>
                            <p>Reglas Activas</p>
                        </div>
                        <p className="text-slate-900 dark:text-white text-3xl font-black tracking-tighter z-10">{stats.activeCount}</p>
                    </div>
                </section>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 pb-4 border-b border-gray-200/50 dark:border-slate-800">
                    {[
                        { id: 'ALL', label: 'Todos' },
                        { id: 'INCOME', label: 'Ingresos' },
                        { id: 'EXPENSE', label: 'Gastos' },
                        { id: 'TRANSFER', label: 'Transferencias' }
                    ].map(btn => (
                        <button
                            key={btn.id}
                            onClick={() => setFilter(btn.id as any)}
                            className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === btn.id
                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                : 'glass-card text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
                                }`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Rules List Cards */}
                <div className="flex flex-col gap-4">
                    {filteredRules.map((rule) => (
                        <div
                            key={rule.id}
                            className={`glass-card rounded-[2rem] p-5 flex flex-col md:flex-row items-start md:items-center gap-6 border border-white/60 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group ${!rule.active && 'opacity-60 grayscale-[40%]'}`}
                        >
                            <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
                                <div className={`flex-shrink-0 size-14 rounded-2xl flex items-center justify-center shadow-inner ${rule.type === 'INCOME'
                                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600'
                                    : rule.category === 'Salud' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-500' : 'bg-orange-50 dark:bg-orange-900/20 text-orange-600'
                                    }`}>
                                    <span className="material-symbols-outlined text-[28px]">{rule.icon}</span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <p className="text-slate-900 dark:text-white text-base font-black tracking-tight truncate">{rule.name}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 bg-gray-50 dark:bg-slate-800 px-2 py-0.5 rounded uppercase tracking-widest">{rule.category}</span>
                                        <span className="text-slate-300">•</span>
                                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider truncate">{rule.account}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-auto md:flex-1">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Monto</span>
                                    <span className={`font-black text-lg tracking-tighter ${rule.type === 'INCOME' ? 'text-success' : 'text-slate-900 dark:text-white'}`}>
                                        {rule.type === 'EXPENSE' ? '-' : '+'}${rule.amount.toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Frecuencia</span>
                                    <span className="text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider">{rule.frequency}</span>
                                </div>
                                <div className="hidden md:flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Próximo</span>
                                    <span className={`font-black text-xs uppercase tracking-widest flex items-center gap-1.5 ${rule.nextDate.includes('Oct') && rule.active ? 'text-orange-600' : 'text-slate-500'}`}>
                                        {rule.nextDate}
                                        {rule.nextDate.includes('Oct') && rule.active && <span className="material-symbols-outlined text-[14px]">warning</span>}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full md:w-auto gap-6 border-t md:border-t-0 border-gray-100 dark:border-slate-800 pt-4 md:pt-0">
                                <div className="md:hidden flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Próximo</span>
                                    <span className="text-slate-900 dark:text-white font-black text-xs">{rule.nextDate}</span>
                                </div>
                                <div className="flex items-center gap-4 ml-auto">
                                    {/* Custom Toggle Switch */}
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={rule.active}
                                            onChange={() => toggleRuleStatus(rule.id)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                    </label>
                                    <div className="h-8 w-[1px] bg-gray-100 dark:bg-slate-800 hidden md:block"></div>
                                    <button className="text-slate-400 hover:text-primary transition-colors p-2 rounded-xl hover:bg-primary/10">
                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button className="text-slate-400 hover:text-danger transition-colors p-2 rounded-xl hover:bg-danger/10">
                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Mostrando {filteredRules.length} de {recurringRules.length} reglas {filter !== 'ALL' ? 'filtradas' : 'activas'}</p>
                </div>
            </div>

            {/* EDIT RECURRING RULE MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-md animate-fade-in transition-all">
                    <div className="relative w-full max-w-[800px] flex flex-col glass-card border border-white/60 dark:border-white/10 shadow-premium rounded-3xl max-h-[90vh] overflow-hidden animate-slide-up">
                        {/* Header */}
                        <div className="flex items-start justify-between p-8 border-b border-[#dce0e5]/50 dark:border-gray-700/50 pb-6">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl font-black tracking-tight text-[#111418] dark:text-white uppercase tracking-widest">Editar Regla Recurrente</h1>
                                <p className="text-[#637288] dark:text-gray-400 text-sm font-medium">Configura los detalles de tus transacciones automáticas.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all text-[#637288] dark:text-gray-400 group"
                            >
                                <span className="material-symbols-outlined block group-hover:rotate-90 transition-transform duration-300" style={{ fontSize: '24px' }}>close</span>
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-8 sm:px-10 space-y-10 scrollbar-hide">
                            {/* Section 1: Type & Main Info */}
                            <div className="flex flex-col gap-8">
                                {/* Transaction Type Toggle */}
                                <div className="flex justify-center">
                                    <div className="flex h-14 w-full max-w-sm items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 p-1.5">
                                        <button
                                            onClick={() => setRuleType('INCOME')}
                                            className={`flex-1 h-full rounded-xl text-sm font-black uppercase tracking-widest transition-all ${ruleType === 'INCOME' ? 'bg-white dark:bg-primary shadow-lg text-primary dark:text-white' : 'text-slate-500'}`}
                                        >
                                            Ingreso
                                        </button>
                                        <button
                                            onClick={() => setRuleType('EXPENSE')}
                                            className={`flex-1 h-full rounded-xl text-sm font-black uppercase tracking-widest transition-all ${ruleType === 'EXPENSE' ? 'bg-white dark:bg-primary shadow-lg text-primary dark:text-white' : 'text-slate-500'}`}
                                        >
                                            Gasto
                                        </button>
                                    </div>
                                </div>

                                {/* Concept & Amount Row */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                    {/* Concept Input */}
                                    <div className="md:col-span-7 flex flex-col gap-3">
                                        <label className="text-[#111418] dark:text-gray-200 text-xs font-black uppercase tracking-widest ml-1">Nombre de la Regla</label>
                                        <input
                                            value={ruleName}
                                            onChange={(e) => setRuleName(e.target.value)}
                                            className="flex w-full rounded-2xl text-[#111418] dark:text-white focus:outline-0 focus:ring-4 focus:ring-primary/10 border border-[#dce0e5] dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 focus:border-primary h-14 placeholder:text-[#9ca3af] px-6 text-base font-bold transition-all shadow-sm"
                                            placeholder="Ej. Suscripción Netflix"
                                            type="text"
                                        />
                                    </div>
                                    {/* Amount Input */}
                                    <div className="md:col-span-5 flex flex-col gap-3">
                                        <label className="text-[#111418] dark:text-gray-200 text-xs font-black uppercase tracking-widest ml-1">Monto</label>
                                        <div className="relative flex w-full items-center">
                                            <span className="absolute left-5 text-slate-400 font-black text-lg">$</span>
                                            <input
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="flex w-full rounded-2xl text-[#111418] dark:text-white focus:outline-0 focus:ring-4 focus:ring-primary/10 border border-[#dce0e5] dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 focus:border-primary h-14 placeholder:text-[#9ca3af] pl-11 pr-6 text-xl font-black leading-normal transition-all shadow-sm"
                                                placeholder="0.00"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Frequency */}
                            <div className="flex flex-col gap-6">
                                <h3 className="text-[#111418] dark:text-white text-lg font-black uppercase tracking-widest ml-1">Frecuencia</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Frequency Setup */}
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[#111418] dark:text-gray-200 text-xs font-black uppercase tracking-widest ml-1">Repetir cada</label>
                                        <div className="flex gap-4">
                                            <input
                                                value={freqNumber}
                                                onChange={(e) => setFreqNumber(e.target.value)}
                                                className="w-24 rounded-2xl border border-[#dce0e5] dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-center font-black text-[#111418] dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 text-lg shadow-sm"
                                                type="number"
                                            />
                                            <div className="relative flex-1">
                                                <select
                                                    value={freqUnit}
                                                    onChange={(e) => setFreqUnit(e.target.value)}
                                                    className="w-full appearance-none rounded-2xl border border-[#dce0e5] dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-6 pr-12 text-base font-bold text-[#111418] dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 shadow-sm"
                                                >
                                                    <option>Días</option>
                                                    <option>Semanas</option>
                                                    <option>Meses</option>
                                                    <option>Años</option>
                                                </select>
                                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#637288] dark:text-gray-400 material-symbols-outlined">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Date */}
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[#111418] dark:text-gray-200 text-xs font-black uppercase tracking-widest ml-1">Próxima ocurrencia</label>
                                        <div className="relative">
                                            <input
                                                value={nextOccurrence}
                                                onChange={(e) => setNextOccurrence(e.target.value)}
                                                className="w-full rounded-2xl border border-[#dce0e5] dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-6 text-base font-bold text-[#111418] dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 shadow-sm"
                                                type="date"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* End Date Optional */}
                                <div className="flex items-center gap-3 pt-2 ml-1">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                        <span className="ms-3 text-sm font-bold text-[#111418] dark:text-gray-200 uppercase tracking-widest">Terminar después de una fecha</span>
                                    </label>
                                </div>
                            </div>

                            {/* Section 3: Classification */}
                            <div className="flex flex-col gap-6">
                                <h3 className="text-[#111418] dark:text-white text-lg font-black uppercase tracking-widest ml-1">Clasificación</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Account Select */}
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[#111418] dark:text-gray-200 text-xs font-black uppercase tracking-widest ml-1">Cuenta</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center size-8 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary">
                                                <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                                            </div>
                                            <select
                                                value={selectedAccount}
                                                onChange={(e) => setSelectedAccount(e.target.value)}
                                                className="w-full appearance-none rounded-2xl border border-[#dce0e5] dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 pl-14 pr-12 text-base font-bold text-[#111418] dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 shadow-sm"
                                            >
                                                <option>Chase Sapphire</option>
                                                <option>Bank of America</option>
                                                <option>Efectivo</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#637288] dark:text-gray-400 material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>
                                    {/* Category Select */}
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[#111418] dark:text-gray-200 text-xs font-black uppercase tracking-widest ml-1">Categoría</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center size-8 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600">
                                                <span className="material-symbols-outlined text-[20px]">movie</span>
                                            </div>
                                            <select
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="w-full appearance-none rounded-2xl border border-[#dce0e5] dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 pl-14 pr-12 text-base font-bold text-[#111418] dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 h-14 shadow-sm"
                                            >
                                                <option>Entretenimiento</option>
                                                <option>Servicios</option>
                                                <option>Comida</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#637288] dark:text-gray-400 material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Natural Language Preview */}
                            <div className="rounded-[2rem] bg-primary/5 dark:bg-blue-900/20 p-6 border border-primary/20 animate-fade-in">
                                <div className="flex items-start gap-4">
                                    <div className="size-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">info</span>
                                    </div>
                                    <p className="text-sm text-[#111418] dark:text-blue-100 leading-relaxed font-medium">
                                        Resumen: Se registrará un <span className="font-black text-primary uppercase text-xs tracking-widest">{ruleType === 'EXPENSE' ? 'Gasto' : 'Ingreso'}</span> de <span className="font-black text-slate-900 dark:text-white">${amount || '0.00'}</span> para <span className="font-black text-slate-900 dark:text-white">{ruleName || 'Sin nombre'}</span> cada <span className="font-black text-slate-900 dark:text-white">{freqNumber} {freqUnit.toLowerCase()}</span>, comenzando el <span className="font-black text-slate-900 dark:text-white">{nextOccurrence}</span> en la cuenta <span className="font-black text-slate-900 dark:text-white">{selectedAccount}</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="flex items-center justify-end gap-4 p-8 border-t border-[#dce0e5]/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="flex h-12 min-w-[120px] items-center justify-center rounded-2xl px-6 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                            >
                                <span>Cancelar</span>
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="flex h-12 min-w-[160px] items-center justify-center rounded-2xl bg-primary hover:bg-primary-hover text-white shadow-xl shadow-primary/25 px-8 text-xs font-black uppercase tracking-[0.15em] transition-all active:scale-95 active:translate-y-0.5"
                            >
                                <span>Guardar Regla</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
