/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Receipt, PieChart, Menu, Plus } from 'lucide-react';
import { TransactionModal } from './TransactionModal';

export const MobileNav: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  return (
    <>
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-white/90 dark:bg-slate-900/90 h-[88px] pb-6 px-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">

        {/* Left Side */}
        <Link href="/" className={`flex flex-col items-center gap-1.5 w-16 transition-all group ${isActive('/') ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>
          <div className={`p-1 rounded-xl transition-all ${isActive('/') ? 'bg-primary/10 scale-110' : ''}`}>
            <LayoutDashboard size={24} strokeWidth={isActive('/') ? 2.5 : 2} />
          </div>
          <span className={`text-[10px] ${isActive('/') ? 'font-bold' : 'font-medium'}`}>Inicio</span>
        </Link>

        <Link href="/transactions" className={`flex flex-col items-center gap-1.5 w-16 transition-all group ${isActive('/transactions') ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>
          <div className={`p-1 rounded-xl transition-all ${isActive('/transactions') ? 'bg-primary/10 scale-110' : ''}`}>
            <Receipt size={24} strokeWidth={isActive('/transactions') ? 2.5 : 2} />
          </div>
          <span className={`text-[10px] ${isActive('/transactions') ? 'font-bold' : 'font-medium'}`}>Transacciones</span>
        </Link>

        {/* Center Button */}
        <div className="relative -top-6 z-[60]">
          <button
            onClick={() => setIsTransactionModalOpen(true)}
            className="size-16 rounded-full bg-primary hover:bg-primary-hover shadow-xl shadow-primary/30 flex items-center justify-center text-white active:scale-95 transition-transform border-4 border-white dark:border-slate-950"
          >
            <Plus size={32} strokeWidth={3} />
          </button>
        </div>

        {/* Right Side */}
        <Link href="/budgets" className={`flex flex-col items-center gap-1.5 w-16 transition-all group ${isActive('/budgets') ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>
          <div className={`p-1 rounded-xl transition-all ${isActive('/budgets') ? 'bg-primary/10 scale-110' : ''}`}>
            <PieChart size={24} strokeWidth={isActive('/budgets') ? 2.5 : 2} />
          </div>
          <span className={`text-[10px] ${isActive('/budgets') ? 'font-bold' : 'font-medium'}`}>Presupuestos</span>
        </Link>

        <Link href="/menu" className={`flex flex-col items-center gap-1.5 w-16 transition-all group ${isActive('/menu') ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>
          <div className={`p-1 rounded-xl transition-all ${isActive('/menu') ? 'bg-primary/10 scale-110' : ''}`}>
            <Menu size={24} strokeWidth={isActive('/menu') ? 2.5 : 2} />
          </div>
          <span className={`text-[10px] ${isActive('/menu') ? 'font-bold' : 'font-medium'}`}>Menú</span>
        </Link>
      </nav>

      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={() => setIsTransactionModalOpen(false)}
      />
    </>
  );
};
