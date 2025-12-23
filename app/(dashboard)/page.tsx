"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { DateRangeModal } from '@/components/DateRangeModal';
import { NotificationsModal } from '@/components/NotificationsModal';
import { CategoryIcon } from '@/components/CategoryIcon';
import { useFinance } from '@/context/FinanceContext';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { startOfMonth, endOfMonth, differenceInCalendarDays, addDays, startOfDay, format } from 'date-fns';
import { es } from 'date-fns/locale';



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
    const { transactions, accounts, totalBalance, budgets, commitments, recurringRules, categories, openTransactionModal, formatAmount, ledgers, activeBookId } = useFinance();
    const [showBalance, setShowBalance] = useState(true);
    const [activeTab, setActiveTab] = useState('Este mes');
    const [dateRange, setDateRange] = useState<{ start: Date | null, end: Date | null }>({
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        end: new Date()
    });
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

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
        return ledgers.find(l => l.id === activeBookId)?.currency || '$';
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

    const upcomingBills = React.useMemo(() => {
        const start = startOfDay(today);
        const limit = addDays(start, 5);
        return commitments
            .map(commitment => ({
                ...commitment,
                dueDateObj: commitment.nextDueDate ? new Date(commitment.nextDueDate) : null
            }))
            .filter(c => c.dueDateObj && c.dueDateObj >= start && c.dueDateObj <= limit)
            .sort((a, b) => (a.dueDateObj!.getTime() - b.dueDateObj!.getTime()))
            .slice(0, 5);
    }, [commitments, today]);

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
                        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white tracking-tight">Hola, Paul <span className="text-2xl">👋</span></h2>
                        <p className="text-text-muted dark:text-dark-muted/80 text-base font-normal max-w-lg">Aquí tienes el resumen de tu actividad financiera.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsNotificationsOpen(true)}
                            className="btn-interact flex items-center justify-center rounded-xl size-11 bg-white dark:bg-[#292f38] text-text-muted dark:text-white hover:text-primary transition-colors border border-gray-200 dark:border-white/5 shadow-sm relative"
                        >
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2.5 right-2.5 size-2 bg-danger rounded-full ring-2 ring-white dark:ring-background-dark"></span>
                        </button>
                        <div
                            onClick={() => router.push('/settings')}
                            className="lg:hidden btn-interact bg-center bg-no-repeat bg-cover rounded-full size-11 shadow-md border border-white dark:border-white/10 ml-2 cursor-pointer"
                            style={{ backgroundImage: 'url("https://picsum.photos/100/100?random=1")' }}
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
                        <div className="flex flex-col gap-1 z-10">
                            <p className="text-text-muted dark:text-dark-muted text-sm font-semibold">Saldo Total</p>
                            <div className="flex items-center gap-2">
                                <p className={`text-text-main dark:text-white text-3xl font-bold tracking-tight transition-all duration-300 ${!showBalance && 'blur-md select-none'}`}>
                                    {currencySymbol}{balanceAtEndOfRange.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </p>
                                <button
                                    onClick={() => setShowBalance(!showBalance)}
                                    className="btn-interact text-text-muted dark:text-dark-muted hover:text-primary transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[20px]">{showBalance ? 'visibility' : 'visibility_off'}</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4 z-10">
                            <div className="bg-success/10 px-2 py-0.5 rounded-md border border-success/20 flex items-center gap-1">
                                <span className="material-symbols-outlined text-success text-[14px]">trending_up</span>
                                <span className="text-success text-xs font-bold">+2.5%</span>
                            </div>
                            <p className="text-text-light dark:text-dark-muted/60 text-xs font-medium">vs mes anterior</p>
                        </div>
                    </div>
                    <div className="glass-card rounded-3xl p-6 flex flex-col justify-between min-h-[160px] relative group hover:shadow-soft transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-8 rounded-full bg-success/10 flex items-center justify-center text-success">
                                <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                            </div>
                            <p className="text-text-muted dark:text-dark-muted text-sm font-semibold">Ingresos</p>
                        </div>
                        <p className="text-text-main dark:text-white text-3xl font-bold tracking-tight">{currencySymbol}{monthlyIncome.toLocaleString()}</p>
                        <div className="flex items-center gap-2 mt-4">
                            <span className="text-success text-sm font-medium">+12%</span>
                            <p className="text-text-light dark:text-dark-muted/60 text-xs font-medium shrink-0">que lo habitual</p>
                            <div className="h-1.5 flex-1 bg-gray-100 dark:bg-[#292f38] rounded-full overflow-hidden ml-2">
                                <div className="h-full bg-success w-[75%] rounded-full transition-all duration-1000"></div>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card rounded-3xl p-6 flex flex-col justify-between min-h-[160px] relative group hover:shadow-soft transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-8 rounded-full bg-danger/10 flex items-center justify-center text-danger">
                                <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                            </div>
                            <p className="text-text-muted dark:text-dark-muted text-sm font-semibold">Gastos</p>
                        </div>
                        <p className="text-text-main dark:text-white text-3xl font-bold tracking-tight">{currencySymbol}{monthlyExpense.toLocaleString()}</p>
                        <div className="flex items-center gap-2 mt-4">
                            <span className="text-danger text-sm font-medium">-5%</span>
                            <p className="text-text-light dark:text-dark-muted/60 text-xs font-medium shrink-0">ahorro vs promedio</p>
                            <div className="h-1.5 flex-1 bg-gray-100 dark:bg-[#292f38] rounded-full overflow-hidden ml-2">
                                <div className="h-full bg-danger w-[35%] rounded-full transition-all duration-1000"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 glass-card rounded-3xl p-6 md:p-8 flex flex-col border border-white/5">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-text-main dark:text-white text-lg font-bold">Historial de Saldo</h3>
                                <p className="text-text-muted dark:text-dark-muted text-sm font-medium">Agregar Cuenta</p>
                            </div>
                            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-text-muted dark:text-dark-muted">more_horiz</span>
                            </button>
                        </div>
                        <div className="flex-1 h-[260px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#307de8" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#307de8" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9da9b8', fontWeight: 500 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9da9b8' }} />
                                    <Tooltip
                                        contentStyle={{
                                            borderRadius: '12px',
                                            border: 'none',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                                            backgroundColor: '#111821',
                                            color: '#fff'
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="total"
                                        stroke="#307de8"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorTotal)"
                                        className="chart-glow"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

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
                                                    <p className="text-text-main dark:text-white text-sm font-medium group-hover:text-primary transition-colors">{t.description || t.category}</p>
                                                    <p className={`text-[11px] font-semibold ${colors.text}`}>{t.category || 'General'}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <p className={`text-sm font-bold ${t.type === 'INCOME' ? 'text-success' : 'text-text-main dark:text-white'}`}>
                                                    {t.type === 'EXPENSE' ? '-' : '+'}{currencySymbol}{t.amount.toFixed(2)}
                                                </p>
                                                <p className="text-text-light dark:text-dark-muted text-[10px] font-medium">Hoy</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 glass-card rounded-3xl p-6 md:p-8 flex flex-col gap-4 border border-white/5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase text-text-muted dark:text-dark-muted/70 tracking-widest">Límite mensual</p>
                                <h3 className="text-2xl font-black text-text-main dark:text-white">Seguimiento de gastos</h3>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-text-muted dark:text-dark-muted/70">Gastado</p>
                                <p className="text-2xl font-bold text-primary">{currencySymbol}{currentMonthExpenses.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
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
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dailyExpensesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="dailyExpenseGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="label" tick={{ fontSize: 10, fill: '#94a3b8' }} interval={Math.ceil(dailyExpensesData.length / 6)} />
                                    <YAxis hide />
                                    <Tooltip
                                        formatter={(value: any) => [`${currencySymbol}${Number(value).toFixed(2)}`, 'Gasto']}
                                        labelFormatter={(label) => label}
                                        contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                                    />
                                    <Area type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={3} fill="url(#dailyExpenseGradient)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="glass-card rounded-3xl p-6 border border-white/5 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Próximas facturas</h3>
                            <span className="text-xs font-semibold text-text-muted dark:text-dark-muted/70">Próx. 5 días</span>
                        </div>
                        {upcomingBills.length === 0 ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-center text-text-muted dark:text-dark-muted/70 text-sm">
                                <span className="material-symbols-outlined text-3xl mb-2">event_available</span>
                                No tienes pagos pendientes en los próximos días.
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {upcomingBills.map((bill) => (
                                    <div key={bill.id} className="flex items-center justify-between rounded-2xl border border-gray-100 dark:border-white/10 px-4 py-3">
                                        <div>
                                            <p className="text-sm font-semibold text-text-main dark:text-white">{bill.name}</p>
                                            <p className="text-xs text-text-muted dark:text-dark-muted">{bill.dueDateObj ? format(bill.dueDateObj, "EEE d 'de' MMM", { locale: es }) : 'Sin fecha'}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-base font-bold text-text-main dark:text-white">{currencySymbol}{bill.amount.toFixed(2)}</p>
                                            <p className="text-[10px] text-primary font-semibold uppercase tracking-widest">{bill.frequency}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="glass-card rounded-3xl p-6 border border-white/5 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Próximo pago</h3>
                            <button onClick={() => router.push('/rules')} className="text-xs font-bold text-primary hover:text-primary-hover">Configurar</button>
                        </div>
                        {nextIncomeInfo ? (
                            <>
                                <div>
                                    <p className="text-4xl font-black text-primary">{daysUntilNextPay ?? 0}<span className="text-base font-medium text-text-muted dark:text-dark-muted ml-2">días</span></p>
                                    <p className="text-sm text-text-muted dark:text-dark-muted/70">para {nextIncomeInfo.rule.name}</p>
                                </div>
                                <div className="bg-primary/10 text-primary rounded-2xl px-4 py-3">
                                    <p className="text-sm font-semibold">{currencySymbol}{nextIncomeInfo.rule.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })} entrarán a {nextIncomeInfo.rule.account}</p>
                                    <p className="text-xs opacity-80">Fecha estimada: {format(nextIncomeInfo.date, "EEEE d 'de' MMMM", { locale: es })}</p>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-center text-text-muted dark:text-dark-muted/70 text-sm">
                                <span className="material-symbols-outlined text-3xl mb-2">hourglass_empty</span>
                                Aún no registras reglas de ingresos activas.
                            </div>
                        )}
                    </div>
                </section>

                <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="text-text-main dark:text-white text-lg font-bold">Mis Cuentas</h3>
                        <div className="flex gap-2">
                            <button className="size-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 text-text-muted dark:text-dark-muted transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
                            <button className="size-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 text-text-main dark:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {accounts.map((acc) => (
                            <div key={acc.id} onClick={() => router.push('/accounts')} className="btn-interact glass-card p-5 rounded-xl border border-gray-200 dark:border-white/5 hover:-translate-y-1 hover:shadow-soft transition-transform duration-300 cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="size-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-text-main dark:text-white border border-gray-100 dark:border-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">account_balance</span>
                                    </div>
                                    <span className="text-xs font-bold bg-gray-100 dark:bg-[#292f38] text-text-muted dark:text-dark-muted px-2 py-1 rounded uppercase tracking-widest">{acc.type}</span>
                                </div>
                                <div>
                                    <p className="text-text-muted dark:text-dark-muted text-xs mb-1 font-medium">{acc.name}</p>
                                    <p className="text-text-main dark:text-white text-xl font-bold tracking-tight">**** {acc.lastFour}</p>
                                    <p className="text-text-main dark:text-white text-lg font-medium mt-2">{currencySymbol}{acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                </div>
                            </div>
                        ))}
                        <div onClick={() => router.push('/accounts/add')} className="btn-interact p-5 rounded-xl border border-dashed border-gray-300 dark:border-white/10 flex flex-col items-center justify-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors min-h-[160px] group">
                            <div className="size-12 rounded-full bg-gray-50 dark:bg-[#292f38] flex items-center justify-center text-text-muted dark:text-dark-muted">
                                <span className="material-symbols-outlined">add</span>
                            </div>
                            <p className="text-text-muted dark:text-dark-muted text-sm font-medium">Agregar Cuenta</p>
                        </div>
                    </div>
                </section>
            </div>

            <button onClick={openTransactionModal} className="btn-interact fixed z-50 bottom-24 lg:bottom-12 right-6 md:right-12 size-14 md:size-16 bg-primary hover:bg-primary-hover text-white rounded-full shadow-[0_8px_30px_rgba(48,125,232,0.4)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group">
                <span className="material-symbols-outlined text-3xl md:text-4xl group-hover:rotate-90 transition-transform duration-500">add</span>
            </button>
            <DateRangeModal
                isOpen={isDateModalOpen}
                onClose={() => setIsDateModalOpen(false)}
                onApply={handleCustomDateApply}
                initialStartDate={dateRange.start}
                initialEndDate={dateRange.end}
            />
            <NotificationsModal isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
        </div >
    );
}
