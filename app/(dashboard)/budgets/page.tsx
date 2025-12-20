"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { Budget } from '@/types';

export default function Budgets() {
    const router = useRouter();
    const { budgets } = useFinance();
    const [filter, setFilter] = useState<'all' | 'danger' | 'exceeded' | 'healthy'>('all');
    const [sortBy, setSortBy] = useState('amount_desc');

    // Calcular métricas globales
    const totalPlanned = useMemo(() => budgets.reduce((sum, b) => sum + b.limit, 0), [budgets]);
    const totalSpent = useMemo(() => budgets.reduce((sum, b) => sum + b.spent, 0), [budgets]);
    const totalAvailable = totalPlanned - totalSpent;
    const availablePercent = totalPlanned > 0 ? (totalAvailable / totalPlanned) * 100 : 0;

    // Categorías cerca del límite (alertas)
    const alertsCount = useMemo(() => budgets.filter(b => (b.spent / b.limit) >= 0.9 && (b.spent / b.limit) < 1).length, [budgets]);

    // Lógica de filtrado y ordenación
    const filteredBudgets = useMemo(() => {
        let result = budgets.filter(b => {
            const ratio = b.spent / b.limit;
            if (filter === 'danger') return ratio >= 0.9 && ratio < 1;
            if (filter === 'exceeded') return ratio >= 1;
            if (filter === 'healthy') return ratio < 0.9;
            return true;
        });

        return result.sort((a, b) => {
            if (sortBy === 'amount_desc') return b.limit - a.limit;
            if (sortBy === 'amount_asc') return a.limit - b.limit;
            if (sortBy === 'name') return a.category.localeCompare(b.category);
            return 0;
        });
    }, [budgets, filter, sortBy]);

    const getStatusInfo = (spent: number, limit: number) => {
        const ratio = spent / limit;
        if (ratio >= 1) return { label: 'Excedido', colorClass: 'text-danger', bgClass: 'bg-red-50 dark:bg-red-900/20', borderClass: 'border-l-danger', barClass: 'bg-danger' };
        if (ratio >= 0.9) return { label: 'Cuidado', colorClass: 'text-warning', bgClass: 'bg-orange-50 dark:bg-orange-900/20', borderClass: 'border-l-warning', barClass: 'bg-warning' };
        return { label: 'Normal', colorClass: 'text-primary', bgClass: 'bg-blue-50 dark:bg-blue-900/20', borderClass: 'border-l-primary', barClass: 'bg-primary' };
    };

    const getIcon = (category: string) => {
        const cat = category.toLowerCase();
        if (cat.includes('super')) return 'shopping_cart';
        if (cat.includes('transporte')) return 'directions_bus';
        if (cat.includes('entretenimiento')) return 'local_activity';
        if (cat.includes('ropa')) return 'checkroom';
        if (cat.includes('restaurante')) return 'restaurant';
        if (cat.includes('mascota')) return 'pets';
        return 'payments';
    };

    return (
        <div className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden relative scrollbar-hide pb-24">
            {/* Background Decor */}
            <div className="fixed inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-10">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto max-w-[1200px] p-6 lg:p-10 flex flex-col gap-8">
                {/* Page Header */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-[#111418] dark:text-white">Presupuestos</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-lg font-normal">Planificación de Octubre 2024</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <div className="relative min-w-[200px]">
                            <select className="appearance-none w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-text-main dark:text-gray-200 py-3 pl-4 pr-10 rounded-xl leading-tight focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm cursor-pointer font-medium text-sm h-12">
                                <option>Libro Personal</option>
                                <option>Libro Familiar</option>
                                <option>Negocio</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </div>
                        </div>
                        <button className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 h-12">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span className="text-sm">Nuevo Presupuesto</span>
                        </button>
                    </div>
                </header>

                {/* Summary Stats */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="glass-panel rounded-2xl p-6 flex flex-col gap-3 shadow-glass group hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                                <span className="material-symbols-outlined">assignment</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Planeado</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-[#111418] dark:text-white tracking-tight">${totalPlanned.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                            <p className="text-sm text-gray-500 mt-1">Suma de todas las categorías</p>
                        </div>
                    </div>

                    <div className="glass-panel rounded-2xl p-6 flex flex-col gap-3 shadow-glass group hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg text-emerald-600">
                                <span className="material-symbols-outlined">savings</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Disponible</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-[#111418] dark:text-white tracking-tight">${totalAvailable.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                            <p className="text-sm text-emerald-600 mt-1 font-medium flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                {availablePercent.toFixed(0)}% Restante del mes
                            </p>
                        </div>
                    </div>

                    <div className="glass-panel rounded-2xl p-6 flex flex-col gap-3 shadow-glass group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-20 h-20 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-2xl"></div>
                        <div className="flex items-center justify-between relative z-10">
                            <div className="p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg text-orange-500">
                                <span className="material-symbols-outlined">notifications_active</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Alertas</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-[#111418] dark:text-white tracking-tight">{alertsCount}</h3>
                            <p className="text-sm text-gray-500 mt-1">Categorías cerca del límite</p>
                        </div>
                    </div>
                </section>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 animate-fade-in" style={{ animationDelay: '0.15s' }}>
                    <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
                        {[
                            { id: 'all', label: 'Todos' },
                            { id: 'danger', label: 'En Peligro' },
                            { id: 'exceeded', label: 'Excedidos' },
                            { id: 'healthy', label: 'Saludables' }
                        ].map(btn => (
                            <button
                                key={btn.id}
                                onClick={() => setFilter(btn.id as any)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${filter === btn.id
                                    ? 'bg-[#111418] text-white shadow-md'
                                    : 'glass-panel text-gray-600 dark:text-gray-300 hover:bg-white hover:text-primary'
                                    }`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto text-gray-500 text-sm">
                        <span className="hidden sm:inline">Ordenar por:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-transparent font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer border-none p-0"
                        >
                            <option value="amount_desc">Mayor monto</option>
                            <option value="amount_asc">Menor monto</option>
                            <option value="name">Nombre</option>
                        </select>
                    </div>
                </div>

                {/* Budgets Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {filteredBudgets.map((budget) => {
                        const percentage = Math.min((budget.spent / budget.limit) * 100, 100);
                        const status = getStatusInfo(budget.spent, budget.limit);
                        const remaining = budget.limit - budget.spent;

                        return (
                            <div
                                key={budget.id}
                                onClick={() => router.push(`/budget/${budget.id}`)}
                                className={`glass-panel rounded-2xl p-5 shadow-glass hover:shadow-xl transition-all duration-300 group cursor-pointer border-l-4 border-l-transparent hover:${status.borderClass}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`size-10 rounded-full flex items-center justify-center ${status.bgClass} ${status.colorClass}`}>
                                            <span className="material-symbols-outlined">{getIcon(budget.category)}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">{budget.category}</h4>
                                            <span className="text-xs text-gray-500">Mensual</span>
                                        </div>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${status.bgClass} ${status.colorClass}`}>
                                        {status.label}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">${budget.spent.toLocaleString()}</span>
                                        <span className="text-sm font-medium text-gray-500 mb-1">de ${budget.limit.toLocaleString()}</span>
                                    </div>
                                    <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative">
                                        {/* Background faint bar for exceeded state */}
                                        {percentage >= 100 && <div className="absolute inset-0 bg-red-400 opacity-20"></div>}
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ease-out ${status.barClass}`}
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>{percentage.toFixed(0)}% gastado</span>
                                        <span className={`font-medium ${remaining < 0 ? 'text-danger' : remaining < (budget.limit * 0.1) ? 'text-orange-500' : ''}`}>
                                            {remaining < 0 ? `+$${Math.abs(remaining)} sobre límite` : `$${remaining} restante`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Add New Placeholder Card */}
                    <div className="w-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-primary hover:border-primary hover:bg-white/50 dark:hover:bg-slate-800/20 transition-all cursor-pointer group min-h-[160px]">
                        <div className="size-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-3xl">add</span>
                        </div>
                        <p className="font-medium">Crear nuevo presupuesto</p>
                    </div>
                </section>

                {filteredBudgets.length === 0 && (
                    <div className="py-20 text-center opacity-40">
                        <span className="material-symbols-outlined text-6xl mb-4">search_off</span>
                        <p className="font-medium">No se encontraron presupuestos con este filtro.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
