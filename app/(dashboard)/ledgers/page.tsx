"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useFinance } from '@/context/FinanceContext';
import * as Icons from "lucide-react"

// Color mapping for safe tailwind classes or styles
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
}

function LedgerIcon({ icon, className }: { icon: string, className?: string }) {
    const LucideIcon = (Icons as any)[icon]
    if (LucideIcon) {
        return <LucideIcon className={className} />
    }
    // Fallback to Material Symbols
    return <span className={`material-symbols-outlined ${className} !text-[28px]`}>{icon}</span>
}

export default function Ledgers() {
    const { ledgers, activateLedger } = useFinance();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLedgers = ledgers.filter(ledger =>
        ledger.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden relative scrollbar-hide pb-24">
            {/* Background Decor */}
            <div className="fixed inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-10">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto max-w-[1200px] p-4 md:p-8 flex flex-col gap-8">
                {/* Page Header */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-[#111418] dark:text-white">Libros Contables</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-lg font-normal capitalize">
                            Gestiona diferentes espacios financieros
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <Link href="/books/create" className="group flex items-center justify-center gap-2 bg-primary hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 h-12 cursor-pointer">
                            <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-300">add</span>
                            <span className="text-sm">Nuevo Libro</span>
                        </Link>
                    </div>
                </header>

                {/* Search */}
                <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors material-symbols-outlined">search</span>
                    <input
                        type="text"
                        placeholder="Buscar libros..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full h-14 pl-12 pr-6 rounded-2xl border border-white/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm"
                    />
                </div>

                {/* Ledgers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLedgers.map((ledger) => {
                        const colors = COLOR_MAP[ledger.color || 'blue'] || COLOR_MAP.blue

                        // Determine Border Color based on Active State
                        // Active: use the assigned color's ring/border (or primary if preferred, but custom color looks better)
                        // Inactive: standard border
                        const borderClass = ledger.isActive
                            ? `border-transparent ring-2 ${colors.ring.replace('ring-', 'ring-').replace('/10', '')}` // Simulating active border with ring for color match
                            : 'border-white/60 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg';

                        // For active border, let's use a style or a closer match class. 
                        // Actually, let's stick to the previous border logic but swap 'border-primary' with 'border-{color}-500' if possible, 
                        // or just use the Ring for the "glow".
                        // Use inline style for border color if active to be precise?

                        return (
                            <div
                                key={ledger.id}
                                onClick={() => activateLedger(ledger.id)}
                                className={`glass-card p-6 rounded-[2rem] border relative overflow-hidden group cursor-pointer transition-all duration-300 ${ledger.isActive
                                    ? `ring-2 ring-offset-2 dark:ring-offset-slate-950 ${colors.ring.replace('/10', '/100')} ${colors.solid.replace('bg-', 'border-')}`
                                    : 'border-white/60 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`size-14 rounded-2xl flex items-center justify-center shadow-inner transition-colors duration-300 ${ledger.isActive
                                        ? `${colors.solid} text-white`
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors'
                                        }`}>
                                        <LedgerIcon icon={ledger.icon || 'Wallet'} className={ledger.isActive ? "text-white" : ""} />
                                    </div>
                                    {ledger.isActive && (
                                        <div className={`px-3 py-1 rounded-full flex items-center gap-1 ${colors.bg}`}>
                                            <div className={`size-2 rounded-full animate-pulse ${colors.solid.replace('bg-', 'bg-')}`}></div>
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${colors.text}`}>Activo</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1 mb-4">
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors">{ledger.name}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 min-h-[2.5em]">{ledger.description}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-4 border-t border-dashed border-gray-200 dark:border-slate-700">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Miembros</span>
                                        <div className="flex -space-x-2 mt-1">
                                            {ledger.members?.map((member, i) => (
                                                <div key={i} className="size-6 rounded-full bg-gray-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300" title={member}>
                                                    {member.charAt(0)}
                                                </div>
                                            ))}
                                            {ledger.members.length > 3 && (
                                                <div className="size-6 rounded-full bg-gray-100 dark:bg-slate-800 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[8px] font-black text-slate-400">
                                                    +{ledger.members ? ledger.members.length - 3 : 0}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Creado</span>
                                        <span className="text-xs font-bold text-slate-900 dark:text-white mt-1">{new Date(ledger.lastUpdate).toLocaleDateString()}</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        href={`/books/${ledger.id}/settings`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        <span className="material-symbols-outlined text-[16px]">settings</span>
                                        Configurar
                                    </Link>
                                    {!ledger.isActive && (
                                        <span className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1">
                                            Cambiar
                                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        )
                    })}

                    {/* New Ledger Placeholder Card */}
                    <Link href="/books/create" className="rounded-[2rem] border-2 border-dashed border-gray-300 dark:border-slate-700 p-6 flex flex-col items-center justify-center gap-4 group hover:border-primary hover:bg-primary/5 transition-all min-h-[300px]">
                        <div className="size-16 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-[32px]">add</span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest mb-1">Crear Libro</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-[200px]">Añade un nuevo espacio para organizar otras finanzas.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
