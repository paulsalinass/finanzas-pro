"use client";

import React, { useMemo, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { MoneyDisplay } from '@/components/MoneyDisplay';
import { AccountModal } from '@/components/AccountModal';
import { DateRangeModal } from '@/components/DateRangeModal';
import { CommitmentDetailsModal } from '@/components/CommitmentDetailsModal';
import { TransactionDetailsModal } from '@/components/TransactionDetailsModal';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { format, startOfDay, endOfDay, startOfMonth, endOfMonth } from 'date-fns';
import { es } from 'date-fns/locale';
import { Commitment, Transaction } from '@/types';
import { CategoryIcon } from '@/components/CategoryIcon';

export default function AccountDetails() {
    const router = useRouter();
    const params = useParams();
    const { accounts, transactions, ledgers, activeBookId, deleteAccount, categories, commitments, deleteCommitment, updateCommitment } = useFinance();
    const [searchTerm, setSearchTerm] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [viewingCommitment, setViewingCommitment] = useState<Commitment | null>(null);
    const [viewingTransaction, setViewingTransaction] = useState<Transaction | null>(null);

    // Filters State
    const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
    const [dateRange, setDateRange] = useState<{ from: Date | null; to: Date | null }>({
        from: startOfMonth(new Date()),
        to: endOfMonth(new Date())
    });
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);

    const accountId = typeof params.id === 'string' ? params.id : '';
    const account = accounts.find(a => a.id === accountId);

    // Redirect if not found (simple protection)
    React.useEffect(() => {
        if (!account && accounts.length > 0) {
            router.push('/accounts');
        }
    }, [account, accounts, router]);

    const currencySymbol = useMemo(() => {
        const curr = ledgers.find(l => l.id === activeBookId)?.currency || 'PEN';
        return curr === 'PEN' ? 'S/' : (curr === 'USD' ? '$' : curr);
    }, [ledgers, activeBookId]);

    const pendingCommitment = useMemo(() => {
        return commitments.find(c =>
            c.accountId === account?.id &&
            c.status === 'PENDING' &&
            c.name.startsWith('Pago Tarjeta') &&
            c.name.includes(account?.name || '')
        );
    }, [commitments, account?.id, account?.name]);

    // Filter transactions for this account
    const accountTransactions = useMemo(() => {
        if (!account) return [];
        return transactions
            .filter(t => t.account === account.name || t.account_id === account.id) // Check both in case of legacy data
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [transactions, account]);

    // Unique Categories for Filter
    const availableCategories = useMemo(() => {
        const unique = new Set(accountTransactions.map(t => t.category).filter(Boolean));
        // Ensure we only have strings
        return Array.from(unique).sort() as string[];
    }, [accountTransactions]);

    const filteredTransactions = useMemo(() => {
        return accountTransactions.filter(t => {
            const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (t.category || '').toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = selectedCategory === 'ALL' || t.category === selectedCategory;

            let matchesDate = true;
            if (dateRange.from && dateRange.to) {
                const tDate = new Date(t.date);
                matchesDate = tDate >= dateRange.from && tDate <= dateRange.to;
            }

            return matchesSearch && matchesCategory && matchesDate;
        });
    }, [accountTransactions, searchTerm, selectedCategory, dateRange]);

    // Calculate Credit Card Metrics
    const creditMetrics = useMemo(() => {
        if (!account || account.type !== 'CREDIT') return null;

        const usedAmount = Math.abs(account.balance);
        const limit = account.creditLimit || 0;
        // Strictly calculate available as Limit - Used
        const available = limit - usedAmount;
        const usagePercent = limit > 0 ? (usedAmount / limit) * 100 : 0;

        return { usedAmount, limit, available, usagePercent };
    }, [account]);

    // Analytics Data: Usage Trend (Current Month)
    const usageData = useMemo(() => {
        const today = new Date();
        const start = startOfMonth(today);
        const end = endOfMonth(today);

        // Group by Date
        const dataMap = new Map();

        // Filter first, then reverse/process
        const monthTransactions = [...accountTransactions]
            .filter(t => {
                const tDate = new Date(t.date);
                return tDate >= start && tDate <= end;
            })
            .reverse();

        monthTransactions.forEach(t => {
            const dateStr = format(new Date(t.date), 'dd MMM', { locale: es });

            if (!dataMap.has(dateStr)) dataMap.set(dateStr, 0);
            // Accumulate absolute amount for usage visual
            dataMap.set(dateStr, dataMap.get(dateStr) + Math.abs(t.amount));
        });

        // Convert to array
        return Array.from(dataMap.entries()).map(([name, value]) => ({ name, value }));
    }, [accountTransactions]);



    // Analytics Data: Top Categories (Current Month)
    const categoryData = useMemo(() => {
        const today = new Date();
        const start = startOfMonth(today);
        const end = endOfMonth(today);

        const catMap = new Map();
        accountTransactions.forEach(t => {
            const tDate = new Date(t.date);
            if (t.type === 'EXPENSE' && tDate >= start && tDate <= end) {
                const cat = t.category || 'Otros';
                const current = catMap.get(cat) || 0;
                catMap.set(cat, current + t.amount);
            }
        });
        return Array.from(catMap.entries())
            .map(([name, value]) => {
                const catObj = categories.find(c => c.name === name);
                const icon = catObj?.icon || 'category';
                return { name, value, icon };
            })
            .sort((a, b) => b.value - a.value)
            .slice(0, 5); // Top 5
    }, [accountTransactions, categories]);

    const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

    // Calculate Billing Cycle & Monthly Payment
    const billingInfo = useMemo(() => {
        if (!account || account.type !== 'CREDIT' || !account.cutoffDay) return null;

        const today = new Date();
        const cutoffDay = account.cutoffDay;

        // Determine Current Cycle End
        // If today is 15th and cutoff is 20th, current cycle ends this month on 20th.
        // If today is 25th and cutoff is 20th, current cycle ends next month on 20th.

        let currentCycleEnd = new Date(today.getFullYear(), today.getMonth(), cutoffDay);
        if (today.getDate() > cutoffDay) {
            currentCycleEnd.setMonth(currentCycleEnd.getMonth() + 1);
        }

        // Previous Cycle (The one fully closed and likely due)
        const prevCycleEnd = new Date(currentCycleEnd);
        prevCycleEnd.setMonth(prevCycleEnd.getMonth() - 1);

        const prevCycleStart = new Date(prevCycleEnd);
        prevCycleStart.setMonth(prevCycleStart.getMonth() - 1);
        prevCycleStart.setDate(prevCycleStart.getDate() + 1); // Start is day after previous cutoff

        // Filter expenses in this closed cycle
        const cycleExpenses = accountTransactions.reduce((sum, t) => {
            const tDate = new Date(t.date);
            // Simple date range check
            if (t.type === 'EXPENSE' && tDate >= prevCycleStart && tDate <= prevCycleEnd) {
                return sum + t.amount;
            }
            return sum;
        }, 0);

        return {
            cycleExpenses,
            periodLabel: `${format(prevCycleStart, 'dd MMM', { locale: es })} - ${format(prevCycleEnd, 'dd MMM', { locale: es })}`
        };
    }, [account, accountTransactions]);

    const handleDateApply = (from: Date | null, to: Date | null) => {
        setDateRange({ from, to });
        setIsDateModalOpen(false);
    };

    if (!account) return null;

    return (
        <div className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden relative scrollbar-hide pb-40">
            {/* Background decoration */}
            <div className="fixed inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-10">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px]"></div>
            </div>

            <main className="container mx-auto max-w-[1200px] p-4 md:p-8 flex flex-col gap-8">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
                    <div className="flex items-center gap-4">
                        <button onClick={() => router.back()} className="p-2 -ml-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className={`size-10 rounded-xl flex items-center justify-center ${account.type === 'CREDIT' ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30' :
                                (account.type === 'DEBIT' || account.type === 'INVESTMENT') ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30' :
                                    'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30'
                                }`}>
                                <span className="material-symbols-outlined">
                                    {account.type === 'CREDIT' ? 'credit_card' : account.type === 'CASH' ? 'payments' : 'account_balance'}
                                </span>
                            </div>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-[#111418] dark:text-white">{account.name}</h1>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                        {account.type}
                                    </span>
                                    {account.isDefault && (
                                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-md">
                                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                                            Predeterminado
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button onClick={() => setIsEditModalOpen(true)} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-medium text-sm hover:border-primary hover:text-primary transition-colors h-12">
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                            Editar
                        </button>
                        <button
                            disabled={!pendingCommitment}
                            onClick={() => pendingCommitment && setViewingCommitment(pendingCommitment)}
                            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all h-12 ${pendingCommitment
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 active:scale-95'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                                }`}
                        >
                            <span className="material-symbols-outlined">payments</span>
                            Realizar Pago
                        </button>
                    </div>
                </header>

                {/* HERO SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Visual Card (Left - 5 Cols) */}
                    <div className="lg:col-span-5 w-full">
                        <div className={`relative aspect-[1.586/1] w-full rounded-3xl p-8 text-white shadow-2xl transition-all duration-300 group flex flex-col justify-between overflow-hidden ${account.type === 'CREDIT'
                            ? 'bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899]' // Vibrant Purple/Indigo/Pink
                            : account.type === 'CASH'
                                ? 'bg-gradient-to-br from-green-600 to-emerald-800' // Cash specific
                                : 'bg-gradient-to-br from-slate-800 to-slate-900' // Debit/Default
                            }`}>
                            {/* Smooth Background Patterns */}
                            <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-white/10 rounded-full blur-[60px] -translate-y-1/4 translate-x-1/4"></div>
                            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-black/10 rounded-full blur-[50px] translate-y-1/4 -translate-x-1/4"></div>

                            <div className="relative z-10 flex justify-between items-start">
                                {/* Chip & Icon */}
                                <div className="w-14 h-11 rounded-lg bg-gradient-to-br from-[#fbbf24] to-[#d97706] border border-yellow-500/30 shadow-inner relative overflow-hidden flex-shrink-0">
                                    <div className="absolute inset-0 border border-black/10 rounded-lg"></div>
                                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/20"></div>
                                    <div className="absolute left-1/3 top-0 h-full w-[1px] bg-black/20"></div>
                                    <div className="absolute left-2/3 top-0 h-full w-[1px] bg-black/20"></div>
                                </div>
                                <div className="text-right">
                                    <span className={`font-black text-3xl italic opacity-100 drop-shadow-md ${account.network === 'VISA' ? 'text-white' : 'text-white/90'}`}>
                                        {account.network || (account.type === 'CREDIT' ? 'VISA' : (account.type === 'CASH' ? 'EFECTIVO' : 'DEBIT'))}
                                    </span>
                                </div>
                            </div>

                            <div className="relative z-10 space-y-6">
                                <p className="font-mono text-2xl lg:text-3xl tracking-widest text-shadow opacity-95 flex gap-4">
                                    {/* Only show card number masking for cards */}
                                    {['CREDIT', 'DEBIT', 'SAVINGS'].includes(account.type) ? (
                                        <><span>••••</span><span>••••</span><span>••••</span><span>{account.lastFour || '••••'}</span></>
                                    ) : (
                                        <span className="text-xl tracking-normal">{account.name}</span>
                                    )}
                                </p>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-widest opacity-70 mb-1">Titular</p>
                                        <p className="font-medium text-lg tracking-wide uppercase">{account.cardholderName || 'USUARIO PRINCIPAL'}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[9px] font-bold uppercase tracking-widest opacity-70 mb-1">Expira</p>
                                        <p className="font-medium text-lg tracking-wide">{account.expiryDate || '12/30'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats & Metrics (Right - 7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {/* Row 1: Available & Limit */}
                        {account.type === 'CREDIT' && creditMetrics ? (
                            <div className="glass-card rounded-3xl p-6 lg:p-8 border border-white/60 dark:border-slate-800 shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Línea Disponible</p>
                                        <MoneyDisplay amount={creditMetrics.available} currency={currencySymbol} size="5xl" weight="font-black" color="text-emerald-500 dark:text-emerald-400" />
                                    </div>
                                    <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-0 md:gap-1 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800 md:border-none">
                                        <div className="flex-1 md:flex-auto text-center md:text-right">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Línea Utilizada</p>
                                            <p className="text-lg font-bold text-slate-700 dark:text-slate-300 tabular-nums">
                                                {currencySymbol}{creditMetrics.usedAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                            </p>
                                        </div>
                                        <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 block md:hidden mx-4"></div>
                                        <div className="flex-1 md:flex-auto text-center md:text-right">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Línea Total</p>
                                            <p className="text-lg font-bold text-slate-400 dark:text-slate-500 tabular-nums">
                                                {currencySymbol}{creditMetrics.limit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="glass-card rounded-3xl p-8 border border-white/60 dark:border-slate-800 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Saldo Total</p>
                                    <MoneyDisplay amount={account.balance} currency={currencySymbol} size="5xl" weight="font-black" color="text-slate-900 dark:text-white" />
                                </div>
                            </div>
                        )}

                        {/* Row 2: Billing Metrics Consolidated */}
                        {account.type === 'CREDIT' && (
                            <div className="glass-card p-0 rounded-3xl border border-white/60 dark:border-slate-800 flex flex-row flex-wrap md:flex-nowrap overflow-hidden md:divide-x divide-slate-100 dark:divide-slate-800">
                                {/* Fecha de Cierre */}
                                <div className="w-1/2 md:w-auto md:flex-1 p-4 md:p-6 flex flex-col justify-center items-center text-center border-r md:border-r-0 border-slate-100 dark:border-slate-800">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Fecha de Cierre</p>
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                            <span className="material-symbols-outlined">calendar_month</span>
                                        </div>
                                        <div>
                                            <span className="text-xl md:text-2xl font-black text-slate-800 dark:text-white">Día {account.cutoffDay || '--'}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Fecha de Pago */}
                                <div className="w-1/2 md:w-auto md:flex-1 p-4 md:p-6 flex flex-col justify-center items-center text-center">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Fecha de Pago</p>
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                                            <span className="material-symbols-outlined">event_upcoming</span>
                                        </div>
                                        <div>
                                            <span className="text-xl md:text-2xl font-black text-slate-800 dark:text-white">Día {account.payDay || '--'}</span>
                                            <p className="text-[10px] font-bold text-orange-500 mt-0.5">Próximo a vencer</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pago del Mes */}
                                {billingInfo && (
                                    <div className="w-full md:w-auto md:flex-1 p-6 flex flex-col justify-center items-center text-center min-w-[200px] border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="material-symbols-outlined text-slate-400 text-sm">receipt_long</span>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pago del Mes</p>
                                        </div>
                                        <MoneyDisplay amount={billingInfo.cycleExpenses} currency={currencySymbol} size="3xl" weight="font-black" color="text-slate-900 dark:text-white" />
                                        <p className="text-[10px] text-slate-400 mt-1 font-medium">
                                            Periodo: {billingInfo.periodLabel}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* ANALYTICS SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Usage Chart */}
                    <div className="lg:col-span-2 glass-card p-6 rounded-3xl border border-white/40 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-slate-800 dark:text-white">Uso del Crédito <span className="text-xs font-normal text-slate-400 dark:text-slate-500 ml-1">(Mes Actual)</span></h3>
                            <span className="text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1 rounded-full">Tendencia</span>
                        </div>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={usageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 11, fill: '#94a3b8' }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 11, fill: '#94a3b8' }}
                                        tickFormatter={(value) => value >= 1000 ? `S/${(value / 1000).toFixed(1)}k` : `S/${value}`}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        itemStyle={{ color: '#fff' }}
                                        formatter={(value: number) => [`Gasto S/ ${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, '']}
                                        labelStyle={{ color: '#94a3b8', marginBottom: '0.25rem' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#3b82f6"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                        dot={{ fill: 'white', stroke: '#3b82f6', strokeWidth: 2, r: 4 }}
                                        activeDot={{ r: 6, strokeWidth: 0 }}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Top Categories */}
                    <div className="glass-card p-6 rounded-3xl border border-white/40 dark:border-slate-800 w-full">
                        <h3 className="font-bold text-slate-800 dark:text-white mb-6">Gastos por Categoría <span className="text-xs font-normal text-slate-400 dark:text-slate-500 ml-1">(Mes Actual)</span></h3>

                        <div className="space-y-5">
                            {categoryData.length > 0 ? categoryData.map((cat, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-center text-xs font-bold text-slate-600 dark:text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[16px] text-slate-400">{cat.icon}</span>
                                            <span>{cat.name}</span>
                                        </div>
                                        <span>{currencySymbol}{cat.value.toLocaleString()}</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        {/* Calc percent relative to top category for sizing bar */}
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{
                                                width: `${(cat.value / categoryData[0].value) * 100}%`,
                                                backgroundColor: COLORS[idx % COLORS.length]
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            )) : (
                                <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                                    No hay gastos registrados.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* TRANSACTIONS LIST */}
                <div className="glass-card rounded-3xl border border-white/40 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white">Movimientos Recientes</h3>

                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            {/* Filters Row */}
                            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto scrollbar-hide pb-1 sm:pb-0">
                                {/* Date Filter */}
                                <button
                                    onClick={() => setIsDateModalOpen(true)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${dateRange.from ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                    {dateRange.from && dateRange.to
                                        ? `${format(dateRange.from, 'dd MMM', { locale: es })} - ${format(dateRange.to, 'dd MMM', { locale: es })}`
                                        : 'Por Fecha'}
                                    {dateRange.from && (
                                        <span
                                            className="ml-1 hover:text-red-500"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setDateRange({ from: null, to: null });
                                            }}
                                        >×</span>
                                    )}
                                </button>

                                {/* Category Filter */}
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer max-w-[140px] flex-shrink-0"
                                >
                                    <option value="ALL">Todas</option>
                                    {availableCategories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>

                                {/* Reset Filters */}
                                <button
                                    onClick={() => {
                                        setSelectedCategory('ALL');
                                        setSearchTerm('');
                                        setDateRange({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) });
                                    }}
                                    className="text-xs font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex-shrink-0"
                                >
                                    <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                                    <span className="hidden sm:inline">Reset</span>
                                </button>
                            </div>

                            {/* Search */}
                            <div className="relative w-full sm:w-auto">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                                <input
                                    type="text"
                                    placeholder="Buscar cargo..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border-none outline-none text-sm font-medium w-full sm:w-64 focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50/50 dark:bg-slate-900/50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#637288] dark:text-slate-500 uppercase tracking-wider">Detalle</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#637288] dark:text-slate-500 uppercase tracking-wider">Categoría</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#637288] dark:text-slate-500 uppercase tracking-wider">Fecha</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-[#637288] dark:text-slate-500 uppercase tracking-wider">Monto</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-[#637288] dark:text-slate-500 uppercase tracking-wider">Acción</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f0f2f4] dark:divide-slate-800">
                                {filteredTransactions.length > 0 ? (
                                    filteredTransactions.map((t) => (
                                        <tr
                                            key={t.id}
                                            onClick={() => setViewingTransaction(t)}
                                            className="group hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className={`size-10 rounded-full flex items-center justify-center shrink-0 ${t.type === 'INCOME'
                                                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
                                                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                                        }`}>
                                                        <CategoryIcon icon={t.icon} className="text-[20px]" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-[#111418] dark:text-white text-sm font-bold truncate max-w-[180px] group-hover:text-primary transition-colors">{t.description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                                    {t.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-[#637288] dark:text-slate-500">
                                                {format(new Date(t.date), "dd MMM yyyy", { locale: es })}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={`text-sm font-bold ${t.type === 'INCOME' ? 'text-emerald-600 dark:text-emerald-400' : 'text-[#111418] dark:text-white'}`}>
                                                    {t.type === 'EXPENSE' ? '- ' : '+ '}{currencySymbol}{t.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setViewingTransaction(t);
                                                    }}
                                                    className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-primary transition-colors"
                                                    title="Ver Detalle"
                                                >
                                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-400 dark:text-gray-500">
                                            <div className="flex flex-col items-center gap-3">
                                                <span className="material-symbols-outlined text-[48px] opacity-20">receipt_long</span>
                                                <p className="text-sm">No hay movimientos registrados en este periodo.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Edit Modal */}
            <AccountModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                account={account}
            />

            {/* Date Range Modal */}
            <DateRangeModal
                isOpen={isDateModalOpen}
                onClose={() => setIsDateModalOpen(false)}
                onApply={handleDateApply}
                initialStartDate={dateRange.from}
                initialEndDate={dateRange.to}
            />

            <CommitmentDetailsModal
                isOpen={!!viewingCommitment}
                onClose={() => setViewingCommitment(null)}
                commitment={viewingCommitment}
                onEdit={() => { }} // Not needed for this flow usually, or act as view-only trigger
                onDelete={deleteCommitment}
            />

            <TransactionDetailsModal
                isOpen={!!viewingTransaction}
                onClose={() => setViewingTransaction(null)}
                transaction={viewingTransaction}
                onEdit={() => { }} // Implement edit if needed, or pass empty/dummy
            />
        </div>
    );
}
