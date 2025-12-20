"use client";

import React from 'react';

export default function Notifications() {
    const notifications = [
        {
            id: 1,
            title: "Presupuesto Excedido",
            message: "Has superado el 80% de tu presupuesto de Comida para este mes.",
            time: "Hace 2 horas",
            type: "WARNING", // WARNING, INFO, SUCCESS
            read: false
        },
        {
            id: 2,
            title: "Pago Recibido",
            message: "Se ha registrado el ingreso de Nómina por $5,000.00.",
            time: "Ayer, 10:30 AM",
            type: "SUCCESS",
            read: true
        },
        {
            id: 3,
            title: "Nueva Función",
            message: "Ahora puedes crear reglas recurrentes para automatizar tus gastos.",
            time: "20 Oct, 2023",
            type: "INFO",
            read: true
        },
        {
            id: 4,
            title: "Factura Pendiente",
            message: "Recuerda pagar tu servicio de Internet antes del día 25.",
            time: "18 Oct, 2023",
            type: "WARNING",
            read: true
        }
    ];

    return (
        <div className="flex-1 w-full h-full overflow-y-auto scrollbar-hide relative pb-24">
            <div className="max-w-[800px] mx-auto p-6 md:p-10 flex flex-col gap-8 animate-fade-in">
                <div className="flex items-center justify-between">
                    <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight uppercase">Notificaciones</h1>
                    <button className="text-xs font-black uppercase tracking-widest text-primary hover:text-primary-hover">
                        Marcar todo leído
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {notifications.map(notif => (
                        <div
                            key={notif.id}
                            className={`glass-card p-5 rounded-3xl border transition-all hover:bg-white/80 dark:hover:bg-slate-800/80 ${notif.read
                                    ? 'border-transparent opacity-80'
                                    : 'border-l-4 border-l-primary border-y-white/60 border-r-white/60 dark:border-y-slate-800 dark:border-r-slate-800 bg-white/60 dark:bg-slate-800/60 shadow-md'
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`mt-1 size-10 rounded-xl flex items-center justify-center shrink-0 ${notif.type === 'WARNING' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/20' :
                                        notif.type === 'SUCCESS' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20' :
                                            'bg-blue-100 text-blue-600 dark:bg-blue-900/20'
                                    }`}>
                                    <span className="material-symbols-outlined text-[20px]">
                                        {notif.type === 'WARNING' ? 'warning' :
                                            notif.type === 'SUCCESS' ? 'check_circle' : 'info'}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className={`font-black text-sm ${notif.read ? 'text-slate-700 dark:text-slate-300' : 'text-slate-900 dark:text-white'}`}>
                                            {notif.title}
                                        </h3>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{notif.time}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        {notif.message}
                                    </p>
                                </div>
                                {!notif.read && (
                                    <div className="size-2 rounded-full bg-primary mt-2"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {notifications.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                        <span className="material-symbols-outlined text-6xl mb-4 opacity-50">notifications_off</span>
                        <p className="font-bold">No tienes notificaciones</p>
                    </div>
                )}
            </div>
        </div>
    );
}
