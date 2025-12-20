
'use client';

import { Sidebar } from "../../components/Sidebar";
import { MobileNav } from "../../components/MobileNav";
import React, { useEffect, useState } from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const stored = localStorage.getItem('sidebar-collapsed');
        if (stored) {
            setIsCollapsed(stored === 'true');
        }
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        localStorage.setItem('sidebar-collapsed', JSON.stringify(isCollapsed));
    }, [isCollapsed]);

    return (
        <div className="flex h-screen w-full relative overflow-y-hidden">
            {/* Background Gradients - Re-added for dashboard consistency */}
            <div className="fixed top-[-10%] left-[-5%] w-[40vw] h-[40vh] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-5%] w-[35vw] h-[35vh] bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <Sidebar collapsed={isCollapsed} />

            <main className="flex-1 relative h-full flex flex-col z-10 overflow-hidden">
                <button
                    onClick={() => setIsCollapsed((prev) => !prev)}
                    className="hidden lg:flex items-center justify-center absolute top-4 left-4 z-20 px-2.5 py-2 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-white/60 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm"
                    aria-label={isCollapsed ? 'Expandir menú' : 'Colapsar menú'}
                >
                    <span className="material-symbols-outlined text-base">{isCollapsed ? 'chevron_right' : 'chevron_left'}</span>
                </button>
                {children}
                <MobileNav />
            </main>
        </div>
    );
}
