"use client";

import React, { useState, useMemo, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { Transaction } from '@/types';
import { resetAndSeedTransactions } from '@/app/actions/transaction-actions';


import { CategoryIcon } from '@/components/CategoryIcon';
import { DateRangeModal } from '@/components/DateRangeModal';
import { TransactionDetailsModal } from '@/components/TransactionDetailsModal';
import { TransactionModal } from '@/components/TransactionModal';
import { startOfMonth, endOfMonth, format, startOfDay, endOfDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { MoneyDisplay } from '@/components/MoneyDisplay';
import { COLOR_MAP } from '@/lib/category-colors';


export default function Transactions() {
    const router = useRouter();
    const {
        transactions,
        categories: allCategories,
        budgets,
        recurringRules,
        formatAmount,
        openTransactionModal,
        totalBalance,
        activeBookId,
        refreshBooks,
        ledgers
    } = useFinance();
    const [search, setSearch] = useState('');
    const [activeType, setActiveType] = useState<'ALL' | 'INCOME' | 'EXPENSE'>('ALL');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();
    const [dateRange, setDateRange] = useState<{ start: Date | null, end: Date | null }>({
        start: startOfMonth(new Date()),
        end: endOfMonth(new Date())
    });
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(20);

    const currencySymbol = useMemo(() => {
        const curr = ledgers.find(l => l.id === activeBookId)?.currency || 'PEN';
        return curr === 'PEN' ? 'S/' : (curr === 'USD' ? '$' : curr);
    }, [ledgers, activeBookId]);

    // Modal States for Details/Edit
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

    const handleDateRangeApply = (start: Date, end: Date) => {
        setDateRange({ start, end });
    };

    // Categorías disponibles (ahora todas)
    const categories = useMemo(() => {
        return allCategories.map(cat => ({
            name: cat.name,
            icon: cat.icon || 'category',
            color: cat.color // Include color
        }));
    }, [allCategories]);

    // Lógica de filtrado
    // 1. Filtrado por Fecha (Base para estadísticas y lista)
    const periodTransactions = useMemo(() => {
        return transactions.filter(t => {
            const tDate = new Date(t.date);
            return (!dateRange.start || tDate >= dateRange.start) &&
                (!dateRange.end || tDate <= dateRange.end);
        });
    }, [transactions, dateRange]);

    // 2. Filtrado para la Lista (Búsqueda, Tipo, Categorías)
    const filtered = useMemo(() => {
        return periodTransactions.filter(t => {
            const tCategoryName = t.category || 'Uncategorized';

            const matchesSearch = t.description.toLowerCase().includes(search.toLowerCase()) ||
                tCategoryName.toLowerCase().includes(search.toLowerCase());
            const matchesType = activeType === 'ALL' || t.type === activeType;
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tCategoryName);

            return matchesSearch && matchesType && matchesCategory;
        });
    }, [periodTransactions, search, activeType, selectedCategories]);

    // Agrupación por fechas
    const groupedTransactions = useMemo(() => {
        const groups: { [key: string]: { date: string, items: Transaction[], total: number } } = {};

        filtered.slice(0, visibleCount).forEach(t => {
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
    }, [filtered, visibleCount]);

    const toggleCategory = (cat: string) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const handleRegenerateData = () => {
        if (!activeBookId) return;
        if (!confirm('¿Estás seguro? Esto eliminará TODAS las transacciones actuales y creará 10 nuevas.')) return;

        startTransition(async () => {
            await resetAndSeedTransactions(activeBookId);
            await refreshBooks();
        });
    };

    // Calculate totals and projections
    // Calculate totals and projections based on PERIOD only (ignoring visual filters)
    const stats = useMemo(() => {
        // 1. Calculate Period Totals (for Available Budget - Independent of visual filters)
        const periodStats = periodTransactions.reduce((acc, t) => {
            if (t.type === 'EXPENSE') acc.expense += t.amount;
            return acc;
        }, { expense: 0 });

        // 2. Calculate Visible Totals (for Cards - Affected by all filters)
        const viewStats = filtered.reduce((acc, t) => {
            if (t.type === 'INCOME') acc.income += t.amount;
            else acc.expense += t.amount;
            return acc;
        }, { income: 0, expense: 0 });

        // Calculate Expense Budget (Projected)
        // If categories selected, sum budgets for those categories. Else sum all.
        const relevantBudgets = selectedCategories.length > 0
            ? budgets.filter(b => selectedCategories.includes(b.category))
            : budgets;

        // If no specific budget found, maybe use the general "monthly limit" logic or sum of all limits
        const expenseProjected = relevantBudgets.length > 0
            ? relevantBudgets.reduce((sum, b) => sum + b.limit, 0)
            : 0;

        // Calculate Income Projected
        const incomeProjected = recurringRules
            .filter(r => r.type === 'INCOME' && r.active)
            .reduce((sum, r) => sum + r.amount, 0);

        // Calculate Total Budget Limit (sum of all budget limits - Independent of visual filters for Available)
        const totalBudgetLimit = budgets.reduce((sum, b) => sum + b.limit, 0);

        // Calculate Available (Global Budget - Global Expenses in Period)
        const availableBudget = totalBudgetLimit - periodStats.expense;

        return {
            income: viewStats.income,
            expense: viewStats.expense,
            expenseProjected,
            incomeProjected,
            totalBudgetLimit,
            availableBudget
        };
    }, [periodTransactions, filtered, budgets, recurringRules, selectedCategories]);



    const getProgress = (current: number, target: number) => {
        if (target === 0) return 0;
        return Math.min((current / target) * 100, 100);
    };

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Background decoration */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-purple-100/50 dark:bg-purple-900/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
            </div>

            <main className="flex-1 max-w-[1200px] mx-auto w-full p-4 md:p-8 flex gap-8 overflow-hidden">
                {/* Internal Filter Sidebar */}
                <aside className="hidden lg:flex flex-col w-72 shrink-0 gap-6 h-full overflow-y-auto pr-2 scrollbar-hide">
                    <div className="glass-card p-6 rounded-2xl border border-white/40 dark:border-slate-800">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Total Disponible</p>
                        <MoneyDisplay amount={stats.availableBudget} currency={currencySymbol} size="6xl" weight="font-black" color="text-slate-800 dark:text-white" />

                        <div className="mt-6 flex flex-col gap-4">
                            {/* Income Card */}
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-100 dark:border-emerald-500/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="size-6 rounded-full bg-emerald-100 dark:bg-emerald-800/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[14px]">arrow_downward</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ingresos</span>
                                </div>
                                <div className="mb-2"><MoneyDisplay amount={stats.income} currency={currencySymbol} size="3xl" weight="font-black" color="text-slate-800 dark:text-white" /></div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-medium text-slate-400">
                                        <span>Proyectado</span>
                                        <MoneyDisplay amount={stats.incomeProjected} currency={currencySymbol} size="sm" color="text-slate-400" weight="font-medium" />
                                    </div>
                                    <div className="h-1.5 w-full bg-emerald-100 dark:bg-emerald-950 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                                            style={{ width: `${getProgress(stats.income, stats.incomeProjected)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* Expense Card */}
                            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-100 dark:border-orange-500/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="size-6 rounded-full bg-orange-100 dark:bg-orange-800/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-[14px]">arrow_upward</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Gastos</span>
                                </div>
                                <div className="mb-2"><MoneyDisplay amount={stats.expense} currency={currencySymbol} size="3xl" weight="font-black" color="text-slate-800 dark:text-white" /></div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-medium text-slate-400">
                                        <span>Presupuesto</span>
                                        <MoneyDisplay amount={stats.expenseProjected} currency={currencySymbol} size="sm" color="text-slate-400" weight="font-medium" />
                                    </div>
                                    <div className="h-1.5 w-full bg-orange-100 dark:bg-orange-950 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-orange-500 rounded-full transition-all duration-1000"
                                            style={{ width: `${getProgress(stats.expense, stats.expenseProjected)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
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
                                    setVisibleCount(20);
                                    setDateRange({
                                        start: startOfMonth(new Date()),
                                        end: endOfMonth(new Date())
                                    });
                                }}
                                className="text-xs text-primary hover:underline font-medium"
                            >
                                Resetear
                            </button>
                        </div>

                        <div className="glass-card p-4 rounded-xl space-y-3 border border-white/40 dark:border-slate-800">
                            <label className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Período</label>
                            <div className="relative">
                                <button
                                    onClick={() => setIsDateModalOpen(true)}
                                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 pl-3 pr-10 text-sm font-medium text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary focus:bg-white text-left transition-all hover:bg-white dark:hover:bg-slate-800"
                                >
                                    {dateRange.start && dateRange.end
                                        ? `${format(dateRange.start, 'dd MMM', { locale: es })} - ${format(dateRange.end, 'dd MMM', { locale: es })}`
                                        : 'Seleccionar rango'}
                                </button>
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
                                {categories.map(cat => {
                                    const colors = COLOR_MAP[cat.color || 'slate'] || COLOR_MAP.slate;
                                    return (
                                        <label key={cat.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(cat.name)}
                                                onChange={() => toggleCategory(cat.name)}
                                                className="rounded border-slate-300 text-primary focus:ring-primary bg-transparent"
                                            />
                                            <div
                                                className={`size-8 rounded-full flex items-center justify-center ${colors.bg} ${colors.text} ring-1 ring-inset ${colors.ring}`}
                                            >
                                                <CategoryIcon icon={cat.icon} className="text-[14px]" />
                                            </div>
                                            <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{cat.name}</span>
                                        </label>
                                    );
                                })}
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
                            <div className="flex gap-2">

                                <button
                                    onClick={openTransactionModal}
                                    className="hidden md:flex bg-primary hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                                >
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                    Nueva
                                </button>
                            </div>
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

                    <div className="flex-1 overflow-y-auto pr-2 pb-40 space-y-8 scrollbar-hide animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        {groupedTransactions.map((group, gIdx) => {
                            // Currency handled by CurrencyDisplay
                            return (
                                <div key={group.date}>
                                    <div className="sticky top-0 z-10 py-3 px-4 rounded-xl bg-[#f2f6fa]/95 dark:bg-[#020617]/95 backdrop-blur-md flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 mb-3">
                                        <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest capitalize">{group.date}</h3>
                                        <div className={`text-xs font-semibold px-2 py-1 rounded flex items-center gap-1 ${group.total >= 0 ? 'bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-rose-100/50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'}`}>
                                            {group.total < 0 && <span>-</span>}
                                            {group.total >= 0 && <span>+</span>}
                                            <MoneyDisplay amount={Math.abs(group.total)} currency={currencySymbol} size="md" color="" autoColor={false} weight="font-semibold" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {group.items.map((t) => {
                                            const category = allCategories.find(c => c.name === t.category);
                                            const colorKey = category?.color || 'slate';
                                            const isCustomColor = !COLOR_MAP[colorKey];
                                            const colors = COLOR_MAP[colorKey] || COLOR_MAP.slate;

                                            return (
                                                <div
                                                    key={t.id}
                                                    onClick={() => setSelectedTransaction(t)}
                                                    className="group glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-white/90 dark:hover:bg-slate-800/80 hover:-translate-y-0.5 transition-all duration-200 border border-white/40 dark:border-slate-800"
                                                >
                                                    <div
                                                        className={`size-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors ${isCustomColor ? 'border-black/5 dark:border-white/10' : `${colors.bg} ${colors.text} ${colors.border}`}`}
                                                        style={isCustomColor ? { backgroundColor: colorKey } : {}}
                                                    >
                                                        <CategoryIcon icon={t.icon || 'attach_money'} className={`text-[24px] ${isCustomColor ? 'text-white' : ''}`} />
                                                    </div>
                                                    <div className="flex-1 min-w-0 grid grid-cols-[1fr_auto] gap-x-4 gap-y-1">
                                                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate" title={t.description}>
                                                            {t.description.split(' ').slice(0, 5).join(' ')}{t.description.split(' ').length > 5 ? '...' : ''}
                                                        </p>
                                                        <div className={`text-right flex justify-end items-center gap-0.5`}>
                                                            <MoneyDisplay
                                                                amount={t.amount}
                                                                currency={currencySymbol}
                                                                size="lg"
                                                                color={t.type === 'INCOME' ? 'text-emerald-500' : 'text-rose-500'}
                                                                autoColor={false}
                                                            />
                                                        </div>
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
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}

                        {groupedTransactions.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 opacity-50">
                                <span className="material-symbols-outlined text-6xl mb-4">history_toggle_off</span>
                                <p className="text-sm text-slate-400">No se encontraron transacciones en este período.</p>
                            </div>
                        )}

                        {filtered.length > visibleCount ? (
                            <div className="py-8 text-center">
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 20)}
                                    className="text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-all"
                                >
                                    Ver más transacciones
                                </button>
                            </div>
                        ) : (
                            groupedTransactions.length > 0 && (
                                <div className="py-8 text-center">
                                    <p className="text-sm text-slate-400 dark:text-slate-600">No hay más transacciones</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </main>
            <DateRangeModal
                isOpen={isDateModalOpen}
                onClose={() => setIsDateModalOpen(false)}
                onApply={handleDateRangeApply}
                initialStartDate={dateRange.start}
                initialEndDate={dateRange.end}
            />

            {/* Transaction Details Modal */}
            <TransactionDetailsModal
                isOpen={!!selectedTransaction}
                onClose={() => setSelectedTransaction(null)}
                transaction={selectedTransaction}
                onEdit={(t) => {
                    setSelectedTransaction(null);
                    setEditingTransaction(t);
                }}
            />

            {/* Edit Transaction Modal */}
            <TransactionModal
                isOpen={!!editingTransaction}
                onClose={() => setEditingTransaction(null)}
                transactionToEdit={editingTransaction}
            />
        </div>
    );
}
