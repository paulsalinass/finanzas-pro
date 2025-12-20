"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { Transaction } from '@/types';

export default function Transactions() {
    const router = useRouter();
    const { transactions, totalBalance } = useFinance();
    const [search, setSearch] = useState('');
    const [activeType, setActiveType] = useState<'ALL' | 'INCOME' | 'EXPENSE'>('ALL');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // Categorías únicas de las transacciones para los filtros
    const categories = useMemo(() => {
        const cats = Array.from(new Set(transactions.map(t => t.category)));
        return cats.map(cat => ({
            name: cat,
            icon: transactions.find(t => t.category === cat)?.icon || 'category'
        }));
    }, [transactions]);

    // Lógica de filtrado
    const filtered = useMemo(() => {
        return transactions.filter(t => {
            const matchesSearch = t.description.toLowerCase().includes(search.toLowerCase()) ||
                t.category.toLowerCase().includes(search.toLowerCase());
            const matchesType = activeType === 'ALL' || t.type === activeType;
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(t.category);
            return matchesSearch && matchesType && matchesCategory;
        });
    }, [transactions, search, activeType, selectedCategories]);

    // Agrupación por fechas
    const groupedTransactions = useMemo(() => {
        const groups: { [key: string]: { date: string, items: Transaction[], total: number } } = {};

        filtered.forEach(t => {
            const dateKey = new Date(t.date).toLocaleDateString('es-ES', {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
            });

            if (!groups[dateKey]) {
                groups[dateKey] = { date: dateKey, items: [], total: 0 };
            }

            groups[dateKey].items.push(t);
            groups[dateKey].total += t.type === 'INCOME' ? t.amount : -t.amount;
        });

        return Object.values(groups);
    }, [filtered]);

    const toggleCategory = (cat: string) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Background decoration (blobs from user style) */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-purple-100/50 dark:bg-purple-900/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
            </div>

            <main className="flex-1 max-w-7xl mx-auto w-full p-4 lg:p-8 flex gap-8 overflow-hidden">
                {/* Internal Filter Sidebar */}
                <aside className="hidden lg:flex flex-col w-72 shrink-0 gap-6 h-full overflow-y-auto pr-2 scrollbar-hide">
                    <div className="glass-card p-6 rounded-2xl border border-white/40 dark:border-slate-800">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Total Disponible</p>
                        <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
                            ${totalBalance.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                        </h2>
                        <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50 flex justify-between items-center text-sm">
                            <span className="text-slate-500">Este mes</span>
                            <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full dark:bg-emerald-900/30">+ $2,120.50</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-slate-700 dark:text-slate-200">Filtros</h3>
                            <button
                                onClick={() => {
                                    setSearch('');
                                    setActiveType('ALL');
                                    setSelectedCategories([]);
                                }}
                                className="text-xs text-primary hover:underline font-medium"
                            >
                                Resetear
                            </button>
                        </div>

                        <div className="glass-card p-4 rounded-xl space-y-3 border border-white/40 dark:border-slate-800">
                            <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Período</label>
                            <div className="relative">
                                <select className="w-full bg-white/50 dark:bg-slate-800/50 border-0 ring-1 ring-slate-200 dark:ring-slate-700 rounded-lg py-2.5 pl-3 pr-10 text-sm font-medium text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none cursor-pointer">
                                    <option>Octubre 2024</option>
                                    <option>Septiembre 2024</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-lg">calendar_month</span>
                            </div>
                        </div>

                        <div className="glass-card p-4 rounded-xl space-y-4 border border-white/40 dark:border-slate-800">
                            <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Categorías</label>
                            <div className="space-y-1">
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.length === 0}
                                        onChange={() => setSelectedCategories([])}
                                        className="rounded border-slate-300 text-primary focus:ring-primary bg-transparent"
                                    />
                                    <span className="text-sm text-slate-600 dark:text-slate-300 font-medium group-hover:text-primary">Todas</span>
                                </label>
                                {categories.map(cat => (
                                    <label key={cat.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(cat.name)}
                                            onChange={() => toggleCategory(cat.name)}
                                            className="rounded border-slate-300 text-primary focus:ring-primary bg-transparent"
                                        />
                                        <div className="size-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[14px]">{cat.icon}</span>
                                        </div>
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{cat.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Transactions List */}
                <div className="flex-1 flex flex-col h-full overflow-hidden">
                    <div className="mb-8 shrink-0 animate-fade-in">
                        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Transacciones</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Gestiona tus movimientos con claridad.</p>
                            </div>
                            <button
                                onClick={() => router.push('/edit-transaction')}
                                className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-primary/30 flex items-center gap-2 transition-all active:scale-95"
                            >
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                <span>Nueva</span>
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full glass-card pl-11 pr-4 py-3 rounded-xl border-transparent focus:border-primary focus:ring-0 text-sm font-medium placeholder:text-slate-400 text-slate-700 dark:text-white transition-all"
                                    placeholder="Buscar transacción..."
                                    type="text"
                                />
                            </div>
                            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                                <button
                                    onClick={() => setActiveType('ALL')}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeType === 'ALL' ? 'bg-slate-800 dark:bg-slate-700 text-white shadow-md' : 'glass-card text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'}`}
                                >
                                    Todo
                                </button>
                                <button
                                    onClick={() => setActiveType('INCOME')}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeType === 'INCOME' ? 'bg-slate-800 dark:bg-slate-700 text-white shadow-md' : 'glass-card text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'}`}
                                >
                                    Ingresos
                                </button>
                                <button
                                    onClick={() => setActiveType('EXPENSE')}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeType === 'EXPENSE' ? 'bg-slate-800 dark:bg-slate-700 text-white shadow-md' : 'glass-card text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'}`}
                                >
                                    Gastos
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 pb-20 space-y-8 scrollbar-hide animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        {groupedTransactions.map((group, gIdx) => (
                            <div key={group.date}>
                                <div className="sticky top-0 z-10 py-3 bg-[#f2f6fa]/95 dark:bg-[#020617]/95 backdrop-blur-md flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 mb-3">
                                    <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest capitalize">{group.date}</h3>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded ${group.total >= 0 ? 'bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-rose-100/50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'}`}>
                                        {group.total >= 0 ? '+' : '-'}${Math.abs(group.total).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {group.items.map((t) => (
                                        <div
                                            key={t.id}
                                            onClick={() => router.push(`/transaction/${t.id}`)}
                                            className="group glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-white/90 dark:hover:bg-slate-800/80 hover:-translate-y-0.5 transition-all duration-200 border border-white/40 dark:border-slate-800"
                                        >
                                            <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors ${t.type === 'INCOME'
                                                ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 border-emerald-100 dark:border-emerald-500/10'
                                                : 'bg-orange-50 dark:bg-orange-900/20 text-orange-500 border-orange-100 dark:border-orange-500/10'
                                                }`}>
                                                <span className="material-symbols-outlined">{t.icon}</span>
                                            </div>
                                            <div className="flex-1 min-w-0 grid grid-cols-[1fr_auto] gap-x-4 gap-y-1">
                                                <p className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">{t.description}</p>
                                                <p className={`text-sm font-bold text-right ${t.type === 'INCOME' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                                    {t.type === 'EXPENSE' ? '-' : '+'}${t.amount.toFixed(2)}
                                                </p>
                                                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 truncate">
                                                    <span>{t.account}</span>
                                                    <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                                                    <span>{t.category}</span>
                                                </div>
                                                <p className="text-xs font-medium text-slate-400 text-right">
                                                    {new Date(t.date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {groupedTransactions.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 opacity-50">
                                <span className="material-symbols-outlined text-6xl mb-4">history_toggle_off</span>
                                <p className="text-sm text-slate-400">No se encontraron transacciones en este período.</p>
                            </div>
                        )}

                        {groupedTransactions.length > 0 && (
                            <div className="py-8 text-center">
                                <p className="text-sm text-slate-400 dark:text-slate-600">No hay más transacciones</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
