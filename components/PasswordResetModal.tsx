import React, { useEffect, useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface PasswordResetModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    email: string;
}

export function PasswordResetModal({
    isOpen,
    onClose,
    onConfirm,
    email
}: PasswordResetModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsClosing(false);
            setStatus('idle'); // Reset status on open
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
            if (e.key === 'Escape' && isOpen && status !== 'loading') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, status]);

    const handleConfirm = async () => {
        setStatus('loading');
        try {
            await onConfirm();
            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('idle'); // Or error handling if needed
        }
    };

    if (!isOpen && !isVisible) return null;

    return (
        <>
            {/* Backdrop: Covers full screen, but z-40 puts it behind z-50 Sidebar */}
            <div
                className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}
                onClick={status !== 'loading' ? handleClose : undefined}
            />

            {/* Modal Container: Positioned to respect sidebar width for centering */}
            <div className={`fixed top-0 right-0 bottom-0 left-0 lg:left-[var(--sidebar-width)] z-[60] flex items-center justify-center p-4 pointer-events-none transition-all duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}>
                <div
                    className={`pointer-events-auto bg-white dark:bg-[#1e293b] w-full max-w-[400px] rounded-[2rem] shadow-2xl p-8 flex flex-col items-center text-center transition-all duration-300 transform ${isVisible && !isClosing ? 'scale-100' : 'scale-90'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {status === 'success' ? (
                        <>
                            {/* Success Icon */}
                            <div className="size-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 animate-scale-in">
                                <span className="material-symbols-outlined text-green-500 text-4xl">check</span>
                            </div>

                            <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2 leading-tight">
                                ¡Correo Enviado!
                            </h2>

                            <div className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                                Hemos enviado las instrucciones para restablecer tu contraseña a <span className="text-slate-900 dark:text-white font-bold">{email}</span>.
                            </div>

                            <button
                                onClick={handleClose}
                                className="w-full px-4 py-3.5 rounded-2xl bg-primary hover:bg-gray-800 text-white font-bold text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Entendido
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Confirm Icon */}
                            <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <Mail className="text-primary" size={40} strokeWidth={2.5} />
                            </div>

                            <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2 leading-tight">
                                ¿Restablecer contraseña?
                            </h2>

                            <div className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                                Se enviará un correo de restablecimiento de contraseña a <span className="text-slate-900 dark:text-white font-bold">{email}</span>.
                            </div>

                            <div className="flex gap-4 w-full">
                                <button
                                    onClick={handleClose}
                                    disabled={status === 'loading'}
                                    className="flex-1 px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm transition-colors disabled:opacity-50 cursor-pointer"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    disabled={status === 'loading'}
                                    className="group flex-1 relative px-4 py-3.5 rounded-2xl bg-primary hover:bg-gray-800 text-white font-bold text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait flex items-center justify-center overflow-hidden cursor-pointer"
                                >
                                    {status === 'loading' ? (
                                        <div className="flex items-center gap-2">
                                            <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Enviando...</span>
                                        </div>
                                    ) : (
                                        <>
                                            <span className="transition-transform duration-300 group-hover:-translate-x-3">Enviar Correo</span>
                                            <ArrowRight size={18} className="absolute right-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
