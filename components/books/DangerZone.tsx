'use client'

import { Trash2, Archive, AlertTriangle } from "lucide-react"
import { deleteBook } from "@/app/actions/book-actions"
import { useTransition } from "react"

export function DangerZone({ bookId }: { bookId?: string }) {
    const [isPending, startTransition] = useTransition()

    if (!bookId) return null // DANGER ZONE doesn't make sense for new books

    const handleDelete = () => {
        if (confirm("¿Estás seguro de que quieres eliminar este libro permanentemente? Esta acción NO se puede deshacer.")) {
            startTransition(() => {
                deleteBook(bookId)
            })
        }
    }

    return (
        <div id="danger" className="border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-red-100 dark:border-red-900/20">
                <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                    <AlertTriangle size={20} />
                </div>
                <h2 className="text-lg font-semibold text-red-700 dark:text-red-400">Zona de Peligro</h2>
            </div>

            <div className="text-sm text-text-muted">
                Estas acciones son irreversibles o requieren confirmación extra. Ten cuidado.
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-text-main font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                >
                    <Archive size={16} />
                    Archivar Libro
                </button>

                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={isPending}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-lg text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors disabled:opacity-50"
                >
                    <Trash2 size={16} />
                    {isPending ? 'Eliminando...' : 'Eliminar Libro'}
                </button>
            </div>
        </div>
    )
}
