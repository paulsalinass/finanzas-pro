export function NotificationSection({ defaultValues }: { defaultValues?: any }) {
    const settings = defaultValues?.notification_settings || {}

    return (
        <div id="notifications" className="glass-card p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-white/5">
                <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </div>
                <h2 className="text-lg font-semibold text-text-main">Alertas de este Libro</h2>
            </div>

            <div className="space-y-4">
                <Checkbox
                    name="weeklySummary"
                    label="Resumen Semanal"
                    description="Recibe un correo con el balance cada domingo."
                    defaultChecked={settings.weekly_summary}
                />
                <Checkbox
                    name="budgetAlerts"
                    label="Alertas de Presupuesto"
                    description="Notificar cuando una categoría supere el 80% del límite."
                    defaultChecked={settings.budget_alerts}
                />
                <Checkbox
                    name="paymentReminders"
                    label="Recordatorio de Pagos"
                    description="Avisar 2 días antes de un vencimiento recurrente."
                    defaultChecked={settings.payment_reminders}
                />
            </div>
        </div>
    )
}

function Checkbox({ name, label, description, defaultChecked }: any) {
    return (
        <div className="flex items-start gap-3">
            <div className="flex items-center h-5 mt-0.5">
                <input
                    id={name}
                    name={name}
                    type="checkbox"
                    defaultChecked={defaultChecked}
                    className="w-4 h-4 text-primary bg-transparent border-gray-300 rounded focus:ring-primary focus:ring-2 dark:border-gray-600"
                />
            </div>
            <div className="text-sm">
                <label htmlFor={name} className="font-medium text-text-main">{label}</label>
                <p className="text-xs text-text-muted">{description}</p>
            </div>
        </div>
    )
}
