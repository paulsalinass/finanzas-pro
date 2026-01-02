"use client";

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { DateRangeModal } from '@/components/DateRangeModal';
import { NotificationsModal } from '@/components/NotificationsModal';
import { CategoryIcon } from '@/components/CategoryIcon';
import { CommitmentDetailsModal } from '@/components/CommitmentDetailsModal';
import { CommitmentModal } from '@/components/CommitmentModal';
import { Commitment } from '@/types';
import { useFinance } from '@/context/FinanceContext';
// Recharts removed, using dynamic component
import { startOfMonth, endOfMonth, differenceInCalendarDays, addDays, startOfDay, format } from 'date-fns';
import { es } from 'date-fns/locale';
import { MoneyDisplay } from '@/components/MoneyDisplay';

const DashboardChart = dynamic(() => import('@/components/DashboardChart'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 dark:bg-white/5 animate-pulse rounded-xl" />
});

const COLOR_MAP: Record<string, { bg: string, text: string, ring: string, border: string, solid: string }> = {
    red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', ring: 'ring-red-500/10', border: 'border-red-200', solid: 'bg-red-500' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', ring: 'ring-orange-500/10', border: 'border-orange-200', solid: 'bg-orange-500' },
    amber: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', ring: 'ring-amber-500/10', border: 'border-amber-200', solid: 'bg-amber-500' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400', ring: 'ring-yellow-500/10', border: 'border-yellow-200', solid: 'bg-yellow-500' },
    lime: { bg: 'bg-lime-100 dark:bg-lime-900/30', text: 'text-lime-600 dark:text-lime-400', ring: 'ring-lime-500/10', border: 'border-lime-200', solid: 'bg-lime-500' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', ring: 'ring-green-500/10', border: 'border-green-200', solid: 'bg-green-500' },
    emerald: { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', ring: 'ring-emerald-500/10', border: 'border-emerald-200', solid: 'bg-emerald-500' },
    teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', ring: 'ring-teal-500/10', border: 'border-teal-200', solid: 'bg-teal-500' },
    cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400', ring: 'ring-cyan-500/10', border: 'border-cyan-200', solid: 'bg-cyan-500' },
    sky: { bg: 'bg-sky-100 dark:bg-sky-900/30', text: 'text-sky-600 dark:text-sky-400', ring: 'ring-sky-500/10', border: 'border-sky-200', solid: 'bg-sky-500' },
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', ring: 'ring-blue-500/10', border: 'border-blue-200', solid: 'bg-blue-500' },
    indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', ring: 'ring-indigo-500/10', border: 'border-indigo-200', solid: 'bg-indigo-500' },
    violet: { bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400', ring: 'ring-violet-500/10', border: 'border-violet-200', solid: 'bg-violet-500' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', ring: 'ring-purple-500/10', border: 'border-purple-200', solid: 'bg-purple-500' },
    fuchsia: { bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30', text: 'text-fuchsia-600 dark:text-fuchsia-400', ring: 'ring-fuchsia-500/10', border: 'border-fuchsia-200', solid: 'bg-fuchsia-500' },
    pink: { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400', ring: 'ring-pink-500/10', border: 'border-pink-200', solid: 'bg-pink-500' },
    rose: { bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400', ring: 'ring-rose-500/10', border: 'border-rose-200', solid: 'bg-rose-500' },
    slate: { bg: 'bg-slate-100 dark:bg-slate-800', text: 'text-slate-600 dark:text-slate-400', ring: 'ring-slate-500/10', border: 'border-slate-200', solid: 'bg-slate-500' },
};



export default function Dashboard() {
    const router = useRouter();
    const { transactions, accounts, totalBalance, budgets, commitments, recurringRules, categories, openTransactionModal, formatAmount, ledgers, activeBookId, unreadCount, userProfile, deleteCommitment } = useFinance();
    const [showBalance, setShowBalance] = useState(true);
    const [activeTab, setActiveTab] = useState('Este mes');
    const [dateRange, setDateRange] = useState<{ start: Date | null, end: Date | null }>({
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        end: new Date()
    });
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    // Commitment Modals State
    const [viewingCommitment, setViewingCommitment] = useState<Commitment | null>(null);
    const [editingCommitment, setEditingCommitment] = useState<Commitment | null>(null);
    const [isCommitmentModalOpen, setIsCommitmentModalOpen] = useState(false);

    const displayName = userProfile?.full_name || userProfile?.username || 'Usuario';
    const displayAvatar = userProfile?.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(displayName) + '&background=random';

    const tabs = ['Este mes', 'Mes pasado', 'Últimos 3 meses', 'Personalizado'];
    const dateMeta = React.useMemo(() => {
        const now = new Date();
        const start = startOfMonth(now);
        const end = endOfMonth(now);
        return {
            today: now,
            currentMonthStart: start,
            currentMonthEnd: end,
            daysInMonth: differenceInCalendarDays(end, start) + 1,
            daysElapsed: differenceInCalendarDays(now, start) + 1
        };
    }, []);
    const { today, currentMonthStart, currentMonthEnd, daysInMonth, daysElapsed } = dateMeta;

    const parseRuleDate = useCallback((value?: string | null) => {
        if (!value) return null;
        const direct = new Date(value);
        if (!Number.isNaN(direct.getTime())) {
            return direct;
        }
        const normalized = value.replace(/de/gi, '').replace(',', '').trim();
        const match = normalized.match(/(\d{1,2})\s+([A-Za-z]+)/);
        if (match) {
            const day = Number(match[1]);
            const monthKey = match[2].slice(0, 3).toLowerCase();
            const monthMap: Record<string, number> = {
                ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
                jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11
            };
            if (monthMap[monthKey] !== undefined) {
                const candidate = new Date(today.getFullYear(), monthMap[monthKey], day);
                if (candidate < today) {
                    candidate.setFullYear(candidate.getFullYear() + 1);
                }
                return candidate;
            }
        }
        return null;
    }, [today]);

    const currencySymbol = React.useMemo(() => {
        const curr = ledgers.find(l => l.id === activeBookId)?.currency || 'PEN';
        return curr === 'PEN' ? 'S/' : (curr === 'USD' ? '$' : curr);
    }, [ledgers, activeBookId]);

    const handleTabClick = (tab: string) => {
        if (tab === 'Personalizado') {
            setIsDateModalOpen(true);
            setActiveTab(tab);
            return;
        }

        setActiveTab(tab);
        const now = new Date();
        let start: Date | null = null;
        let end: Date | null = null;

        if (tab === 'Este mes') {
            start = new Date(now.getFullYear(), now.getMonth(), 1);
            end = now;
        } else if (tab === 'Mes pasado') {
            start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            end = new Date(now.getFullYear(), now.getMonth(), 0);
        } else if (tab === 'Últimos 3 meses') {
            start = new Date(now.getFullYear(), now.getMonth() - 3, 1);
            end = now;
        }

        if (start && end) {
            setDateRange({ start, end });
        }
    };

    const handleCustomDateApply = (start: Date, end: Date) => {
        setDateRange({ start, end });
    };

    const handleEditCommitment = (commitment: Commitment) => {
        setViewingCommitment(null);
        setEditingCommitment(commitment);
        setIsCommitmentModalOpen(true);
    };

    const handleDeleteCommitment = async (id: string) => {
        await deleteCommitment(id);
        setViewingCommitment(null); // Close details modal
    };

    const filteredTransactions = transactions.filter(t => {
        if (!dateRange.start || !dateRange.end) return true;
        const tDate = new Date(t.date); // Assuming t.date is ISO or Date object. Context says t.occurred_at mapped to t.date
        return tDate >= dateRange.start && tDate <= dateRange.end;
    });

    const monthlyIncome = filteredTransactions
        .filter(t => t.type === 'INCOME')
        .reduce((sum, t) => sum + t.amount, 0);

    const monthlyExpense = filteredTransactions
        .filter(t => t.type === 'EXPENSE')
        .reduce((sum, t) => sum + t.amount, 0);

    const currentMonthExpenses = React.useMemo(() => {
        return transactions.reduce((sum, t) => {
            const tDate = new Date(t.date);
            if (t.type === 'EXPENSE' && tDate >= currentMonthStart && tDate <= currentMonthEnd) {
                return sum + t.amount;
            }
            return sum;
        }, 0);
    }, [transactions, currentMonthStart, currentMonthEnd]);

    // Calculate "Total Planeado" (Budgeted) to match Budgets Page
    const totalPlannedBudget = React.useMemo(() => {
        // Just sum the limits of active budgets. 
        // This matches the "Total Planned" on the Budgets page.
        // We do typically assume these are Monthly limits.
        // If the date range is multiple months, the Budgets page currently shows just the single month limit,
        // so we mirror that behavior here to ensure consistency as requested ("jalar el dato de la pagina Presupuestos").
        return budgets
            .filter(b => b.period === 'MONTHLY')
            .reduce((sum, b) => sum + b.limit, 0);
    }, [budgets]);

    const calculatedSaldo = totalPlannedBudget - monthlyExpense;
    // Determine trend (positive if under budget / positive saldo)
    const saldoTrendPositive = calculatedSaldo >= 0;

    const currentMonthIncome = React.useMemo(() => {
        return transactions.reduce((sum, t) => {
            const tDate = new Date(t.date);
            if (t.type === 'INCOME' && tDate >= currentMonthStart && tDate <= currentMonthEnd) {
                return sum + t.amount;
            }
            return sum;
        }, 0);
    }, [transactions, currentMonthStart, currentMonthEnd]);

    const monthlyLimit = React.useMemo(() => {
        const monthlyBudgets = budgets.filter(b => b.period === 'MONTHLY');
        if (monthlyBudgets.length > 0) {
            return monthlyBudgets.reduce((sum, b) => sum + b.limit, 0);
        }
        return Math.max(currentMonthIncome * 0.8, currentMonthExpenses * 1.2, 1000);
    }, [budgets, currentMonthIncome, currentMonthExpenses]);

    const monthlyProgress = monthlyLimit > 0 ? (currentMonthExpenses / monthlyLimit) * 100 : 0;
    const monthlyRemaining = Math.max(monthlyLimit - currentMonthExpenses, 0);
    const dailyAllowance = monthlyLimit > 0 ? monthlyLimit / daysInMonth : 0;
    const dailySpent = daysElapsed > 0 ? currentMonthExpenses / daysElapsed : 0;
    const dailyTrendPositive = dailySpent <= dailyAllowance;
    const dailyTrendDelta = Math.abs(dailyAllowance - dailySpent);
    const dailyTrendMessage = dailyTrendPositive ? 'Vas por debajo del ritmo planificado' : 'Estás superando tu ritmo diario';

    const dailyExpensesData = React.useMemo(() => {
        const totals = new Map<string, number>();
        transactions.forEach((t) => {
            if (t.type !== 'EXPENSE') return;
            const tDate = new Date(t.date);
            if (tDate < currentMonthStart || tDate > currentMonthEnd) return;
            const key = tDate.toISOString().split('T')[0];
            totals.set(key, (totals.get(key) || 0) + t.amount);
        });
        const days = differenceInCalendarDays(currentMonthEnd, currentMonthStart) + 1;
        return Array.from({ length: days }, (_, idx) => {
            const date = addDays(currentMonthStart, idx);
            const key = date.toISOString().split('T')[0];
            return {
                label: format(date, 'd MMM', { locale: es }),
                amount: Number((totals.get(key) || 0).toFixed(2))
            };
        });
    }, [transactions, currentMonthStart, currentMonthEnd]);

    const nextCommitments = React.useMemo(() => {
        // Filter pending commitments
        const pending = commitments
            .filter(c => c.status === 'PENDING')
            .map(c => ({
                ...c,
                dueDateObj: c.nextDueDate ? new Date(c.nextDueDate) : null
            }))
            .filter(c => c.dueDateObj) // Ensure date exists
            .sort((a, b) => (a.dueDateObj!.getTime() - b.dueDateObj!.getTime()));

        return {
            top5: pending.slice(0, 5),
            remainingCount: Math.max(0, pending.length - 5)
        };
    }, [commitments]);

    // Expenses by Account and Category
    const { expensesByAccount, expensesByCategory } = React.useMemo(() => {
        const accMap = new Map<string, number>();
        const catMap = new Map<string, number>();

        // Filter transactions by current dateRange/activeTab
        // Note: filteredTransactions might already be filtered by dateRange if it depends on 'dateRange' state?
        // Let's verify 'transactions' raw data. 'transactions' from useFinance is usually ALL transactions. 
        // We need to filter by the CURRENT dashboard date range.

        const start = dateRange.start || startOfMonth(new Date());
        const end = dateRange.end || endOfMonth(new Date());
        // Adjust end to include full day
        const endInclusive = new Date(end);
        endInclusive.setHours(23, 59, 59, 999);

        // Filter transactions within range and type EXPENSE
        const relevantTransactions = transactions.filter(t => {
            if (t.type !== 'EXPENSE') return false;
            const tDate = new Date(t.date);
            return tDate >= start && tDate <= endInclusive;
        });

        relevantTransactions.forEach(t => {
            // By Account
            if (t.account_id) {
                accMap.set(t.account_id, (accMap.get(t.account_id) || 0) + t.amount);
            }
            // By Category
            if (t.category) {
                catMap.set(t.category, (catMap.get(t.category) || 0) + t.amount);
            }
        });

        const accData = Array.from(accMap.entries()).map(([id, amount]) => {
            const acc = accounts.find(a => a.id === id);
            return {
                id, // Added ID for navigation
                name: acc?.name || 'Desconocida',
                amount,
                type: acc?.type || 'CASH',
                color: '#6366f1'
            };
        }).sort((a, b) => b.amount - a.amount).slice(0, 5); // Top 5

        const catData = Array.from(catMap.entries()).map(([name, amount]) => {
            const cat = categories.find(c => c.name === name);
            const colorKey = cat?.color || 'slate';
            return {
                name,
                amount,
                colorKey,
                icon: cat?.icon || 'category'
            };
        }).sort((a, b) => b.amount - a.amount).slice(0, 5);

        return { expensesByAccount: accData, expensesByCategory: catData };
    }, [transactions, accounts, categories, dateRange]);

    const nextIncomeInfo = React.useMemo(() => {
        const start = startOfDay(today);
        let result: { rule: typeof recurringRules[number]; date: Date } | null = null;
        recurringRules.forEach(rule => {
            if (!rule.active || rule.type !== 'INCOME') return;
            const parsed = parseRuleDate(rule.nextDate);
            if (!parsed || parsed < start) return;
            if (!result || parsed < result.date) {
                result = { rule, date: parsed };
            }
        });
        return result;
    }, [recurringRules, parseRuleDate, today]);
    const daysUntilNextPay = nextIncomeInfo ? differenceInCalendarDays(startOfDay(nextIncomeInfo.date), startOfDay(today)) : null;

    // Chart Data Calculation
    // Calculate Balance at the END of the selected range
    const balanceAtEndOfRange = React.useMemo(() => {
        if (!dateRange.end) return totalBalance;

        // Transactions that happened AFTER the selected range
        // We need to "undo" them to get the balance at that point in time.
        // BalanceNow = BalanceOld + IncomeAfter - ExpenseAfter
        // BalanceOld = BalanceNow - IncomeAfter + ExpenseAfter
        const futureTransactions = transactions.filter(t => {
            const tDate = new Date(t.date);
            return tDate > dateRange.end!;
        });

        let calculatedBalance = totalBalance;
        futureTransactions.forEach(t => {
            if (t.type === 'INCOME') {
                calculatedBalance -= t.amount;
            } else if (t.type === 'EXPENSE') {
                calculatedBalance += t.amount;
            }
        });

        return calculatedBalance;
    }, [totalBalance, transactions, dateRange.end]);

    // Chart Data Calculation - Historical Balance
    const chartData = React.useMemo(() => {
        if (!dateRange.start || !dateRange.end) return [];

        const data: { name: string; total: number; originalDate: Date }[] = [];
        let currentBalance = balanceAtEndOfRange;

        // Create a map of transactions by day (for the range) for fast lookup
        const txsByDay: { [key: string]: { income: number, expense: number } } = {};

        filteredTransactions.forEach(t => {
            const dateStr = new Date(t.date).toISOString().split('T')[0];
            if (!txsByDay[dateStr]) txsByDay[dateStr] = { income: 0, expense: 0 };
            if (t.type === 'INCOME') txsByDay[dateStr].income += t.amount;
            if (t.type === 'EXPENSE') txsByDay[dateStr].expense += t.amount;
        });

        // Iterate BACKWARDS from End Date to Start Date
        const curr = new Date(dateRange.end);
        const start = new Date(dateRange.start);

        // Normalize time to midnight for loop comparison
        curr.setHours(0, 0, 0, 0);
        start.setHours(0, 0, 0, 0);

        while (curr >= start) {
            const dateStr = curr.toISOString().split('T')[0];
            const displayDate = curr.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });

            // Add point for End of Day balance
            data.unshift({
                name: displayDate,
                total: currentBalance,
                originalDate: new Date(curr)
            });

            // Calculate Start of Day Balance (which is End of Previous Day)
            // StartBal = EndBal - Income + Expense
            const dayTxs = txsByDay[dateStr] || { income: 0, expense: 0 };
            currentBalance = currentBalance - dayTxs.income + dayTxs.expense;

            // Move to previous day
            curr.setDate(curr.getDate() - 1);
        }

        return data;
        // Note: If range is huge, we might want to subsample, but for "This Month" it's fine (~30 points).
    }, [filteredTransactions, balanceAtEndOfRange, dateRange]);

    return (
        <div className="flex-1 w-full h-full overflow-y-auto scrollbar-hide pb-28 lg:pb-8">
            <div className="max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col gap-8">
                <header className="flex flex-wrap items-end justify-between gap-4 pt-4 md:pt-0 animate-fade-in">
                    <div className="flex flex-col gap-2">
                        <p className="text-text-muted dark:text-dark-muted text-sm font-semibold tracking-wide uppercase">
                            {new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date())}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white tracking-tight">Hola, {displayName.split(' ')[0]} <span className="text-2xl">👋</span></h2>
                        <p className="text-text-muted dark:text-dark-muted/80 text-base font-normal max-w-lg">Aquí tienes el resumen de tu actividad financiera.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsNotificationsOpen(true)}
                            className="btn-interact flex items-center justify-center rounded-xl size-11 bg-white dark:bg-[#292f38] text-text-muted dark:text-white hover:text-primary transition-colors border border-gray-200 dark:border-white/5 shadow-sm relative"
                        >
                            <span className="material-symbols-outlined">notifications</span>
                            {/* Dynamic Unread Badge */}
                            {unreadCount > 0 && (
                                <span className="absolute top-2.5 right-2.5 size-2 bg-danger rounded-full ring-2 ring-white dark:ring-background-dark"></span>
                            )}
                        </button>
                        <div
                            onClick={() => router.push('/profile')}
                            className="lg:hidden btn-interact bg-center bg-no-repeat bg-cover rounded-full size-11 shadow-md border border-white dark:border-white/10 ml-2 cursor-pointer"
                            style={{ backgroundImage: `url("${displayAvatar}")` }}
                        ></div>
                    </div>
                </header>

                <section className="flex overflow-x-auto pb-2 scrollbar-hide animate-fade-in">
                    <div className="glass-card p-1.5 rounded-xl flex gap-1 whitespace-nowrap">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === tab
                                    ? 'bg-primary/20 text-primary dark:text-white border border-primary/20 shadow-sm'
                                    : 'text-text-muted dark:text-dark-muted hover:bg-white/5 dark:hover:text-white'
                                    }`}
                            >
                                {tab}
                                {tab === 'Personalizado' && <span className="material-symbols-outlined text-[16px]">calendar_month</span>}
                            </button>
                        ))}
                    </div>
                </section>



                <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="glass-card rounded-3xl p-6 flex flex-col justify-between min-h-[160px] relative overflow-hidden group hover:shadow-soft transition-all duration-300">
                        <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-7xl">account_balance_wallet</span>
                        </div>
                        <div className="flex flex-col gap-1 z-10 w-full">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                                </div>
                                <p className="text-text-muted dark:text-dark-muted text-sm font-semibold">Saldo Restante</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className={`transition-all duration-300 ${!showBalance && 'filter blur-md select-none'}`}>
                                    <MoneyDisplay amount={calculatedSaldo} currency={currencySymbol} size="5xl" color="text-text-main dark:text-white" />
                                </div>
                                <button
                                    onClick={() => setShowBalance(!showBalance)}
                                    className="btn-interact text-text-muted dark:text-dark-muted hover:text-primary transition-colors p-2"
                                >
                                    <span className="material-symbols-outlined text-[20px]">{showBalance ? 'visibility' : 'visibility_off'}</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4 z-10">
                            <div className={`${saldoTrendPositive ? 'bg-success/10 border-success/20 text-success' : 'bg-danger/10 border-danger/20 text-danger'} px-2 py-0.5 rounded-md border flex items-center gap-1`}>
                                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                <span className="text-xs font-bold">{saldoTrendPositive ? 'En presupuesto' : 'Sobrepasado'}</span>
                            </div>
                            <p className="text-text-light dark:text-dark-muted/60 text-xs font-medium">vs periodo anterior</p>
                        </div>
                    </div>

                    <div className="glass-card rounded-3xl p-6 flex flex-col justify-between min-h-[160px] relative group hover:shadow-soft transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                <span className="material-symbols-outlined text-[20px]">savings</span>
                            </div>
                            <p className="text-text-muted dark:text-dark-muted text-sm font-semibold">Patrimonio Neto</p>
                        </div>
                        <MoneyDisplay amount={totalBalance} currency={currencySymbol} size="5xl" color="text-text-main dark:text-white" />
                        <div className="flex items-center gap-2 mt-4">
                            <div className={`px-2 py-0.5 rounded-md border flex items-center gap-1 ${(monthlyIncome - monthlyExpense) >= 0 ? 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-200 text-emerald-600' : 'bg-red-100 dark:bg-red-900/30 border-red-200 text-red-600'}`}>
                                <span className="material-symbols-outlined text-[14px]">{(monthlyIncome - monthlyExpense) >= 0 ? 'trending_up' : 'trending_down'}</span>
                                <span className="text-xs font-bold">{(monthlyIncome - monthlyExpense) >= 0 ? 'Positivo' : 'Negativo'}</span>
                            </div>
                            <p className="text-text-light dark:text-dark-muted/60 text-xs font-medium shrink-0">Flujo neto este mes</p>
                        </div>
                    </div>

                    <div className="glass-card rounded-3xl p-6 flex flex-col justify-between min-h-[160px] relative group hover:shadow-soft transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <span className="material-symbols-outlined text-[20px]">upcoming</span>
                            </div>
                            <p className="text-text-muted dark:text-dark-muted text-sm font-semibold">Por Pagar Restante</p>
                        </div>

                        {(() => {
                            const now = new Date();
                            // Logic Fix: Look until END OF CURRENT MONTH context, regardless of 'end' being today.
                            let periodEnd = dateRange.end || endOfMonth(now);

                            // Heuristic: If periodEnd is TODAY (or very close), and view is 'Este mes', extend to EOM.
                            if ((differenceInCalendarDays(periodEnd, now) <= 1 && activeTab === 'Este mes') || !dateRange.end) {
                                periodEnd = endOfMonth(now);
                            }
                            periodEnd.setHours(23, 59, 59, 999);

                            const pendingCommitments = commitments.filter(c => {
                                if (c.status !== 'PENDING') return false;
                                if (c.transaction_type === 'INCOME') return false; // Filter out income (Credit Card Payments etc)
                                if (!c.nextDueDate) return false;
                                const dueDate = new Date(c.nextDueDate);

                                // Show all FUTURE pending commitments up to the period end.
                                return dueDate >= startOfDay(now) && dueDate <= periodEnd;
                            });

                            const totalPending = pendingCommitments.reduce((sum, c) => sum + c.amount, 0);

                            return (
                                <>
                                    <MoneyDisplay amount={totalPending} currency={currencySymbol} size="5xl" color="text-text-main dark:text-white" />
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                                            <span className="text-xs font-bold">{pendingCommitments.length} pendientes</span>
                                        </div>
                                        <p className="text-text-light dark:text-dark-muted/60 text-xs font-medium shrink-0">hasta fin de periodo</p>
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Seguimiento de gastos */}
                    <div className="lg:col-span-2 glass-card rounded-3xl p-6 md:p-8 flex flex-col gap-4 border border-white/5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase text-text-muted dark:text-dark-muted/70 tracking-widest">Límite mensual</p>
                                <h3 className="text-2xl font-black text-text-main dark:text-white">Seguimiento de gastos</h3>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-text-muted dark:text-dark-muted/70">Gastado</p>
                                <p className="text-2xl font-bold text-primary">
                                    <span className="text-lg align-baseline mr-0.5">{currencySymbol}</span>
                                    {currentMonthExpenses.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-xs font-semibold text-text-muted dark:text-dark-muted mb-2">
                                <span>{monthlyProgress.toFixed(0)}% utilizado</span>
                                <span>Te quedan {currencySymbol}{monthlyRemaining.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="h-3 w-full bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                <div className={`h-full ${monthlyProgress > 95 ? 'bg-danger' : monthlyProgress > 80 ? 'bg-warning' : 'bg-primary'} transition-all duration-700`} style={{ width: `${Math.min(monthlyProgress, 130)}%` }}></div>
                            </div>
                            <div className="mt-2 text-xs text-text-muted dark:text-dark-muted flex items-center justify-between">
                                <span>Límite: {currencySymbol}{monthlyLimit.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                <span>Promedio diario permitido: {currencySymbol}{dailyAllowance.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={`px-4 py-3 rounded-2xl border ${dailyTrendPositive ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-900/20' : 'border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-900/50 dark:bg-orange-900/20'}`}>
                            <p className="text-sm font-semibold">{dailyTrendMessage}</p>
                            <p className="text-xs opacity-80">Diferencia diaria de {currencySymbol}{dailyTrendDelta.toFixed(2)} ({dailyTrendPositive ? 'por debajo' : 'por encima'} del ritmo).</p>
                        </div>
                        <div className="h-40">
                            <DashboardChart data={dailyExpensesData} currencySymbol={currencySymbol} />
                        </div>
                    </div>

                    {/* Actividad Reciente */}
                    <div className="glass-card rounded-3xl p-0 flex flex-col overflow-hidden">
                        <div className="p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
                            <h3 className="text-text-main dark:text-white text-lg font-bold">Actividad Reciente</h3>
                            <Link href="/transactions" className="text-primary text-xs font-bold hover:text-primary-hover transition-colors">VER TODO</Link>
                        </div>
                        <div className="flex-1 overflow-y-auto p-2 scrollbar-hide">
                            <div className="flex flex-col gap-1">
                                {filteredTransactions.slice(0, 8).map((t) => {
                                    const category = categories.find(c => c.name === t.category);
                                    const colorKey = category?.color || 'slate';
                                    const colors = COLOR_MAP[colorKey] || COLOR_MAP.slate;

                                    return (
                                        <div key={t.id} onClick={() => router.push(`/transaction/${t.id}`)} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className={`size-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 border ${colors.bg} ${colors.text} ${colors.border}`}>
                                                    <CategoryIcon icon={t.icon || 'payments'} className="text-[20px]" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-text-main dark:text-white text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">{t.description || t.category}</p>
                                                    <p className={`text-[11px] font-semibold ${colors.text}`}>{t.category || 'General'}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end whitespace-nowrap ml-2">
                                                <p className={`text-sm font-bold ${t.type === 'INCOME' ? 'text-success' : 'text-text-main dark:text-white'}`}>
                                                    {t.type === 'EXPENSE' ? '-' : '+'}
                                                    <span className="text-xs align-baseline mr-0.5">{currencySymbol}</span>
                                                    {t.amount.toFixed(2)}
                                                </p>
                                                <p className="text-text-light dark:text-dark-muted text-[10px] font-medium">{format(new Date(t.date), 'd MMM', { locale: es })}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Desglose de Gastos - Por Cuenta */}
                    <div className="glass-card rounded-3xl p-0 flex flex-col overflow-hidden border border-white/5">
                        <div className="p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Gastos por Cuenta</h3>
                            <button className="text-xs font-bold text-primary hover:text-primary-hover transition-colors">VER TODO</button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
                            <div className="flex flex-col gap-4">
                                {expensesByAccount.map((acc, idx) => {
                                    const styles = {
                                        CASH: { icon: 'payments', bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', label: '+ Liquidez' },
                                        BANK: { icon: 'account_balance', bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', label: 'Bancos' },
                                        CREDIT: { icon: 'credit_card', bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', label: 'Deuda' },
                                        INVESTMENT: { icon: 'savings', bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', label: 'Reserva' },
                                    }[acc.type as string] || { icon: 'wallet', bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400', label: 'Cuenta' };

                                    return (
                                        <div key={idx} onClick={() => router.push(`/accounts/${acc.id}`)} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className={`size-12 rounded-xl flex items-center justify-center ${styles.bg} ${styles.text}`}>
                                                    <span className="material-symbols-outlined">{styles.icon}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[15px] font-bold text-text-main dark:text-white">{acc.name}</span>
                                                    <span className="text-xs text-text-muted dark:text-dark-muted font-medium">{styles.label}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className="text-lg font-black text-text-main dark:text-white">{currencySymbol}{acc.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                                {expensesByAccount.length === 0 && (
                                    <div className="flex-1 flex flex-col items-center justify-center text-text-muted dark:text-dark-muted text-xs min-h-[150px]">
                                        <span className="material-symbols-outlined text-3xl opacity-50 mb-2">account_balance_wallet</span>
                                        No hay gastos registrados
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Desglose de Gastos - Por Categoría */}
                    <div className="glass-card rounded-3xl p-0 flex flex-col overflow-hidden border border-white/5">
                        <div className="p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold text-text-main dark:text-white">Gastos por Categoría</h3>
                                <p className="text-xs text-text-muted dark:text-dark-muted font-medium mt-1">¿En qué se fue el dinero?</p>
                            </div>
                            <button onClick={() => router.push('/budgets')} className="text-xs font-bold text-primary hover:text-primary-hover transition-colors">VER TODO</button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
                            <div className="flex flex-col gap-6">
                                {expensesByCategory.map((item, idx) => {
                                    const colors = COLOR_MAP[item.colorKey] || COLOR_MAP.slate;
                                    const maxAmount = Math.max(...expensesByCategory.map(i => i.amount), 1);
                                    const percent = (item.amount / maxAmount) * 100; // Relative to max bar - visual scaling
                                    const totalShare = (item.amount / (monthlyExpense || 1)) * 100; // Actual share of displayed period

                                    return (
                                        <div key={idx} className="flex flex-col gap-1.5">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <div className={`flex items-center justify-center size-8 rounded-full ${colors.bg} ${colors.text}`}>
                                                        <CategoryIcon icon={item.icon} className="text-[16px]" />
                                                    </div>
                                                    <span className="font-semibold text-text-main dark:text-white text-[15px]">{item.name}</span>
                                                </div>
                                                <span className="font-bold text-text-main dark:text-white text-[15px]">{totalShare.toFixed(0)}%</span>
                                            </div>
                                            <div className="h-2.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${colors.bg.replace('bg-', 'bg-').replace('dark:bg-', '')} ${colors.solid}`} style={{ width: `${Math.max(percent, 5)}%` }}></div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-sm font-medium text-gray-400">{currencySymbol}{item.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                                {expensesByCategory.length === 0 && (
                                    <div className="flex-1 flex flex-col items-center justify-center text-text-muted dark:text-dark-muted text-xs min-h-[150px]">
                                        <span className="material-symbols-outlined text-3xl opacity-50 mb-2">donut_small</span>
                                        No hay gastos por categoría
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-3xl p-0 flex flex-col overflow-hidden border border-white/5">
                        <div className="p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Próximos compromisos</h3>
                            <button onClick={() => router.push('/commitments')} className="text-xs font-bold text-primary hover:text-primary-hover transition-colors">VER TODO</button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
                            <div className="flex flex-col gap-3">
                                {nextCommitments.top5.length === 0 ? (
                                    <div className="flex-1 flex flex-col items-center justify-center text-center text-text-muted dark:text-dark-muted/70 text-sm min-h-[200px]">
                                        <span className="material-symbols-outlined text-3xl mb-2">event_available</span>
                                        No tienes compromisos pendientes.
                                    </div>
                                ) : (
                                    nextCommitments.top5.map((c) => {
                                        // Resolve Category Icon & Color
                                        const category = categories.find(cat => cat.id === c.categoryId) || categories.find(cat => cat.name === c.category);
                                        const categoryIcon = category?.icon || 'event';
                                        const colorKey = category?.color || 'slate';
                                        const colors = COLOR_MAP[colorKey] || COLOR_MAP.slate;

                                        // Correct Date Parsing (Local Time)
                                        const [y, m, d] = c.nextDueDate.split('-').map(Number);
                                        const dateObj = new Date(y, m - 1, d);

                                        return (
                                            <div
                                                key={c.id}
                                                onClick={() => setViewingCommitment(c)}
                                                className="flex items-center justify-between rounded-2xl border border-gray-100 dark:border-white/10 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`size-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 border ${colors.bg} ${colors.text} ${colors.border}`}>
                                                        <CategoryIcon icon={categoryIcon} className="text-[20px]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-text-main dark:text-white line-clamp-1">{c.name || 'Sin nombre'}</p>
                                                        <p className="text-xs text-text-muted dark:text-dark-muted capitalize">
                                                            {format(dateObj, "EEE d 'de' MMM", { locale: es })}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right shrink-0 ml-2">
                                                    <p className="text-base font-bold text-text-main dark:text-white">
                                                        <span className="text-xs align-baseline mr-0.5">{currencySymbol}</span>
                                                        {c.amount.toFixed(2)}
                                                    </p>
                                                    <p className="text-[10px] text-primary font-semibold uppercase tracking-widest leading-none">PENDIENTE</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                            {nextCommitments.remainingCount > 0 && (
                                <div className="mt-2 pt-3 border-t border-gray-100 dark:border-white/10 text-center">
                                    <p className="text-xs font-medium text-text-muted dark:text-dark-muted">
                                        Faltan <span className="text-text-main dark:text-white font-bold">{nextCommitments.remainingCount}</span> de compromisos
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>


            </div >

            <button onClick={openTransactionModal} className="btn-interact hidden lg:flex fixed z-50 bottom-12 right-12 size-16 bg-gradient-primary text-white rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.4)] items-center justify-center transition-all hover:scale-110 active:scale-95 group hover:shadow-primary/50">
                <span className="material-symbols-outlined text-4xl group-hover:rotate-90 transition-transform duration-500">add</span>
            </button>
            <DateRangeModal
                isOpen={isDateModalOpen}
                onClose={() => setIsDateModalOpen(false)}
                onApply={handleCustomDateApply}
                initialStartDate={dateRange.start}
                initialEndDate={dateRange.end}
            />
            <NotificationsModal isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />

            {/* Commitment Modals */}
            <CommitmentDetailsModal
                isOpen={!!viewingCommitment}
                onClose={() => setViewingCommitment(null)}
                commitment={viewingCommitment}
                onEdit={handleEditCommitment}
                onDelete={handleDeleteCommitment}
            />
            <CommitmentModal
                isOpen={isCommitmentModalOpen}
                onClose={() => setIsCommitmentModalOpen(false)}
                commitmentToEdit={editingCommitment}
            />
        </div >
    );
}
