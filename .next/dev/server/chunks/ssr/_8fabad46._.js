module.exports = [
"[project]/components/books/ColorPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOOK_COLORS",
    ()=>BOOK_COLORS,
    "ColorPicker",
    ()=>ColorPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
'use client';
;
;
const BOOK_COLORS = {
    Classic: [
        {
            name: 'Red',
            value: 'red',
            hex: '#ef4444'
        },
        {
            name: 'Orange',
            value: 'orange',
            hex: '#f97316'
        },
        {
            name: 'Amber',
            value: 'amber',
            hex: '#f59e0b'
        },
        {
            name: 'Yellow',
            value: 'yellow',
            hex: '#eab308'
        },
        {
            name: 'Lime',
            value: 'lime',
            hex: '#84cc16'
        },
        {
            name: 'Green',
            value: 'green',
            hex: '#22c55e'
        },
        {
            name: 'Emerald',
            value: 'emerald',
            hex: '#10b981'
        },
        {
            name: 'Teal',
            value: 'teal',
            hex: '#14b8a6'
        },
        {
            name: 'Cyan',
            value: 'cyan',
            hex: '#06b6d4'
        },
        {
            name: 'Sky',
            value: 'sky',
            hex: '#0ea5e9'
        },
        {
            name: 'Blue',
            value: 'blue',
            hex: '#3b82f6'
        },
        {
            name: 'Indigo',
            value: 'indigo',
            hex: '#6366f1'
        },
        {
            name: 'Violet',
            value: 'violet',
            hex: '#8b5cf6'
        },
        {
            name: 'Purple',
            value: 'purple',
            hex: '#a855f7'
        },
        {
            name: 'Fuchsia',
            value: 'fuchsia',
            hex: '#d946ef'
        },
        {
            name: 'Pink',
            value: 'pink',
            hex: '#ec4899'
        },
        {
            name: 'Rose',
            value: 'rose',
            hex: '#f43f5e'
        },
        {
            name: 'Slate',
            value: 'slate',
            hex: '#64748b'
        }
    ]
};
function ColorPicker({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-medium text-text-main",
                children: "Color"
            }, void 0, false, {
                fileName: "[project]/components/books/ColorPicker.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: BOOK_COLORS.Classic.map((color)=>{
                    const isSelected = value === color.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange(color.value),
                        className: `
                                w-10 h-10 rounded-full flex items-center justify-center transition-all
                                ${isSelected ? 'ring-2 ring-offset-2 ring-primary dark:ring-offset-gray-900 scale-110' : 'hover:scale-105'}
                            `,
                        style: {
                            backgroundColor: color.hex
                        },
                        title: color.name,
                        children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            size: 18,
                            className: "text-white drop-shadow-md"
                        }, void 0, false, {
                            fileName: "[project]/components/books/ColorPicker.tsx",
                            lineNumber: 47,
                            columnNumber: 44
                        }, this)
                    }, color.value, false, {
                        fileName: "[project]/components/books/ColorPicker.tsx",
                        lineNumber: 36,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/books/ColorPicker.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "color",
                value: value
            }, void 0, false, {
                fileName: "[project]/components/books/ColorPicker.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/books/ColorPicker.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/books/IconPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconPicker",
    ()=>IconPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// Define a subset of icons for books
const ICON_CATEGORIES = {
    General: [
        'Wallet',
        'CreditCard',
        'Banknote',
        'Coins',
        'PiggyBank',
        'Landmark',
        'CircleDollarSign',
        'Briefcase',
        'Receipt'
    ],
    Hogar: [
        'Home',
        'ShoppingCart',
        'ShoppingBag',
        'Utensils',
        'Coffee',
        'Zap',
        'Wifi',
        'Droplets',
        'Hammer'
    ],
    Movilidad: [
        'Car',
        'Bus',
        'Train',
        'Plane',
        'Bike',
        'Fuel'
    ],
    Ocio: [
        'Gamepad2',
        'Music',
        'Clapperboard',
        'Ticket',
        'PartyPopper',
        'Gift',
        'Dumbbell',
        'Tent'
    ],
    Educación: [
        'GraduationCap',
        'Book',
        'BookOpen',
        'Library',
        'School'
    ],
    Tecnología: [
        'Smartphone',
        'Laptop',
        'Monitor',
        'Mouse',
        'Printer',
        'Server'
    ]
};
function IconPicker({ value, onChange }) {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('General');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Resolve icon component dynamically
    const SelectedIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[value] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.HelpCircle;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-medium text-text-main",
                children: "Icono"
            }, void 0, false, {
                fileName: "[project]/components/books/IconPicker.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "size-12 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectedIcon, {
                            size: 24,
                            className: "text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/books/IconPicker.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/books/IconPicker.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Buscar icono...",
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value),
                        className: "flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    }, void 0, false, {
                        fileName: "[project]/components/books/IconPicker.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/books/IconPicker.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pb-2 scrollbar-hide",
                children: Object.keys(ICON_CATEGORIES).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setSelectedCategory(cat),
                        className: `
                            px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors
                            ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-white/5 text-text-muted hover:bg-gray-200 dark:hover:bg-white/10'}
                        `,
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/components/books/IconPicker.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/books/IconPicker.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-6 sm:grid-cols-8 gap-2 max-h-48 overflow-y-auto pr-2",
                children: ICON_CATEGORIES[selectedCategory].filter((iconName)=>iconName.toLowerCase().includes(searchTerm.toLowerCase())).map((iconName)=>{
                    const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[iconName];
                    if (!Icon) return null;
                    const isSelected = value === iconName;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange(iconName),
                        className: `
                                    aspect-square rounded-xl flex items-center justify-center transition-all
                                    ${isSelected ? 'bg-primary/20 text-primary ring-2 ring-primary' : 'bg-gray-50 dark:bg-white/5 text-text-muted hover:bg-gray-100 dark:hover:bg-white/10 hover:text-text-main'}
                                `,
                        title: iconName,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/books/IconPicker.tsx",
                            lineNumber: 82,
                            columnNumber: 33
                        }, this)
                    }, iconName, false, {
                        fileName: "[project]/components/books/IconPicker.tsx",
                        lineNumber: 70,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/books/IconPicker.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "icon",
                value: value
            }, void 0, false, {
                fileName: "[project]/components/books/IconPicker.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/books/IconPicker.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/actions/data:e55f5e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCategory",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40ef68b1e954541f24d8a4aaa3cade72ef55cd2e67":"createCategory"},"app/actions/category-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ef68b1e954541f24d8a4aaa3cade72ef55cd2e67", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCategory");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2F0ZWdvcnktYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgZm9sZGVySWQgPSBmb3JtRGF0YS5nZXQoJ2ZvbGRlcklkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBjb2xvciA9IGZvcm1EYXRhLmdldCgnY29sb3InKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGljb24gPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGJvb2tJZCA9IGZvcm1EYXRhLmdldCgnYm9va0lkJykgYXMgc3RyaW5nXHJcblxyXG4gICAgaWYgKCFib29rSWQpIHJldHVybiB7IGVycm9yOiAnQm9vayBJRCBpcyByZXF1aXJlZCcgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3JpZXMnKS5pbnNlcnQoe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYm9va19pZDogYm9va0lkLFxyXG4gICAgICAgIGZvbGRlcl9pZDogZm9sZGVySWQgPT09ICd1bmdyb3VwZWQnID8gbnVsbCA6IGZvbGRlcklkLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGljb24sXHJcbiAgICAgICAgdXNlcl9pZDogdXNlci5pZFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2F0ZWdvcmllcycpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZvbGRlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXHJcblxyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGNvbG9yID0gZm9ybURhdGEuZ2V0KCdjb2xvcicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgaWNvbiA9IGZvcm1EYXRhLmdldCgnaWNvbicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgYm9va0lkID0gZm9ybURhdGEuZ2V0KCdib29rSWQnKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoIWJvb2tJZCkgcmV0dXJuIHsgZXJyb3I6ICdCb29rIElEIGlzIHJlcXVpcmVkJyB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcnlfZm9sZGVycycpLmluc2VydCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBib29rX2lkOiBib29rSWQsXHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgaWNvbixcclxuICAgICAgICB1c2VyX2lkOiB1c2VyLmlkXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZUNhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZywgdGFyZ2V0Rm9sZGVySWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3JpZXMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBmb2xkZXJfaWQ6IHRhcmdldEZvbGRlcklkID09PSAndW5ncm91cGVkJyA/IG51bGwgOiB0YXJnZXRGb2xkZXJJZCB9KVxyXG4gICAgICAgIC5lcSgnaWQnLCBjYXRlZ29yeUlkKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcmllcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGlkKVxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4geyBlcnJvcjogZXJyb3IubWVzc2FnZSB9XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhdGVnb3JpZXMnKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRm9sZGVyKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIC8vIE9wdGlvbmFsIGxvZ2ljOiBkZWxldGUgaXRlbXMgb3IgbW92ZSB0byB1bmdyb3VwZWQ/IFxyXG4gICAgLy8gVXN1YWxseSBjYXNjYWRlIG9yIHJlc3RyaWN0ZWQuIEZvciBub3cgc2ltcGxlIGRlbGV0ZS5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3J5X2ZvbGRlcnMnKS5kZWxldGUoKS5lcSgnaWQnLCBpZClcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGNvbG9yID0gZm9ybURhdGEuZ2V0KCdjb2xvcicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgaWNvbiA9IGZvcm1EYXRhLmdldCgnaWNvbicpIGFzIHN0cmluZ1xyXG5cclxuICAgIGlmICghaWQpIHJldHVybiB7IGVycm9yOiAnSUQgaXMgcmVxdWlyZWQnIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdjYXRlZ29yaWVzJykudXBkYXRlKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGZvbGRlcl9pZDogZm9sZGVySWQgPT09ICd1bmdyb3VwZWQnID8gbnVsbCA6IGZvbGRlcklkLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGljb25cclxuICAgIH0pLmVxKCdpZCcsIGlkKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRm9sZGVyKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBjb2xvciA9IGZvcm1EYXRhLmdldCgnY29sb3InKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGljb24gPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoIWlkKSByZXR1cm4geyBlcnJvcjogJ0lEIGlzIHJlcXVpcmVkJyB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcnlfZm9sZGVycycpLnVwZGF0ZSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBpY29uXHJcbiAgICB9KS5lcSgnaWQnLCBpZClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2F0ZWdvcmllcycpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQUtzQiwyTEFBQSJ9
}),
"[project]/app/actions/data:4233ab [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateCategory",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a680bceef55496edf0f120787b0ff31a2336938a":"updateCategory"},"app/actions/category-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40a680bceef55496edf0f120787b0ff31a2336938a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCategory");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2F0ZWdvcnktYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgZm9sZGVySWQgPSBmb3JtRGF0YS5nZXQoJ2ZvbGRlcklkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBjb2xvciA9IGZvcm1EYXRhLmdldCgnY29sb3InKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGljb24gPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGJvb2tJZCA9IGZvcm1EYXRhLmdldCgnYm9va0lkJykgYXMgc3RyaW5nXHJcblxyXG4gICAgaWYgKCFib29rSWQpIHJldHVybiB7IGVycm9yOiAnQm9vayBJRCBpcyByZXF1aXJlZCcgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3JpZXMnKS5pbnNlcnQoe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYm9va19pZDogYm9va0lkLFxyXG4gICAgICAgIGZvbGRlcl9pZDogZm9sZGVySWQgPT09ICd1bmdyb3VwZWQnID8gbnVsbCA6IGZvbGRlcklkLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGljb24sXHJcbiAgICAgICAgdXNlcl9pZDogdXNlci5pZFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2F0ZWdvcmllcycpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZvbGRlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXHJcblxyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGNvbG9yID0gZm9ybURhdGEuZ2V0KCdjb2xvcicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgaWNvbiA9IGZvcm1EYXRhLmdldCgnaWNvbicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgYm9va0lkID0gZm9ybURhdGEuZ2V0KCdib29rSWQnKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoIWJvb2tJZCkgcmV0dXJuIHsgZXJyb3I6ICdCb29rIElEIGlzIHJlcXVpcmVkJyB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcnlfZm9sZGVycycpLmluc2VydCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBib29rX2lkOiBib29rSWQsXHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgaWNvbixcclxuICAgICAgICB1c2VyX2lkOiB1c2VyLmlkXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZUNhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZywgdGFyZ2V0Rm9sZGVySWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3JpZXMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBmb2xkZXJfaWQ6IHRhcmdldEZvbGRlcklkID09PSAndW5ncm91cGVkJyA/IG51bGwgOiB0YXJnZXRGb2xkZXJJZCB9KVxyXG4gICAgICAgIC5lcSgnaWQnLCBjYXRlZ29yeUlkKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcmllcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGlkKVxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4geyBlcnJvcjogZXJyb3IubWVzc2FnZSB9XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhdGVnb3JpZXMnKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRm9sZGVyKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIC8vIE9wdGlvbmFsIGxvZ2ljOiBkZWxldGUgaXRlbXMgb3IgbW92ZSB0byB1bmdyb3VwZWQ/IFxyXG4gICAgLy8gVXN1YWxseSBjYXNjYWRlIG9yIHJlc3RyaWN0ZWQuIEZvciBub3cgc2ltcGxlIGRlbGV0ZS5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3J5X2ZvbGRlcnMnKS5kZWxldGUoKS5lcSgnaWQnLCBpZClcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGNvbG9yID0gZm9ybURhdGEuZ2V0KCdjb2xvcicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgaWNvbiA9IGZvcm1EYXRhLmdldCgnaWNvbicpIGFzIHN0cmluZ1xyXG5cclxuICAgIGlmICghaWQpIHJldHVybiB7IGVycm9yOiAnSUQgaXMgcmVxdWlyZWQnIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdjYXRlZ29yaWVzJykudXBkYXRlKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGZvbGRlcl9pZDogZm9sZGVySWQgPT09ICd1bmdyb3VwZWQnID8gbnVsbCA6IGZvbGRlcklkLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGljb25cclxuICAgIH0pLmVxKCdpZCcsIGlkKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRm9sZGVyKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBjb2xvciA9IGZvcm1EYXRhLmdldCgnY29sb3InKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGljb24gPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoIWlkKSByZXR1cm4geyBlcnJvcjogJ0lEIGlzIHJlcXVpcmVkJyB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcnlfZm9sZGVycycpLnVwZGF0ZSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBpY29uXHJcbiAgICB9KS5lcSgnaWQnLCBpZClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2F0ZWdvcmllcycpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQXVGc0IsMkxBQUEifQ==
}),
"[project]/components/categories/CategoryModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryModal",
    ()=>CategoryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$books$2f$ColorPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/books/ColorPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$books$2f$IconPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/books/IconPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e55f5e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:e55f5e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4233ab__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:4233ab [app-ssr] (ecmascript) <text/javascript>");
;
;
;
;
;
function CategoryModal({ isOpen, onClose, folders, activeBookId, defaultFolderId, initialData }) {
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [folderId, setFolderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultFolderId || 'ungrouped');
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('blue');
    const [icon, setIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('category');
    // Reset or Populate when opening
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            if (initialData) {
                setName(initialData.name);
                setFolderId(initialData.folder_id || 'ungrouped');
                setColor(initialData.color || 'blue');
                setIcon(initialData.icon || 'category');
            } else {
                setFolderId(defaultFolderId || 'ungrouped');
                setName('');
                setColor('blue');
                setIcon('category');
            }
        }
    }, [
        isOpen,
        defaultFolderId,
        initialData
    ]);
    if (!isOpen) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!activeBookId) return;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('folderId', folderId);
        formData.append('color', color);
        formData.append('icon', icon);
        formData.append('bookId', activeBookId);
        startTransition(async ()=>{
            if (initialData) {
                formData.append('id', initialData.id);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4233ab__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCategory"])(formData);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e55f5e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCategory"])(formData);
            }
            onClose();
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/40 backdrop-blur-sm animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card w-full max-w-2xl rounded-2xl shadow-premium overflow-hidden flex flex-col animate-slide-up border border-white/80 dark:border-slate-800 max-h-[90vh] overflow-y-auto scrollbar-hide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase tracking-widest",
                                children: initialData ? 'Editar Categoría' : 'Nueva Categoría'
                            }, void 0, false, {
                                fileName: "[project]/components/categories/CategoryModal.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/categories/CategoryModal.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-2xl",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/components/categories/CategoryModal.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/categories/CategoryModal.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/categories/CategoryModal.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-8 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                            children: "Nombre"
                                        }, void 0, false, {
                                            fileName: "[project]/components/categories/CategoryModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            placeholder: "Ej. Restaurantes",
                                            className: "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/categories/CategoryModal.tsx",
                                            lineNumber: 82,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/categories/CategoryModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                            children: "Carpeta (Grupo)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/categories/CategoryModal.tsx",
                                            lineNumber: 93,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: folderId,
                                            onChange: (e)=>setFolderId(e.target.value),
                                            className: "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium appearance-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ungrouped",
                                                    children: "General / Sin Carpeta"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/categories/CategoryModal.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, this),
                                                folders.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: f.id,
                                                        children: f.name
                                                    }, f.id, false, {
                                                        fileName: "[project]/components/categories/CategoryModal.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 37
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/categories/CategoryModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/categories/CategoryModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/categories/CategoryModal.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 pt-4 border-t border-gray-100 dark:border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$books$2f$ColorPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorPicker"], {
                                    value: color,
                                    onChange: setColor
                                }, void 0, false, {
                                    fileName: "[project]/components/categories/CategoryModal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$books$2f$IconPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconPicker"], {
                                    value: icon,
                                    onChange: setIcon
                                }, void 0, false, {
                                    fileName: "[project]/components/categories/CategoryModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/categories/CategoryModal.tsx",
                            lineNumber: 107,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-6 flex justify-end gap-3 sticky bottom-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 -mx-8 -mb-8 border-t border-gray-100 dark:border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-6 h-12 rounded-xl text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/components/categories/CategoryModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isPending,
                                    className: "px-6 h-12 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2",
                                    children: [
                                        isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/categories/CategoryModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 43
                                        }, this),
                                        "Guardar"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/categories/CategoryModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/categories/CategoryModal.tsx",
                            lineNumber: 112,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/categories/CategoryModal.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/categories/CategoryModal.tsx",
            lineNumber: 66,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/categories/CategoryModal.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/actions/data:866649 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFolder",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409da29aca1f799ee873ce4b3e42a5dbc85a55b1d1":"createFolder"},"app/actions/category-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("409da29aca1f799ee873ce4b3e42a5dbc85a55b1d1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createFolder");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2F0ZWdvcnktYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgZm9sZGVySWQgPSBmb3JtRGF0YS5nZXQoJ2ZvbGRlcklkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBjb2xvciA9IGZvcm1EYXRhLmdldCgnY29sb3InKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGljb24gPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGJvb2tJZCA9IGZvcm1EYXRhLmdldCgnYm9va0lkJykgYXMgc3RyaW5nXHJcblxyXG4gICAgaWYgKCFib29rSWQpIHJldHVybiB7IGVycm9yOiAnQm9vayBJRCBpcyByZXF1aXJlZCcgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3JpZXMnKS5pbnNlcnQoe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYm9va19pZDogYm9va0lkLFxyXG4gICAgICAgIGZvbGRlcl9pZDogZm9sZGVySWQgPT09ICd1bmdyb3VwZWQnID8gbnVsbCA6IGZvbGRlcklkLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGljb24sXHJcbiAgICAgICAgdXNlcl9pZDogdXNlci5pZFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2F0ZWdvcmllcycpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZvbGRlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXHJcblxyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGNvbG9yID0gZm9ybURhdGEuZ2V0KCdjb2xvcicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgaWNvbiA9IGZvcm1EYXRhLmdldCgnaWNvbicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgYm9va0lkID0gZm9ybURhdGEuZ2V0KCdib29rSWQnKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoIWJvb2tJZCkgcmV0dXJuIHsgZXJyb3I6ICdCb29rIElEIGlzIHJlcXVpcmVkJyB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcnlfZm9sZGVycycpLmluc2VydCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBib29rX2lkOiBib29rSWQsXHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgaWNvbixcclxuICAgICAgICB1c2VyX2lkOiB1c2VyLmlkXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZUNhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZywgdGFyZ2V0Rm9sZGVySWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3JpZXMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBmb2xkZXJfaWQ6IHRhcmdldEZvbGRlcklkID09PSAndW5ncm91cGVkJyA/IG51bGwgOiB0YXJnZXRGb2xkZXJJZCB9KVxyXG4gICAgICAgIC5lcSgnaWQnLCBjYXRlZ29yeUlkKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcmllcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGlkKVxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4geyBlcnJvcjogZXJyb3IubWVzc2FnZSB9XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhdGVnb3JpZXMnKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRm9sZGVyKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIC8vIE9wdGlvbmFsIGxvZ2ljOiBkZWxldGUgaXRlbXMgb3IgbW92ZSB0byB1bmdyb3VwZWQ/IFxyXG4gICAgLy8gVXN1YWxseSBjYXNjYWRlIG9yIHJlc3RyaWN0ZWQuIEZvciBub3cgc2ltcGxlIGRlbGV0ZS5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3J5X2ZvbGRlcnMnKS5kZWxldGUoKS5lcSgnaWQnLCBpZClcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGNvbG9yID0gZm9ybURhdGEuZ2V0KCdjb2xvcicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgaWNvbiA9IGZvcm1EYXRhLmdldCgnaWNvbicpIGFzIHN0cmluZ1xyXG5cclxuICAgIGlmICghaWQpIHJldHVybiB7IGVycm9yOiAnSUQgaXMgcmVxdWlyZWQnIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdjYXRlZ29yaWVzJykudXBkYXRlKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGZvbGRlcl9pZDogZm9sZGVySWQgPT09ICd1bmdyb3VwZWQnID8gbnVsbCA6IGZvbGRlcklkLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGljb25cclxuICAgIH0pLmVxKCdpZCcsIGlkKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRm9sZGVyKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBjb2xvciA9IGZvcm1EYXRhLmdldCgnY29sb3InKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGljb24gPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoIWlkKSByZXR1cm4geyBlcnJvcjogJ0lEIGlzIHJlcXVpcmVkJyB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcnlfZm9sZGVycycpLnVwZGF0ZSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBpY29uXHJcbiAgICB9KS5lcSgnaWQnLCBpZClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2F0ZWdvcmllcycpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQWlDc0IseUxBQUEifQ==
}),
"[project]/components/categories/FolderModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FolderModal",
    ()=>FolderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$books$2f$ColorPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/books/ColorPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$books$2f$IconPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/books/IconPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$866649__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:866649 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
;
;
function FolderModal({ isOpen, onClose, activeBookId }) {
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('indigo');
    const [icon, setIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('folder');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setName('');
            setColor('indigo');
            setIcon('folder');
        }
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!activeBookId) return;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('color', color);
        formData.append('icon', icon);
        formData.append('bookId', activeBookId);
        startTransition(async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$866649__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createFolder"])(formData);
            onClose();
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/40 backdrop-blur-sm animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card w-full max-w-2xl rounded-2xl shadow-premium overflow-hidden flex flex-col animate-slide-up border border-white/80 dark:border-slate-800 max-h-[90vh] overflow-y-auto scrollbar-hide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase tracking-widest",
                                children: "Nueva Carpeta"
                            }, void 0, false, {
                                fileName: "[project]/components/categories/FolderModal.tsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/categories/FolderModal.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-2xl",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/components/categories/FolderModal.tsx",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/categories/FolderModal.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/categories/FolderModal.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-8 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                        children: "Nombre de la Carpeta"
                                    }, void 0, false, {
                                        fileName: "[project]/components/categories/FolderModal.tsx",
                                        lineNumber: 61,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        placeholder: "Ej. Gastos del Hogar",
                                        className: "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/categories/FolderModal.tsx",
                                        lineNumber: 62,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/categories/FolderModal.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/categories/FolderModal.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 pt-4 border-t border-gray-100 dark:border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$books$2f$ColorPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorPicker"], {
                                    value: color,
                                    onChange: setColor
                                }, void 0, false, {
                                    fileName: "[project]/components/categories/FolderModal.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$books$2f$IconPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconPicker"], {
                                    value: icon,
                                    onChange: setIcon
                                }, void 0, false, {
                                    fileName: "[project]/components/categories/FolderModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/categories/FolderModal.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-6 flex justify-end gap-3 sticky bottom-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 -mx-8 -mb-8 border-t border-gray-100 dark:border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-6 h-12 rounded-xl text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/components/categories/FolderModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isPending,
                                    className: "px-6 h-12 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2",
                                    children: [
                                        isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/categories/FolderModal.tsx",
                                            lineNumber: 91,
                                            columnNumber: 43
                                        }, this),
                                        "Guardar"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/categories/FolderModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/categories/FolderModal.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/categories/FolderModal.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/categories/FolderModal.tsx",
            lineNumber: 48,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/categories/FolderModal.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/actions/data:9e0d30 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveCategory",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60c23372b8b45b596ffd1839aa760061a49fe9f017":"moveCategory"},"app/actions/category-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60c23372b8b45b596ffd1839aa760061a49fe9f017", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "moveCategory");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2F0ZWdvcnktYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgZm9sZGVySWQgPSBmb3JtRGF0YS5nZXQoJ2ZvbGRlcklkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBjb2xvciA9IGZvcm1EYXRhLmdldCgnY29sb3InKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGljb24gPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGJvb2tJZCA9IGZvcm1EYXRhLmdldCgnYm9va0lkJykgYXMgc3RyaW5nXHJcblxyXG4gICAgaWYgKCFib29rSWQpIHJldHVybiB7IGVycm9yOiAnQm9vayBJRCBpcyByZXF1aXJlZCcgfVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3JpZXMnKS5pbnNlcnQoe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYm9va19pZDogYm9va0lkLFxyXG4gICAgICAgIGZvbGRlcl9pZDogZm9sZGVySWQgPT09ICd1bmdyb3VwZWQnID8gbnVsbCA6IGZvbGRlcklkLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGljb24sXHJcbiAgICAgICAgdXNlcl9pZDogdXNlci5pZFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2F0ZWdvcmllcycpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZvbGRlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXHJcblxyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGNvbG9yID0gZm9ybURhdGEuZ2V0KCdjb2xvcicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgaWNvbiA9IGZvcm1EYXRhLmdldCgnaWNvbicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgYm9va0lkID0gZm9ybURhdGEuZ2V0KCdib29rSWQnKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoIWJvb2tJZCkgcmV0dXJuIHsgZXJyb3I6ICdCb29rIElEIGlzIHJlcXVpcmVkJyB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcnlfZm9sZGVycycpLmluc2VydCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBib29rX2lkOiBib29rSWQsXHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgaWNvbixcclxuICAgICAgICB1c2VyX2lkOiB1c2VyLmlkXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW92ZUNhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZywgdGFyZ2V0Rm9sZGVySWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3JpZXMnKVxyXG4gICAgICAgIC51cGRhdGUoeyBmb2xkZXJfaWQ6IHRhcmdldEZvbGRlcklkID09PSAndW5ncm91cGVkJyA/IG51bGwgOiB0YXJnZXRGb2xkZXJJZCB9KVxyXG4gICAgICAgIC5lcSgnaWQnLCBjYXRlZ29yeUlkKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcmllcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGlkKVxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4geyBlcnJvcjogZXJyb3IubWVzc2FnZSB9XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhdGVnb3JpZXMnKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRm9sZGVyKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIC8vIE9wdGlvbmFsIGxvZ2ljOiBkZWxldGUgaXRlbXMgb3IgbW92ZSB0byB1bmdyb3VwZWQ/IFxyXG4gICAgLy8gVXN1YWxseSBjYXNjYWRlIG9yIHJlc3RyaWN0ZWQuIEZvciBub3cgc2ltcGxlIGRlbGV0ZS5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NhdGVnb3J5X2ZvbGRlcnMnKS5kZWxldGUoKS5lcSgnaWQnLCBpZClcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGNvbG9yID0gZm9ybURhdGEuZ2V0KCdjb2xvcicpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgaWNvbiA9IGZvcm1EYXRhLmdldCgnaWNvbicpIGFzIHN0cmluZ1xyXG5cclxuICAgIGlmICghaWQpIHJldHVybiB7IGVycm9yOiAnSUQgaXMgcmVxdWlyZWQnIH1cclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdjYXRlZ29yaWVzJykudXBkYXRlKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGZvbGRlcl9pZDogZm9sZGVySWQgPT09ICd1bmdyb3VwZWQnID8gbnVsbCA6IGZvbGRlcklkLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGljb25cclxuICAgIH0pLmVxKCdpZCcsIGlkKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYXRlZ29yaWVzJylcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRm9sZGVyKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9XHJcblxyXG4gICAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBjb2xvciA9IGZvcm1EYXRhLmdldCgnY29sb3InKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGljb24gPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoIWlkKSByZXR1cm4geyBlcnJvcjogJ0lEIGlzIHJlcXVpcmVkJyB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2F0ZWdvcnlfZm9sZGVycycpLnVwZGF0ZSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBpY29uXHJcbiAgICB9KS5lcSgnaWQnLCBpZClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2F0ZWdvcmllcycpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQTJEc0IseUxBQUEifQ==
}),
"[project]/app/(dashboard)/categories/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Categories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/FinanceContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categories$2f$CategoryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/categories/CategoryModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categories$2f$FolderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/categories/FolderModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$9e0d30__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:9e0d30 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Reuse the COLOR_MAP logic or helper
const COLOR_MAP = {
    red: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        text: 'text-red-600 dark:text-red-400',
        ring: 'ring-red-500/10',
        border: 'border-red-200',
        solid: 'bg-red-500'
    },
    orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-600 dark:text-orange-400',
        ring: 'ring-orange-500/10',
        border: 'border-orange-200',
        solid: 'bg-orange-500'
    },
    amber: {
        bg: 'bg-amber-100 dark:bg-amber-900/30',
        text: 'text-amber-600 dark:text-amber-400',
        ring: 'ring-amber-500/10',
        border: 'border-amber-200',
        solid: 'bg-amber-500'
    },
    yellow: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/30',
        text: 'text-yellow-600 dark:text-yellow-400',
        ring: 'ring-yellow-500/10',
        border: 'border-yellow-200',
        solid: 'bg-yellow-500'
    },
    lime: {
        bg: 'bg-lime-100 dark:bg-lime-900/30',
        text: 'text-lime-600 dark:text-lime-400',
        ring: 'ring-lime-500/10',
        border: 'border-lime-200',
        solid: 'bg-lime-500'
    },
    green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        ring: 'ring-green-500/10',
        border: 'border-green-200',
        solid: 'bg-green-500'
    },
    emerald: {
        bg: 'bg-emerald-100 dark:bg-emerald-900/30',
        text: 'text-emerald-600 dark:text-emerald-400',
        ring: 'ring-emerald-500/10',
        border: 'border-emerald-200',
        solid: 'bg-emerald-500'
    },
    teal: {
        bg: 'bg-teal-100 dark:bg-teal-900/30',
        text: 'text-teal-600 dark:text-teal-400',
        ring: 'ring-teal-500/10',
        border: 'border-teal-200',
        solid: 'bg-teal-500'
    },
    cyan: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-600 dark:text-cyan-400',
        ring: 'ring-cyan-500/10',
        border: 'border-cyan-200',
        solid: 'bg-cyan-500'
    },
    sky: {
        bg: 'bg-sky-100 dark:bg-sky-900/30',
        text: 'text-sky-600 dark:text-sky-400',
        ring: 'ring-sky-500/10',
        border: 'border-sky-200',
        solid: 'bg-sky-500'
    },
    blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        ring: 'ring-blue-500/10',
        border: 'border-blue-200',
        solid: 'bg-blue-500'
    },
    indigo: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        text: 'text-indigo-600 dark:text-indigo-400',
        ring: 'ring-indigo-500/10',
        border: 'border-indigo-200',
        solid: 'bg-indigo-500'
    },
    violet: {
        bg: 'bg-violet-100 dark:bg-violet-900/30',
        text: 'text-violet-600 dark:text-violet-400',
        ring: 'ring-violet-500/10',
        border: 'border-violet-200',
        solid: 'bg-violet-500'
    },
    purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        ring: 'ring-purple-500/10',
        border: 'border-purple-200',
        solid: 'bg-purple-500'
    },
    fuchsia: {
        bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30',
        text: 'text-fuchsia-600 dark:text-fuchsia-400',
        ring: 'ring-fuchsia-500/10',
        border: 'border-fuchsia-200',
        solid: 'bg-fuchsia-500'
    },
    pink: {
        bg: 'bg-pink-100 dark:bg-pink-900/30',
        text: 'text-pink-600 dark:text-pink-400',
        ring: 'ring-pink-500/10',
        border: 'border-pink-200',
        solid: 'bg-pink-500'
    },
    rose: {
        bg: 'bg-rose-100 dark:bg-rose-900/30',
        text: 'text-rose-600 dark:text-rose-400',
        ring: 'ring-rose-500/10',
        border: 'border-rose-200',
        solid: 'bg-rose-500'
    },
    slate: {
        bg: 'bg-slate-100 dark:bg-slate-800',
        text: 'text-slate-600 dark:text-slate-400',
        ring: 'ring-slate-500/10',
        border: 'border-slate-200',
        solid: 'bg-slate-500'
    }
};
;
function CategoryIcon({ icon, className }) {
    const LucideIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[icon];
    if (LucideIcon) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LucideIcon, {
        className: className
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/categories/page.tsx",
        lineNumber: 35,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `material-symbols-outlined ${className} !text-[inherit]`,
        children: icon
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/categories/page.tsx",
        lineNumber: 36,
        columnNumber: 12
    }, this);
}
function Categories() {
    const { categories, categoryFolders, activeBookId, refreshBooks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFinance"])();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Modal States
    const [isCatModalOpen, setIsCatModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFolderModalOpen, setIsFolderModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [preselectedFolderId, setPreselectedFolderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // Group Categories
    const foldersUI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const folderMap = new Map();
        const searchTermLower = searchTerm.toLowerCase();
        categoryFolders.forEach((f)=>{
            folderMap.set(f.id, {
                folder: f,
                items: []
            });
        });
        const UNGROUPED_ID = 'ungrouped';
        if (!folderMap.has(UNGROUPED_ID)) {
            folderMap.set(UNGROUPED_ID, {
                folder: null,
                items: []
            });
        }
        categories.forEach((cat)=>{
            if (searchTerm && !cat.name.toLowerCase().includes(searchTermLower)) return;
            const fId = cat.folder_id || UNGROUPED_ID;
            if (folderMap.has(fId)) {
                folderMap.get(fId).items.push(cat);
            } else {
                folderMap.get(UNGROUPED_ID).items.push(cat);
            }
        });
        const result = [];
        for (const [key, value] of folderMap.entries()){
            if (value.folder) {
                result.push({
                    id: value.folder.id,
                    name: value.folder.name,
                    icon: value.folder.icon || 'folder',
                    color: value.folder.color || 'blue',
                    count: value.items.length,
                    items: value.items
                });
            } else if (value.items.length > 0 || key === UNGROUPED_ID && categoryFolders.length === 0) {
                // Show ungrouped if items exist OR if no folders exist at all (initial state)
                result.push({
                    id: 'ungrouped',
                    name: 'General / Sin Carpeta',
                    icon: 'category',
                    color: 'slate',
                    count: value.items.length,
                    items: value.items
                });
            }
        }
        return result;
    }, [
        categories,
        categoryFolders,
        searchTerm
    ]);
    // Drag and Drop Handlers
    const handleDragStart = (e, catId)=>{
        e.dataTransfer.setData('categoryId', catId);
        e.dataTransfer.effectAllowed = 'move';
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    const handleDrop = async (e, targetFolderId)=>{
        e.preventDefault();
        const categoryId = e.dataTransfer.getData('categoryId');
        if (categoryId) {
            // Optimistic update could go here, but we'll rely on server revalidation for now
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$9e0d30__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["moveCategory"])(categoryId, targetFolderId);
            refreshBooks(); // Force refresh context
        }
    };
    const handleAddCategory = (folderId)=>{
        setPreselectedFolderId(folderId);
        setIsCatModalOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full overflow-hidden z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "px-8 py-6 flex items-center justify-between border-b border-white/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Configuración"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[14px]",
                                                children: "chevron_right"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary",
                                                children: "Categorías"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-black text-slate-900 tracking-tight dark:text-white uppercase tracking-widest",
                                        children: "Gestión de Categorías"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsFolderModalOpen(true),
                                        className: "bg-white hover:bg-gray-50 text-slate-700 px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold text-sm border border-slate-200 shadow-sm transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[20px]",
                                                children: "create_new_folder"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Nueva Carpeta"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleAddCategory(),
                                        className: "bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/20 font-bold text-sm transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[20px]",
                                                children: "add"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Nueva Categoría"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-8 scrollbar-hide pb-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors material-symbols-outlined",
                                            children: "search"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Buscar categorías...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            className: "w-full h-12 pl-12 pr-6 rounded-xl border border-white/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6",
                                    children: foldersUI.map((folder)=>{
                                        const colors = COLOR_MAP[folder.color] || COLOR_MAP.slate;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-[2rem] p-6 shadow-soft group/folder flex flex-col h-full ring-2 ring-transparent transition-all",
                                            onDragOver: handleDragOver,
                                            onDrop: (e)=>handleDrop(e, folder.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `size-12 rounded-2xl flex items-center justify-center ${colors.bg} ${colors.text}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryIcon, {
                                                                        icon: folder.icon,
                                                                        className: "text-2xl"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-black text-slate-900 dark:text-white text-lg leading-tight",
                                                                            children: folder.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-bold text-slate-400 mt-0.5",
                                                                            children: [
                                                                                folder.count,
                                                                                " categorías"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                            lineNumber: 192,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleAddCategory(folder.id),
                                                            className: "size-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors",
                                                            title: "Agregar categoría aquí",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-[20px]",
                                                                children: "add"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 space-y-2 min-h-[50px]",
                                                    children: folder.items.length > 0 ? folder.items.map((item)=>{
                                                        const itemColors = COLOR_MAP[item.color || 'slate'] || COLOR_MAP.slate;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            draggable: true,
                                                            onDragStart: (e)=>handleDragStart(e, item.id),
                                                            className: "flex items-center justify-between p-3 rounded-xl transition-all border border-transparent bg-white/0 hover:bg-white/60 dark:hover:bg-slate-800 hover:border-slate-100 dark:hover:border-slate-700 hover:shadow-sm cursor-grab active:cursor-grabbing group/row",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-slate-300 text-[18px] opacity-0 group-hover/row:opacity-100 transition-opacity",
                                                                        children: "drag_indicator"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `size-9 rounded-full flex items-center justify-center border ${itemColors.bg} ${itemColors.text} ${itemColors.border}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryIcon, {
                                                                            icon: item.icon || 'category',
                                                                            className: "text-[16px]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                            lineNumber: 220,
                                                                            columnNumber: 69
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-bold text-slate-600 dark:text-slate-300",
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, item.id, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 57
                                                        }, this);
                                                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full flex flex-col items-center justify-center py-8 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-xl text-slate-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold",
                                                            children: "Arrastra categorías aquí"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, folder.id, true, {
                                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/categories/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/categories/page.tsx",
                            lineNumber: 160,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/categories/page.tsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categories$2f$CategoryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoryModal"], {
                isOpen: isCatModalOpen,
                onClose: ()=>setIsCatModalOpen(false),
                folders: categoryFolders,
                activeBookId: activeBookId,
                defaultFolderId: preselectedFolderId
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                lineNumber: 242,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$categories$2f$FolderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FolderModal"], {
                isOpen: isFolderModalOpen,
                onClose: ()=>setIsFolderModalOpen(false),
                activeBookId: activeBookId
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/categories/page.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(dashboard)/categories/page.tsx",
        lineNumber: 125,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_8fabad46._.js.map