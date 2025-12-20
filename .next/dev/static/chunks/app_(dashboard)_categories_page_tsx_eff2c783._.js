(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(dashboard)/categories/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Categories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Categories() {
    _s();
    const [selectedTab, setSelectedTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Gastos');
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'restaurantes',
        'supermercado'
    ]);
    // Modal State
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCatName, setNewCatName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('#307de8');
    const [selectedIcon, setSelectedIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('shopping_cart');
    const [selectedFolder, setSelectedFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ocio');
    const folders = [
        {
            id: 'vivienda',
            name: 'Vivienda',
            icon: 'cottage',
            color: 'blue',
            count: 3,
            monthly: '$1,200',
            items: [
                {
                    id: 'alquiler',
                    name: 'Alquiler',
                    icon: 'key',
                    color: 'text-blue-500',
                    bgColor: 'bg-blue-50',
                    borderColor: 'border-blue-100'
                },
                {
                    id: 'agua-luz',
                    name: 'Agua & Luz',
                    icon: 'water_drop',
                    color: 'text-cyan-500',
                    bgColor: 'bg-cyan-50',
                    borderColor: 'border-cyan-100'
                },
                {
                    id: 'internet',
                    name: 'Internet',
                    icon: 'wifi',
                    color: 'text-amber-500',
                    bgColor: 'bg-amber-50',
                    borderColor: 'border-amber-100'
                }
            ]
        },
        {
            id: 'alimentacion',
            name: 'Alimentación',
            icon: 'restaurant',
            color: 'emerald',
            count: 4,
            monthly: '$450',
            items: [
                {
                    id: 'supermercado',
                    name: 'Supermercado',
                    icon: 'shopping_cart',
                    color: 'text-green-500',
                    bgColor: 'bg-green-50',
                    borderColor: 'border-green-100'
                },
                {
                    id: 'restaurantes',
                    name: 'Restaurantes',
                    icon: 'local_pizza',
                    color: 'text-orange-500',
                    bgColor: 'bg-orange-50',
                    borderColor: 'border-orange-100'
                }
            ]
        },
        {
            id: 'transporte',
            name: 'Transporte',
            icon: 'directions_car',
            color: 'indigo',
            count: 2,
            monthly: '$200',
            items: [
                {
                    id: 'gasolina',
                    name: 'Gasolina',
                    icon: 'local_gas_station',
                    color: 'text-slate-600',
                    bgColor: 'bg-slate-100',
                    borderColor: 'border-slate-200'
                },
                {
                    id: 'transporte-publico',
                    name: 'Transporte Público',
                    icon: 'directions_bus',
                    color: 'text-yellow-600',
                    bgColor: 'bg-yellow-50',
                    borderColor: 'border-yellow-100'
                }
            ]
        },
        {
            id: 'estilo-vida',
            name: 'Estilo de Vida',
            icon: 'style',
            color: 'purple',
            count: 0,
            monthly: '0',
            items: []
        }
    ];
    const colors = [
        '#307de8',
        '#ff6b6b',
        '#4ecdc4',
        '#ffd93d',
        '#6c5ce7',
        '#a8e6cf',
        '#e17055'
    ];
    const icons = [
        'shopping_cart',
        'restaurant',
        'directions_car',
        'flight',
        'home',
        'fitness_center',
        'pets',
        'school',
        'videogame_asset'
    ];
    const toggleSelection = (id)=>{
        setSelectedItems((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full overflow-hidden z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "px-8 py-6 flex items-center justify-between border-b border-white/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Configuración"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[14px]",
                                                children: "chevron_right"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary",
                                                children: "Categorías"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-black text-slate-900 tracking-tight dark:text-white",
                                        children: "Gestión de Categorías"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-interact size-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 shadow-sm dark:bg-slate-800 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            children: "search"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[1px] h-6 bg-slate-200 mx-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsModalOpen(true),
                                        className: "btn-interact bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/20 font-bold text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[20px]",
                                                children: "add"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Nueva Categoría"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-8 scrollbar-hide pb-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row justify-between items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex bg-slate-200/50 dark:bg-slate-800 p-1 rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedTab('Gastos'),
                                                    className: `px-6 py-2 rounded-lg text-sm font-bold transition-all ${selectedTab === 'Gastos' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`,
                                                    children: "Gastos"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedTab('Ingresos'),
                                                    className: `px-6 py-2 rounded-lg text-sm font-bold transition-all ${selectedTab === 'Ingresos' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`,
                                                    children: "Ingresos"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white/50 dark:bg-slate-800/50 dark:border-slate-700 text-xs font-bold text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[18px]",
                                                            children: "folder"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 37
                                                        }, this),
                                                        "5 Grupos"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white/50 dark:bg-slate-800/50 dark:border-slate-700 text-xs font-bold text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[18px]",
                                                            children: "category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 37
                                                        }, this),
                                                        "24 Categorías"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: folders.map((folder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-[2rem] p-6 shadow-soft group/folder",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-slate-300 drag-handle",
                                                                    children: "drag_indicator"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `size-11 rounded-xl flex items-center justify-center ${folder.color === 'blue' ? 'bg-blue-100 text-blue-600' : folder.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : folder.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' : 'bg-purple-100 text-purple-600'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-2xl",
                                                                        children: folder.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-black text-slate-900 dark:text-white text-lg leading-tight",
                                                                            children: folder.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                            lineNumber: 171,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[11px] font-bold text-slate-400",
                                                                            children: [
                                                                                folder.count,
                                                                                " categorías • ",
                                                                                folder.monthly,
                                                                                "/mes"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 flex items-center justify-center transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-[20px]",
                                                                    children: "add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 37
                                                }, this),
                                                folder.items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: folder.items.map((item)=>{
                                                        const isSelected = selectedItems.includes(item.id);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `flex items-center justify-between p-2 rounded-xl transition-all border group/row ${isSelected ? 'bg-primary/5 border-primary/20' : 'border-transparent hover:bg-white hover:border-slate-100 dark:hover:bg-slate-800 dark:hover:border-slate-700'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `material-symbols-outlined text-[20px] text-slate-200 transition-opacity ${isSelected ? 'opacity-100 text-primary/40' : 'opacity-0 group-hover/row:opacity-100'}`,
                                                                            children: "drag_handle"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                            lineNumber: 190,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: isSelected,
                                                                            onChange: ()=>toggleSelection(item.id),
                                                                            className: "rounded border-slate-300 text-primary focus:ring-primary/20 bg-transparent size-4 cursor-pointer"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `size-8 rounded-full flex items-center justify-center border ${item.bgColor} ${item.borderColor} dark:bg-slate-700 dark:border-slate-600`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `material-symbols-outlined text-[18px] ${item.color}`,
                                                                                children: item.icon
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                                lineNumber: 198,
                                                                                columnNumber: 65
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                            lineNumber: 197,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-sm font-bold ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`,
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                            lineNumber: 200,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: `p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 transition-opacity ${isSelected ? 'opacity-100 text-primary' : 'opacity-0 group-hover/row:opacity-100'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-[18px]",
                                                                        children: "edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 53
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-slate-400",
                                                            children: "Arrastra categorías aquí"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-bold text-slate-300",
                                                            children: "o crea una nueva"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, folder.id, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this),
                    selectedItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-premium backdrop-blur-md bg-opacity-95 border border-slate-800 transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 pr-4 border-r border-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full",
                                            children: selectedItems.length
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold",
                                            children: "Seleccionados"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[20px]",
                                                    children: "drive_file_move"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: "Mover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-red-500/20 text-red-400 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[20px]",
                                                    children: "delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: "Eliminar"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedItems([]),
                                    className: "ml-2 text-slate-500 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                            lineNumber: 224,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                        lineNumber: 223,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/40 backdrop-blur-sm animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card w-full max-w-2xl rounded-2xl shadow-premium overflow-hidden flex flex-col animate-slide-up border border-white/80 dark:border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase tracking-widest",
                                            children: "Nueva Categoría"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium",
                                            children: "Organiza tus transacciones con claridad."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsModalOpen(false),
                                    className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform duration-300",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                            lineNumber: 252,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 space-y-8 overflow-y-auto max-h-[70vh] scrollbar-hide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300 ml-1",
                                            htmlFor: "category-name",
                                            children: "Nombre de la categoría"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: newCatName,
                                                onChange: (e)=>setNewCatName(e.target.value),
                                                className: "w-full h-14 pl-6 pr-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-primary/10 focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 transition-all outline-none text-base font-bold shadow-sm",
                                                id: "category-name",
                                                placeholder: "Ej. Alimentación, Transporte, Ocio...",
                                                type: "text"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300 ml-1",
                                                    children: "Color identificativo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-3",
                                                    children: [
                                                        colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setSelectedColor(color),
                                                                className: `w-10 h-10 rounded-full transition-all hover:scale-110 active:scale-90 ${selectedColor === color ? 'ring-2 ring-offset-2 ring-primary dark:ring-offset-slate-900' : ''}`,
                                                                style: {
                                                                    backgroundColor: color
                                                                }
                                                            }, color, false, {
                                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 45
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-10 h-10 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-xl",
                                                                children: "add"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300 ml-1",
                                                    children: "Icono"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-5 gap-2",
                                                    children: [
                                                        icons.map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setSelectedIcon(icon),
                                                                className: `w-10 h-10 rounded-lg flex items-center justify-center transition-all ${selectedIcon === icon ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105' : 'text-gray-400 bg-gray-50 dark:bg-white/5 border border-transparent hover:bg-gray-100 dark:hover:bg-white/10'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-[20px]",
                                                                    children: icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, icon, false, {
                                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 45
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-10 h-10 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-xl",
                                                                children: "search"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300",
                                                    htmlFor: "folder-select",
                                                    children: "Carpeta asociada"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-hover transition-colors flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[16px]",
                                                            children: "create_new_folder"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 41
                                                        }, this),
                                                        "Nueva carpeta"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        children: "folder_open"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedFolder,
                                                    onChange: (e)=>setSelectedFolder(e.target.value),
                                                    className: "w-full h-14 pl-12 pr-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-primary/10 focus:border-primary text-gray-900 dark:text-white transition-all outline-none appearance-none cursor-pointer font-bold shadow-sm",
                                                    id: "folder-select",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "none",
                                                            children: "Sin carpeta (Categoría raíz)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "gastos",
                                                            children: "Gastos Mensuales"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "ahorro",
                                                            children: "Ahorro e Inversión"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "ocio",
                                                            children: "Ocio y Entretenimiento"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "hogar",
                                                            children: "Hogar y Servicios"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-primary transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        children: "expand_more"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl border border-blue-100 dark:border-blue-800/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-primary text-[18px] shrink-0",
                                                    children: "info"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-blue-700 dark:text-blue-300 font-bold leading-relaxed",
                                                    children: "Asociar a una carpeta ayuda a agrupar los gastos en los reportes mensuales y permite definir presupuestos grupales automáticos."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 362,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 dark:bg-slate-900/30 rounded-2xl p-5 flex items-center gap-5 border border-gray-100 dark:border-slate-800 animate-fade-in shadow-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 scale-110",
                                            style: {
                                                backgroundColor: selectedColor
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[28px]",
                                                children: selectedIcon
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1",
                                                    children: "Vista previa"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-black text-gray-900 dark:text-white leading-tight",
                                                    children: newCatName || 'Nombre de la categoría'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-0.5",
                                                    children: [
                                                        'Dentro de "',
                                                        selectedFolder === 'none' ? 'Raíz' : selectedFolder.charAt(0).toUpperCase() + selectedFolder.slice(1),
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                            lineNumber: 266,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-8 py-6 border-t border-gray-100 dark:border-gray-800 bg-white/40 dark:bg-slate-900/40 flex items-center justify-end gap-4 backdrop-blur-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsModalOpen(false),
                                    className: "px-6 h-12 rounded-xl text-gray-600 dark:text-gray-300 font-black text-xs uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-slate-800 transition-all",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 388,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsModalOpen(false),
                                    className: "px-8 h-12 rounded-xl bg-primary hover:bg-primary-hover text-white font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[20px]",
                                            children: "check"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 33
                                        }, this),
                                        "Guardar"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                            lineNumber: 387,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                    lineNumber: 250,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                lineNumber: 249,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(dashboard)/categories/page.tsx",
        lineNumber: 98,
        columnNumber: 9
    }, this);
}
_s(Categories, "4oNn9rqjpsPztN3SvkWbnNKafKo=");
_c = Categories;
var _c;
__turbopack_context__.k.register(_c, "Categories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28dashboard%29_categories_page_tsx_eff2c783._.js.map