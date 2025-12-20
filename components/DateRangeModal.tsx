"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format, startOfDay, endOfDay, subDays, startOfMonth, endOfMonth, subMonths, addMonths } from 'date-fns';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

interface DateRangeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (start: Date, end: Date) => void;
    initialStartDate?: Date | null;
    initialEndDate?: Date | null;
}

interface QuickRange {
    label: string;
    description?: string;
    getRange: () => { from: Date; to: Date };
}

const quickRanges: QuickRange[] = [
    {
        label: 'Hoy',
        getRange: () => {
            const today = new Date();
            return { from: startOfDay(today), to: endOfDay(today) };
        }
    },
    {
        label: 'Ayer',
        getRange: () => {
            const yesterday = subDays(new Date(), 1);
            return { from: startOfDay(yesterday), to: endOfDay(yesterday) };
        }
    },
    {
        label: 'Últimos 7 días',
        getRange: () => ({
            from: startOfDay(subDays(new Date(), 6)),
            to: endOfDay(new Date())
        })
    },
    {
        label: 'Últimos 30 días',
        getRange: () => ({
            from: startOfDay(subDays(new Date(), 29)),
            to: endOfDay(new Date())
        })
    },
    {
        label: 'Este mes',
        getRange: () => ({
            from: startOfMonth(new Date()),
            to: endOfDay(new Date())
        })
    },
    {
        label: 'Mes pasado',
        getRange: () => {
            const reference = subMonths(new Date(), 1);
            return {
                from: startOfMonth(reference),
                to: endOfMonth(reference)
            };
        }
    },
    {
        label: 'Últimos 3 meses',
        getRange: () => ({
            from: startOfMonth(subMonths(new Date(), 2)),
            to: endOfDay(new Date())
        })
    }
];

const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export const DateRangeModal: React.FC<DateRangeModalProps> = ({ isOpen, onClose, onApply, initialStartDate, initialEndDate }) => {
    const [range, setRange] = useState<DateRange | undefined>({
        from: initialStartDate || undefined,
        to: initialEndDate || undefined
    });
    const [activePreset, setActivePreset] = useState<string | null>(null);
    const [leftMonth, setLeftMonth] = useState<Date>(() => startOfMonth(initialStartDate || new Date()));
    const [rightMonth, setRightMonth] = useState<Date>(() => addMonths(startOfMonth(initialStartDate || new Date()), 1));

    const syncCalendarMonths = (fromDate?: Date | null, toDate?: Date | null) => {
        const baseLeft = startOfMonth(fromDate || new Date());
        let baseRight = toDate ? startOfMonth(toDate) : addMonths(baseLeft, 1);
        if (baseRight <= baseLeft) {
            baseRight = addMonths(baseLeft, 1);
        }
        setLeftMonth(baseLeft);
        setRightMonth(baseRight);
    };

    useEffect(() => {
        if (isOpen) {
            setRange({
                from: initialStartDate || undefined,
                to: initialEndDate || undefined
            });
            setActivePreset(null);
            syncCalendarMonths(initialStartDate || undefined, initialEndDate || undefined);
        }
    }, [isOpen, initialStartDate, initialEndDate]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const years = useMemo(() => {
        const current = new Date().getFullYear();
        return Array.from({ length: 11 }, (_, idx) => current - 5 + idx);
    }, []);

    const handleRangeSelect = (selected: DateRange | undefined) => {
        if (!selected?.from) {
            setRange(undefined);
            return;
        }

        if (!selected.to) {
            setRange({ from: selected.from, to: undefined });
            syncCalendarMonths(selected.from, undefined);
            setActivePreset(null);
            return;
        }

        const start = startOfDay(selected.from);
        const end = endOfDay(selected.to);

        if (end < start) {
            setRange({ from: end, to: undefined });
            syncCalendarMonths(end, undefined);
            setActivePreset(null);
            return;
        }

        setRange({ from: start, to: end });
        syncCalendarMonths(start, end);
        setActivePreset(null);
    };

    const handlePresetClick = (preset: QuickRange) => {
        const presetRange = preset.getRange();
        setRange(presetRange);
        setActivePreset(preset.label);
        syncCalendarMonths(presetRange.from, presetRange.to);
    };

    const handleApply = () => {
        if (range?.from && range?.to) {
            onApply(range.from, range.to);
            onClose();
        }
    };

    const formattedRange = useMemo(() => {
        if (!range?.from || !range?.to) return 'Selecciona un rango';
        return `${format(range.from, "d MMM, yyyy", { locale: es })} - ${format(range.to, "d MMM, yyyy", { locale: es })}`;
    }, [range]);

    const handleLeftMonthChange = (next: Date) => {
        const normalized = startOfMonth(next);
        setLeftMonth(normalized);
        if (rightMonth <= normalized) {
            setRightMonth(addMonths(normalized, 1));
        }
    };

    const handleRightMonthChange = (next: Date) => {
        const normalized = startOfMonth(next);
        if (normalized <= leftMonth) {
            setRightMonth(addMonths(leftMonth, 1));
            return;
        }
        setRightMonth(normalized);
    };

    const MonthControls = ({
        month,
        onChange,
        disablePrev,
        disableNext
    }: {
        month: Date;
        onChange: (date: Date) => void;
        disablePrev?: boolean;
        disableNext?: boolean;
    }) => (
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
                <select
                    value={month.getMonth()}
                    onChange={(event) => {
                        const updated = new Date(month);
                        updated.setMonth(Number(event.target.value));
                        updated.setDate(1);
                        onChange(updated);
                    }}
                    className="px-2 py-1 text-xs font-semibold rounded-lg border border-slate-200 bg-white focus:border-primary focus:outline-none dark:bg-transparent dark:border-white/20 dark:text-white"
                >
                    {monthNames.map((name, idx) => (
                        <option key={name} value={idx}>
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </option>
                    ))}
                </select>
                <select
                    value={month.getFullYear()}
                    onChange={(event) => {
                        const updated = new Date(month);
                        updated.setFullYear(Number(event.target.value));
                        updated.setDate(1);
                        onChange(updated);
                    }}
                    className="px-2 py-1 text-xs font-semibold rounded-lg border border-slate-200 bg-white focus:border-primary focus:outline-none dark:bg-transparent dark:border-white/20 dark:text-white"
                >
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex items-center gap-1 text-primary">
                <button
                    type="button"
                    onClick={() => onChange(addMonths(month, -1))}
                    disabled={disablePrev}
                    className="size-7 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-40"
                >
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button
                    type="button"
                    onClick={() => onChange(addMonths(month, 1))}
                    disabled={disableNext}
                    className="size-7 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-40"
                >
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
            </div>
        </div>
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[120] flex" onClick={onClose}>
            <div className="hidden lg:block w-[240px]" />
            <div className="flex-1 relative bg-slate-900/35 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
                <div
                    className="date-range-modal w-full max-w-5xl bg-white dark:bg-[#101828] rounded-[28px] shadow-2xl border border-slate-200/80 dark:border-white/10 p-4 sm:p-5"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-start justify-between gap-3 mb-4">
                        <h3 className="text-base font-black text-slate-900 dark:text-white">Seleccionar Rango</h3>
                        <button
                            onClick={onClose}
                            className="size-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-primary hover:bg-primary/10 transition-colors dark:bg-white/10 dark:text-white"
                        >
                            <span className="material-symbols-outlined text-lg">close</span>
                        </button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <aside className="flex flex-col gap-2 w-full lg:w-56">
                            <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wide">Rangos rápidos</p>
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                                {quickRanges.map((preset) => {
                                    const isActive = activePreset === preset.label;
                                    return (
                                        <button
                                            key={preset.label}
                                            onClick={() => handlePresetClick(preset)}
                                            className={`text-left px-3 py-1.5 rounded-2xl border text-[11px] font-semibold transition-all ${
                                                isActive
                                                    ? 'bg-primary/10 border-primary/40 text-primary'
                                                    : 'border-slate-200 text-slate-600 hover:border-primary/30 hover:text-primary'
                                            }`}
                                        >
                                            {preset.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </aside>

                        <div className="flex-1 overflow-hidden px-2 md:px-4">
                            <style>{`
                                .date-range-modal .rdp {
                                    --rdp-cell-size: 30px;
                                    --rdp-accent-color: #2563eb;
                                    --rdp-background-color: rgba(37, 99, 235, 0.12);
                                    --rdp-range_border-radius: 999px;
                                    margin: 0;
                                    color: #0f172a;
                                }
                                .dark .date-range-modal .rdp {
                                    color: #f8fafc;
                                }
                                .date-range-modal .rdp-head_cell {
                                    color: #94a3b8;
                                    font-weight: 600;
                                    font-size: 0.7rem;
                                    text-transform: uppercase;
                                }
                                .dark .date-range-modal .rdp-head_cell {
                                    color: rgba(255,255,255,0.7);
                                }
                                .date-range-modal .rdp-day {
                                    font-weight: 500;
                                    font-size: 0.85rem;
                                }
                                .date-range-modal .rdp-day_selected:not([disabled]) {
                                    background-color: #2563eb;
                                    color: #fff;
                                }
                                .date-range-modal .rdp-day_range_middle {
                                    background-color: rgba(37,99,235,0.12);
                                    color: inherit;
                                    border-radius: 999px !important;
                                }
                                .date-range-modal .rdp-root,
                                .date-range-modal .rdp-months,
                                .date-range-modal .rdp-month {
                                    width: 100%;
                                }
                                .date-range-modal .rdp-caption,
                                .date-range-modal .rdp-nav {
                                    display: none;
                                }
                            `}</style>
                            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-6 justify-between">
                                <div className="flex-1 border border-slate-100 rounded-2xl p-2 shadow-sm dark:border-white/10 backdrop-blur-sm">
                                    <MonthControls
                                        month={leftMonth}
                                        onChange={handleLeftMonthChange}
                                    />
                                    <DayPicker
                                        mode="range"
                                        selected={range}
                                        onSelect={handleRangeSelect}
                                        month={leftMonth}
                                        onMonthChange={handleLeftMonthChange}
                                        numberOfMonths={1}
                                        locale={es}
                                    />
                                </div>
                                <div className="flex-1 border border-slate-100 rounded-2xl p-2 shadow-sm dark:border-white/10 backdrop-blur-sm">
                                    <MonthControls
                                        month={rightMonth}
                                        onChange={handleRightMonthChange}
                                        disablePrev={rightMonth <= addMonths(leftMonth, 1)}
                                    />
                                    <DayPicker
                                        mode="range"
                                        selected={range}
                                        onSelect={handleRangeSelect}
                                        month={rightMonth}
                                        onMonthChange={handleRightMonthChange}
                                        numberOfMonths={1}
                                        locale={es}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 border-t border-slate-100 dark:border-white/10 pt-3 flex flex-col gap-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                    <input
                                        readOnly
                                        value={range?.from ? format(range.from, 'dd/MM/yyyy') : ''}
                                        placeholder="Inicio"
                                        className="flex-1 sm:w-32 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-700 focus:border-primary focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
                                    />
                                    <span className="text-slate-400 text-xs">-</span>
                                    <input
                                        readOnly
                                        value={range?.to ? format(range.to, 'dd/MM/yyyy') : ''}
                                        placeholder="Fin"
                                        className="flex-1 sm:w-32 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-700 focus:border-primary focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
                                    />
                                </div>
                                <p className="text-[11px] text-slate-400 dark:text-white/60">{formattedRange}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-2 justify-end w-full sm:w-auto">
                                <button onClick={onClose} className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-[11px] font-semibold hover:border-slate-300 dark:border-white/10 dark:text-white">
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleApply}
                                    disabled={!range?.from || !range?.to}
                                    className="px-6 py-2 rounded-xl bg-primary text-white text-[11px] font-bold shadow-lg shadow-primary/30 hover:bg-primary-hover transition disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                                >
                                    Aplicar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
