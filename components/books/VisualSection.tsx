export function VisualSection({ defaultValues }: { defaultValues?: any }) {
    const settings = defaultValues?.visualization_settings || {}

    return (
        <div id="visualization" className="glass-card p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-white/5">
                <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </div>
                <h2 className="text-lg font-semibold text-text-main">Preferencias de Visualización</h2>
            </div>

            <div className="space-y-6">
                <Toggle
                    name="hideCents"
                    label="Ocultar centavos en resumen"
                    description="Muestra números redondos para reducir ruido visual."
                    defaultChecked={settings.hide_cents}
                />
                <Toggle
                    name="groupSmall"
                    label="Agrupar categorías pequeñas"
                    description="Combina gastos menores al 1% en 'Otros'."
                    defaultChecked={settings.group_small_categories}
                />
                <Toggle
                    name="autoDark"
                    label="Modo oscuro automático"
                    description="Sincronizar con la configuración del sistema."
                    defaultChecked={settings.auto_dark_mode}
                />
            </div>
        </div>
    )
}

function Toggle({ name, label, description, defaultChecked }: any) {
    return (
        <div className="flex items-start justify-between gap-4">
            <div className="space-y-0.5">
                <label htmlFor={name} className="text-sm font-medium text-text-main block">{label}</label>
                <p className="text-xs text-text-muted">{description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" name={name} id={name} className="sr-only peer" defaultChecked={defaultChecked} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
        </div>
    )
}
