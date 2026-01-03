"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { useFinance } from '@/context/FinanceContext';
import { Category, CategoryFolder } from '@/types';
import { CategoryModal } from '@/components/categories/CategoryModal';
import { FolderModal } from '@/components/categories/FolderModal';
import { moveCategory, reorderCategories } from '@/app/actions/category-actions';
import { COLOR_MAP } from '@/lib/category-colors';

import * as Icons from "lucide-react"
function CategoryIcon({ icon, className }: { icon: string, className?: string }) {
    const LucideIcon = (Icons as any)[icon]
    if (LucideIcon) return <LucideIcon className={className} />
    return <span className={`material-symbols-outlined ${className} !text-[inherit]`}>{icon}</span>
}

export default function Categories() {
    const { categories, categoryFolders, activeBookId, refreshBooks, updateCategories } = useFinance();
    const [searchTerm, setSearchTerm] = useState('');

    // Modal States
    const [isCatModalOpen, setIsCatModalOpen] = useState(false);
    const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
    const [preselectedFolderId, setPreselectedFolderId] = useState<string | undefined>(undefined);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [editingFolder, setEditingFolder] = useState<CategoryFolder | null>(null);
    const [dragOverFolderId, setDragOverFolderId] = useState<string | null>(null);
    const [dragOverItemId, setDragOverItemId] = useState<string | null>(null);
    const [dropPosition, setDropPosition] = useState<'top' | 'bottom' | null>(null);

    // Optimistic state for immediate feedback
    const [optimisticCategories, setOptimisticCategories] = useState<Category[]>(categories);

    // Sync optimistic state when server data changes
    useEffect(() => {
        setOptimisticCategories(categories);
    }, [categories]);

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

        // Sort categories by order first
        const sortedCategories = [...optimisticCategories].sort((a, b) => (a.order || 0) - (b.order || 0));

        sortedCategories.forEach(cat => {
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
    }, [optimisticCategories, categoryFolders, searchTerm]);

    // Drag and Drop Handlers
    const handleDragStart = (e: React.DragEvent, catId: string) => {
        e.dataTransfer.setData('categoryId', catId);
        e.dataTransfer.effectAllowed = 'move';
        // Optional: Set a custom drag image if needed, but default is usually ok
    };

    const handleDragOver = (e: React.DragEvent, folderId: string) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';
        setDragOverFolderId(folderId);
        setDragOverItemId(null); // Clear item drag state
        setDropPosition(null);
    };

    const handleItemDragOver = (e: React.DragEvent, itemId: string) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';

        const currentTarget = e.currentTarget as HTMLElement;
        const rect = currentTarget.getBoundingClientRect();
        const offsetY = e.clientY - rect.top;
        const isTopHalf = offsetY < rect.height / 2;

        setDragOverFolderId(null); // We are over an item, not just the folder generic area
        setDragOverItemId(itemId);
        setDropPosition(isTopHalf ? 'top' : 'bottom');
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOverFolderId(null);
        // Do not clear item drag over immediately to avoid flickering when moving between child elements
    };

    // Add a specific clearer for the list container or handling bubbling carefully
    const handleContainerDragLeave = (e: React.DragEvent) => {
        // Logic to clear if actually leaving the list
    }

    const handleDrop = async (e: React.DragEvent, targetFolderId: string) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOverFolderId(null);
        setDragOverItemId(null);
        setDropPosition(null);

        const categoryId = e.dataTransfer.getData('categoryId');
        if (categoryId) {
            // Find items in this folder to append to end if dropped on folder background
            const targetFolder = foldersUI.find(f => f.id === targetFolderId);
            if (!targetFolder) return;

            // If already in folder, move to end? Or just do nothing? 
            // Usually dropping on folder bg implies "move into folder" (append).

            await moveCategory(categoryId, targetFolderId);
            refreshBooks();
        }
    };

    const handleItemDrop = async (e: React.DragEvent, targetItem: Category, folderId: string) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOverFolderId(null);
        setDragOverItemId(null);
        setDropPosition(null);

        const draggedCategoryId = e.dataTransfer.getData('categoryId');
        if (!draggedCategoryId || draggedCategoryId === targetItem.id) return;

        const targetFolderUI = foldersUI.find(f => f.id === folderId);
        if (!targetFolderUI) return;

        const sourceFolderUI = foldersUI.find(f => f.items.some(c => c.id === draggedCategoryId));

        // Optimistic reorder within same folder
        if (sourceFolderUI && sourceFolderUI.id === folderId) {
            const items = [...targetFolderUI.items];
            // Note: targetFolderUI.items is SORTED by order. 
            // We need to work with the master optimistic list to perserve other folders' state.

            // Easier approach: manipulate the specific items subset, then map back to global state.

            const oldIndex = items.findIndex(i => i.id === draggedCategoryId);
            const targetIndex = items.findIndex(i => i.id === targetItem.id);

            if (oldIndex === -1 || targetIndex === -1) return;

            const [movedItem] = items.splice(oldIndex, 1);

            // Calculate fresh index
            let freshTargetIndex = items.findIndex(i => i.id === targetItem.id);
            const insertIndex = dropPosition === 'top' ? freshTargetIndex : freshTargetIndex + 1;

            items.splice(insertIndex, 0, movedItem);

            // Prepare updates with new order numbers
            // We can just use the index in this array as the order
            const updatedItems = items.map((item, index) => ({ ...item, order: index }));

            // Update global optimistic state
            const newOptimisticCategories = optimisticCategories.map(cat => {
                const updated = updatedItems.find(u => u.id === cat.id);
                return updated ? updated : cat;
            });

            setOptimisticCategories(newOptimisticCategories);

            // Update Global Context State immediately to prevent snap-back from stale refresh
            updateCategories(newOptimisticCategories);

            // Server Sync
            const serverUpdates = updatedItems.map(item => ({ id: item.id, order: item.order as number }));
            await reorderCategories(serverUpdates);

            // Do NOT call refreshBooks() immediately here. 
            // We trust our optimistic update.
            // refreshBooks(); 
        } else {
            // Moving to different folder (insert at target position?)
            // For now standard move (append) is safer for different folders unless we support cross-folder insertion logic
            await moveCategory(draggedCategoryId, folderId);
            refreshBooks();
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
        <div className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden relative scrollbar-hide pb-40">
            {/* Background Blobs (Matched opacity/styles from Budgets if desired, or keep existing but with consistent positioning) */}
            <div className="fixed inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-10">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto max-w-[1200px] p-4 md:p-8 flex flex-col gap-8">
                {/* Page Header */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-[#111418] dark:text-white">Categorías</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-lg font-normal">
                            Gestión y organización global
                        </p>
                    </div>
                    <div className="flex flex-row gap-3 w-full md:w-auto">
                        <button
                            onClick={handleAddFolder}
                            className="group flex-1 flex items-center justify-center gap-1.5 px-2 md:px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-medium text-xs md:text-sm hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-white transition-all h-12 shadow-sm whitespace-nowrap cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[20px] md:text-[22px] transition-transform duration-300 group-hover:scale-110">create_new_folder</span>
                            <span>Nueva Carpeta</span>
                        </button>
                        <button
                            onClick={() => handleAddCategory()}
                            className="group flex-1 flex items-center justify-center gap-1.5 bg-primary hover:bg-slate-800 text-white font-bold py-3 px-2 md:px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 h-12 whitespace-nowrap text-xs md:text-sm cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[18px] md:text-[20px] transition-transform duration-300 group-hover:rotate-90">add</span>
                            <span>Nueva Categoría</span>
                        </button>
                    </div>
                </header>

                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {/* Search Bar */}
                    <div className="relative group max-w-md mb-8">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors material-symbols-outlined">search</span>
                        <input
                            type="text"
                            placeholder="Buscar categorías..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-12 pl-12 pr-6 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                        {foldersUI.map(folder => {
                            const colors = COLOR_MAP[folder.color] || COLOR_MAP.slate;
                            const isDragOver = dragOverFolderId === folder.id;

                            return (
                                <div
                                    key={folder.id}
                                    className={`glass-card rounded-3xl p-6 shadow-soft group/folder flex flex-col h-full ring-2 transition-all ${isDragOver
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
                                                    className="size-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                                                    title="Editar carpeta"
                                                >
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleAddCategory(folder.id)}
                                                className="group/add size-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer"
                                                title="Agregar categoría aquí"
                                            >
                                                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover/add:rotate-90">add</span>
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
                                                        onDragOver={(e) => handleItemDragOver(e, item.id)}
                                                        onDrop={(e) => handleItemDrop(e, item, folder.id)}
                                                        className={`flex items-center justify-between p-3 rounded-xl transition-all bg-white/0 hover:bg-white/60 dark:hover:bg-slate-800 hover:shadow-sm cursor-grab active:cursor-grabbing group/row relative border border-transparent hover:border-slate-100 dark:hover:border-slate-700
                                                        `}
                                                    >
                                                        {dragOverItemId === item.id && dropPosition === 'top' && (
                                                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)] z-10 scale-x-105 pointer-events-none" />
                                                        )}
                                                        {dragOverItemId === item.id && dropPosition === 'bottom' && (
                                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)] z-10 scale-x-105 pointer-events-none" />
                                                        )}
                                                        <div className="flex items-center gap-3 flex-1">
                                                            <span className="material-symbols-outlined text-slate-300 text-[18px] opacity-0 group-hover/row:opacity-100 transition-opacity">drag_indicator</span>
                                                            <div
                                                                className={`size-9 rounded-lg flex items-center justify-center border ${!COLOR_MAP[item.color || 'slate'] ? 'border-black/5 dark:border-white/10' : `${itemColors.bg} ${itemColors.text} ${itemColors.border}`}`}
                                                                style={!COLOR_MAP[item.color || 'slate'] ? { backgroundColor: item.color } : {}}
                                                            >
                                                                <CategoryIcon icon={item.icon || 'category'} className={`text-[16px] ${!COLOR_MAP[item.color || 'slate'] ? 'text-white drop-shadow-sm' : ''}`} />
                                                            </div>
                                                            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{item.name}</span>
                                                        </div>
                                                        <button
                                                            onClick={() => handleEditCategory(item)}
                                                            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 transition-opacity opacity-0 group-hover/row:opacity-100 cursor-pointer"
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
            </div >

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
        </div >
    );
}

