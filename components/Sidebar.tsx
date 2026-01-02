"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
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
  Repeat,
  BookOpen,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Wallet,
  LucideIcon
} from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  exact?: boolean;
  fill?: boolean;
  collapsed?: boolean;
  onHoverChange?: (info: { label: string; top: number } | null) => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon: Icon, label, exact = false, fill = false, collapsed = false, onHoverChange }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { userProfile } = useFinance();
  const isActive = exact ? pathname === to : pathname.startsWith(to);
  const linkRef = React.useRef<HTMLAnchorElement | null>(null);

  const handleMouseEnter = () => {
    if (!collapsed || !onHoverChange) return;
    const rect = linkRef.current?.getBoundingClientRect();
    if (!rect) return;
    onHoverChange({
      label,
      top: rect.top + rect.height / 2 - 16, // Modified to shift up significantly
    });
  };

  const handleMouseLeave = () => {
    if (!onHoverChange) return;
    onHoverChange(null);
  };

  return (
    <Link
      href={to}
      className={`relative flex items-center gap-3 rounded-xl transition-all group overflow-visible ${collapsed ? 'justify-center px-2 py-3' : 'px-4 py-3'
        } ${isActive ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25' : 'text-[#637288] dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary'
        }`}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon
        size={22}
        strokeWidth={1.5}
        className={`transition-transform group-hover:scale-105 ${isActive || fill ? 'fill-transparent' : ''}`}
      />
      {!collapsed && <span className={`text-sm ${isActive ? 'font-semibold' : 'font-normal'}`}>{label}</span>}
    </Link>
  );
};

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, onToggle }) => {
  const [tooltip, setTooltip] = React.useState<{ label: string; top: number } | null>(null);
  const [showLogoutMenu, setShowLogoutMenu] = React.useState(false);
  const { userProfile } = useFinance();
  const router = useRouter();
  const supabase = createClient();
  const logoutTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/login');
  };

  const handleLogoutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowLogoutMenu(!showLogoutMenu);

    // Auto-close after 3 seconds if not interacted with
    if (!showLogoutMenu) {
      if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
      logoutTimerRef.current = setTimeout(() => setShowLogoutMenu(false), 3000);
    }
  };

  const displayName = userProfile?.full_name || userProfile?.username || 'Usuario';
  const displayEmail = userProfile?.email || 'usuario@finanzas.com';
  const displayAvatar = userProfile?.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(displayName) + '&background=random';

  React.useEffect(() => {
    if (!collapsed) {
      setTooltip(null);
    }
  }, [collapsed]);

  return (
    <aside className={`${collapsed ? 'w-[88px]' : 'w-[280px]'} relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-800 ml-4 my-4 rounded-3xl h-[calc(100vh-2rem)] shadow-xl flex flex-col z-50 hidden lg:flex shrink-0 transition-all duration-300 overflow-visible group`}>
      <div className={`h-20 flex items-center relative shrink-0 ${collapsed ? 'justify-center' : 'px-6'}`}>
        <Link className={`flex items-center gap-3 group w-full ${collapsed ? 'justify-center' : ''}`} href="/">
          <div className="size-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-white transition-colors duration-300 shadow-sm">
            <Wallet size={24} strokeWidth={1.5} />
          </div>
          {!collapsed && <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-tight">Finanzas Claras</h2>}
        </Link>

        <button
          onClick={onToggle}
          className={`absolute transition-all duration-300 p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-slate-400 hover:text-primary ${collapsed ? 'top-[60px] left-1/2 -translate-x-1/2' : 'right-4 top-1/2 -translate-y-1/2'}`}
        >
          {collapsed ? <ChevronRight size={20} strokeWidth={1.5} /> : <ChevronLeft size={20} strokeWidth={1.5} />}
        </button>
      </div>

      <nav className={`flex-1 overflow-y-auto overflow-x-visible ${collapsed ? 'px-2 pt-8' : 'px-4 py-2'} space-y-1 scrollbar-hide`}>
        {!collapsed && <p className="px-4 mt-4 mb-2 text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Principal</p>}
        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/" icon={LayoutDashboard} label="Visión general" exact />
        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/transactions" icon={Receipt} label="Transacciones" />
        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/budgets" icon={PieChart} label="Presupuestos" />
        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/reports" icon={BarChart3} label="Reportes" />

        {collapsed ? (
          <div className="my-4 mx-2 border-t border-slate-200 dark:border-slate-800" />
        ) : (
          <p className="px-4 mt-6 mb-2 text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Gestión</p>
        )}
        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/accounts" icon={Landmark} label="Cuentas" />
        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/commitments" icon={CalendarClock} label="Compromisos" />
        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/categories" icon={Tags} label="Categorías" />
        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/cards" icon={CreditCard} label="Tarjetas y Cuotas" />

        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/ledgers" icon={BookOpen} label="Libros Contables" />

        {collapsed ? (
          <div className="my-4 mx-2 border-t border-slate-200 dark:border-slate-800" />
        ) : (
          <p className="px-4 mt-6 mb-2 text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Configuración</p>
        )}
        <SidebarLink collapsed={collapsed} onHoverChange={setTooltip} to="/profile" icon={User} label="Perfil de Usuario" />

        <div className="h-6"></div>
      </nav>

      <div className={`p-4 border-t border-white/50 dark:border-slate-800 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm ${collapsed ? 'flex justify-center' : ''} relative`}>
        {showLogoutMenu && (
          <div className={`absolute bottom-full mb-2 ${collapsed ? 'left-1/2 -translate-x-1/2' : 'left-4 w-[calc(100%-2rem)]'} bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 p-1.5 animate-in fade-in slide-in-from-bottom-2 z-[60]`}>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-bold transition-colors"
            >
              <LogOut size={16} />
              {!collapsed && <span>Cerrar Sesión</span>}
            </button>
          </div>
        )}
        <button
          onClick={handleLogoutClick}
          className={`flex items-center gap-3 w-full p-2 rounded-xl hover:bg-white/60 dark:hover:bg-slate-800 transition-colors text-left group ${collapsed ? 'justify-center' : ''}`}
        >
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-white dark:ring-slate-700 shadow-sm"
            style={{ backgroundImage: `url("${displayAvatar}")` }}
          ></div>
          {!collapsed && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#111418] dark:text-white truncate group-hover:text-primary transition-colors">
                  {displayName}
                </p>
                <p className="text-xs text-[#637288] dark:text-slate-500 truncate">
                  {displayEmail}
                </p>
              </div>
              <LogOut size={20} strokeWidth={1.5} className="text-[#637288] group-hover:text-primary" />
            </>
          )}
        </button>
      </div>
      {collapsed && tooltip && (
        <div className="pointer-events-none fixed z-[99] -translate-y-1/2" style={{ top: tooltip.top, left: collapsed ? 96 : -9999 }}>
          <div className="relative px-5 py-3 rounded-lg bg-[#292929] text-white text-xs font-semibold shadow-lg whitespace-nowrap">
            {tooltip.label}
            <span className="absolute -left-[4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#292929] rotate-45"></span>
          </div>
        </div>
      )}
    </aside>
  );
};
