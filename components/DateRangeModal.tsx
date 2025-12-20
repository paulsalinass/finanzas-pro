"use client";

import React, { useState, useEffect } from 'react';

interface DateRangeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (start: Date, end: Date) => void;
    initialStartDate?: Date | null;
    initialEndDate?: Date | null;
}

export const DateRangeModal: React.FC<DateRangeModalProps> = ({ isOpen, onClose, onApply, initialStartDate, initialEndDate }) => {
    const [startDate, setStartDate] = useState<Date | null>(initialStartDate || null);
    const [endDate, setEndDate] = useState<Date | null>(initialEndDate || null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    useEffect(() => {
        if (isOpen) {
            setStartDate(initialStartDate || null);
            setEndDate(initialEndDate || null);
            setCurrentMonth(initialStartDate || new Date());
        }
    }, [isOpen, initialStartDate, initialEndDate]);

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const handleDateClick = (day: number) => {
        const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

        if (!startDate || (startDate && endDate)) {
            setStartDate(clickedDate);
            setEndDate(null);
        } else if (startDate && !endDate) {
            if (clickedDate < startDate) {
                setStartDate(clickedDate);
                setEndDate(startDate); // Swap if clicked before start
            } else {
                setEndDate(clickedDate);
            }
        }
    };

    const isSelected = (day: number) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        if (startDate && date.getTime() === startDate.getTime()) return true;
        if (endDate && date.getTime() === endDate.getTime()) return true;
        return false;
    };

    const isInRange = (day: number) => {
        if (!startDate || !endDate) return false;
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        return date > startDate && date < endDate;
    };

    const changeMonth = (offset: number) => {
        const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1);
        setCurrentMonth(newMonth);
    };

    const handleApply = () => {
        if (startDate && endDate) {
            onApply(startDate, endDate);
            onClose();
        }
    };

    if (!isOpen) return null;

    const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
            <div className="glass-card bg-[#111821] border border-white/10 rounded-2xl shadow-2xl w-full max-w-md p-6 m-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">Seleccionar Rango</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => changeMonth(-1)} className="p-1 hover:bg-white/10 rounded-full transition-colors text-white">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <span className="font-semibold text-white">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </span>
                    <button onClick={() => changeMonth(1)} className="p-1 hover:bg-white/10 rounded-full transition-colors text-white">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-4">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                        <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                            {day}
                        </div>
                    ))}
                    {Array.from({ length: firstDay }).map((_, i) => (
                        <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const selected = isSelected(day);
                        const inRange = isInRange(day);

                        return (
                            <button
                                key={day}
                                onClick={() => handleDateClick(day)}
                                className={`
                                    h-9 w-full rounded-full text-sm font-medium transition-all relative
                                    ${selected ? 'bg-primary text-white z-10' : ''}
                                    ${!selected && inRange ? 'bg-primary/20 text-white first:rounded-l-full last:rounded-r-full rounded-none' : ''}
                                    ${!selected && !inRange ? 'text-gray-300 hover:bg-white/10' : ''}
                                `}
                            >
                                {day}
                            </button>
                        );
                    })}
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                    <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Cancelar
                    </button>
                    <button
                        onClick={handleApply}
                        disabled={!startDate || !endDate}
                        className="px-6 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Aplicar
                    </button>
                </div>
            </div>
        </div>
    );
};
