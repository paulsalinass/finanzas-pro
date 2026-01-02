"use client";

import React, { useEffect, useState } from 'react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: React.ReactNode;
}

export function SuccessModal({
    isOpen,
    onClose,
    title,
    message
}: SuccessModalProps) {
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
                {/* Success Icon */}
                <div className="size-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 animate-scale-in">
                    <span className="material-symbols-outlined text-green-500 text-4xl">check</span>
                </div>

                <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2 leading-tight">
                    {title}
                </h2>

                <div className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                    {message}
                </div>

                <button
                    onClick={handleClose}
                    className="w-full px-4 py-3.5 rounded-2xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    Entendido
                </button>
            </div>
        </div>
    );
}
