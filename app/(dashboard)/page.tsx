"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { DateRangeModal } from '@/components/DateRangeModal';
import { useFinance } from '@/context/FinanceContext';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';



export default function Dashboard() {
    const router = useRouter();
    const { transactions, accounts, totalBalance } = useFinance();
    const [showBalance, setShowBalance] = useState(true);
    const [activeTab, setActiveTab] = useState('Este mes');
    const [dateRange, setDateRange] = useState<{ start: Date | null, end: Date | null }>({
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        end: new Date()
    });
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);

    const tabs = ['Este mes', 'Mes pasado', 'Últimos 3 meses', 'Personalizado'];

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
                            onClick={() => router.push('/notifications')}
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
                                    ${balanceAtEndOfRange.toLocaleString('en-US', { minimumFractionDigits: 2 })}
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
                        <p className="text-text-main dark:text-white text-3xl font-bold tracking-tight">${monthlyIncome.toLocaleString()}</p>
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
                        <p className="text-text-main dark:text-white text-3xl font-bold tracking-tight">${monthlyExpense.toLocaleString()}</p>
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
                                <p className="text-text-muted dark:text-dark-muted text-xs font-medium">Evolución del balance en el periodo</p>
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
                                {filteredTransactions.slice(0, 8).map((t) => (
                                    <div key={t.id} onClick={() => router.push(`/transaction/${t.id}`)} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-full bg-gray-50 dark:bg-[#292f38] flex items-center justify-center text-text-main dark:text-white border border-gray-100 dark:border-white/5 transition-transform group-hover:scale-105">
                                                <span className="material-symbols-outlined text-[20px]">{t.icon}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-text-main dark:text-white text-sm font-medium group-hover:text-primary transition-colors">{t.description}</p>
                                                <p className="text-text-muted dark:text-dark-muted text-xs">{t.category}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <p className={`text-sm font-bold ${t.type === 'INCOME' ? 'text-success' : 'text-text-main dark:text-white'}`}>
                                                {t.type === 'EXPENSE' ? '-' : '+'}${t.amount.toFixed(2)}
                                            </p>
                                            <p className="text-text-light dark:text-dark-muted text-[10px] font-medium">Hoy</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                                    <p className="text-text-main dark:text-white text-lg font-medium mt-2">${acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
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

            <button onClick={() => router.push('/edit-transaction')} className="btn-interact fixed z-50 bottom-24 lg:bottom-12 right-6 md:right-12 size-14 md:size-16 bg-primary hover:bg-primary-hover text-white rounded-full shadow-[0_8px_30px_rgba(48,125,232,0.4)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group">
                <span className="material-symbols-outlined text-3xl md:text-4xl group-hover:rotate-90 transition-transform duration-500">add</span>
            </button>
            <DateRangeModal
                isOpen={isDateModalOpen}
                onClose={() => setIsDateModalOpen(false)}
                onApply={handleCustomDateApply}
                initialStartDate={dateRange.start}
                initialEndDate={dateRange.end}
            />
        </div>
    );
}
