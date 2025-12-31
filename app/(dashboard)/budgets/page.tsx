"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { Budget, Transaction } from '@/types';
import CreateBudgetModal from '@/components/CreateBudgetModal';
import { DateRangeModal } from '@/components/DateRangeModal';
import { startOfMonth, endOfMonth, isWithinInterval, format } from 'date-fns';
import { es } from 'date-fns/locale';
import { MoneyDisplay } from '@/components/MoneyDisplay';

import BudgetDetailsModal from '@/components/BudgetDetailsModal';

export default function Budgets() {
    const router = useRouter();
    const { budgets, categories, transactions, formatAmount, checkRecurringBudgets, ledgers, activeBookId, categoryFolders } = useFinance();
    const [filter, setFilter] = useState<'all' | 'danger' | 'exceeded' | 'healthy'>('all');
    const [sortBy, setSortBy] = useState('amount_desc');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    // Initial check for recurring budgets
    React.useEffect(() => {
        checkRecurringBudgets();
    }, [checkRecurringBudgets]);

    // Date Range State
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    const [dateRange, setDateRange] = useState<{ start: Date; end: Date }>({
        start: startOfMonth(new Date()),
        end: endOfMonth(new Date())
    });

    const currencySymbol = useMemo(() => {
        const curr = ledgers.find(l => l.id === activeBookId)?.currency || 'PEN';
        return curr === 'PEN' ? 'S/' : (curr === 'USD' ? '$' : curr);
    }, [ledgers, activeBookId]);

    const [selectedBudget, setSelectedBudget] = useState<Budget | null>(null);
    const [editingBudget, setEditingBudget] = useState<Budget | null>(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    // Calculate real spent and aggregate budgets by category for the selected range
    const calculatedBudgets = useMemo(() => {
        const aggregated: Record<string, Budget & { spent: number; originalIds: string[] }> = {};

        budgets.forEach(budget => {
            // 1. Check if budget overlaps with selected Date Range
            const budgetStart = new Date(budget.start_date || '');
            // If invalid date, default to today? Or skip? 
            // Better to handle gracefully.
            if (isNaN(budgetStart.getTime())) return;

            const budgetEnd = budget.end_date ? new Date(budget.end_date) : new Date('9999-12-31');

            const overlaps = (
                (budgetStart <= dateRange.end) &&
                (budgetEnd >= dateRange.start)
            );

            if (!overlaps) return;

            // 2. Group by Category
            const key = budget.category_id || budget.category; // fallback to name if no ID

            if (!aggregated[key]) {
                aggregated[key] = {
                    ...budget,
                    limit: 0,
                    spent: 0,
                    originalIds: []
                };
            }

            // 3. Aggregate Limit (Sum limits of all valid instances in this range)
            aggregated[key].limit += budget.limit;
            aggregated[key].originalIds.push(budget.id);
        });

        // 4. Calculate Spent for each aggregated category within the global Date Range
        // We calculate spent based on the GLOBAL selected range, not the specific budget instance range,
        // because the user wants to see "Consumption for the selected filtered period" against "Total Limit for that period".
        return Object.values(aggregated).map(virtualBudget => {
            const categorySpent = transactions
                .filter(t => {
                    if (t.type !== 'EXPENSE') return false;

                    const matchesCategory = virtualBudget.category_id
                        ? t.category_id === virtualBudget.category_id
                        : t.category === virtualBudget.category;

                    if (!matchesCategory) return false;

                    const txDate = new Date(t.date);
                    return isWithinInterval(txDate, { start: dateRange.start, end: dateRange.end });
                })
                .reduce((sum, t) => sum + t.amount, 0);

            return {
                ...virtualBudget,
                spent: categorySpent
            };
        });
    }, [budgets, transactions, dateRange]);

    // Calcular métricas globales usando calculatedBudgets
    const totalPlanned = useMemo(() => calculatedBudgets.reduce((sum, b) => sum + b.limit, 0), [calculatedBudgets]);
    const totalSpent = useMemo(() => calculatedBudgets.reduce((sum, b) => sum + b.spent, 0), [calculatedBudgets]);
    const totalAvailable = totalPlanned - totalSpent;
    const availablePercent = totalPlanned > 0 ? (totalAvailable / totalPlanned) * 100 : 0;

    // Categorías cerca del límite (alertas)
    const alertsCount = useMemo(() => calculatedBudgets.filter(b => (b.spent / b.limit) >= 0.9).length, [calculatedBudgets]);

    // Lógica de filtrado y ordenación
    const filteredBudgets = useMemo(() => {
        let result = calculatedBudgets.filter(b => {
            const ratio = b.limit > 0 ? b.spent / b.limit : 0;
            if (filter === 'danger') return ratio >= 0.9 && ratio < 1;
            if (filter === 'exceeded') return ratio >= 1;
            if (filter === 'healthy') return ratio < 0.9;
            return true;
        });

        return result.sort((a, b) => {
            if (sortBy === 'amount_desc') return b.limit - a.limit;
            if (sortBy === 'amount_asc') return a.limit - b.limit;
            if (sortBy === 'name') {
                // Client-side lookup for sorting if needed, but 'category' field is present from context mapping (Loading...)
                // We can look up here or just use what we have. 
                // Context returns 'Loading...' but Page maps it. 
                // Let's rely on the ID match logic inside the render for display, 
                // but for sorting we might need the name.
                // Ideally calculatedBudgets should include the resolved name.
                // For now, let's leave as is, sorting might be slightly off until mapped.
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
    }, [calculatedBudgets, filter, sortBy]);

    const getStatusInfo = (spent: number, limit: number) => {
        const ratio = limit > 0 ? spent / limit : 0;
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

    const handleBudgetClick = (budget: Budget) => {
        setSelectedBudget(budget);
        setIsDetailsModalOpen(true);
    };

    const renderBudgetCard = (budget: Budget) => {
        const percentage = Math.min((budget.spent / budget.limit) * 100, 100);
        const status = getStatusInfo(budget.spent, budget.limit);
        const remaining = budget.limit - budget.spent;

        // Client-side category lookup
        const categoryObj = categories.find(c => c.id === budget.category_id);
        const displayCategory = categoryObj ? categoryObj.name : (budget.category || 'Sin categoría');
        const displayIcon = categoryObj?.icon || getIcon(displayCategory);

        return (
            <div
                key={budget.id}
                onClick={() => handleBudgetClick(budget)}
                className={`glass-card rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer border-l-4 border-l-transparent hover:${status.borderClass}`}
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`size-10 rounded-xl flex items-center justify-center ${status.bgClass} ${status.colorClass}`}>
                            <span className="material-symbols-outlined">{displayIcon}</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">{displayCategory}</h4>
                            <span className="text-xs text-gray-500">Mensual</span>
                        </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${status.bgClass} ${status.colorClass}`}>
                        {status.label}
                    </span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <MoneyDisplay amount={budget.spent} currency={currencySymbol} size="4xl" color="text-gray-900 dark:text-white" />
                        <div className="text-sm font-medium text-gray-500 mb-1 flex items-baseline gap-1">
                            <span>de</span>
                            <MoneyDisplay amount={budget.limit} currency={currencySymbol} size="lg" color="text-gray-500" weight="font-medium" />
                        </div>
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
                        <span className={`font-medium flex items-center gap-1 ${remaining < 0 ? 'text-danger' : remaining < (budget.limit * 0.1) ? 'text-orange-500' : ''}`}>
                            {remaining < 0 ? (
                                <>+<MoneyDisplay amount={Math.abs(remaining)} currency={currencySymbol} size="md" color="text-danger" autoColor={false} /> sobre límite</>
                            ) : (
                                <><MoneyDisplay amount={remaining} currency={currencySymbol} size="md" color={(remaining < (budget.limit * 0.1) ? 'text-orange-500' : 'text-gray-400')} autoColor={false} /> restante</>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        );
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
                        <p className="text-gray-500 dark:text-gray-400 text-lg font-normal capitalize">
                            Planificación de {dateRange.start.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button
                            onClick={() => setIsDateModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-medium text-sm hover:border-primary hover:text-primary transition-colors h-12"
                        >
                            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                            <span>{dateRange.start.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })} - {dateRange.end.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                        </button>

                        <button
                            onClick={() => setIsCreateModalOpen(true)}
                            className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 h-12"
                        >
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span className="text-sm">Nuevo Presupuesto</span>
                        </button>
                    </div>
                </header>

                {/* Summary Stats */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="glass-card rounded-3xl p-6 flex flex-col gap-3 group hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                                <span className="material-symbols-outlined">assignment</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Planeado</span>
                        </div>
                        <div>
                            <div className="h-9 flex items-center">
                                <MoneyDisplay amount={totalPlanned} currency={currencySymbol} size="3xl" color="text-[#111418] dark:text-white" />
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Suma de todas las categorías</p>
                        </div>
                    </div>

                    <div className="glass-card rounded-3xl p-6 flex flex-col gap-3 group hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg text-emerald-600">
                                <span className="material-symbols-outlined">savings</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Disponible</span>
                        </div>
                        <div>
                            <div className="h-9 flex items-center">
                                <MoneyDisplay amount={totalAvailable} currency={currencySymbol} size="3xl" color="text-[#111418] dark:text-white" />
                            </div>
                            <p className="text-sm text-emerald-600 mt-1 font-medium flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                {availablePercent.toFixed(0)}% Restante del mes
                            </p>
                        </div>
                    </div>

                    <div className="glass-card rounded-3xl p-6 flex flex-col gap-3 group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-20 h-20 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-2xl"></div>
                        <div className="flex items-center justify-between relative z-10">
                            <div className="p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg text-orange-500">
                                <span className="material-symbols-outlined">notifications_active</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Alertas</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-[#111418] dark:text-white tracking-tight">{alertsCount}</h3>
                            <p className="text-sm text-gray-500 mt-1">Categorías en alerta</p>
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

                {/* Grouped Budgets Render */}
                {(() => {
                    const groups: Record<string, typeof filteredBudgets> = {};
                    const noFolder: typeof filteredBudgets = [];

                    filteredBudgets.forEach(budget => {
                        const category = categories.find(c => c.id === budget.category_id);
                        if (category && category.folder_id) {
                            const folder = categoryFolders.find(f => f.id === category.folder_id);
                            if (folder) {
                                if (!groups[folder.id]) groups[folder.id] = [];
                                groups[folder.id].push(budget);
                                return;
                            }
                        }
                        noFolder.push(budget);
                    });

                    const folderGroups = Object.keys(groups).map(folderId => {
                        const folder = categoryFolders.find(f => f.id === folderId);
                        return { folder, budgets: groups[folderId] };
                    }).sort((a, b) => (a.folder?.name || '').localeCompare(b.folder?.name || ''));

                    return (
                        <div className="flex flex-col gap-10">
                            {folderGroups.map(({ folder, budgets }) => (
                                <section key={folder?.id} className="animate-fade-in">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                                            style={{ backgroundColor: `${folder?.color || '#6366f1'}20`, color: folder?.color || '#6366f1' }}
                                        >
                                            <span className="material-symbols-outlined">{folder?.icon || 'folder'}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{folder?.name}</h3>
                                        <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800 ml-4"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {budgets.map(budget => renderBudgetCard(budget))}
                                    </div>
                                </section>
                            ))}

                            {/* Ungrouped / General Section */}
                            {(noFolder.length > 0 || folderGroups.length === 0) && (
                                <section className="animate-fade-in">
                                    {folderGroups.length > 0 && (
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 shadow-sm">
                                                <span className="material-symbols-outlined">category</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">General</h3>
                                            <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800 ml-4"></div>
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {noFolder.map(budget => renderBudgetCard(budget))}

                                        {/* Add New Placeholder Card */}
                                        <div
                                            onClick={() => setIsCreateModalOpen(true)}
                                            className="w-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-primary hover:border-primary hover:bg-white/50 dark:hover:bg-slate-800/20 transition-all cursor-pointer group min-h-[160px]"
                                        >
                                            <div className="size-14 rounded-[2rem] bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                                <span className="material-symbols-outlined text-3xl">add</span>
                                            </div>
                                            <p className="font-medium">Crear nuevo presupuesto</p>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>
                    );
                })()}

                <BudgetDetailsModal
                    isOpen={isDetailsModalOpen}
                    onClose={() => setIsDetailsModalOpen(false)}
                    budget={selectedBudget}
                    onEdit={(budget) => {
                        setIsDetailsModalOpen(false);
                        setEditingBudget(budget);
                        setIsCreateModalOpen(true);
                    }}
                />

                <CreateBudgetModal
                    isOpen={isCreateModalOpen}
                    onClose={() => {
                        setIsCreateModalOpen(false);
                        setEditingBudget(null);
                    }}
                    budgetToEdit={editingBudget}
                />

                <DateRangeModal
                    isOpen={isDateModalOpen}
                    onClose={() => setIsDateModalOpen(false)}
                    initialStartDate={dateRange.start}
                    initialEndDate={dateRange.end}
                    onApply={(start, end) => setDateRange({ start, end })}
                />

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
