import { useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Check, Pipette } from "lucide-react"
import { CustomColorPicker } from "./CustomColorPicker"

export const BOOK_COLORS = {
    Classic: [
        { name: 'Red', value: 'red', hex: '#ef4444' },
        { name: 'Orange', value: 'orange', hex: '#f97316' },
        { name: 'Amber', value: 'amber', hex: '#f59e0b' },
        { name: 'Yellow', value: 'yellow', hex: '#eab308' },
        { name: 'Lime', value: 'lime', hex: '#84cc16' },
        { name: 'Green', value: 'green', hex: '#22c55e' },
        { name: 'Emerald', value: 'emerald', hex: '#10b981' },
        { name: 'Teal', value: 'teal', hex: '#14b8a6' },
        { name: 'Cyan', value: 'cyan', hex: '#06b6d4' },
        { name: 'Sky', value: 'sky', hex: '#0ea5e9' },
        { name: 'Blue', value: 'blue', hex: '#3b82f6' },
        { name: 'Indigo', value: 'indigo', hex: '#6366f1' },
        { name: 'Violet', value: 'violet', hex: '#8b5cf6' },
        { name: 'Purple', value: 'purple', hex: '#a855f7' },
        { name: 'Fuchsia', value: 'fuchsia', hex: '#d946ef' },
        { name: 'Pink', value: 'pink', hex: '#ec4899' },
        { name: 'Rose', value: 'rose', hex: '#f43f5e' },
        { name: 'Slate', value: 'slate', hex: '#64748b' },
    ]
}

export function ColorPicker({ value, onChange }: { value: string, onChange: (color: string) => void }) {
    const [isCustomOpen, setIsCustomOpen] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [popoverPos, setPopoverPos] = useState({ top: 0, left: 0 })

    const togglePicker = () => {
        if (!isCustomOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            // Check if it would go off-screen bottom
            const wouldOverflowBottom = rect.bottom + 320 > window.innerHeight

            setPopoverPos({
                top: wouldOverflowBottom ? rect.top - 8 : rect.bottom + 8, // Flip up if needed, roughly
                left: rect.left
            })
        }
        setIsCustomOpen(!isCustomOpen)
    }

    // Update position on scroll/resize if open (optional but good)
    useEffect(() => {
        if (!isCustomOpen) return
        const updatePos = () => {
            if (buttonRef.current) {
                const rect = buttonRef.current.getBoundingClientRect()
                const wouldOverflowBottom = rect.bottom + 320 > window.innerHeight
                setPopoverPos({
                    top: wouldOverflowBottom ? rect.top - 8 : rect.bottom + 8,
                    left: rect.left
                })
            }
        }
        window.addEventListener('scroll', updatePos, true)
        window.addEventListener('resize', updatePos)
        return () => {
            window.removeEventListener('scroll', updatePos, true)
            window.removeEventListener('resize', updatePos)
        }
    }, [isCustomOpen])

    return (
        <div className="space-y-3">
            <label className="text-sm font-medium text-text-main">Color</label>
            <div className="flex flex-wrap gap-3">
                {BOOK_COLORS.Classic.map((color) => {
                    const isSelected = value === color.value
                    return (
                        <button
                            key={color.value}
                            type="button"
                            onClick={() => onChange(color.value)}
                            className={`
                                w-10 h-10 rounded-full flex items-center justify-center transition-all
                                ${isSelected ? 'ring-2 ring-offset-2 ring-primary dark:ring-offset-gray-900 scale-110' : 'hover:scale-105'}
                            `}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                        >
                            {isSelected && <Check size={18} className="text-white drop-shadow-md" />}
                        </button>
                    )
                })}

                {/* Custom Color Rainbow Button */}
                <div className="relative">
                    <button
                        ref={buttonRef}
                        type="button"
                        onClick={togglePicker}
                        className={`
                            w-10 h-10 rounded-full flex items-center justify-center transition-all overflow-hidden
                            bg-gradient-to-tr from-rose-500 via-purple-500 to-blue-500
                            ${!BOOK_COLORS.Classic.some(c => c.value === value) ? 'ring-2 ring-offset-2 ring-primary dark:ring-offset-gray-900 scale-110' : 'hover:scale-105'}
                        `}
                        title="Color personalizado"
                    >
                        {!BOOK_COLORS.Classic.some(c => c.value === value) && value ? (
                            <Check size={18} className="text-white drop-shadow-md" />
                        ) : (
                            <Pipette size={18} className="text-white drop-shadow-md" />
                        )}
                    </button>

                    {isCustomOpen && typeof document !== 'undefined' && createPortal(
                        <div className="fixed inset-0 z-[9999] isolate">
                            {/* Backdrop */}
                            <div
                                className="absolute inset-0 bg-transparent"
                                onClick={() => setIsCustomOpen(false)}
                            />
                            {/* Popover */}
                            <div
                                className="absolute animate-scale-in origin-top-left"
                                style={{
                                    top: popoverPos.top,
                                    left: popoverPos.left,
                                    transform: popoverPos.top < (buttonRef.current?.getBoundingClientRect().top || 0) ? 'translateY(-100%)' : 'none'
                                }}
                            >
                                <CustomColorPicker
                                    color={!BOOK_COLORS.Classic.some(c => c.value === value) ? value : '#ffffff'}
                                    onChange={onChange}
                                />
                            </div>
                        </div>,
                        document.body
                    )}
                </div>
            </div>
            <input type="hidden" name="color" value={value} />
        </div>
    )
}
