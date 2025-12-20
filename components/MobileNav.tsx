"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MobileNav: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-white/80 dark:bg-transparent dark:glass-nav h-20 px-6 flex items-center justify-center border-t border-gray-200 dark:border-none backdrop-blur-xl">
      <div className="w-full max-w-lg flex items-center justify-between px-2">
        <Link href="/" className={`flex flex-col items-center gap-1 transition-all group ${isActive('/') ? 'text-primary' : 'text-text-muted dark:text-dark-muted hover:text-white'}`}>
          <div className={`p-1.5 rounded-xl transition-colors ${isActive('/') ? 'bg-primary/10' : 'group-hover:bg-white/5'}`}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: isActive('/') ? "'FILL' 1" : "'FILL' 0" }}>grid_view</span>
          </div>
          <span className={`text-[10px] ${isActive('/') ? 'font-bold' : 'font-medium'}`}>Visión General</span>
        </Link>
        <Link href="/transactions" className={`flex flex-col items-center gap-1 transition-all group ${isActive('/transactions') ? 'text-primary' : 'text-text-muted dark:text-dark-muted hover:text-white'}`}>
          <div className={`p-1.5 rounded-xl transition-colors ${isActive('/transactions') ? 'bg-primary/10' : 'group-hover:bg-white/5'}`}>
            <span className="material-symbols-outlined text-[24px]">receipt_long</span>
          </div>
          <span className={`text-[10px] ${isActive('/transactions') ? 'font-bold' : 'font-medium'}`}>Transacciones</span>
        </Link>
        <Link href="/budgets" className={`flex flex-col items-center gap-1 transition-all group ${isActive('/budgets') ? 'text-primary' : 'text-text-muted dark:text-dark-muted hover:text-white'}`}>
          <div className={`p-1.5 rounded-xl transition-colors ${isActive('/budgets') ? 'bg-primary/10' : 'group-hover:bg-white/5'}`}>
            <span className="material-symbols-outlined text-[24px]">calculate</span>
          </div>
          <span className={`text-[10px] ${isActive('/budgets') ? 'font-bold' : 'font-medium'}`}>Presupuestos</span>
        </Link>
        <Link href="/settings" className={`flex flex-col items-center gap-1 transition-all group ${isActive('/settings') ? 'text-primary' : 'text-text-muted dark:text-dark-muted hover:text-white'}`}>
          <div className={`p-1.5 rounded-xl transition-colors ${isActive('/settings') ? 'bg-primary/10' : 'group-hover:bg-white/5'}`}>
            <span className="material-symbols-outlined text-[24px]">settings</span>
          </div>
          <span className={`text-[10px] ${isActive('/settings') ? 'font-bold' : 'font-medium'}`}>Ajustes</span>
        </Link>
      </div>
    </nav>
  );
};
