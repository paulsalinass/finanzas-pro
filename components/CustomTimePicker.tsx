"use client";

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface CustomTimePickerProps {
    isOpen: boolean;
    onClose: () => void;
    value: string; // HH:mm 24h format
    onChange: (time: string) => void;
}

export default function CustomTimePicker({ isOpen, onClose, value, onChange }: CustomTimePickerProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Time State
    const [hour, setHour] = useState(12);
    const [minute, setMinute] = useState(0);
    const [period, setPeriod] = useState<'AM' | 'PM'>('AM');

    // Refs for scrolling
    const hourRef = useRef<HTMLDivElement>(null);
    const minuteRef = useRef<HTMLDivElement>(null);
    const periodRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsClosing(false);

            let h = 12, m = 0, p: 'AM' | 'PM' = 'AM';

            // Parse initial time (HH:mm 24h)
            if (value) {
                const [hh, mm] = value.split(':').map(Number);
                p = hh >= 12 ? 'PM' : 'AM';
                h = hh % 12 || 12; // Convert 0 to 12
                m = mm;
            } else {
                const now = new Date();
                const hh = now.getHours();
                m = now.getMinutes();
                p = hh >= 12 ? 'PM' : 'AM';
                h = hh % 12 || 12;
            }

            setHour(h);
            setMinute(m);
            setPeriod(p);

            // Auto-scroll to position after render
            setTimeout(() => {
                const ITEM_HEIGHT = 40; // h-10 is 2.5rem = 40px

                if (hourRef.current) {
                    // Index is h - 1 (1-12)
                    hourRef.current.scrollTo({ top: (h - 1) * ITEM_HEIGHT, behavior: 'smooth' });
                }
                if (minuteRef.current) {
                    // Index is m (0-59)
                    minuteRef.current.scrollTo({ top: m * ITEM_HEIGHT, behavior: 'smooth' });
                }
                if (periodRef.current) {
                    // Index is 0 for AM, 1 for PM
                    periodRef.current.scrollTo({ top: (p === 'AM' ? 0 : 1) * ITEM_HEIGHT, behavior: 'smooth' });
                }
            }, 100);
        }
    }, [isOpen, value]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 300);
    };

    // Handle Escape Key
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.stopPropagation();
                e.stopImmediatePropagation();
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown, { capture: true });
        return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
    }, [isOpen]);

    const handleConfirm = () => {
        // Convert to 24h format
        let h = hour;
        if (period === 'PM' && h !== 12) h += 12;
        if (period === 'AM' && h === 12) h = 0;

        const timeString = `${h.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        onChange(timeString);
        handleClose();
    };

    if (!isOpen && !isVisible) return null;

    // Data arrays
    const hours = Array.from({ length: 12 }, (_, i) => i + 1);
    const minutes = Array.from({ length: 60 }, (_, i) => i);
    const periods = ['AM', 'PM'] as const;

    const content = (
        <div
            className={`fixed top-0 right-0 bottom-0 left-0 lg:pl-[var(--sidebar-width)] z-[45] flex items-center justify-center p-4 bg-black/10 backdrop-blur-md transition-opacity duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}
            onClick={(e) => {
                e.stopPropagation();
                handleClose();
            }}
        >
            <div
                className={`w-[320px] bg-white dark:bg-[#1e293b] rounded-3xl shadow-2xl p-6 border border-slate-100 dark:border-slate-700 transition-all duration-300 transform ${isVisible && !isClosing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Display */}
                <div className="text-center mb-8">
                    <h3 className="text-sm font-bold text-gray-400 mb-2">Seleccionar Hora</h3>
                    <div className="flex items-center justify-center gap-1 text-3xl font-black text-gray-800 dark:text-white">
                        <span>{hour.toString().padStart(2, '0')}</span>
                        <span className="text-gray-300">:</span>
                        <span>{minute.toString().padStart(2, '0')}</span>
                        <span className="text-lg ml-2 text-primary">{period}</span>
                    </div>
                </div>

                {/* Columns */}
                <div className="flex justify-center gap-2 h-40 mb-8 mask-gradient relative">
                    {/* Hour Column */}
                    <div ref={hourRef} className="w-16 text-center overflow-y-auto scrollbar-hide snap-y snap-mandatory py-14">
                        {hours.map(h => (
                            <div
                                key={h}
                                onClick={() => setHour(h)}
                                className={`h-10 flex items-center justify-center snap-center cursor-pointer transition-all ${hour === h ? 'text-xl font-bold text-gray-800 dark:text-white' : 'text-gray-300 dark:text-gray-600 hover:text-gray-500'}`}
                            >
                                {h.toString().padStart(2, '0')}
                            </div>
                        ))}
                    </div>

                    {/* Separator */}
                    <div className="w-4 flex items-center justify-center font-bold text-gray-300">:</div>

                    {/* Minute Column */}
                    <div ref={minuteRef} className="w-16 text-center overflow-y-auto scrollbar-hide snap-y snap-mandatory py-14">
                        {minutes.map(m => (
                            <div
                                key={m}
                                onClick={() => setMinute(m)}
                                className={`h-10 flex items-center justify-center snap-center cursor-pointer transition-all ${minute === m ? 'text-xl font-bold text-gray-800 dark:text-white' : 'text-gray-300 dark:text-gray-600 hover:text-gray-500'}`}
                            >
                                {m.toString().padStart(2, '0')}
                            </div>
                        ))}
                    </div>

                    {/* Period Column */}
                    <div ref={periodRef} className="w-16 text-center overflow-y-auto scrollbar-hide snap-y snap-mandatory py-14 bg-gray-50 dark:bg-white/5 rounded-xl ml-2">
                        {periods.map(p => (
                            <div
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`h-10 flex items-center justify-center snap-center cursor-pointer transition-all ${period === p ? 'text-sm font-bold text-primary' : 'text-xs text-gray-400'}`}
                            >
                                {p}
                            </div>
                        ))}
                    </div>

                    {/* Selection Highlight visual aid */}
                    <div className="absolute top-1/2 left-0 right-0 h-10 -translate-y-1/2 bg-gray-100/30 dark:bg-white/5 pointer-events-none rounded-xl border-y border-gray-100 dark:border-white/5"></div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-between items-center pt-2">
                    <button
                        onClick={handleClose}
                        className="px-6 py-2.5 rounded-xl bg-red-50 text-red-500 font-bold text-xs hover:bg-red-100 transition-colors cursor-pointer"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-6 py-2.5 rounded-xl bg-green-50 text-emerald-600 font-bold text-xs hover:bg-emerald-100 transition-colors cursor-pointer"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );

    return createPortal(content, document.body);
}
