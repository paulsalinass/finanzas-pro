"use client";

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useFinance } from '@/context/FinanceContext';

const FLOW_DATA = [
    { name: 'Ene', ingresos: 4000, gastos: 3200 },
    { name: 'Feb', ingresos: 4200, gastos: 3100 },
    { name: 'Mar', ingresos: 4100, gastos: 3400 },
    { name: 'Abr', ingresos: 4500, gastos: 3200 },
    { name: 'May', ingresos: 4300, gastos: 3500 },
    { name: 'Jun', ingresos: 4800, gastos: 3400 },
];

const CATEGORY_BREAKDOWN = [
    { name: 'Vivienda', percentage: 45, amount: 1440, color: '#6366f1' },
    { name: 'Comida y Super', percentage: 25, amount: 800, color: '#38bdf8' },
    { name: 'Transporte', percentage: 15, amount: 480, color: '#fb923c' },
    { name: 'Ocio', percentage: 10, amount: 320, color: '#34d399' },
];

export default function Reports() {
    const { transactions } = useFinance();
    const [period, setPeriod] = useState('Este mes');

    const totalIncome = 4500;
    const totalExpenses = 3200;
    const netSavings = totalIncome - totalExpenses;
    const savingsRate = ((netSavings / totalIncome) * 100).toFixed(0);

    return (
        <div className="flex-1 flex flex-col h-full overflow-y-auto relative z-10 scrollbar-hide pb-24">
            {/* Decorative background blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto max-w-[1200px] p-6 lg:p-10 flex flex-col gap-8">
                {/* Page Header */}
                <header className="flex flex-wrap justify-between items-end gap-6 animate-fade-in">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-black tracking-tight">Reportes Financieros</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal max-w-lg">Visualiza el estado de tus finanzas con claridad y calma. Sin ansiedad, solo datos.</p>
                    </div>

                    <div className="glass-card rounded-full p-1.5 flex flex-wrap gap-1 shadow-sm border border-white/40 dark:border-slate-800">
                        {['Este mes', 'Últimos 3 meses', 'Este año'].map((p) => (
                            <button
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-semibold ${period === p
                                    ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm ring-1 ring-black/5'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800 hover:text-primary'
                                    }`}
                            >
                                {p === 'Este mes' && <span className="material-symbols-outlined text-[18px]">calendar_today</span>}
                                <span>{p}</span>
                            </button>
                        ))}
                        <button aria-label="Custom Date" className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/50 dark:hover:bg-slate-800 text-slate-500 hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-[20px]">edit_calendar</span>
                        </button>
                    </div>
                </header>

                {/* Key Metrics Stats */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {/* Income Card */}
                    <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300 border border-white/40 dark:border-slate-800">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <span className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">Ingresos Totales</span>
                                <span className="text-slate-900 dark:text-white text-3xl font-black tracking-tighter">${totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                            </div>
                            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                                <span className="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold">
                            <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-md">+12%</span>
                            <span className="text-slate-400">vs mes anterior</span>
                        </div>
                    </div>

                    {/* Expenses Card */}
                    <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300 border border-white/40 dark:border-slate-800">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <span className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">Gastos Totales</span>
                                <span className="text-slate-900 dark:text-white text-3xl font-black tracking-tighter">${totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                            </div>
                            <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center">
                                <span className="material-symbols-outlined">trending_down</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold">
                            <span className="bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400 px-2 py-0.5 rounded-md">-5%</span>
                            <span className="text-slate-400">vs mes anterior</span>
                        </div>
                    </div>

                    {/* Net Savings Card */}
                    <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-white/40 dark:border-slate-800">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                        <div className="flex justify-between items-start relative z-10">
                            <div className="flex flex-col gap-1">
                                <span className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">Ahorro Neto</span>
                                <span className="text-primary dark:text-blue-400 text-3xl font-black tracking-tighter">${netSavings.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                            </div>
                            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined">savings</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold relative z-10">
                            <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-md">+{savingsRate}%</span>
                            <span className="text-slate-400">tasa de ahorro</span>
                        </div>
                    </div>
                </section>

                {/* Charts Section */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* Main Trend Chart */}
                    <div className="lg:col-span-2 glass-card p-6 lg:p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[450px] border border-white/40 dark:border-slate-800 shadow-soft">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-xl font-black tracking-tight">Flujo de Dinero</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Ingresos vs Gastos (Últimos 6 meses)</p>
                            </div>
                            <button className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>

                        <div className="flex-1 w-full relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={FLOW_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" strokeOpacity={0.3} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                        itemStyle={{ fontWeight: 'bold' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="ingresos"
                                        stroke="#10B981"
                                        strokeWidth={4}
                                        fillOpacity={1}
                                        fill="url(#incomeGradient)"
                                        className="chart-glow"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="gastos"
                                        stroke="#f59e0b"
                                        strokeWidth={4}
                                        fill="transparent"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Category Breakdown */}
                    <div className="glass-card p-8 rounded-[2.5rem] flex flex-col gap-8 border border-white/40 dark:border-slate-800 shadow-soft">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-xl font-black tracking-tight">Gastos por Categoría</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">¿En qué se fue el dinero?</p>
                            </div>
                            <button className="text-primary font-bold text-sm hover:underline">Ver todo</button>
                        </div>

                        <div className="flex flex-col gap-6 flex-1 justify-center">
                            {CATEGORY_BREAKDOWN.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-2">
                                    <div className="flex justify-between text-sm items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="size-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                                            <span className="text-slate-700 dark:text-slate-300 font-bold">{item.name}</span>
                                        </div>
                                        <span className="text-slate-900 dark:text-white font-black">{item.percentage}%</span>
                                    </div>
                                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                                        ></div>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 text-right uppercase tracking-widest">${item.amount.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Insights Section */}
                <section className="glass-card p-6 rounded-[2rem] border-l-[6px] border-primary flex flex-col md:flex-row gap-5 items-center animate-fade-in shadow-soft" style={{ animationDelay: '0.3s' }}>
                    <div className="size-14 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary shadow-inner">
                        <span className="material-symbols-outlined text-3xl">lightbulb</span>
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <h4 className="text-slate-900 dark:text-white font-black text-lg tracking-tight">Insight del Mes</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-1">
                            Has reducido tus gastos en comida un <span className="font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">10%</span> comparado con el promedio de los últimos 3 meses. ¡Buen trabajo manteniendo el presupuesto!
                        </p>
                    </div>
                    <button className="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">Ignorar</button>
                </section>

                {/* Recent Transactions Mini-Table */}
                <section className="glass-card rounded-[2.5rem] overflow-hidden border border-white/40 dark:border-slate-800 animate-fade-in shadow-soft" style={{ animationDelay: '0.4s' }}>
                    <div className="px-8 py-6 border-b border-white/50 dark:border-slate-800 flex flex-wrap justify-between items-center bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm gap-4">
                        <h3 className="font-black text-slate-800 dark:text-white uppercase text-[12px] tracking-[0.2em]">Movimientos Relevantes</h3>
                        <button className="text-xs font-black text-primary hover:text-primary/80 uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-xl transition-all">Ver Reporte Detallado</button>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <table className="w-full text-sm text-left text-slate-600 dark:text-slate-400">
                            <thead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50/50 dark:bg-slate-800/50">
                                <tr>
                                    <th className="px-8 py-4" scope="col">Fecha</th>
                                    <th className="px-8 py-4" scope="col">Concepto</th>
                                    <th className="px-8 py-4" scope="col">Categoría</th>
                                    <th className="px-8 py-4 text-right" scope="col">Monto</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/50 dark:divide-slate-800">
                                {[
                                    { date: '24 Oct, 2024', label: 'Supermercado Walmart', cat: 'Comida', amount: -125.50, color: 'sky' },
                                    { date: '23 Oct, 2024', label: 'Spotify Premium', cat: 'Suscripciones', amount: -9.99, color: 'purple' },
                                    { date: '20 Oct, 2024', label: 'Transferencia Nómina', cat: 'Ingresos', amount: 2250.00, color: 'emerald' },
                                ].map((item, i) => (
                                    <tr key={i} className="hover:bg-white/40 dark:hover:bg-slate-800/40 transition-colors group cursor-pointer">
                                        <td className="px-8 py-5 whitespace-nowrap font-bold text-slate-500 dark:text-slate-500">{item.date}</td>
                                        <td className="px-8 py-5 font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">{item.label}</td>
                                        <td className="px-8 py-5">
                                            <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${item.color === 'sky' ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400' :
                                                item.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                                                    'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                                                }`}>
                                                {item.cat}
                                            </span>
                                        </td>
                                        <td className={`px-8 py-5 text-right font-black text-base ${item.amount > 0 ? 'text-emerald-500' : 'text-slate-800 dark:text-white'}`}>
                                            {item.amount > 0 ? '+' : '-'}${Math.abs(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <footer className="mt-4 pb-12 text-center text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
                    <p>© 2024 FINANZAS CLARAS • REPORTE GENERADO CON IA</p>
                </footer>
            </div>
        </div>
    );
}
