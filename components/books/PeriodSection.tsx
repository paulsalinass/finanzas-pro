export function PeriodSection({ defaultValues }: { defaultValues?: any }) {
    return (
        <div id="periods" className="glass-card p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-white/5">
                <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 className="text-lg font-semibold text-text-main">Periodos Contables</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="periodStart" className="text-sm font-medium text-text-main">Inicio del Periodo</label>
                    <input
                        type="date"
                        name="periodStart"
                        id="periodStart"
                        defaultValue={defaultValues?.period_start ? new Date(defaultValues.period_start).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="fiscalClose" className="text-sm font-medium text-text-main">Cierre Fiscal</label>
                    <select
                        name="fiscalClose"
                        id="fiscalClose"
                        defaultValue={defaultValues?.fiscal_close_month || 'Diciembre'}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    >
                        {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map(m => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
