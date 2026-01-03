'use client'

import { useTransition, useState } from "react"
import type { BookFormState } from "@/app/actions/book-actions"
import { createBook, updateBook } from "@/app/actions/book-actions"
import { BookConfigLayout } from "./BookConfigLayout"
import { GeneralSection } from "./GeneralSection"
import { PeriodSection } from "./PeriodSection"
import { VisualSection } from "./VisualSection"
import { NotificationSection } from "./NotificationSection"
import { DangerZone } from "./DangerZone"
import { Save } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useFinance } from "@/context/FinanceContext"

interface BookFormProps {
    mode: 'create' | 'edit'
    defaultValues?: any
    bookId?: string
}

export function BookForm({ mode, defaultValues, bookId }: BookFormProps) {
    const { refreshBooks, activateLedger } = useFinance()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

    const handleSubmit = (formData: FormData) => {
        setStatus({ type: null, message: '' })
        startTransition(async () => {
            const state: BookFormState = {}
            try {
                if (mode === 'create') {
                    const result = await createBook(state, formData)
                    if (result?.data) {
                        await refreshBooks()
                        activateLedger(result.data.id)
                        router.push('/ledgers')
                    } else if (result?.message) {
                        setStatus({ type: 'error', message: result.message })
                    }
                } else if (bookId) {
                    const result = await updateBook(bookId, state, formData)
                    if (result?.message && !result.message.includes('Error')) {
                        setStatus({ type: 'success', message: 'Cambios guardados correctamente' })
                        await refreshBooks() // Ensure context is updated
                        router.refresh()
                    } else if (result?.message) {
                        setStatus({ type: 'error', message: result.message })
                    }
                }
            } catch (error) {
                setStatus({ type: 'error', message: 'Ocurrió un error inesperado.' })
            }
        })
    }

    return (
        <BookConfigLayout>
            <form action={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between bg-white dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 p-4 -mx-4 sm:mx-0 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                    <div className="flex flex-col">
                        <div className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block font-medium">
                            {mode === 'edit' ? `Editando: ${defaultValues?.name}` : 'Nuevo Libro'}
                        </div>
                        {status.message && (
                            <span className={`text-xs font-bold animate-pulse ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                {status.message}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                        <Link
                            href="/ledgers"
                            className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors cursor-pointer"
                        >
                            Cancelar
                        </Link>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {isPending ? (
                                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <Save size={16} />
                            )}
                            {mode === 'create' ? 'Crear Libro' : 'Guardar Cambios'}
                        </button>
                    </div>
                </div>

                <GeneralSection defaultValues={defaultValues} />
                <PeriodSection defaultValues={defaultValues} />
                <VisualSection defaultValues={defaultValues} />
                <NotificationSection defaultValues={defaultValues} />
            </form>

            {mode === 'edit' && (
                <div className="pt-6 border-t border-gray-100 dark:border-white/5">
                    <DangerZone bookId={bookId} />
                </div>
            )}
        </BookConfigLayout>
    )
}
