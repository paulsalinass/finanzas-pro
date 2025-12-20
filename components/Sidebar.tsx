"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
  to: string;
  icon: string;
  label: string;
  exact?: boolean;
  fill?: boolean;
  collapsed?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label, exact = false, fill = false, collapsed = false }) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === to : pathname.startsWith(to);

  return (
    <Link
      href={to}
      className={`relative flex items-center gap-3 rounded-xl transition-all group ${collapsed ? 'justify-center px-2 py-3' : 'px-4 py-3'
        } ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'text-[#637288] dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800 hover:text-[#111418] dark:hover:text-white'
        }`}
    >
      <span className={`material-symbols-outlined text-[22px] group-hover:scale-105 transition-transform ${isActive || fill ? 'fill-1' : ''}`}>{icon}</span>
      {!collapsed && <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>}
      {collapsed && (
        <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200">
          <span className="relative px-3 py-1 rounded-2xl bg-[#111418] text-white text-xs font-semibold shadow-lg whitespace-nowrap">
            {label}
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#111418] rotate-45"></span>
          </span>
        </span>
      )}
    </Link>
  );
};

interface SidebarProps {
  collapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed = false }) => (
  <aside className={`${collapsed ? 'w-[88px]' : 'w-[280px]'} relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border-r border-white/50 dark:border-slate-800 flex flex-col z-50 hidden lg:flex shrink-0 transition-all duration-300 overflow-visible`}>
    <div className={`h-20 flex items-center ${collapsed ? 'justify-center' : 'px-6'}`}>
      <Link className={`flex items-center gap-3 group w-full ${collapsed ? 'justify-center' : ''}`} href="/">
        <div className="size-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
          <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
        </div>
        {!collapsed && <h2 className="text-[#111418] dark:text-white text-lg font-black leading-tight tracking-tight">Finanzas Claras</h2>}
      </Link>
    </div>

    <nav className={`flex-1 overflow-y-auto overflow-x-visible ${collapsed ? 'px-2' : 'px-4'} py-2 space-y-1 scrollbar-hide`}>
      {!collapsed && <p className="px-4 mt-4 mb-2 text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Principal</p>}
      <SidebarLink collapsed={collapsed} to="/" icon="dashboard" label="Visión general" exact />
      <SidebarLink collapsed={collapsed} to="/transactions" icon="receipt_long" label="Transacciones" />
      <SidebarLink collapsed={collapsed} to="/budgets" icon="pie_chart" label="Presupuestos" />
      <SidebarLink collapsed={collapsed} to="/reports" icon="monitoring" label="Reportes" />

      {!collapsed && <p className="px-4 mt-6 mb-2 text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Gestión</p>}
      <SidebarLink collapsed={collapsed} to="/accounts" icon="account_balance" label="Cuentas" />
      <SidebarLink collapsed={collapsed} to="/commitments" icon="event_repeat" label="Compromisos" />
      <SidebarLink collapsed={collapsed} to="/categories" icon="category" label="Categorías" />
      <SidebarLink collapsed={collapsed} to="/cards" icon="credit_card" label="Tarjetas y Cuotas" />
      <SidebarLink collapsed={collapsed} to="/rules" icon="update" label="Reglas Recurrentes" />
      <SidebarLink collapsed={collapsed} to="/ledgers" icon="menu_book" label="Libros Contables" />

      {!collapsed && <p className="px-4 mt-6 mb-2 text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Configuración</p>}
      <SidebarLink collapsed={collapsed} to="/profile" icon="person" label="Perfil de Usuario" />
      <SidebarLink collapsed={collapsed} to="/settings" icon="settings" label="Ajustes" />
      <div className="h-6"></div>
    </nav>

    <div className={`p-4 border-t border-white/50 dark:border-slate-800 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm ${collapsed ? 'flex justify-center' : ''}`}>
      <button className={`flex items-center gap-3 w-full p-2 rounded-xl hover:bg-white/60 dark:hover:bg-slate-800 transition-colors text-left group ${collapsed ? 'justify-center' : ''}`}>
        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-white dark:ring-slate-700 shadow-sm" style={{ backgroundImage: 'url("https://picsum.photos/100/100?random=1")' }}></div>
        {!collapsed && (
          <>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#111418] dark:text-white truncate group-hover:text-primary transition-colors">Usuario Demo</p>
              <p className="text-xs text-[#637288] dark:text-slate-500 truncate">demo@finanzas.com</p>
            </div>
            <span className="material-symbols-outlined text-[#637288] group-hover:text-primary">logout</span>
          </>
        )}
      </button>
    </div>
  </aside>
);
