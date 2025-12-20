"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const BANKS = [
    { name: 'Santander', logo: 'https://logo.clearbit.com/santander.com' },
    { name: 'BBVA', logo: 'https://logo.clearbit.com/bbva.com' },
    { name: 'CaixaBank', logo: 'https://logo.clearbit.com/caixabank.com' },
    { name: 'Revolut', logo: 'https://logo.clearbit.com/revolut.com' },
];

export default function AddAccount() {
    const router = useRouter();
    const [step, setStep] = useState(1);

    return (
        <div className="flex-1 h-full overflow-y-auto scrollbar-hide p-4 md:p-10 animate-slide-up">
            <div className="max-w-[900px] mx-auto glass-card rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => step === 1 ? router.back() : setStep(step - 1)} className="btn-interact size-10 rounded-xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h2 className="text-xl font-black text-text-main dark:text-white uppercase text-[14px] tracking-widest">Conectar Entidad</h2>
                    </div>
                    <div className="flex gap-1">
                        <div className={`h-1.5 w-8 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-gray-100 dark:bg-slate-800'}`}></div>
                        <div className={`h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-gray-100 dark:bg-slate-800'}`}></div>
                    </div>
                </div>

                <div className="p-10">
                    {step === 1 ? (
                        <div className="flex flex-col gap-8">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-black text-text-main dark:text-white">Selecciona tu banco</h3>
                                <p className="text-text-muted dark:text-slate-500 text-sm">Usamos cifrado de grado bancario para sincronizar tus datos.</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {BANKS.map(b => (
                                    <button key={b.name} onClick={() => setStep(2)} className="btn-interact p-6 rounded-3xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 flex flex-col items-center gap-4 hover:border-primary transition-all shadow-sm">
                                        <img src={b.logo} alt={b.name} className="size-12 rounded-xl object-contain" />
                                        <span className="font-bold text-sm text-text-main dark:text-white">{b.name}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="relative py-4">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100 dark:border-slate-800"></div></div>
                                <div className="relative flex justify-center text-xs uppercase tracking-widest font-black text-text-muted bg-white dark:bg-slate-900 px-4">O bien</div>
                            </div>
                            <button className="w-full py-4 rounded-2xl border-2 border-dashed border-gray-200 dark:border-slate-700 text-text-muted font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">Crear cartera manual (Efectivo)</button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-8 max-w-sm mx-auto animate-fade-in">
                            <div className="flex flex-col items-center gap-4 mb-4">
                                <img src="https://logo.clearbit.com/revolut.com" className="size-20 rounded-2xl shadow-xl" />
                                <h3 className="text-2xl font-black text-text-main dark:text-white">Autorizar Conexión</h3>
                            </div>
                            <div className="space-y-4">
                                <input type="text" placeholder="Usuario / ID Cliente" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none ring-1 ring-gray-100 dark:ring-slate-700 focus:ring-2 focus:ring-primary font-bold" />
                                <input type="password" placeholder="Clave de acceso" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none ring-1 ring-gray-100 dark:ring-slate-700 focus:ring-2 focus:ring-primary font-bold" />
                            </div>
                            <button onClick={() => router.push('/accounts')} className="btn-interact w-full py-4 bg-primary text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-500/20">Vincular Ahora</button>
                            <p className="text-[10px] text-center text-text-light font-bold">Tus credenciales nunca se guardan en nuestros servidores. Conexión directa vía PSD2.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
