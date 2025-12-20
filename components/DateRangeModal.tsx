"use client";

import React, { useState, useEffect } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

interface DateRangeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (start: Date, end: Date) => void;
    initialStartDate?: Date | null;
    initialEndDate?: Date | null;
}

export const DateRangeModal: React.FC<DateRangeModalProps> = ({ isOpen, onClose, onApply, initialStartDate, initialEndDate }) => {
    const [range, setRange] = useState<DateRange | undefined>({
        from: initialStartDate || undefined,
        to: initialEndDate || undefined
    });

    useEffect(() => {
        if (isOpen) {
            setRange({
                from: initialStartDate || undefined,
                to: initialEndDate || undefined
            });
        }
    }, [isOpen, initialStartDate, initialEndDate]);

    const handleApply = () => {
        if (range?.from && range?.to) {
            onApply(range.from, range.to);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
            <div className="glass-card bg-[#111821] border border-white/10 rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-white">Seleccionar Rango</h3>
                        <p className="text-sm text-gray-400">
                            {range?.from ? range.from.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }) : '...'}
                            {' - '}
                            {range?.to ? range.to.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }) : '...'}
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="flex justify-center bg-[#1a212b] rounded-xl p-4 border border-white/5">
                    <style>{`
                        .rdp { --rdp-cell-size: 40px; --rdp-accent-color: #307de8; --rdp-background-color: #307de8; margin: 0; }
                        .rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]) { 
                            background-color: var(--rdp-accent-color); color: white; 
                        }
                        .rdp-day_selected.rdp-day_range_middle {
                            background-color: rgba(48, 125, 232, 0.2) !important;
                            color: white !important;
                            border-radius: 0 !important;
                        }
                        .rdp-day_selected.rdp-day_range_start {
                             border-top-left-radius: 50%; border-bottom-left-radius: 50%; border-top-right-radius: 0; border-bottom-right-radius: 0;
                        }
                        .rdp-day_selected.rdp-day_range_end {
                             border-top-right-radius: 50%; border-bottom-right-radius: 50%; border-top-left-radius: 0; border-bottom-left-radius: 0;
                        }
                        .rdp-caption_label { color: white; font-weight: 600; font-size: 1rem; text-transform: capitalize; }
                        .rdp-nav_button { color: #9da9b8; }
                        .rdp-nav_button:hover { color: white; background-color: rgba(255,255,255,0.1); }
                        .rdp-head_cell { color: #6b7280; font-weight: 500; font-size: 0.875rem; text-transform: uppercase; }
                        .rdp-day { color: #e2e8f0; font-size: 0.9rem; }
                        .rdp-day:hover:not(.rdp-day_selected) { background-color: rgba(255,255,255,0.1); }
                        .rdp-months { gap: 2rem; justify-content: center; }
                    `}</style>
                    <DayPicker
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        numberOfMonths={2}
                        pagedNavigation
                        locale={es}
                        defaultMonth={initialStartDate || new Date()}
                    />
                </div>

                <div className="flex justify-end gap-3 pt-6 mt-2 border-t border-white/10">
                    <button onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Cancelar
                    </button>
                    <button
                        onClick={handleApply}
                        disabled={!range?.from || !range?.to}
                        className="px-8 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                        Aplicar Filtro
                    </button>
                </div>
            </div>
        </div>
    );
};
