"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Check } from "lucide-react";

interface HSVA {
    h: number;
    s: number;
    v: number;
    a: number;
}

const hexToHsv = (hex: string): HSVA => {
    let color = hex.replace("#", "");
    if (color.length === 3) {
        color = color.split("").map((c) => c + c).join("");
    }
    const r = parseInt(color.substring(0, 2), 16) / 255;
    const g = parseInt(color.substring(2, 4), 16) / 255;
    const b = parseInt(color.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    const s = max === 0 ? 0 : d / max;
    const v = max;
    let h = 0;

    if (max !== min) {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: h * 360, s: s * 100, v: v * 100, a: 1 };
};

const hsvToHex = ({ h, s, v }: HSVA): string => {
    s /= 100;
    v /= 100;
    const i = Math.floor(h / 60);
    const f = h / 60 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    let r = 0, g = 0, b = 0;

    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }

    const toHex = (n: number) => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

interface CustomColorPickerProps {
    color: string;
    onChange: (color: string) => void;
}

export const CustomColorPicker = ({ color, onChange }: CustomColorPickerProps) => {
    const [hsv, setHsv] = useState<HSVA>(hexToHsv(color || "#000000"));
    const [isDraggingSat, setIsDraggingSat] = useState(false);
    const [isDraggingHue, setIsDraggingHue] = useState(false);
    const satRef = useRef<HTMLDivElement>(null);
    const hueRef = useRef<HTMLDivElement>(null);

    // Sync local state if external prop changes (and not currently dragging to avoid loops)
    useEffect(() => {
        if (!isDraggingSat && !isDraggingHue) {
            setHsv(hexToHsv(color || "#000000"));
        }
    }, [color]);

    const handleSatChange = useCallback((e: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
        if (!satRef.current) return;
        const rect = satRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

        let left = clientX - rect.left;
        let top = clientY - rect.top;

        left = Math.max(0, Math.min(left, rect.width));
        top = Math.max(0, Math.min(top, rect.height));

        const s = (left / rect.width) * 100;
        const v = 100 - (top / rect.height) * 100;

        const newHsv = { ...hsv, s, v };
        setHsv(newHsv);
        onChange(hsvToHex(newHsv));
    }, [hsv, onChange]);

    const handleHueChange = useCallback((e: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
        if (!hueRef.current) return;
        const rect = hueRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;

        let left = clientX - rect.left;
        left = Math.max(0, Math.min(left, rect.width));

        const h = (left / rect.width) * 360;

        const newHsv = { ...hsv, h };
        setHsv(newHsv);
        onChange(hsvToHex(newHsv));
    }, [hsv, onChange]);

    // Global event listeners for dragging
    useEffect(() => {
        const handleUp = () => {
            setIsDraggingSat(false);
            setIsDraggingHue(false);
        };

        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (isDraggingSat) handleSatChange(e);
            if (isDraggingHue) handleHueChange(e);
        };

        if (isDraggingSat || isDraggingHue) {
            window.addEventListener('mouseup', handleUp);
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('touchend', handleUp);
            window.addEventListener('touchmove', handleMove);
        }

        return () => {
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchend', handleUp);
            window.removeEventListener('touchmove', handleMove);
        };
    }, [isDraggingSat, isDraggingHue, handleSatChange, handleHueChange]);

    return (
        <div className="w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-3 select-none">
            {/* Saturation/Brightness Area */}
            <div
                ref={satRef}
                className="w-full h-40 rounded-xl relative cursor-crosshair overflow-hidden mb-4"
                style={{
                    backgroundColor: `hsl(${hsv.h}, 100%, 50%)`,
                    backgroundImage: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)`
                }}
                onMouseDown={(e) => { setIsDraggingSat(true); handleSatChange(e); }}
                onTouchStart={(e) => { setIsDraggingSat(true); handleSatChange(e); }}
            >
                <div
                    className="absolute w-4 h-4 rounded-full border-2 border-white shadow-sm -mt-2 -ml-2 pointer-events-none"
                    style={{
                        left: `${hsv.s}%`,
                        top: `${100 - hsv.v}%`,
                        backgroundColor: color
                    }}
                />
            </div>

            {/* Hue Slider */}
            <div className="relative h-4 w-full rounded-full mb-4">
                <div
                    ref={hueRef}
                    className="absolute inset-0 rounded-full cursor-pointer"
                    style={{
                        background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
                    }}
                    onMouseDown={(e) => { setIsDraggingHue(true); handleHueChange(e); }}
                    onTouchStart={(e) => { setIsDraggingHue(true); handleHueChange(e); }}
                />
                <div
                    className="absolute top-1/2 -mt-2.5 -ml-2.5 w-5 h-5 rounded-full border-2 border-white shadow-md bg-white pointer-events-none"
                    style={{
                        left: `${(hsv.h / 360) * 100}%`
                    }}
                />
            </div>

            {/* Footer: Hex Input and Preview */}
            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">#</span>
                    <input
                        type="text"
                        value={color.replace('#', '').toUpperCase()}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (/^[0-9A-Fa-f]{0,6}$/.test(val)) {
                                if (val.length === 6) {
                                    onChange('#' + val);
                                }
                            }
                        }}
                        className="w-full h-10 pl-7 pr-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>
                <div
                    className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
                    style={{ backgroundColor: color }}
                />
            </div>
        </div>
    );
};
