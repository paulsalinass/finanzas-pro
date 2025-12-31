import { useState, useTransition, useEffect } from "react"
import { ColorPicker } from "../books/ColorPicker"
import { IconPicker } from "../books/IconPicker"
import { createCategory, updateCategory } from "@/app/actions/category-actions"
import { Category, CategoryFolder } from "@/types"
import { useFinance } from "@/context/FinanceContext"
import { DeleteConfirmationModal } from "../DeleteConfirmationModal"

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

    const { deleteCategory } = useFinance();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsClosing(false);
        } else {
            setIsClosing(true);
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsVisible(false);
        }, 300);
    };

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    if (!isOpen && !isVisible) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!activeBookId) return

        // ... (existing submit logic) ...
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
            handleClose()
        })
    }

    const handleDeleteClick = () => {
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (initialData?.id) {
            await deleteCategory(initialData.id);
            if (onSuccess) onSuccess();
            handleClose();
        }
    };

    return (
        <>
            <div
                className={`fixed top-0 right-0 bottom-0 left-0 lg:left-[var(--sidebar-width)] z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
            >
                <div
                    className={`bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-premium overflow-hidden flex flex-col border border-slate-100 dark:border-slate-800 max-h-[90dvh] overflow-y-auto scrollbar-hide transition-all duration-300 transform ${isVisible && !isClosing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800 flex-shrink-0">
                        <div>
                            <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase tracking-widest">
                                {initialData ? 'Editar Categoría' : 'Nueva Categoría'}
                            </h1>
                        </div>
                        <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
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
                            {initialData && (
                                <button
                                    type="button"
                                    onClick={handleDeleteClick}
                                    className="mr-auto px-4 h-12 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 font-bold transition-colors flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-[20px]">delete</span>
                                    <span>Eliminar</span>
                                </button>
                            )}

                            <button
                                type="button"
                                onClick={handleClose}
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

            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                title="¿Eliminar categoría?"
                description={
                    <p>
                        Estás a punto de eliminar la categoría <strong>{name}</strong>.
                        <br />Esta acción no se puede deshacer.
                    </p>
                }
            />
        </>
    )
}
