"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function AddCommitment() {
    const router = useRouter();

    return (
        <div className="flex-1 h-full overflow-y-auto scrollbar-hide p-4 md:p-10 animate-slide-up">
            <div className="max-w-[800px] mx-auto glass-card rounded-[2.5rem] shadow-2xl overflow-hidden">
                <div className="p-8 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <h2 className="text-xl font-black text-text-main dark:text-white uppercase text-[14px] tracking-widest">Nuevo Pago Recurrente</h2>
                    <button onClick={() => router.back()} className="btn-interact size-10 rounded-xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="col-span-1 md:col-span-2 space-y-3">
                        <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-2">Nombre del Servicio</label>
                        <input type="text" placeholder="Ej. Alquiler, Gimnasio, Spotify..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none ring-1 ring-gray-100 dark:ring-slate-700 focus:ring-2 focus:ring-primary font-bold" />
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-2">Monto Fijo</label>
                        <div className="relative">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-text-light">$</span>
                            <input type="number" placeholder="0.00" className="w-full pl-10 pr-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none ring-1 ring-gray-100 dark:ring-slate-700 focus:ring-2 focus:ring-primary font-bold" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-2">Frecuencia</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none ring-1 ring-gray-100 dark:ring-slate-700 focus:ring-2 focus:ring-primary font-bold appearance-none">
                            <option>Mensual</option>
                            <option>Semanal</option>
                            <option>Anual</option>
                        </select>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-2">Próximo Cobro</label>
                        <input type="date" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none ring-1 ring-gray-100 dark:ring-slate-700 focus:ring-2 focus:ring-primary font-bold" />
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-2">Cuenta de cargo</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none ring-1 ring-gray-100 dark:ring-slate-700 focus:ring-2 focus:ring-primary font-bold appearance-none">
                            <option>🏦 Banco Principal</option>
                            <option>💳 Visa Gold</option>
                        </select>
                    </div>

                    <div className="col-span-1 md:col-span-2 pt-6 flex gap-4">
                        <button onClick={() => router.back()} className="flex-1 py-4 font-black uppercase text-xs tracking-widest text-text-muted hover:bg-gray-50 rounded-2xl transition-all">Cancelar</button>
                        <button onClick={() => router.push('/commitments')} className="btn-interact flex-[2] py-4 bg-primary text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-500/20">Guardar Compromiso</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
