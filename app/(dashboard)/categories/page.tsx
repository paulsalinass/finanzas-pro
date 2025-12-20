"use client";

import React, { useState, useMemo } from 'react';
import { useFinance } from '@/context/FinanceContext';
import { Category, CategoryFolder } from '@/types';

export default function Categories() {
    const { categories, categoryFolders } = useFinance();
    const [selectedTab, setSelectedTab] = useState<'Gastos' | 'Ingresos'>('Gastos');
    const [selectedItems, setSelectedItems] = useState<string[]>([]); // Keep state but remove UI for now if requested, or just keep logic unused

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCatName, setNewCatName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#307de8');
    const [selectedIcon, setSelectedIcon] = useState('shopping_cart');
    const [selectedFolderId, setSelectedFolderId] = useState<string>('none');

    const colors = ['#307de8', '#ff6b6b', '#4ecdc4', '#ffd93d', '#6c5ce7', '#a8e6cf', '#e17055'];
    const icons = ['shopping_cart', 'restaurant', 'directions_car', 'flight', 'home', 'fitness_center', 'pets', 'school', 'videogame_asset'];

    // Group Categories by Folder
    const foldersUI = useMemo(() => {
        // 1. Create maps for existing folders
        const folderMap = new Map<string, { folder: CategoryFolder | null, items: Category[] }>();

        // Initialize with known folders
        categoryFolders.forEach(f => {
            folderMap.set(f.id, { folder: f, items: [] });
        });

        // Initialize "Uncategorized" bucket
        const UNGROUPED_ID = 'ungrouped';
        if (!folderMap.has(UNGROUPED_ID)) {
            folderMap.set(UNGROUPED_ID, { folder: null, items: [] });
        }

        // 2. Distribute categories
        categories.forEach(cat => {
            const fId = cat.folder_id || UNGROUPED_ID;
            if (folderMap.has(fId)) {
                folderMap.get(fId)!.items.push(cat);
            } else {
                // If folder_id exists but folder missing (orphan), put in ungrouped
                folderMap.get(UNGROUPED_ID)!.items.push(cat);
            }
        });

        // 3. Convert to array suitable for UI
        const result = [];
        for (const [key, value] of folderMap.entries()) {
            if (value.folder) {
                result.push({
                    id: value.folder.id,
                    name: value.folder.name,
                    icon: value.folder.icon || 'folder',
                    color: value.folder.color || 'blue',
                    count: value.items.length,
                    items: value.items
                });
            } else if (value.items.length > 0) {
                // Only show ungrouped if there are items
                result.push({
                    id: 'ungrouped',
                    name: 'General / Sin Carpeta',
                    icon: 'category',
                    color: 'gray',
                    count: value.items.length,
                    items: value.items
                });
            }
        }
        return result;
    }, [categories, categoryFolders]);


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
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight dark:text-white">Gestión de Categorías</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-interact bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/20 font-bold text-sm"
                        >
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Nueva Categoría</span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 scrollbar-hide pb-32">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {/* Tabs - Only visual for now unless we filter by type */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex bg-slate-200/50 dark:bg-slate-800 p-1 rounded-xl">
                                <button
                                    onClick={() => setSelectedTab('Gastos')}
                                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${selectedTab === 'Gastos' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
                                >
                                    Gastos
                                </button>
                                <button
                                    onClick={() => setSelectedTab('Ingresos')}
                                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${selectedTab === 'Ingresos' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
                                >
                                    Ingresos
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white/50 dark:bg-slate-800/50 dark:border-slate-700 text-xs font-bold text-slate-500">
                                    <span className="material-symbols-outlined text-[18px]">folder</span>
                                    {categoryFolders.length} Grupos
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white/50 dark:bg-slate-800/50 dark:border-slate-700 text-xs font-bold text-slate-500">
                                    <span className="material-symbols-outlined text-[18px]">category</span>
                                    {categories.length} Categorías
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {foldersUI.map(folder => (
                                <div key={folder.id} className="glass-card rounded-[2rem] p-6 shadow-soft group/folder">
                                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-slate-300 drag-handle">drag_indicator</span>
                                            <div className={`size-11 rounded-xl flex items-center justify-center bg-${folder.color}-100 text-${folder.color}-600`}>
                                                <span className="material-symbols-outlined text-2xl">{folder.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 dark:text-white text-lg leading-tight">{folder.name}</h4>
                                                <p className="text-[11px] font-bold text-slate-400">{folder.count} categorías</p>
                                            </div>
                                        </div>
                                    </div>

                                    {folder.items.length > 0 ? (
                                        <div className="space-y-1">
                                            {folder.items.map(item => (
                                                <div key={item.id} className="flex items-center justify-between p-2 rounded-xl transition-all border border-transparent hover:bg-white hover:border-slate-100 dark:hover:bg-slate-800 dark:hover:border-slate-700 group/row">
                                                    <div className="flex items-center gap-3 flex-1">
                                                        <div className={`size-8 rounded-full flex items-center justify-center border bg-slate-50 border-slate-100`}>
                                                            <span className={`material-symbols-outlined text-[18px] text-${item.color || 'slate-500'}`}>{item.icon || 'category'}</span>
                                                        </div>
                                                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{item.name}</span>
                                                    </div>
                                                    <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 transition-opacity opacity-0 group-hover/row:opacity-100">
                                                        <span className="material-symbols-outlined text-[18px]">edit</span>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20">
                                            <p className="text-sm font-bold text-slate-400">Carpeta vacía</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {foldersUI.length === 0 && (
                                <div className="col-span-full text-center py-20 text-slate-400">
                                    <p>No hay categorías ni carpetas.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Removed Floating Selection Bar as requested */}
            </div>

            {/* Modal Logic preserved but simplified for display */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
                    <div className="glass-card w-full max-w-2xl rounded-2xl shadow-premium overflow-hidden flex flex-col animate-slide-up border border-white/80 dark:border-slate-800">
                        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800">
                            <div>
                                <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase tracking-widest">Nueva Categoría</h1>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        <div className="p-8">
                            <p className="text-center text-gray-500">Funcionalidad de crear categorías en desarrollo...</p>
                        </div>
                        <div className="px-8 py-6 border-t border-gray-100 bg-white/40 flex justify-end gap-4">
                            <button onClick={() => setIsModalOpen(false)} className="px-6 h-12 rounded-xl text-gray-600 font-bold">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
