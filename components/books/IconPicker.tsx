'use client'

import { useState } from "react"
import * as Icons from "lucide-react"

// Define a subset of icons for books
const ICON_CATEGORIES = {
    General: ['Wallet', 'CreditCard', 'Banknote', 'Coins', 'PiggyBank', 'Landmark', 'CircleDollarSign', 'Briefcase', 'Receipt'],
    Hogar: ['Home', 'ShoppingCart', 'ShoppingBag', 'Utensils', 'Coffee', 'Zap', 'Wifi', 'Droplets', 'Hammer'],
    Movilidad: ['Car', 'Bus', 'Train', 'Plane', 'Bike', 'Fuel'],
    Ocio: ['Gamepad2', 'Music', 'Clapperboard', 'Ticket', 'PartyPopper', 'Gift', 'Dumbbell', 'Tent'],
    Educación: ['GraduationCap', 'Book', 'BookOpen', 'Library', 'School'],
    Tecnología: ['Smartphone', 'Laptop', 'Monitor', 'Mouse', 'Printer', 'Server']
}

export function IconPicker({ value, onChange }: { value: string, onChange: (icon: string) => void }) {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof ICON_CATEGORIES>('General')
    const [searchTerm, setSearchTerm] = useState('')

    // Resolve icon component dynamically
    const SelectedIcon = (Icons as any)[value] || Icons.HelpCircle

    return (
        <div className="space-y-3">
            <label className="text-sm font-medium text-text-main">Icono</label>

            {/* Preview & Search */}
            <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0">
                    <SelectedIcon size={24} className="text-primary" />
                </div>
                <input
                    type="text"
                    placeholder="Buscar icono..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {Object.keys(ICON_CATEGORIES).map((cat) => (
                    <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat as any)}
                        className={`
                            px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors
                            ${selectedCategory === cat
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 dark:bg-white/5 text-text-muted hover:bg-gray-200 dark:hover:bg-white/10'}
                        `}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 max-h-48 overflow-y-auto pr-2">
                {ICON_CATEGORIES[selectedCategory]
                    .filter(iconName => iconName.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((iconName) => {
                        const Icon = (Icons as any)[iconName]
                        if (!Icon) return null

                        const isSelected = value === iconName
                        return (
                            <button
                                key={iconName}
                                type="button"
                                onClick={() => onChange(iconName)}
                                className={`
                                    aspect-square rounded-xl flex items-center justify-center transition-all
                                    ${isSelected
                                        ? 'bg-primary/20 text-primary ring-2 ring-primary'
                                        : 'bg-gray-50 dark:bg-white/5 text-text-muted hover:bg-gray-100 dark:hover:bg-white/10 hover:text-text-main'}
                                `}
                                title={iconName}
                            >
                                <Icon size={20} />
                            </button>
                        )
                    })}
            </div>
            <input type="hidden" name="icon" value={value} />
        </div>
    )
}
