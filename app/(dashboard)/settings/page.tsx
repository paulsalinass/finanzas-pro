"use client";

import React, { useState } from 'react';
import { useFinance } from '@/context/FinanceContext';

export default function Settings() {
    const { isDarkMode, toggleTheme, generateSampleData } = useFinance();
    const [currency, setCurrency] = useState('USD');
    const [language, setLanguage] = useState('ES');
    const [biometrics, setBiometrics] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="flex-1 w-full h-full overflow-y-auto scrollbar-hide relative pb-24">
            {/* Mesh Background */}
            <div className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-10 -z-10">
                <div className="absolute top-[20%] left-[30%] w-[50vw] h-[50vh] bg-blue-400/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-[800px] mx-auto p-6 md:p-10 flex flex-col gap-10 animate-fade-in">
                <div className="flex flex-col gap-2">
                    <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight uppercase">Configuración</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-medium">
                        Personaliza tu experiencia y ajusta la aplicación a tus necesidades.
                    </p>
                </div>

                {/* SECTION: PREFERENCES */}
                <section className="flex flex-col gap-5">
                    <h2 className="text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-widest ml-1">Preferencias</h2>

                    <div className="glass-card rounded-[2rem] overflow-hidden border border-white/60 dark:border-slate-800">
                        {/* Dark Mode */}
                        <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-slate-800/80 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`size-12 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600' : 'bg-orange-100 text-orange-600'}`}>
                                    <span className="material-symbols-outlined text-[24px]">{isDarkMode ? 'dark_mode' : 'light_mode'}</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 dark:text-white font-bold text-base">Modo Oscuro</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Cambia la apariencia de la interfaz</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isDarkMode}
                                    onChange={toggleTheme}
                                />
                                <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-primary shadow-inner"></div>
                            </label>
                        </div>

                        {/* Currency */}
                        <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-slate-800/80 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-2xl bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[24px]">attach_money</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 dark:text-white font-bold text-base">Moneda Principal</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Define la moneda para tus reportes</p>
                                </div>
                            </div>
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="bg-transparent text-right font-black text-slate-900 dark:text-white outline-none cursor-pointer uppercase tracking-wider"
                            >
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="MXN">MXN ($)</option>
                            </select>
                        </div>

                        {/* Language */}
                        <div className="p-6 flex items-center justify-between hover:bg-white/40 dark:hover:bg-slate-800/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-2xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[24px]">translate</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 dark:text-white font-bold text-base">Idioma</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Selecciona el idioma de la app</p>
                                </div>
                            </div>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="bg-transparent text-right font-black text-slate-900 dark:text-white outline-none cursor-pointer uppercase tracking-wider"
                            >
                                <option value="ES">Español</option>
                                <option value="EN">English</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* SECTION: SECURITY & NOTIFICATIONS */}
                <section className="flex flex-col gap-5">
                    <h2 className="text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-widest ml-1">Seguridad y Alertas</h2>
                    <div className="glass-card rounded-[2rem] overflow-hidden border border-white/60 dark:border-slate-800">
                        {/* Biometrics */}
                        <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-slate-800/80 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-2xl bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[24px]">fingerprint</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 dark:text-white font-bold text-base">FaceID / TouchID</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Protege el acceso a la aplicación</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={biometrics}
                                    onChange={() => setBiometrics(!biometrics)}
                                />
                                <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-primary shadow-inner"></div>
                            </label>
                        </div>

                        {/* Notifications */}
                        <div className="p-6 flex items-center justify-between hover:bg-white/40 dark:hover:bg-slate-800/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[24px]">notifications_active</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 dark:text-white font-bold text-base">Notificaciones Push</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Recibe alertas sobre tu presupuesto</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications}
                                    onChange={() => setNotifications(!notifications)}
                                />
                                <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-primary shadow-inner"></div>
                            </label>
                        </div>
                    </div>
                </section>

                {/* SECTION: DATA */}
                <section className="flex flex-col gap-5">
                    <h2 className="text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-widest ml-1">Datos y Cuenta</h2>
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-between p-6 rounded-[2rem] glass-card border border-white/60 dark:border-slate-800 hover:border-primary/50 group transition-all">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[24px]">download</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-slate-900 dark:text-white font-bold text-base">Exportar Datos</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Descarga tus movimientos en CSV/PDF</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward_ios</span>
                        </button>
                        <button
                            onClick={async () => {
                                if (confirm('¿Generar datos de prueba? Esto añadirá cuentas y movimientos.')) {
                                    await generateSampleData();
                                    alert('Datos generados correctamente');
                                }
                            }}
                            className="flex items-center justify-between p-6 rounded-[2rem] glass-card border border-white/60 dark:border-slate-800 hover:border-success/50 group transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center group-hover:bg-success group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[24px]">database</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-slate-900 dark:text-white font-bold text-base">Generar Datos de Prueba</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Crea cuentas y movimientos de ejemplo</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-success transition-colors">play_arrow</span>
                        </button>
                        <button className="flex items-center justify-between p-6 rounded-[2rem] glass-card border border-white/60 dark:border-slate-800 hover:border-danger/50 group transition-all">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-2xl bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center group-hover:bg-danger group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[24px]">delete_forever</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-slate-900 dark:text-white font-bold text-base">Eliminar Cuenta</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Borrar todos los datos permanentemente</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-danger transition-colors">arrow_forward_ios</span>
                        </button>
                    </div>
                </section>

                <div className="text-center mt-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-slate-600">Finanzas Pro v2.0.0</p>
                </div>
            </div>
        </div>
    );
}
