"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useFinance } from "@/context/FinanceContext";

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose
}) => {
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead } = useFinance();
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setPortalElement(document.body);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      // Double rAF ensures the browser validates the 'closed' state first, then transitions to 'open' in the next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true));
      });
    } else {
      setIsVisible(false);
      // Wait for animation to finish before unmounting (300ms matches CSS transition)
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isMounted || !portalElement) return null;

  const sortedNotifications = [...(notifications || [])].sort((a, b) => {
    if (a.read === b.read) return 0;
    return a.read ? 1 : -1;
  });

  return createPortal(
    <div
      className={`fixed inset-0 z-40 flex justify-end p-4 sm:p-6 bg-black/10 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${isVisible ? "opacity-100" : "opacity-0"
        }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md bg-white/95 dark:bg-slate-900 rounded-3xl shadow-xl border border-white/60 dark:border-slate-800 flex flex-col gap-6 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">Notificaciones</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={markAllNotificationsAsRead}
              className="text-[10px] font-black uppercase tracking-wider text-primary hover:text-primary-hover transition-colors"
            >
              Marcar todo leído
            </button>
            <button onClick={onClose} className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 max-h-[70vh] overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
          {sortedNotifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => markNotificationAsRead(notif.id)}
              className={`glass-card p-4 rounded-2xl border transition-all hover:bg-white dark:hover:bg-slate-800 cursor-pointer ${notif.read
                ? "border-transparent opacity-60"
                : "border-l-4 border-l-primary border-y-white/60 border-r-white/60 dark:border-y-slate-800 dark:border-r-slate-800 bg-white/70 dark:bg-slate-800/70 shadow-md transform hover:-translate-y-1"
                }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 size-10 rounded-xl flex items-center justify-center shrink-0 ${notif.type === "WARNING"
                    ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30"
                    : notif.type === "SUCCESS"
                      ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30"
                      : notif.type === "ERROR"
                        ? "bg-red-100 text-red-600 dark:bg-red-900/30"
                        : "bg-blue-100 text-blue-600 dark:bg-blue-900/30"
                    }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {notif.type === "WARNING" ? "warning" : notif.type === "SUCCESS" ? "check_circle" : notif.type === "ERROR" ? "error" : "info"}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-black text-sm ${notif.read ? "text-slate-700 dark:text-slate-300" : "text-slate-900 dark:text-white"}`}>
                      {notif.title}
                    </h3>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{notif.time}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{notif.message}</p>
                </div>
                {!notif.read && <div className="size-2 rounded-full bg-primary mt-2"></div>}
              </div>
            </div>
          ))}

          {sortedNotifications.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <span className="material-symbols-outlined text-6xl mb-4 opacity-50">notifications_off</span>
              <p className="font-bold">No tienes notificaciones</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    portalElement
  );
};
