"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { LineChart, Line, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { MoneyDisplay } from '@/components/MoneyDisplay';
import { AccountModal } from '@/components/AccountModal';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Accounts() {
    const router = useRouter();
    const { accounts, totalBalance, ledgers, activeBookId, addAccount, updateAccount, deleteAccount, transactions, commitments } = useFinance();

    // Modal & Form State
    // Modal & Form State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAccount, setEditingAccount] = useState<any>(null);

    // Delete Modal State
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [accountToDelete, setAccountToDelete] = useState<any>(null);

    const openCreateModal = () => {
        setEditingAccount(null);
        setIsModalOpen(true);
    };

    const handleEdit = (acc: any) => {
        setEditingAccount(acc);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (acc: any) => {
        setAccountToDelete(acc);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (accountToDelete) {
            await deleteAccount(accountToDelete.id);
            setIsDeleteModalOpen(false);
            setAccountToDelete(null);
        }
    };



    // Dropdown Component Helper
    const AccountActions = ({ account }: { account: any }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="relative z-50">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }}
                    onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                    className="text-slate-300 hover:text-slate-500 transition-colors p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <span className="material-symbols-outlined">more_horiz</span>
                </button>
                {isOpen && (
                    <div className="absolute right-0 top-8 w-32 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-[100] animate-scale-in origin-top-right">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(account);
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-[16px]">edit</span>
                            Editar
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteClick(account);
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 border-t border-slate-100 dark:border-slate-700"
                        >
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                            Eliminar
                        </button>
                    </div>
                )}
            </div>
        );
    }

    const currencySymbol = useMemo(() => {
        const curr = ledgers.find(l => l.id === activeBookId)?.currency || 'PEN';
        return curr === 'PEN' ? 'S/' : (curr === 'USD' ? '$' : curr);
    }, [ledgers, activeBookId]);

    // Calculate metrics
    const totalAssets = accounts.filter(acc => acc.type !== 'CREDIT').reduce((sum, acc) => sum + acc.balance, 0);
    const totalLiabilities = accounts.filter(acc => acc.type === 'CREDIT').reduce((sum, acc) => sum + Math.abs(acc.balance), 0);

    // Net Worth Comparison Logic
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    const monthlyCashFlow = transactions
        .filter(t => {
            const tDate = new Date(t.date);
            return tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear;
        })
        .reduce((sum, t) => {
            if (t.type === 'INCOME') return sum + t.amount;
            if (t.type === 'EXPENSE') return sum - t.amount;
            return sum;
        }, 0);

    const previousNetWorth = totalBalance - monthlyCashFlow;
    const netWorthChange = totalBalance - previousNetWorth;
    const netWorthChangePercent = previousNetWorth !== 0 ? (netWorthChange / Math.abs(previousNetWorth)) * 100 : 0;
    const isPositiveNetWorthChange = netWorthChange >= 0;

    // Credit Line Logic
    const activeCreditAccounts = accounts.filter(acc => acc.type === 'CREDIT' && acc.status !== 'Inactive');
    const totalCreditLimit = activeCreditAccounts.reduce((sum, acc) => sum + (acc.creditLimit || 0), 0);
    const totalAvailableCredit = activeCreditAccounts.reduce((sum, acc) => {
        const limit = acc.creditLimit || 0;
        const used = Math.abs(acc.balance);
        return sum + Math.max(0, limit - used);
    }, 0);

    // Calculate percentage of available credit vs total limit
    const availableCreditPercent = totalCreditLimit > 0 ? (totalAvailableCredit / totalCreditLimit) * 100 : 0;

    const accountTypes = [
        { id: 'cash', label: 'Efectivo', icon: 'payments' },
        { id: 'bank', label: 'Banco', icon: 'account_balance' },
        { id: 'credit', label: 'Tarjeta', icon: 'credit_card' },
        { id: 'investment', label: 'Inversión', icon: 'trending_up' },
        { id: 'other', label: 'Otro', icon: 'category' },
    ];

    const colors = [
        { id: 'blue', hex: '#307de8' },
        { id: 'green', hex: '#10b981' },
        { id: 'amber', hex: '#f59e0b' },
        { id: 'red', hex: '#ef4444' },
        { id: 'purple', hex: '#8b5cf6' },
        { id: 'pink', hex: '#ec4899' },
        { id: 'gray', hex: '#6b7280' },
    ];

    // Logic for "Deuda Total" status card
    const debtStatusLabel = useMemo(() => {
        const creditAccountIds = accounts.filter(a => a.type === 'CREDIT').map(a => a.id);
        if (creditAccountIds.length === 0 || !commitments) return { text: 'Pagos al día', icon: 'check_circle', color: 'text-slate-500' };

        // Find relevant commitments (linked to credit accounts)
        // STRICTLY filter for 'INCOME' type, which represents PAYMENTS TO THE CARD
        const creditCommitments = commitments.filter(c =>
            (creditAccountIds.includes(c.accountId || '') || creditAccountIds.includes(c.fundingAccountId || '')) &&
            c.isActive &&
            c.transaction_type === 'INCOME'
        );

        if (creditCommitments.length === 0) return { text: 'Pagos al día', icon: 'check_circle', color: 'text-slate-500' };

        // Sort by nextDueDate descending to capture the most relevant upcoming or recent cycle
        const latestInfo = creditCommitments.sort((a, b) => new Date(b.nextDueDate).getTime() - new Date(a.nextDueDate).getTime())[0];

        if (!latestInfo) return { text: 'Pagos al día', icon: 'check_circle', color: 'text-slate-500' };

        if (latestInfo.status === 'PAID') {
            return { text: 'Último pago realizado', icon: 'check_circle', color: 'text-emerald-500' };
        } else {
            // Pending or Late
            // Fix: Parse YYYY-MM-DD as LOCAL midnight to prevent timezone shift (UTC->Local)
            // If it's just a date string, appending T00:00:00 forces local parsing
            const dateStrRaw = latestInfo.nextDueDate.includes('T') ? latestInfo.nextDueDate : `${latestInfo.nextDueDate}T00:00:00`;
            const date = new Date(dateStrRaw);

            const dateStr = format(date, "d 'de' MMM", { locale: es });
            const isLate = new Date() > date;
            return {
                text: isLate ? `Venció el ${dateStr}` : `Vence el ${dateStr}`,
                icon: isLate ? 'warning' : 'schedule',
                color: isLate ? 'text-red-500' : 'text-amber-500'
            };
        }
    }, [commitments, accounts]);

    // Mock data for sparklines
    const mockTrendData = [
        { value: 100 }, { value: 110 }, { value: 105 }, { value: 125 }, { value: 120 }, { value: 140 }, { value: 135 }
    ];
    const mockTrendDataStable = [
        { value: 100 }, { value: 102 }, { value: 101 }, { value: 103 }, { value: 102 }, { value: 104 }, { value: 103 }
    ];

    const assetsList = accounts.filter(acc => acc.type !== 'CREDIT');
    const liabilitiesList = accounts.filter(acc => acc.type === 'CREDIT');

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
                        <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-[#111418] dark:text-white">Mis Cuentas</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-lg font-normal">
                            Visión general de tu liquidez y patrimonio.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button
                            onClick={openCreateModal}
                            className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 h-12"
                        >
                            <span className="material-symbols-outlined text-[20px]">add_circle</span>
                            <span className="text-sm">Nueva Cuenta</span>
                        </button>
                    </div>
                </header>

                {/* Summary Metrics */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {/* Patrimonio Neto Total */}
                    <div className="glass-card p-5 rounded-3xl flex flex-col justify-between relative overflow-hidden group border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 min-h-[160px]">
                        <div className="flex flex-col gap-1 z-10">
                            <div className="h-6 flex items-center">
                                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">PATRIMONIO NETO TOTAL</p>
                            </div>
                            <div className="h-12 flex items-center mt-1">
                                <MoneyDisplay
                                    amount={totalBalance}
                                    currency={currencySymbol}
                                    size="3xl"
                                    color="text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>
                        <div className="h-10 flex items-end z-10">
                            <div className="flex items-center gap-2">
                                <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${isPositiveNetWorthChange ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`}>
                                    <span className="material-symbols-outlined text-[14px]">{isPositiveNetWorthChange ? 'trending_up' : 'trending_down'}</span>
                                    <span className="text-xs font-bold">{Math.abs(netWorthChangePercent).toFixed(1)}%</span>
                                </div>
                                <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">vs mes anterior</span>
                            </div>
                        </div>
                        {/* Decorative Icon */}
                        <div className="absolute top-3 right-3 opacity-5 dark:opacity-10 scale-100">
                            <span className="material-symbols-outlined text-7xl text-slate-500">account_balance</span>
                        </div>
                    </div>

                    {/* Línea Disponible */}
                    <div className="glass-card p-5 rounded-3xl flex flex-col justify-between relative overflow-hidden group border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 min-h-[160px]">
                        <div className="flex flex-col gap-1 z-10">
                            <div className="h-6 flex items-center">
                                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">LÍNEA DISPONIBLE</p>
                            </div>
                            <div className="h-12 flex items-center mt-1">
                                <MoneyDisplay
                                    amount={totalAvailableCredit}
                                    currency={currencySymbol}
                                    size="3xl"
                                    color="text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>
                        <div className="h-10 w-full flex items-end">
                            {/* Simple visual cue for credit availability */}
                            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-indigo-500 w-full opacity-50 transition-all duration-1000 ease-out"
                                    style={{ width: `${availableCreditPercent}%` }}
                                ></div>
                            </div>
                        </div>
                        {/* Decorative Icon */}
                        <div className="absolute top-3 right-3 opacity-5 dark:opacity-10 scale-100">
                            <span className="material-symbols-outlined text-7xl text-indigo-500">credit_score</span>
                        </div>
                    </div>

                    {/* Deuda Total */}
                    <div className="glass-card p-5 rounded-3xl flex flex-col justify-between relative overflow-hidden group border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 min-h-[160px]">
                        <div className="flex flex-col gap-1 z-10">
                            <div className="h-6 flex items-center">
                                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">DEUDA TOTAL</p>
                            </div>
                            <div className="h-12 flex items-center mt-1">
                                <MoneyDisplay
                                    amount={totalLiabilities}
                                    currency={currencySymbol}
                                    size="3xl"
                                    color="text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>
                        <div className="h-10 flex items-end z-10">
                            <div className="flex items-center gap-2">
                                <span className={`material-symbols-outlined text-[16px] ${debtStatusLabel.color === 'text-slate-500' ? 'text-slate-400' : debtStatusLabel.color}`}>{debtStatusLabel.icon}</span>
                                <span className={`${debtStatusLabel.color === 'text-slate-500' ? 'text-slate-500 dark:text-slate-400' : debtStatusLabel.color} text-xs font-medium`}>{debtStatusLabel.text}</span>
                            </div>
                        </div>
                        {/* Decorative Icon */}
                        <div className="absolute top-3 right-3 opacity-5 dark:opacity-10 scale-100">
                            <span className="material-symbols-outlined text-7xl text-orange-500">trending_down</span>
                        </div>
                    </div>
                </section>

                {/* Assets Section */}
                <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <div className="size-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                            </div>
                            Efectivo y Bancos
                        </h3>
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tabular-nums bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full flex items-center">
                            <MoneyDisplay amount={totalAssets} currency={currencySymbol} size="lg" color="text-slate-500 dark:text-slate-400" />
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {assetsList.map((acc, idx) => (
                            <div key={acc.id} onClick={() => router.push(`/accounts/${acc.id}`)} className="glass-card !overflow-visible p-5 rounded-3xl flex flex-col gap-5 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 group">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200">
                                            <span className="material-symbols-outlined text-[20px]">
                                                {acc.type === 'CASH' ? 'payments' : 'account_balance'}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{acc.name}</h4>
                                            <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide mt-0.5">**** {acc.lastFour || '----'}</p>
                                        </div>
                                    </div>
                                    <div onClick={(e) => e.stopPropagation()}>
                                        <AccountActions account={acc} />
                                    </div>
                                </div>

                                <div>
                                    <p className="tracking-tight">
                                        <MoneyDisplay amount={acc.balance} currency={currencySymbol} size="4xl" />
                                    </p>
                                </div>

                                <div className="flex items-end justify-between mt-auto">
                                    <div className="w-20 h-8">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={idx % 2 === 0 ? mockTrendData : mockTrendDataStable}>
                                                <Line type="monotone" dataKey="value" stroke={idx % 2 === 0 ? "#10b981" : "#94a3b8"} strokeWidth={2} dot={false} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">7 Días</p>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold ${idx % 2 === 0 ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}>
                                        {idx % 2 === 0 ? 'Estable' : 'Sin cambios'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Liabilities Section */}
                <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <div className="size-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[20px]">credit_card</span>
                            </div>
                            Tarjetas de Crédito
                        </h3>
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tabular-nums bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full flex items-center">
                            <MoneyDisplay amount={-Math.abs(totalLiabilities)} currency={currencySymbol} size="lg" color="text-slate-500 dark:text-slate-400" />
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {liabilitiesList.map((acc) => {
                            const usedAmount = Math.abs(acc.balance);
                            const limit = acc.creditLimit || 0;
                            // Available: Calculate dynamically as Limit - Used to ensure it's always up to date.
                            const available = limit - usedAmount;

                            // Prevent division by zero
                            const usagePercent = limit > 0 ? (usedAmount / limit) * 100 : 0;

                            // Format Dates if present
                            const cutoffLabel = acc.cutoffDay ? `Cierre: ${acc.cutoffDay}` : '';
                            const payLabel = acc.payDay ? `Pago: ${acc.payDay}` : '';

                            return (
                                <div key={acc.id} onClick={() => router.push(`/accounts/${acc.id}`)} className="glass-card !overflow-visible p-6 rounded-3xl flex flex-col gap-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 group">
                                    {/* Header */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                                <span className="font-black text-[10px] tracking-tighter">{acc.network || 'CARD'}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 dark:text-white">{acc.name}</h4>
                                                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide mt-0.5">**** {acc.lastFour || '----'}</p>
                                            </div>
                                        </div>
                                        <div onClick={(e) => e.stopPropagation()}>
                                            <AccountActions account={acc} />
                                        </div>
                                    </div>

                                    {/* Main Info: Used vs Available */}
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Línea Utilizada</p>
                                        <p className="tracking-tight leading-none">
                                            <MoneyDisplay amount={usedAmount} currency={currencySymbol} size="4xl" color="text-slate-900 dark:text-white" />
                                        </p>

                                        <div className="flex items-center gap-2 mt-1">
                                            <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Disponible:</p>
                                            <p className={`text-sm font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-md ${available >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                                                {currencySymbol}{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(available)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Dates Badges */}
                                    {(cutoffLabel || payLabel) && (
                                        <div className="flex gap-2">
                                            {cutoffLabel && (
                                                <span className="px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-[10px] font-bold border border-orange-100 dark:border-orange-800/50">
                                                    {cutoffLabel}
                                                </span>
                                            )}
                                            {payLabel && (
                                                <span className="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-[10px] font-bold border border-red-100 dark:border-red-800/50">
                                                    {payLabel}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Progress Bar */}
                                    <div className="mt-auto">
                                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                            <span>Uso del crédito</span>
                                            <span className={`${usagePercent > 80 ? 'text-red-500' : 'text-slate-500'}`}>{usagePercent.toFixed(0)}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${usagePercent > 85 ? 'bg-red-500' :
                                                    usagePercent > 50 ? 'bg-amber-500' : 'bg-indigo-500'
                                                    }`}
                                                style={{ width: `${Math.min(usagePercent, 100)}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* ACCOUNT DETAILS MODAL */}
            {/* ACCOUNT DETAILS MODAL */}
            <AccountModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                account={editingAccount}
            />

            {/* DELETE MODAL */}
            {isDeleteModalOpen && accountToDelete && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
                    <div className="w-full max-w-sm bg-white dark:bg-[#1e293b] rounded-[2rem] shadow-2xl p-6 animate-scale-in border border-slate-200 dark:border-slate-700">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="size-16 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-3xl text-red-500">priority_high</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">¿Eliminar cuenta?</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                Estás a punto de eliminar <strong>{accountToDelete.name}</strong>. Esta acción no se puede deshacer.
                            </p>
                            <div className="flex gap-3 w-full mt-4">
                                <button
                                    onClick={() => setIsDeleteModalOpen(false)}
                                    className="flex-1 px-4 py-2.5 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-bold text-sm transition-colors bg-slate-100 dark:bg-slate-800"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm shadow-md shadow-red-500/20 transition-all"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
