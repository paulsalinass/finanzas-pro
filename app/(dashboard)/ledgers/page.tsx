"use client";

import React, { useState } from 'react';
import { useFinance } from '@/context/FinanceContext';

export default function Ledgers() {
    const { ledgers, activateLedger } = useFinance();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLedgers = ledgers.filter(ledger =>
        ledger.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-1 w-full h-full overflow-y-auto scrollbar-hide relative pb-24">
            {/* Mesh Background */}
            <div className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-10 -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vh] bg-blue-400/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vh] bg-purple-400/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-[1024px] mx-auto p-6 md:p-10 flex flex-col gap-8 animate-fade-in">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight uppercase">Libros Contables</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-medium max-w-xl">
                            Gestiona diferentes espacios financieros. Organiza tus finanzas personales, de pareja o de negocios por separado.
                        </p>
                    </div>
                    <button className="group flex items-center justify-center gap-3 rounded-2xl h-12 px-6 bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20 transition-all active:scale-95 font-black uppercase text-xs tracking-widest">
                        <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-500">add_circle</span>
                        <span>Nuevo Libro</span>
                    </button>
                </div>

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
                    {filteredLedgers.map((ledger) => (
                        <div
                            key={ledger.id}
                            onClick={() => activateLedger(ledger.id)}
                            className={`glass-card p-6 rounded-[2rem] border relative overflow-hidden group cursor-pointer transition-all duration-300 ${ledger.isActive
                                ? 'border-primary shadow-xl shadow-primary/10 ring-4 ring-primary/5'
                                : 'border-white/60 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`size-14 rounded-2xl flex items-center justify-center shadow-inner transition-colors duration-300 ${ledger.isActive
                                    ? 'bg-primary text-white'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-primary group-hover:bg-primary/10'
                                    }`}>
                                    <span className="material-symbols-outlined text-[28px]">{ledger.icon}</span>
                                </div>
                                {ledger.isActive && (
                                    <div className="px-3 py-1 bg-primary/10 rounded-full flex items-center gap-1">
                                        <div className="size-2 bg-primary rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">Activo</span>
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
                                <button className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">settings</span>
                                    Configurar
                                </button>
                                {!ledger.isActive && (
                                    <span className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1">
                                        Cambiar
                                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* New Ledger Placeholder Card */}
                    <button className="rounded-[2rem] border-2 border-dashed border-gray-300 dark:border-slate-700 p-6 flex flex-col items-center justify-center gap-4 group hover:border-primary hover:bg-primary/5 transition-all min-h-[300px]">
                        <div className="size-16 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-[32px]">add</span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest mb-1">Crear Libro</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-[200px]">Añade un nuevo espacio para organizar otras finanzas.</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
