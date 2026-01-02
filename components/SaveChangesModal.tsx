"use client";

import React, { useEffect, useState } from 'react';
import { Save, X } from 'lucide-react';

interface SaveChangesModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function SaveChangesModal({
    isOpen,
    onClose,
    onConfirm
}: SaveChangesModalProps) {
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
        onConfirm();
        handleClose();
    };

    if (!isVisible && !isOpen) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/30 dark:bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div className={`relative w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isClosing ? 'scale-95 translate-y-4' : 'scale-100 translate-y-0'}`}>

                {/* Header Pattern */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 dark:from-emerald-500/10 dark:to-teal-600/10" />

                <div className="relative p-6 px-8 pt-8 text-center">
                    {/* Icon */}
                    <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shadow-lg shadow-emerald-500/20 ring-4 ring-white dark:ring-slate-800">
                        <Save size={32} className="text-emerald-500 dark:text-emerald-400" strokeWidth={2} />
                    </div>

                    <h2 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white mb-3">
                        ¿Guardar cambios?
                    </h2>

                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                        Se actualizará tu información de perfil con los datos ingresados.
                    </p>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button
                            onClick={handleClose}
                            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleConfirm}
                            className="flex-1 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
                        >
                            Guardar
                        </button>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                    <X size={16} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
}
