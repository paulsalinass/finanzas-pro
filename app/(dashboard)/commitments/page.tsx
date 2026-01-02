"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { CommitmentModal } from '@/components/CommitmentModal';
import { DateRangeModal } from '@/components/DateRangeModal';
import { DeleteConfirmModal } from '@/components/DeleteConfirmModal';
import { CommitmentDetailsModal } from '@/components/CommitmentDetailsModal';
import { Commitment } from '@/types';
import { MoneyDisplay } from '@/components/MoneyDisplay';

export default function Commitments() {
    const router = useRouter();
    const { commitments, toggleCommitmentStatus, deleteCommitment, ledgers, activeBookId, categories } = useFinance();
    const activeLedger = ledgers.find(l => l.id === activeBookId);
    const currencyCode = activeLedger?.currency || 'USD';
    const currencySymbol = currencyCode === 'PEN' ? 'S/' : (currencyCode === 'EUR' ? '€' : '$');

    const [filter, setFilter] = useState<'all' | 'pending' | 'paid'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    const [dateRange, setDateRange] = useState<{ start: Date | null, end: Date | null }>({
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) // End of this month
    });
    const [editingCommitment, setEditingCommitment] = useState<Commitment | null>(null);
    const [viewingCommitment, setViewingCommitment] = useState<Commitment | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [commitmentToDelete, setCommitmentToDelete] = useState<string | null>(null);

    const handleCreate = () => {
        setEditingCommitment(null);
        setIsModalOpen(true);
    };

    const handleEdit = (commitment: Commitment) => {
        setViewingCommitment(null); // Close details if open
        setEditingCommitment(commitment);
        setIsModalOpen(true);
    };

    const handleViewDetails = (commitment: Commitment) => {
        setViewingCommitment(commitment);
    };

    const handleDelete = (id: string) => {
        setCommitmentToDelete(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (commitmentToDelete) {
            await deleteCommitment(commitmentToDelete);
            setIsDeleteModalOpen(false);
            setCommitmentToDelete(null);
        }
    };

    const handleDateApply = (start: Date, end: Date) => {
        setDateRange({ start, end });
    };

    // 1. First, filter by Date Range (Global for page)
    const commitmentsInDateRange = commitments.filter(c => {
        if (!dateRange.start || !dateRange.end) return true;

        // Parse YYYY-MM-DD explicitly to Local Time
        const parts = c.nextDueDate.split('-');
        if (parts.length === 3) {
            const year = parseInt(parts[0]);
            const month = parseInt(parts[1]) - 1;
            const day = parseInt(parts[2]);
            const d = new Date(year, month, day);

            // Normalize comparison dates
            const start = new Date(dateRange.start);
            start.setHours(0, 0, 0, 0);

            const end = new Date(dateRange.end);
            end.setHours(23, 59, 59, 999);

            if (!isNaN(d.getTime())) {
                return d >= start && d <= end;
            }
        }
        return true;
    });

    // 2. Compute Statistics based on Date Range ONLY
    // Filter to include only expenses (exclude INCOME) as requested
    const expenseCommitments = commitmentsInDateRange.filter(c => c.transaction_type !== 'INCOME');
    const totalPlanificado = expenseCommitments.reduce((sum, c) => sum + c.amount, 0);
    const yaPagado = expenseCommitments.filter(c => c.status === 'PAID').reduce((sum, c) => sum + c.amount, 0);
    const porPagar = totalPlanificado - yaPagado;
    const progressPercent = totalPlanificado > 0 ? (yaPagado / totalPlanificado) * 100 : 0;
    const pendingCount = expenseCommitments.filter(c => c.status === 'PENDING').length;

    // 3. Compute Next Payment from Date Range (ignoring list search/tabs)
    // Also include INCOME types (Credit Card payments) in next payment alert
    const nextPayment = commitmentsInDateRange
        .filter(c => c.status === 'PENDING')
        .sort((a, b) => {
            // Parse dates manually for sort stability
            const da = new Date(a.nextDueDate + 'T00:00:00');
            const db = new Date(b.nextDueDate + 'T00:00:00');
            return da.getTime() - db.getTime();
        })[0];

    // 4. Finally, filter for the List (Search + Status)
    const filteredCommitments = commitmentsInDateRange.filter(c => {
        // Search Filter
        if (searchTerm && !c.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        // Status Filter
        if (filter === 'pending') return c.status === 'PENDING';
        if (filter === 'paid') return c.status === 'PAID';
        return true;
    }).sort((a, b) => {
        const da = new Date(a.nextDueDate);
        const db = new Date(b.nextDueDate);
        return da.getTime() - db.getTime();
    });

    const getDaysUntilDue = (dateStr: string) => {
        const diff = new Date(dateStr).getTime() - new Date().setHours(0, 0, 0, 0);
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            <main className="flex-1 overflow-y-auto p-6 md:p-10 pb-40 scroll-smooth scrollbar-hide">
                <div className="max-w-[1200px] mx-auto pb-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 animate-fade-in">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white">Compromisos y Gastos Fijos</h1>
                            </div>
                            <p className="text-[#637288] dark:text-slate-400 text-base">Planifica y controla tus pagos recurrentes sin estrés.</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => setIsDateModalOpen(true)} className="flex items-center justify-center gap-2 h-11 px-3 md:px-5 rounded-xl bg-white dark:bg-slate-800 border border-[#dce0e5] dark:border-slate-700 text-[#111418] dark:text-white text-xs md:text-sm font-semibold shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-all whitespace-nowrap">
                                <span className="material-symbols-outlined text-[18px] md:text-[20px]">calendar_month</span>
                                <span className="capitalize">{dateRange.start ? dateRange.start.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }) : 'Ver Calendario'}</span>
                                <span className="material-symbols-outlined text-[18px] md:text-[20px]">arrow_drop_down</span>
                            </button>
                            <button onClick={handleCreate} className="flex items-center justify-center gap-2 h-11 px-3 md:px-5 rounded-xl bg-primary text-white text-xs md:text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all whitespace-nowrap">
                                <span className="material-symbols-outlined text-[18px] md:text-[20px]">add</span>
                                <span>Nuevo Gasto Fijo</span>
                            </button>
                        </div>
                    </div>

                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        {/* Next Payment Card */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group border-orange-100 dark:border-orange-900/30 bg-white/60 dark:bg-slate-900/60 min-h-[160px]">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-8xl text-orange-500">calendar_clock</span>
                            </div>
                            <div className="h-6 flex items-center gap-2 mb-2">
                                <div className="size-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                                    <span className="material-symbols-outlined text-[20px]">event_upcoming</span>
                                </div>
                                <p className="text-[#637288] dark:text-slate-400 text-xs font-bold uppercase tracking-widest">Próximo Pago</p>
                            </div>

                            <div className="h-14 flex items-center">
                                {nextPayment ? (
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-1 mb-1">
                                            <MoneyDisplay amount={nextPayment.amount} currency={currencySymbol} size="4xl" weight="font-bold" color="text-[#111418] dark:text-white" />
                                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 truncate max-w-[80px]">
                                                {nextPayment.name}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative z-10">
                                        <p className="text-[#111418] dark:text-white text-lg font-bold">¡Todo al día!</p>
                                    </div>
                                )}
                            </div>

                            <div className="h-10 flex items-end">
                                {nextPayment ? (() => {
                                    const days = getDaysUntilDue(nextPayment.nextDueDate);
                                    let message = '';
                                    let colorClass = '';

                                    if (days < 0) { message = `Venció hace ${Math.abs(days)} días`; colorClass = 'text-red-500'; }
                                    else if (days === 0) { message = 'Vence hoy'; colorClass = 'text-orange-500'; }
                                    else if (days === 1) { message = 'Vence mañana'; colorClass = 'text-orange-500'; }
                                    else { message = `Vence en ${days} días`; colorClass = 'text-blue-500'; }

                                    return (
                                        <div className={`flex items-center gap-1.5 text-xs font-bold ${colorClass}`}>
                                            <span className="material-symbols-outlined text-[14px]">warning</span>
                                            {message}
                                        </div>
                                    );
                                })() : (
                                    <p className="text-[#637288] dark:text-slate-500 text-xs">No tienes pagos pendientes próximos.</p>
                                )}
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group min-h-[160px]">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-primary">account_balance</span>
                            </div>
                            <div className="h-6 flex items-center gap-2">
                                <div className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-sm">savings</span>
                                </div>
                                <p className="text-[#637288] dark:text-slate-400 text-sm font-medium">Total Planificado</p>
                            </div>
                            <div className="h-14 flex items-center">
                                <MoneyDisplay amount={totalPlanificado} currency={currencySymbol} size="4xl" weight="font-bold" color="text-[#111418] dark:text-white" />
                            </div>
                            <div className="h-10 flex items-end">
                                <p className="text-[#637288] dark:text-slate-500 text-xs mt-1">Estimación mensual</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group min-h-[160px]">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-success">check_circle</span>
                            </div>
                            <div className="h-6 flex items-center gap-2">
                                <div className="size-8 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-success">
                                    <span className="material-symbols-outlined text-sm">payments</span>
                                </div>
                                <p className="text-[#637288] dark:text-slate-400 text-sm font-medium">Ya Pagado</p>
                            </div>
                            <div className="h-14 flex items-center justify-between w-full">
                                <MoneyDisplay amount={yaPagado} currency={currencySymbol} size="4xl" weight="font-bold" color="text-[#111418] dark:text-white" />
                            </div>
                            <div className="h-10 flex flex-col justify-end w-full">
                                <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                                    <div className="bg-success h-full rounded-full transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
                                </div>
                                <p className="text-success text-xs font-medium mt-1">{progressPercent.toFixed(0)}% completado</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group border-orange-100 dark:border-orange-900/30 min-h-[160px]">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-orange-500">pending_actions</span>
                            </div>
                            <div className="h-6 flex items-center gap-2">
                                <div className="size-8 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                                    <span className="material-symbols-outlined text-sm">hourglass_top</span>
                                </div>
                                <p className="text-[#637288] dark:text-slate-400 text-sm font-medium">Por Pagar</p>
                            </div>
                            <div className="h-14 flex items-center">
                                <MoneyDisplay amount={porPagar} currency={currencySymbol} size="4xl" weight="font-bold" color="text-[#111418] dark:text-white" />
                            </div>
                            <div className="h-10 flex items-end">
                                <p className="text-[#637288] dark:text-slate-500 text-xs mt-1">{pendingCount} compromisos pendientes</p>
                            </div>
                        </div>
                    </section>

                    <section className="glass-card rounded-2xl shadow-glass overflow-hidden flex flex-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/40 dark:bg-slate-900/40">
                            <h3 className="text-[#111418] dark:text-white text-lg font-bold">Listado de Compromisos</h3>

                            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-[20px]">search</span>
                                    <input
                                        type="text"
                                        placeholder="Buscar compromisos..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                                    />
                                </div>

                                <div className="flex bg-[#f0f2f4] dark:bg-slate-800 p-1 rounded-xl self-center">
                                    <button
                                        onClick={() => setFilter('all')}
                                        className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filter === 'all' ? 'bg-white dark:bg-slate-700 text-[#111418] dark:text-white shadow-sm' : 'text-[#637288] hover:text-[#111418] dark:hover:text-white'}`}
                                    >
                                        Todos
                                    </button>
                                    <button
                                        onClick={() => setFilter('pending')}
                                        className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filter === 'pending' ? 'bg-white dark:bg-slate-700 text-[#111418] dark:text-white shadow-sm' : 'text-[#637288] hover:text-[#111418] dark:hover:text-white'}`}
                                    >
                                        Pendientes
                                    </button>
                                    <button
                                        onClick={() => setFilter('paid')}
                                        className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filter === 'paid' ? 'bg-white dark:bg-slate-700 text-[#111418] dark:text-white shadow-sm' : 'text-[#637288] hover:text-[#111418] dark:hover:text-white'}`}
                                    >
                                        Completados
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto w-full">
                            <table className="w-full min-w-[800px]">
                                <thead className="bg-gray-50/50 dark:bg-slate-800/50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[30%]">Concepto</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[20%]">Fecha Vencimiento</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[15%]">Monto</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[15%]">Estado</th>
                                        <th className="px-6 py-4 text-right text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[20%]">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#f0f2f4] dark:divide-slate-800">
                                    {filteredCommitments.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-10 text-center text-gray-400 dark:text-gray-500">
                                                <div className="flex flex-col items-center gap-3">
                                                    <span className="material-symbols-outlined text-[48px] opacity-20">event_busy</span>
                                                    <p className="text-sm">No se encontraron compromisos en este periodo.</p>
                                                    <button onClick={() => { setFilter('all'); setSearchTerm(''); }} className="text-primary text-xs font-bold hover:underline">Limpiar Filtros</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredCommitments.map((item) => {
                                            // ... existing map
                                            const isOverdue = new Date(item.nextDueDate) < new Date();
                                            const isPaid = item.status === 'PAID';

                                            return (
                                                <tr key={item.id} className={`group hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors ${isPaid ? 'bg-gray-50/50 dark:bg-slate-900/50' : ''}`}>
                                                    <td className="px-6 py-4">
                                                        <div
                                                            onClick={() => handleViewDetails(item)}
                                                            className={`flex items-center gap-4 cursor-pointer ${isPaid ? 'opacity-60' : ''}`}
                                                        >
                                                            <div className={`size-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${isPaid ? 'bg-gray-200 dark:bg-slate-700 text-gray-500' : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600'
                                                                }`}>
                                                                <span className="material-symbols-outlined text-[20px]">
                                                                    {categories.find(cat => cat.id === item.categoryId)?.icon || 'event_repeat'}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <p className={`text-[#111418] dark:text-white text-sm font-bold group-hover:text-primary transition-colors ${isPaid ? 'line-through decoration-slate-400' : ''}`}>{item.name}</p>
                                                                <p className="text-[#637288] dark:text-slate-500 text-xs">{item.frequency}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className={`flex items-center gap-2 w-fit px-2 py-1 rounded-md ${isPaid ? 'opacity-60 text-slate-500' :
                                                            isOverdue ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/20' : 'text-[#111418] dark:text-slate-300'
                                                            }`}>
                                                            {isOverdue && !isPaid && <span className="material-symbols-outlined text-[16px]">warning</span>}
                                                            <span className="text-sm font-medium">{item.nextDueDate}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`flex items-center text-base font-bold ${isPaid ? 'text-[#637288] opacity-60' : item.transaction_type === 'INCOME' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                                            {item.transaction_type === 'INCOME' && <span className="mr-0.5">+</span>}
                                                            <MoneyDisplay
                                                                amount={item.transaction_type === 'INCOME' ? item.amount : -item.amount}
                                                                currency={currencySymbol}
                                                                size="lg"
                                                                weight="font-bold"
                                                                color=""
                                                                autoColor={false}
                                                            />
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${isPaid
                                                            ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                                                            : isOverdue
                                                                ? 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800'
                                                                : 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800'
                                                            }`}>
                                                            {!isPaid && <span className={`size-1.5 rounded-full ${isOverdue ? 'bg-red-500 animate-pulse' : 'bg-yellow-500'}`}></span>}
                                                            {isPaid ? <span className="material-symbols-outlined text-[14px]">check</span> : ''}
                                                            {isPaid ? 'Completado' : isOverdue ? 'Urgente' : 'Pendiente'}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        {isPaid ? (
                                                            <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                                <span className="text-[10px] text-[#637288] dark:text-slate-500 italic bg-white/50 dark:bg-slate-800/50 px-2 py-1 rounded border border-gray-100 dark:border-slate-700">Transacción Generada</span>
                                                                <button onClick={() => handleDelete(item.id)} className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-400 hover:text-red-500" title="Eliminar">
                                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                                </button>
                                                                <button onClick={() => handleViewDetails(item)} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 text-[#637288]" title="Ver Detalle">
                                                                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <div className="flex justify-end gap-2">
                                                                <button
                                                                    onClick={() => handleViewDetails(item)}
                                                                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 text-[#637288]"
                                                                    title="Ver Detalle"
                                                                >
                                                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDelete(item.id)}
                                                                    className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-400 hover:text-red-500 transition-colors"
                                                                    title="Eliminar"
                                                                >
                                                                    <span className="material-symbols-outlined text-[20px]">delete</span>
                                                                </button>
                                                                <button
                                                                    onClick={() => toggleCommitmentStatus(item.id, item.status)}
                                                                    className={`group/btn relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 ${isOverdue
                                                                        ? 'bg-primary text-white hover:bg-blue-700 shadow-primary/20 hover:scale-105'
                                                                        : 'border border-[#dce0e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#111418] dark:text-white hover:text-green-600 hover:border-green-200'
                                                                        }`}
                                                                >
                                                                    <span className="material-symbols-outlined text-[16px]">{isOverdue ? 'payments' : 'done'}</span>
                                                                    <span>{isOverdue ? 'Pagar Ahora' : 'Marcar Pagado'}</span>
                                                                </button>
                                                            </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 border-t border-[#f0f2f4] dark:border-slate-800 flex items-center justify-center bg-gray-50/30 dark:bg-slate-900/30">
                            <button className="text-[#637288] dark:text-slate-400 text-sm hover:text-primary transition-colors font-medium flex items-center gap-1 px-4 py-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg">
                                Mostrar más compromisos
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            <CommitmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                commitmentToEdit={editingCommitment}
            />

            <DeleteConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="¿Eliminar Compromiso?"
                message="Estás a punto de eliminar este compromiso permanentemente. Esta acción no se puede deshacer."
                itemName={commitments.find(c => c.id === commitmentToDelete)?.name}
            />

            <DateRangeModal
                isOpen={isDateModalOpen}
                onClose={() => setIsDateModalOpen(false)}
                onApply={handleDateApply}
                initialStartDate={dateRange.start}
                initialEndDate={dateRange.end}
            />

            <CommitmentDetailsModal
                isOpen={!!viewingCommitment}
                onClose={() => setViewingCommitment(null)}
                commitment={viewingCommitment}
                onEdit={handleEdit}
                onDelete={deleteCommitment}
            />
        </div>
    );
}
