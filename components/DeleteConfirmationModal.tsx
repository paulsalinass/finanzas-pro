"use client";

import React, { useEffect, useState } from 'react';

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: React.ReactNode;
    itemType?: string; // e.g. "Categoría", "Carpeta"
}

export function DeleteConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    itemType
}: DeleteConfirmationModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsClosing(false);
        } else {
            setIsClosing(true);
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsVisible(false);
        }, 300);
    };

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleConfirm = () => {
        // Optional: you might want to wait for the async action here,
        // but typically the parent handles the async logic and then closes.
        // If immediate close is desired:
        onConfirm();
        handleClose();
    };

    if (!isOpen && !isVisible) return null;

    return (
        <div
            className={`fixed top-0 right-0 bottom-0 left-0 lg:left-[var(--sidebar-width)] z-[200] flex items-center justify-center p-4 transition-all duration-300 ${isVisible && !isClosing ? 'bg-black/40 backdrop-blur-sm opacity-100' : 'bg-transparent pointer-events-none opacity-0'}`}
            onClick={handleClose}
        >
            <div
                className={`bg-white dark:bg-[#1e293b] w-full max-w-[400px] rounded-[2rem] shadow-2xl p-8 flex flex-col items-center text-center transition-all duration-300 transform ${isVisible && !isClosing ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Icon Circle */}
                <div className="size-20 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-red-500 font-bold text-4xl">!</span>
                </div>

                <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2 leading-tight">
                    {title}
                </h2>

                <div className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                    {description}
                </div>

                <div className="flex gap-4 w-full">
                    <button
                        onClick={handleClose}
                        className="flex-1 px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="flex-1 px-4 py-3.5 rounded-2xl bg-[#ff3b3b] hover:bg-red-600 text-white font-bold text-sm shadow-xl shadow-red-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}
