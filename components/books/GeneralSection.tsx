import { useState } from "react"
import { ColorPicker } from "./ColorPicker"
import { IconPicker } from "./IconPicker"

export function GeneralSection({ defaultValues }: { defaultValues?: any }) {
    const [color, setColor] = useState(defaultValues?.color || 'blue')
    const [icon, setIcon] = useState(defaultValues?.icon || 'Wallet')

    return (
        <div id="general" className="glass-card p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-white/5">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-text-main">Información General</h2>
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-text-main">Nombre del Libro</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={defaultValues?.name}
                                placeholder="Ej. Finanzas Personales 2024"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="text-sm font-medium text-text-main">Descripción Corta</label>
                            <textarea
                                name="description"
                                id="description"
                                defaultValue={defaultValues?.short_description}
                                placeholder="Descripción breve..."
                                rows={3}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="currency" className="text-sm font-medium text-text-main">Divisa Principal</label>
                            <select
                                name="currency"
                                id="currency"
                                defaultValue={defaultValues?.currency || 'PEN'}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
                            >
                                <option value="PEN">PEN - Sol Peruano (S/)</option>
                                <option value="MXN">MXN - Peso Mexicano ($)</option>
                                <option value="USD">USD - Dólar Estadounidense ($)</option>
                                <option value="EUR">EUR - Euro (€)</option>
                                <option value="COP">COP - Peso Colombiano ($)</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <ColorPicker value={color} onChange={setColor} />
                        <IconPicker value={icon} onChange={setIcon} />
                        <input type="hidden" name="color" value={color} />
                        <input type="hidden" name="icon" value={icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}
