"use client";

import React, { useState, useMemo } from 'react';
import { useFinance } from '@/context/FinanceContext';
import { Category, CategoryFolder } from '@/types';
import { CategoryModal } from '@/components/categories/CategoryModal';
import { FolderModal } from '@/components/categories/FolderModal';
import { moveCategory } from '@/app/actions/category-actions';

// Reuse the COLOR_MAP logic or helper
const COLOR_MAP: Record<string, { bg: string, text: string, ring: string, border: string, solid: string }> = {
    red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', ring: 'ring-red-500/10', border: 'border-red-200', solid: 'bg-red-500' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', ring: 'ring-orange-500/10', border: 'border-orange-200', solid: 'bg-orange-500' },
    amber: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', ring: 'ring-amber-500/10', border: 'border-amber-200', solid: 'bg-amber-500' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400', ring: 'ring-yellow-500/10', border: 'border-yellow-200', solid: 'bg-yellow-500' },
    lime: { bg: 'bg-lime-100 dark:bg-lime-900/30', text: 'text-lime-600 dark:text-lime-400', ring: 'ring-lime-500/10', border: 'border-lime-200', solid: 'bg-lime-500' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', ring: 'ring-green-500/10', border: 'border-green-200', solid: 'bg-green-500' },
    emerald: { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', ring: 'ring-emerald-500/10', border: 'border-emerald-200', solid: 'bg-emerald-500' },
    teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', ring: 'ring-teal-500/10', border: 'border-teal-200', solid: 'bg-teal-500' },
    cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400', ring: 'ring-cyan-500/10', border: 'border-cyan-200', solid: 'bg-cyan-500' },
    sky: { bg: 'bg-sky-100 dark:bg-sky-900/30', text: 'text-sky-600 dark:text-sky-400', ring: 'ring-sky-500/10', border: 'border-sky-200', solid: 'bg-sky-500' },
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', ring: 'ring-blue-500/10', border: 'border-blue-200', solid: 'bg-blue-500' },
    indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', ring: 'ring-indigo-500/10', border: 'border-indigo-200', solid: 'bg-indigo-500' },
    violet: { bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400', ring: 'ring-violet-500/10', border: 'border-violet-200', solid: 'bg-violet-500' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', ring: 'ring-purple-500/10', border: 'border-purple-200', solid: 'bg-purple-500' },
    fuchsia: { bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30', text: 'text-fuchsia-600 dark:text-fuchsia-400', ring: 'ring-fuchsia-500/10', border: 'border-fuchsia-200', solid: 'bg-fuchsia-500' },
    pink: { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400', ring: 'ring-pink-500/10', border: 'border-pink-200', solid: 'bg-pink-500' },
    rose: { bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400', ring: 'ring-rose-500/10', border: 'border-rose-200', solid: 'bg-rose-500' },
    slate: { bg: 'bg-slate-100 dark:bg-slate-800', text: 'text-slate-600 dark:text-slate-400', ring: 'ring-slate-500/10', border: 'border-slate-200', solid: 'bg-slate-500' },
}

import * as Icons from "lucide-react"
function CategoryIcon({ icon, className }: { icon: string, className?: string }) {
    const LucideIcon = (Icons as any)[icon]
    if (LucideIcon) return <LucideIcon className={className} />
    return <span className={`material-symbols-outlined ${className} !text-[inherit]`}>{icon}</span>
}

export default function Categories() {
    const { categories, categoryFolders, activeBookId, refreshBooks } = useFinance();
    const [searchTerm, setSearchTerm] = useState('');

    // Modal States
    const [isCatModalOpen, setIsCatModalOpen] = useState(false);
    const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
    const [preselectedFolderId, setPreselectedFolderId] = useState<string | undefined>(undefined);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [editingFolder, setEditingFolder] = useState<CategoryFolder | null>(null);
    const [dragOverFolderId, setDragOverFolderId] = useState<string | null>(null);

    // Group Categories
    const foldersUI = useMemo(() => {
        const folderMap = new Map<string, { folder: CategoryFolder | null, items: Category[] }>();
        const searchTermLower = searchTerm.toLowerCase();

        categoryFolders.forEach(f => {
            folderMap.set(f.id, { folder: f, items: [] });
        });

        const UNGROUPED_ID = 'ungrouped';
        if (!folderMap.has(UNGROUPED_ID)) {
            folderMap.set(UNGROUPED_ID, { folder: null, items: [] });
        }

        categories.forEach(cat => {
            if (searchTerm && !cat.name.toLowerCase().includes(searchTermLower)) return;
            const fId = cat.folder_id || UNGROUPED_ID;
            if (folderMap.has(fId)) {
                folderMap.get(fId)!.items.push(cat);
            } else {
                folderMap.get(UNGROUPED_ID)!.items.push(cat);
            }
        });

        const result = [];
        for (const [key, value] of folderMap.entries()) {
            if (value.folder) {
                result.push({
                    id: value.folder.id,
                    name: value.folder.name,
                    icon: value.folder.icon || 'folder',
                    color: value.folder.color || 'blue',
                    count: value.items.length,
                    items: value.items,
                    original: value.folder
                });
            } else if (value.items.length > 0 || (key === UNGROUPED_ID && categoryFolders.length === 0)) {
                // Show ungrouped if items exist OR if no folders exist at all (initial state)
                result.push({
                    id: 'ungrouped',
                    name: 'General / Sin Carpeta',
                    icon: 'category',
                    color: 'slate',
                    count: value.items.length,
                    items: value.items,
                    original: null
                });
            }
        }
        return result;
    }, [categories, categoryFolders, searchTerm]);

    // Drag and Drop Handlers
    const handleDragStart = (e: React.DragEvent, catId: string) => {
        e.dataTransfer.setData('categoryId', catId);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e: React.DragEvent, folderId: string) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        setDragOverFolderId(folderId);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOverFolderId(null);
    };

    const handleDrop = async (e: React.DragEvent, targetFolderId: string) => {
        e.preventDefault();
        setDragOverFolderId(null);
        const categoryId = e.dataTransfer.getData('categoryId');
        if (categoryId) {
            // Optimistic update could go here, but we'll rely on server revalidation for now
            await moveCategory(categoryId, targetFolderId);
            refreshBooks(); // Force refresh context
        }
    };

    const handleAddCategory = (folderId?: string) => {
        setEditingCategory(null);
        setPreselectedFolderId(folderId);
        setIsCatModalOpen(true);
    };

    const handleAddFolder = () => {
        setEditingFolder(null);
        setIsFolderModalOpen(true);
    };

    const handleEditCategory = (cat: Category) => {
        setEditingCategory(cat);
        setPreselectedFolderId(undefined);
        setIsCatModalOpen(true);
    };

    const handleEditFolder = (folder: CategoryFolder) => {
        setEditingFolder(folder);
        setIsFolderModalOpen(true);
    };

    return (
        <div className="flex h-full w-full overflow-hidden relative">
            {/* Background blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden z-10">
                <header className="px-8 py-6 flex items-center justify-between border-b border-white/40">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                            <span>Configuración</span>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span className="text-primary">Categorías</span>
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight dark:text-white uppercase tracking-widest">Gestión de Categorías</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleAddFolder}
                            className="bg-white hover:bg-gray-50 text-slate-700 px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold text-sm border border-slate-200 shadow-sm transition-all"
                        >
                            <span className="material-symbols-outlined text-[20px]">create_new_folder</span>
                            <span>Nueva Carpeta</span>
                        </button>
                        <button
                            onClick={() => handleAddCategory()}
                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/20 font-bold text-sm transition-all"
                        >
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Nueva Categoría</span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 scrollbar-hide pb-32">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* Search Bar - Optional but good for UX */}
                        <div className="relative group max-w-md">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors material-symbols-outlined">search</span>
                            <input
                                type="text"
                                placeholder="Buscar categorías..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full h-12 pl-12 pr-6 rounded-xl border border-white/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm text-sm"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                            {foldersUI.map(folder => {
                                const colors = COLOR_MAP[folder.color] || COLOR_MAP.slate;
                                const isDragOver = dragOverFolderId === folder.id;

                                return (
                                    <div
                                        key={folder.id}
                                        className={`glass-card rounded-[2rem] p-6 shadow-soft group/folder flex flex-col h-full ring-2 transition-all ${isDragOver
                                                ? 'ring-primary border-primary/50 bg-primary/5 dark:bg-primary/10 scale-[1.02]'
                                                : 'ring-transparent'
                                            }`}
                                        onDragOver={(e) => handleDragOver(e, folder.id)}
                                        onDragLeave={handleDragLeave}
                                        onDrop={(e) => handleDrop(e, folder.id)}
                                    >
                                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`size-12 rounded-2xl flex items-center justify-center ${colors.bg} ${colors.text}`}
                                                >
                                                    <CategoryIcon icon={folder.icon} className="text-2xl" />
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-slate-900 dark:text-white text-lg leading-tight">{folder.name}</h4>
                                                    <p className="text-xs font-bold text-slate-400 mt-0.5">{folder.count} categorías</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {folder.id !== 'ungrouped' && (
                                                    <button
                                                        onClick={() => handleEditFolder(folder.original!)}
                                                        className="size-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                                                        title="Editar carpeta"
                                                    >
                                                        <span className="material-symbols-outlined text-[18px]">edit</span>
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleAddCategory(folder.id)}
                                                    className="size-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                                                    title="Agregar categoría aquí"
                                                >
                                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex-1 space-y-2 min-h-[50px]">
                                            {folder.items.length > 0 ? (
                                                folder.items.map(item => {
                                                    const itemColors = COLOR_MAP[item.color || 'slate'] || COLOR_MAP.slate;
                                                    return (
                                                        <div
                                                            key={item.id}
                                                            draggable
                                                            onDragStart={(e) => handleDragStart(e, item.id)}
                                                            className="flex items-center justify-between p-3 rounded-xl transition-all border border-transparent bg-white/0 hover:bg-white/60 dark:hover:bg-slate-800 hover:border-slate-100 dark:hover:border-slate-700 hover:shadow-sm cursor-grab active:cursor-grabbing group/row"
                                                        >
                                                            <div className="flex items-center gap-3 flex-1">
                                                                <span className="material-symbols-outlined text-slate-300 text-[18px] opacity-0 group-hover/row:opacity-100 transition-opacity">drag_indicator</span>
                                                                <div
                                                                    className={`size-9 rounded-full flex items-center justify-center border ${itemColors.bg} ${itemColors.text} ${itemColors.border}`}
                                                                >
                                                                    <CategoryIcon icon={item.icon || 'category'} className="text-[16px]" />
                                                                </div>
                                                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{item.name}</span>
                                                            </div>
                                                            <button
                                                                onClick={() => handleEditCategory(item)}
                                                                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 transition-opacity opacity-0 group-hover/row:opacity-100"
                                                                title="Editar categoría"
                                                            >
                                                                <span className="material-symbols-outlined text-[16px]">edit</span>
                                                            </button>
                                                        </div>
                                                    )
                                                })
                                            ) : (
                                                <div className="h-full flex flex-col items-center justify-center py-8 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-xl text-slate-300">
                                                    <p className="text-xs font-bold">Arrastra categorías aquí</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <CategoryModal
                isOpen={isCatModalOpen}
                onClose={() => setIsCatModalOpen(false)}
                folders={categoryFolders}
                activeBookId={activeBookId}
                defaultFolderId={preselectedFolderId}
                initialData={editingCategory}
                onSuccess={refreshBooks}
            />

            <FolderModal
                isOpen={isFolderModalOpen}
                onClose={() => setIsFolderModalOpen(false)}
                activeBookId={activeBookId}
                initialData={editingFolder}
                onSuccess={refreshBooks}
            />
        </div>
    );
}

