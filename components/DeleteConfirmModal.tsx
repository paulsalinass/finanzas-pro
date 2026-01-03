"use client";

import React, { useEffect, useState } from 'react';
import { createPortal } from "react-dom";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  itemName?: string;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "¿Eliminar elemento?",
  message = "Estás a punto de eliminar este elemento. Esta acción no se puede deshacer.",
  itemName
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  // Controls the CSS transition (opacity/scale)
  const [isVisible, setIsVisible] = useState(false);
  // Controls the rendering in DOM (to allow exit animation)
  const [isRendered, setIsRendered] = useState(isOpen);

  useEffect(() => {
    setIsMounted(true);
    setPortalElement(document.body);
    return () => setIsMounted(false);
  }, []);

  // Animation and Rendering handling
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Double rAF to ensure browser paints initial state (opacity-0) before switching to active
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true));
      });
    } else {
      setIsVisible(false);
      // Wait for transition to finish before removing from DOM
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 300); // Matches transition-duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape key (Capture Phase)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        // Stop propagation to prevent closing parent modals (e.g. TransactionModal)
        e.stopPropagation();
        e.stopImmediatePropagation();
        onClose();
      }
    };
    // Use { capture: true } to intercept the event before it reaches underlying listeners
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [isOpen, onClose]);

  if (!isMounted || !portalElement) return null;
  // If not supposed to render (closed and animation finished), return null
  if (!isRendered) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center p-4 lg:pl-[var(--sidebar-width)] bg-black/10 backdrop-blur-md transition-all duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        className={`glass-card relative w-full max-w-md transform overflow-hidden rounded-[2.5rem] shadow-premium flex flex-col items-center pt-10 pb-8 px-8 sm:px-10 border border-white/80 dark:border-slate-800 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon Container */}
        <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
          <span className="material-symbols-outlined text-[40px] text-red-500">priority_high</span>
        </div>

        {/* Headline */}
        <h3 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight text-center mb-2">
          {title}
        </h3>

        {/* Body Text */}
        <div className="text-center mb-8 px-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
            {message} {itemName && (
              <span className="font-bold text-slate-900 dark:text-white">"{itemName}"</span>
            )}
          </p>
        </div>

        {/* Button Group */}
        <div className="flex w-full gap-3">
          <button
            onClick={onClose}
            className="flex-1 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white text-gray-700 border border-gray-200 hover:bg-gray-800 hover:text-white dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 dark:border-white/10 transition-all focus:outline-none text-sm font-bold"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex-1 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-red-500 hover:bg-red-600 text-white text-sm font-bold shadow-lg shadow-red-500/30 transition-all transform active:scale-95 focus:outline-none"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>,
    portalElement
  );
};
