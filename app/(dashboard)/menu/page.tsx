"use client";

import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import {
    LayoutDashboard,
    Receipt,
    PieChart,
    BarChart3,
    Landmark,
    CalendarClock,
    Tags,
    CreditCard,
    BookOpen,
    User,
    Settings,
    LogOut,
    ChevronRight,
    Wallet
} from 'lucide-react';

export default function MenuPage() {
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.replace('/login');
    };
    const menuGroups = [
        {
            title: "Principal",
            items: [
                { href: "/", icon: LayoutDashboard, label: "Visión general" },
                { href: "/transactions", icon: Receipt, label: "Transacciones" },
                { href: "/budgets", icon: PieChart, label: "Presupuestos" },
                { href: "/reports", icon: BarChart3, label: "Reportes" },
            ]
        },
        {
            title: "Gestión",
            items: [
                { href: "/accounts", icon: Landmark, label: "Cuentas" },
                { href: "/commitments", icon: CalendarClock, label: "Compromisos" },
                { href: "/categories", icon: Tags, label: "Categorías" },
                { href: "/cards", icon: CreditCard, label: "Tarjetas y Cuotas" },
                { href: "/ledgers", icon: BookOpen, label: "Libros Contables" },
            ]
        },
        {
            title: "Configuración",
            items: [
                { href: "/profile", icon: User, label: "Perfil de Usuario" },
            ]
        }
    ];

    return (
        <div className="flex-1 w-full h-full overflow-y-auto bg-slate-50 dark:bg-slate-900 pb-32">
            <div className="p-6 pt-12">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Menú</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-8">Todas las opciones de Finanzas Claras</p>

                <div className="space-y-8">
                    {menuGroups.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 px-2">
                                {group.title}
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {group.items.map((item, itemIndex) => (
                                    <Link
                                        key={itemIndex}
                                        href={item.href}
                                        className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all active:scale-95"
                                    >
                                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                                            <item.icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200 text-center">
                                            {item.label}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 mb-6">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 font-bold border border-red-100 dark:border-red-900/20 active:scale-95 transition-transform"
                    >
                        <LogOut size={20} />
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
}
