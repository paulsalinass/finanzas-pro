'use client'

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import dynamic from 'next/dynamic'
import * as Icons from "lucide-react"

const EmojiPickerWrapper = dynamic(() => import('./EmojiPickerWrapper'), {
    loading: () => <div className="h-full w-full flex items-center justify-center"><p className="text-sm text-gray-400">Cargando emojis...</p></div>,
    ssr: false
});

// Define a subset of icons for books and mapping for search
// Define a subset of icons for books and mapping for search
const ICON_CATEGORIES = {
    General: [
        'Star', 'Heart', 'Flag', 'CheckCircle', 'AlertCircle', 'Info', 'HelpCircle', 'Settings', 'MoreHorizontal', 'Menu',
        'Search', 'Filter', 'SortAsc', 'SortDesc', 'Layers', 'Grid', 'List', 'Check', 'X', 'Plus', 'Minus', 'Edit', 'Trash',
        'Share', 'Save', 'Download', 'Upload', 'RefreshCw', 'Clock', 'Calendar', 'Bell', 'MapPin', 'Link'
    ],
    Finanzas: [
        'Wallet', 'CreditCard', 'Banknote', 'Coins', 'PiggyBank', 'Landmark', 'CircleDollarSign', 'Briefcase', 'Receipt',
        'Tags', 'BadgePercent', 'Calculator', 'ChartPie', 'ChartBar', 'TrendingUp', 'Target', 'Diamond', 'Gem',
        'CandlestickChart', 'LineChart', 'BarChart4', 'FileSpreadsheet', 'Scale', 'Stamp', 'Sigma', 'History'
    ],
    Hogar: [
        'Home', 'Armchair', 'Bed', 'Bath', 'Refrigerator', 'Tv', 'Lamp', 'DoorOpen', 'Sofa', 'CookingPot', 'Microwave',
        'WashingMachine', 'Flower2', 'Fan', 'Thermometer', 'Droplets', 'Zap', 'Wifi', 'Router', 'Package', 'Box',
        'Trash2', 'Key', 'Lock', 'ShieldHome', 'Baby'
    ],
    Comida: [
        'Utensils', 'UtensilsCrossed', 'Coffee', 'Soup', 'Pizza', 'Sandwich', 'Croissant', 'Cake', 'IceCream', 'Candy',
        'Apple', 'Banana', 'Carrot', 'Beef', 'Fish', 'Wheat', 'Beer', 'Wine', 'Martini', 'CupSoda', 'Citrus',
        'ChefHat', 'ShoppingBasket', 'ShoppingCart'
    ],
    Ropa: [
        'Shirt', 'Scissors', 'Glasses', 'Watch', 'ShoppingBag', 'Tag', 'Umbrella', 'Sun', 'CloudRain', 'Briefcase',
        'Backpack', 'Luggage', 'Smile'
    ],
    Salud: [
        'HeartPulse', 'Activity', 'Stethoscope', 'Pill', 'Syringe', 'Thermometer', 'Ambulance', 'Cross', 'FirstAidKit',
        'Hotel', 'Dna', 'Microscope', 'FlaskConical', 'Brain', 'Smile', 'Frown', 'Meh', 'Ghost', 'Skull', 'Accessibility'
    ],
    Movilidad: [
        'Car', 'Bus', 'Train', 'Plane', 'Bike', 'Fuel', 'Map', 'Navigation', 'Compass', 'Anchor', 'Ship',
        'ParkingCircle', 'Ticket', 'CarFront', 'PlaneTakeoff', 'Truck', 'Rocket', 'Sailboat', 'TramFront', 'CableCar', 'Footprints'
    ],
    Ocio: [
        'Gamepad2', 'Music', 'Clapperboard', 'Film', 'Ticket', 'PartyPopper', 'Gift', 'Dumbbell', 'Tent', 'Camera', 'Image',
        'Video', 'Headphones', 'Speaker', 'Trophy', 'Medal', 'Crown', 'Palette', 'Brush', 'Dice5', 'Joystick', 'Mic2',
        'Radio', 'Guitar', 'Drum', 'Piano'
    ],
    Educación: [
        'GraduationCap', 'Book', 'BookOpen', 'Library', 'School', 'Pencil', 'Pen', 'FileText', 'Clipboard', 'Lightbulb',
        'Bookmark', 'StickyNote', 'Presentation', 'Projector', 'Languages', 'Globe', 'Ruler', 'Eraser', 'Highlighter'
    ],
    Tecnología: [
        'Smartphone', 'Laptop', 'Monitor', 'Mouse', 'Printer', 'Server', 'Cpu', 'HardDrive', 'Keyboard',
        'Bluetooth', 'BatteryCharging', 'Code', 'Terminal', 'Database', 'Tablet', 'Signal', 'Wifi', 'QrCode', 'Scan', 'Webcam'
    ],
    Naturaleza: [
        'Palmtree', 'TreePine', 'Trees', 'Flower', 'Flower2', 'Leaf', 'Sprout', 'Sun', 'Moon', 'Cloud', 'CloudRain',
        'CloudSnow', 'CloudLightning', 'Wind', 'Umbrella', 'Snowflake', 'Flame', 'Mountain', 'Waves', 'Cat', 'Dog',
        'Bird', 'Rabbit', 'Fish', 'Bug'
    ],
    Mascotas: [
        'Cat', 'Dog', 'Rabbit', 'Bird', 'Fish', 'Bone', 'PawPrint', 'Bug', 'Rat', 'Snail', 'Turtle'
    ],
    Herramientas: [
        'Hammer', 'Wrench', 'Construction', 'Drill', 'Axe', 'Shovel', 'Pickaxe', 'Nut', 'Cog', 'Settings', 'Ruler',
        'Scissors', 'Clipboard', 'PaintBucket', 'Brush', 'PenTool', 'Layers'
    ],
    Social: [
        'User', 'Users', 'UserPlus', 'UserMinus', 'UserCheck', 'Smile', 'Heart', 'ThumbsUp', 'ThumbsDown', 'MessageCircle',
        'MessageSquare', 'Phone', 'Video', 'Share2', 'Globe', 'Gift', 'PartyPopper', 'CalendarHeart'
    ]
}

import { BOOK_COLORS } from "./ColorPicker"

type IconType = 'classic' | 'emoji';

export function IconPicker({ value, onChange, color }: { value: string, onChange: (icon: string) => void, color?: string }) {
    // Robust icon resolution
    const IconComponent = (Icons as any)[value];
    const isLucide = !!IconComponent;
    const isEmoji = !isLucide && value && value.length <= 4;
    const DisplayIcon = isLucide ? IconComponent : (isEmoji ? null : Icons.HelpCircle);

    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState<IconType>('emoji');
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof ICON_CATEGORIES>('General');
    const [searchTerm, setSearchTerm] = useState('');

    // Resolve color
    const resolvedColor = BOOK_COLORS.Classic.find(c => c.value === color)?.hex || color;
    // Determine if we have a specific color to show (not default/undefined)
    const hasColor = !!color && color !== 'slate' && color !== 'gray';

    useEffect(() => {
        if (isOpen) {
            requestAnimationFrame(() => setIsVisible(true));
            setActiveTab(isLucide ? 'classic' : 'emoji');

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    handleClose();
                }
            };
            window.addEventListener('keydown', handleKeyDown, true);
            return () => window.removeEventListener('keydown', handleKeyDown, true);
        } else {
            setIsVisible(false);
        }
    }, [isOpen, isLucide]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    const handleSelect = (val: string) => {
        onChange(val);
        handleClose();
    };

    return (
        <div className="space-y-3">
            <label className="text-sm font-medium text-text-main">Icono</label>

            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-4 w-full text-left group p-3 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-white/5 transition-all bg-white dark:bg-transparent"
            >
                <div
                    className={`size-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform overflow-hidden
                        ${!resolvedColor ? 'bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700' : ''}
                    `}
                    style={{ backgroundColor: resolvedColor }}
                >
                    {DisplayIcon ? (
                        <DisplayIcon size={28} className={resolvedColor ? "text-white drop-shadow-md" : "text-primary"} />
                    ) : (
                        <span className="text-3xl leading-none select-none drop-shadow-sm">{value || '😀'}</span>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                        {value ? (isLucide ? 'Icono Clásico' : (isEmoji ? 'Emoji' : 'Icono desconocido')) : 'Seleccionar icono'}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {value || 'Click para explorar librería'}
                    </div>
                </div>

                <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <Icons.Edit3 size={18} />
                </div>
            </button>

            {/* Modal Overlay */}
            {isOpen && typeof document !== 'undefined' && createPortal(
                <>
                    {/* Backdrop */}
                    <div
                        className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        onClick={handleClose}
                    />

                    {/* Container */}
                    <div
                        className={`fixed top-0 right-0 bottom-0 left-0 lg:left-[var(--sidebar-width)] z-[60] flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ '--sidebar-width': '280px' } as React.CSSProperties}
                    >
                        <div
                            className={`bg-white dark:bg-slate-900 w-full max-w-[400px] rounded-xl shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh] ring-4 ring-black/5 dark:ring-white/5 pointer-events-auto transition-all duration-300 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header Tabs */}
                            <div className="p-2 grid grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-950/50 border-b border-gray-100 dark:border-white/5">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('emoji')}
                                    className={`py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${activeTab === 'emoji' ? 'bg-white dark:bg-slate-800 shadow-sm text-primary ring-1 ring-black/5' : 'text-slate-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                                >
                                    <span>😀</span> Emoji
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('classic')}
                                    className={`py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${activeTab === 'classic' ? 'bg-white dark:bg-slate-800 shadow-sm text-primary ring-1 ring-black/5' : 'text-slate-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                                >
                                    <Icons.Shapes size={16} /> Iconos
                                </button>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 overflow-hidden relative bg-white dark:bg-slate-900">
                                {activeTab === 'emoji' ? (
                                    <div className="h-full w-full [&_.epr-preview]:!hidden [&_.epr-emoji-category-label]:!text-primary [&_.epr-emoji-category-label]:!text-sm [&_.epr-emoji-category-label]:!font-bold">
                                        <EmojiPickerWrapper onEmojiSelect={handleSelect} />
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col">
                                        {/* Search & Categories */}
                                        <div className="p-4 space-y-3 bg-white dark:bg-slate-900 z-10 shadow-sm border-b border-gray-100 dark:border-white/5">
                                            <div className="relative">
                                                <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                <input
                                                    type="text"
                                                    placeholder="Buscar icono..."
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all"
                                                />
                                            </div>

                                            <div className="relative group/carousel">
                                                {/* Scroll Container */}
                                                <div
                                                    id="categories-container"
                                                    className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide scroll-smooth snap-x"
                                                >
                                                    {Object.keys(ICON_CATEGORIES).map((cat) => (
                                                        <button
                                                            key={cat}
                                                            type="button"
                                                            onClick={() => {
                                                                setSelectedCategory(cat as any)
                                                                document.getElementById(`cat-${cat}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                                                            }}
                                                            id={`cat-${cat}`}
                                                            className={`
                                                                px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border snap-center cursor-pointer
                                                                ${selectedCategory === cat
                                                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white'
                                                                    : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-slate-500 hover:border-gray-300 dark:hover:border-slate-600'}
                                                            `}
                                                        >
                                                            {cat}
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Navigation Shadows (Optional visual cues) */}
                                                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white dark:from-slate-900 to-transparent pointer-events-none" />
                                                <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-white dark:from-slate-900 to-transparent pointer-events-none" />

                                                {/* Manual Nav Buttons (Visible on hover or always on mobile if needed) */}
                                                <button
                                                    type="button"
                                                    onClick={() => document.getElementById('categories-container')?.scrollBy({ left: -150, behavior: 'smooth' })}
                                                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 size-8 bg-white dark:bg-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 cursor-pointer"
                                                >
                                                    <Icons.ChevronLeft size={16} />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => document.getElementById('categories-container')?.scrollBy({ left: 150, behavior: 'smooth' })}
                                                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 size-8 bg-white dark:bg-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 opacity-0 group-hover/carousel:opacity-100 transition-opacity cursor-pointer"
                                                >
                                                    <Icons.ChevronRight size={16} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Grid */}
                                        <div className="flex-1 overflow-y-auto p-4">
                                            <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
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
                                                                onClick={() => handleSelect(iconName)}
                                                                className={`
                                                                    aspect-square rounded-xl flex items-center justify-center transition-all delay-75 duration-300 cursor-pointer
                                                                    ${isSelected
                                                                        ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                                                        : 'bg-slate-50 dark:bg-slate-800 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-200'}
                                                                `}
                                                                title={iconName}
                                                            >
                                                                <Icon size={24} strokeWidth={2} />
                                                            </button>
                                                        )
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Close Button Mobile Friendly */}
                            <div className="p-4 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-slate-900">
                                <button
                                    onClick={handleClose}
                                    className="w-full py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </>,
                document.body
            )}

            <input type="hidden" name="icon" value={value} />
        </div>
    )
}
