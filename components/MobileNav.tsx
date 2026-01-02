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
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 pointer-events-none">
        <div className="relative flex items-end w-full filter drop-shadow-[0_-5px_10px_rgba(0,0,0,0.05)]">
          {/* Left Block */}
          <div className="flex-1 h-[80px] bg-white dark:bg-[#0B1120] rounded-tl-[30px] flex items-center justify-evenly pointer-events-auto pb-2 pl-2">
            <Link href="/" className={`flex flex-col items-center justify-center gap-1 min-w-[60px] transition-colors duration-200 group ${isActive('/') ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
              <LayoutDashboard size={22} strokeWidth={isActive('/') ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Inicio</span>
            </Link>

            <Link href="/transactions" className={`flex flex-col items-center justify-center gap-1 min-w-[60px] transition-colors duration-200 group ${isActive('/transactions') ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
              <Receipt size={22} strokeWidth={isActive('/transactions') ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Movim.</span>
            </Link>
          </div>

          {/* Center Notch SVG */}
          <div className="relative w-[128px] h-[80px] flex-shrink-0 pointer-events-auto">
            <svg
              viewBox="0 0 128 80"
              className="w-full h-full fill-white dark:fill-[#0B1120]"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C30,0 36,40 64,40 C92,40 98,0 128,0 L128,80 L0,80 Z" />
            </svg>
            {/* FAB */}
            <div className="absolute top-[8px] left-1/2 -translate-x-1/2">
              <button
                onClick={() => setIsTransactionModalOpen(true)}
                className="size-[56px] rounded-full bg-primary hover:bg-primary-hover shadow-lg shadow-primary/30 flex items-center justify-center text-white active:scale-95 transition-all duration-200"
              >
                <Plus size={28} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Right Block */}
          <div className="flex-1 h-[80px] bg-white dark:bg-[#0B1120] rounded-tr-[30px] flex items-center justify-evenly pointer-events-auto pb-2 pr-2">
            <Link href="/budgets" className={`flex flex-col items-center justify-center gap-1 min-w-[60px] transition-colors duration-200 group ${isActive('/budgets') ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
              <PieChart size={22} strokeWidth={isActive('/budgets') ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Presup.</span>
            </Link>

            <Link href="/menu" className={`flex flex-col items-center justify-center gap-1 min-w-[60px] transition-colors duration-200 group ${isActive('/menu') ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
              <Menu size={22} strokeWidth={isActive('/menu') ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Menú</span>
            </Link>
          </div>
        </div>
      </div>

      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={() => setIsTransactionModalOpen(false)}
      />
    </>
  );
};
