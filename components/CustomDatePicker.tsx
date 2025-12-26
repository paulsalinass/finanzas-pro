import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    startOfWeek,
    endOfWeek,
} from 'date-fns';
import { es } from 'date-fns/locale';

interface CustomDatePickerProps {
    isOpen: boolean;
    onClose: () => void;
    value: Date | null;
    onChange: (date: Date) => void;
    positionClass?: string;
}

export default function CustomDatePicker({ isOpen, onClose, value, onChange }: CustomDatePickerProps) {
    const [viewDate, setViewDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(value || new Date());
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsClosing(false);
            const initialDate = value || new Date();
            setSelectedDate(initialDate);
            setViewDate(initialDate);
        }
    }, [isOpen, value]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 300);
    };

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleConfirm = () => {
        if (selectedDate) {
            onChange(selectedDate);
        }
        handleClose();
    };

    // Helper functions need to remain but handleClose moves up
    const handlePrevMonth = () => setViewDate(subMonths(viewDate, 1));
    const handleNextMonth = () => setViewDate(addMonths(viewDate, 1));
    const handleDayClick = (day: Date) => setSelectedDate(day);

    if (!isOpen && !isVisible) return null;

    const monthStart = startOfMonth(viewDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const content = (
        <div
            className={`fixed top-0 right-0 bottom-0 left-0 lg:left-[var(--sidebar-width)] z-[110] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <div
                className={`w-[320px] bg-white dark:bg-[#1e293b] rounded-3xl shadow-2xl p-6 border border-slate-100 dark:border-slate-700 transition-all duration-300 transform ${isVisible && !isClosing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header: Month and Year Selectors */}
                <div className="flex justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-2xl px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                        <button onClick={handlePrevMonth} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                        </button>
                        <span className="min-w-[80px] text-center capitalize">{format(viewDate, 'MMMM', { locale: es })}</span>
                        <button onClick={handleNextMonth} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </button>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700 flex items-center">
                        <span>{format(viewDate, 'yyyy')}</span>
                    </div>
                </div>

                {/* Weekdays */}
                <div className="flex justify-between mb-4 px-1">
                    {weekDays.map(d => (
                        <div key={d} className="w-10 text-center text-[10px] font-bold text-slate-400">
                            {d}
                        </div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="mb-6">
                    <div className="grid grid-cols-7 row-gap-2">
                        {calendarDays.map((dayItem, idx) => {
                            const isSelected = selectedDate ? isSameDay(dayItem, selectedDate) : false;
                            const isCurrentMonth = isSameMonth(dayItem, monthStart);

                            return (
                                <div key={idx} className="flex justify-center mb-2">
                                    <div
                                        onClick={() => handleDayClick(dayItem)}
                                        className={`size-9 flex items-center justify-center rounded-full text-xs font-bold cursor-pointer transition-all
                                            ${!isCurrentMonth ? 'text-slate-300 dark:text-slate-600' : ''}
                                            ${isSelected
                                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-110'
                                                : isCurrentMonth ? 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700' : ''}
                                        `}
                                    >
                                        {format(dayItem, 'd')}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-between items-center pt-2">
                    <button
                        onClick={handleClose}
                        className="px-6 py-2.5 rounded-xl bg-red-50 text-red-500 font-bold text-xs hover:bg-red-100 transition-colors"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-6 py-2.5 rounded-xl bg-green-50 text-emerald-600 font-bold text-xs hover:bg-emerald-100 transition-colors"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );

    return createPortal(content, document.body);
}
