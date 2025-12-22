import { useState, useTransition, useEffect } from "react"
import { ColorPicker } from "../books/ColorPicker"
import { IconPicker } from "../books/IconPicker"
import { createCategory, updateCategory } from "@/app/actions/category-actions"
import { Category, CategoryFolder } from "@/types"

interface CategoryModalProps {
    isOpen: boolean
    onClose: () => void
    folders: CategoryFolder[]
    activeBookId: string | null
    defaultFolderId?: string
    initialData?: Category | null
    onSuccess?: () => void
}

export function CategoryModal({ isOpen, onClose, folders, activeBookId, defaultFolderId, initialData, onSuccess }: CategoryModalProps) {
    const [isPending, startTransition] = useTransition()
    const [name, setName] = useState('')
    const [folderId, setFolderId] = useState(defaultFolderId || 'ungrouped')
    const [color, setColor] = useState('blue')
    const [icon, setIcon] = useState('category')

    // Reset or Populate when opening
    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                setName(initialData.name)
                setFolderId(initialData.folder_id || 'ungrouped')
                setColor(initialData.color || 'blue')
                setIcon(initialData.icon || 'category')
            } else {
                setFolderId(defaultFolderId || 'ungrouped')
                setName('')
                setColor('blue')
                setIcon('category')
            }
        }
    }, [isOpen, defaultFolderId, initialData])

    if (!isOpen) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!activeBookId) return

        const formData = new FormData()
        formData.append('name', name)
        formData.append('folderId', folderId)
        formData.append('color', color)
        formData.append('icon', icon)
        formData.append('bookId', activeBookId)

        startTransition(async () => {
            if (initialData) {
                formData.append('id', initialData.id)
                await updateCategory(formData)
            } else {
                await createCategory(formData)
            }
            if (onSuccess) onSuccess()
            onClose()
        })
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
            <div className="glass-card w-full max-w-2xl rounded-2xl shadow-premium overflow-hidden flex flex-col animate-slide-up border border-white/80 dark:border-slate-800 max-h-[90vh] overflow-y-auto scrollbar-hide">
                <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800 flex-shrink-0">
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase tracking-widest">
                            {initialData ? 'Editar Categoría' : 'Nueva Categoría'}
                        </h1>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Nombre</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Ej. Restaurantes"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Carpeta (Grupo)</label>
                            <select
                                value={folderId}
                                onChange={(e) => setFolderId(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium appearance-none"
                            >
                                <option value="ungrouped">General / Sin Carpeta</option>
                                {folders.map(f => (
                                    <option key={f.id} value={f.id}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-6 pt-4 border-t border-gray-100 dark:border-white/5">
                        <ColorPicker value={color} onChange={setColor} />
                        <IconPicker value={icon} onChange={setIcon} />
                    </div>

                    <div className="pt-6 flex justify-end gap-3 sticky bottom-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 -mx-8 -mb-8 border-t border-gray-100 dark:border-white/5">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 h-12 rounded-xl text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="px-6 h-12 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
                        >
                            {isPending && <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
