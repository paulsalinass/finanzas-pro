'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export type BookFormState = {
    message?: string
    errors?: {
        [key: string]: string[]
    }
}

export async function createBook(prevState: BookFormState, formData: FormData) {
    const supabase = await createClient()

    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        return { message: 'Error: No autorizado. Por favor inicia sesión.' }
    }

    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const currency = formData.get('currency') as string
    const periodStart = formData.get('periodStart') as string
    const fiscalClose = formData.get('fiscalClose') as string

    // Appearance
    const color = formData.get('color') as string || 'blue'
    const icon = formData.get('icon') as string || 'Wallet'

    // Visualization settings
    const hideCents = formData.get('hideCents') === 'on'
    const groupSmall = formData.get('groupSmall') === 'on'
    const autoDark = formData.get('autoDark') === 'on'

    // Notification settings
    const weeklySummary = formData.get('weeklySummary') === 'on'
    const budgetAlerts = formData.get('budgetAlerts') === 'on'
    const paymentReminders = formData.get('paymentReminders') === 'on'

    const { data, error } = await supabase.from('books').insert({
        user_id: user.id,
        name,
        short_description: description,
        currency,
        color,
        icon,
        period_start: periodStart || null,
        fiscal_close_month: fiscalClose,
        visualization_settings: {
            hide_cents: hideCents,
            group_small_categories: groupSmall,
            auto_dark_mode: autoDark
        },
        notification_settings: {
            weekly_summary: weeklySummary,
            budget_alerts: budgetAlerts,
            payment_reminders: paymentReminders
        }
    }).select().single()

    if (error) {
        return { message: 'Error creating book: ' + error.message }
    }

    if (data) {
        revalidatePath('/dashboard')
        return { message: 'Libro creado correctamente', data: data }
    }

    return { message: 'Error desconocido al crear el libro' }
}

export async function updateBook(id: string, prevState: BookFormState, formData: FormData) {
    const supabase = await createClient()

    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const currency = formData.get('currency') as string
    const periodStart = formData.get('periodStart') as string
    const fiscalClose = formData.get('fiscalClose') as string

    // Appearance
    const color = formData.get('color') as string || 'blue'
    const icon = formData.get('icon') as string || 'Wallet'

    // Visualization settings
    const hideCents = formData.get('hideCents') === 'on'
    const groupSmall = formData.get('groupSmall') === 'on'
    const autoDark = formData.get('autoDark') === 'on'

    // Notification settings
    const weeklySummary = formData.get('weeklySummary') === 'on'
    const budgetAlerts = formData.get('budgetAlerts') === 'on'
    const paymentReminders = formData.get('paymentReminders') === 'on'

    const { error } = await supabase.from('books').update({
        name,
        short_description: description,
        currency,
        color,
        icon,
        period_start: periodStart || null,
        fiscal_close_month: fiscalClose,
        visualization_settings: {
            hide_cents: hideCents,
            group_small_categories: groupSmall,
            auto_dark_mode: autoDark
        },
        notification_settings: {
            weekly_summary: weeklySummary,
            budget_alerts: budgetAlerts,
            payment_reminders: paymentReminders
        }
    }).eq('id', id)

    if (error) {
        return { message: 'Error updating book: ' + error.message }
    }

    revalidatePath(`/books/${id}/settings`)
    return { message: 'Libro actualizado correctamente' }
}

export async function deleteBook(id: string) {
    const supabase = await createClient()
    const { error } = await supabase.from('books').delete().eq('id', id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath('/dashboard')
    redirect('/dashboard')
}
