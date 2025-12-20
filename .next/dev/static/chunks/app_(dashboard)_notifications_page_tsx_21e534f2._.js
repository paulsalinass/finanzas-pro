(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(dashboard)/notifications/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Notifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Notifications() {
    const notifications = [
        {
            id: 1,
            title: "Presupuesto Excedido",
            message: "Has superado el 80% de tu presupuesto de Comida para este mes.",
            time: "Hace 2 horas",
            type: "WARNING",
            read: false
        },
        {
            id: 2,
            title: "Pago Recibido",
            message: "Se ha registrado el ingreso de Nómina por $5,000.00.",
            time: "Ayer, 10:30 AM",
            type: "SUCCESS",
            read: true
        },
        {
            id: 3,
            title: "Nueva Función",
            message: "Ahora puedes crear reglas recurrentes para automatizar tus gastos.",
            time: "20 Oct, 2023",
            type: "INFO",
            read: true
        },
        {
            id: 4,
            title: "Factura Pendiente",
            message: "Recuerda pagar tu servicio de Internet antes del día 25.",
            time: "18 Oct, 2023",
            type: "WARNING",
            read: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full overflow-y-auto scrollbar-hide relative pb-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[800px] mx-auto p-6 md:p-10 flex flex-col gap-8 animate-fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-slate-900 dark:text-white text-3xl font-black tracking-tight uppercase",
                            children: "Notificaciones"
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-xs font-black uppercase tracking-widest text-primary hover:text-primary-hover",
                            children: "Marcar todo leído"
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: notifications.map((notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `glass-card p-5 rounded-3xl border transition-all hover:bg-white/80 dark:hover:bg-slate-800/80 ${notif.read ? 'border-transparent opacity-80' : 'border-l-4 border-l-primary border-y-white/60 border-r-white/60 dark:border-y-slate-800 dark:border-r-slate-800 bg-white/60 dark:bg-slate-800/60 shadow-md'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mt-1 size-10 rounded-xl flex items-center justify-center shrink-0 ${notif.type === 'WARNING' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/20' : notif.type === 'SUCCESS' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/20'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[20px]",
                                            children: notif.type === 'WARNING' ? 'warning' : notif.type === 'SUCCESS' ? 'check_circle' : 'info'
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `font-black text-sm ${notif.read ? 'text-slate-700 dark:text-slate-300' : 'text-slate-900 dark:text-white'}`,
                                                        children: notif.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
                                                        children: notif.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed",
                                                children: notif.message
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 33
                                    }, this),
                                    !notif.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "size-2 rounded-full bg-primary mt-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                                lineNumber: 60,
                                columnNumber: 29
                            }, this)
                        }, notif.id, false, {
                            fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                notifications.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-20 text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined text-6xl mb-4 opacity-50",
                            children: "notifications_off"
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                            lineNumber: 91,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-bold",
                            children: "No tienes notificaciones"
                        }, void 0, false, {
                            fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                            lineNumber: 92,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(dashboard)/notifications/page.tsx",
                    lineNumber: 90,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(dashboard)/notifications/page.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/notifications/page.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_c = Notifications;
var _c;
__turbopack_context__.k.register(_c, "Notifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28dashboard%29_notifications_page_tsx_21e534f2._.js.map