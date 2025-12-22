'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function resetAndSeedTransactions(bookId: string) {
    const supabase = await createClient()

    // 1. Delete all transactions for this book
    const { error: deleteError } = await supabase.from('transactions').delete().eq('book_id', bookId)
    if (deleteError) return { error: 'Error deleting transactions: ' + deleteError.message }

    // 2. Fetch available resources
    const { data: categories } = await supabase.from('categories').select('id, name').eq('book_id', bookId)
    const { data: accounts } = await supabase.from('accounts').select('id, name').eq('book_id', bookId)

    if (!categories || categories.length === 0) return { error: 'No hay categorías disponibles para crear transacciones.' }
    if (!accounts || accounts.length === 0) return { error: 'No hay cuentas disponibles. Crea una cuenta primero.' }

    // 3. Generate Data
    const transactions = []
    const now = new Date()

    // Helper to get random item
    const getRand = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

    // 2 Incomes
    for (let i = 0; i < 2; i++) {
        transactions.push({
            book_id: bookId,
            account_id: getRand(accounts).id,
            category_id: getRand(categories).id,
            amount: Number((Math.random() * 4000 + 500).toFixed(2)), // 500 - 4500
            type: 'INCOME',
            description: `Ingreso de prueba ${i + 1}`,
            occurred_at: new Date(now.getTime() - Math.random() * 1000 * 60 * 60 * 24 * 30).toISOString(), // Random time in last 30 days
        })
    }

    // 2 Expenses
    for (let i = 0; i < 2; i++) {
        transactions.push({
            book_id: bookId,
            account_id: getRand(accounts).id,
            category_id: getRand(categories).id,
            amount: Number((Math.random() * 200 + 10).toFixed(2)), // 10 - 210
            type: 'EXPENSE',
            description: `Gasto de prueba ${i + 1}`,
            occurred_at: new Date(now.getTime() - Math.random() * 1000 * 60 * 60 * 24 * 30).toISOString(),
        })
    }

    // 4. Insert
    const { error: insertError } = await supabase.from('transactions').insert(transactions)

    if (insertError) return { error: 'Error inserting generic data: ' + insertError.message }

    revalidatePath('/')
    return { success: true }
}
