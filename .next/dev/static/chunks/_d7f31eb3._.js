(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/constants.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_ACCOUNTS",
    ()=>MOCK_ACCOUNTS,
    "MOCK_BUDGETS",
    ()=>MOCK_BUDGETS,
    "MOCK_COMMITMENTS",
    ()=>MOCK_COMMITMENTS,
    "MOCK_INSTALLMENTS",
    ()=>MOCK_INSTALLMENTS,
    "MOCK_LEDGERS",
    ()=>MOCK_LEDGERS,
    "MOCK_RULES",
    ()=>MOCK_RULES,
    "MOCK_TRANSACTIONS",
    ()=>MOCK_TRANSACTIONS
]);
const MOCK_TRANSACTIONS = [
    {
        id: '1',
        amount: 124.50,
        type: 'EXPENSE',
        category: 'Alimentos',
        subCategory: 'Supermercado',
        account: 'Santander Nómina',
        description: 'Whole Foods Market',
        date: '2023-10-20T10:00:00Z',
        icon: 'shopping_bag'
    },
    {
        id: '2',
        amount: 45.00,
        type: 'EXPENSE',
        category: 'Transporte',
        subCategory: 'Combustible',
        account: 'Visa Platinum',
        description: 'Shell Station',
        date: '2023-10-18T15:30:00Z',
        icon: 'local_gas_station'
    },
    {
        id: '3',
        amount: 15.99,
        type: 'EXPENSE',
        category: 'Entretenimiento',
        subCategory: 'Streaming',
        account: 'Visa Platinum',
        description: 'Netflix Subscription',
        date: '2023-10-15T09:00:00Z',
        icon: 'movie'
    }
];
const MOCK_ACCOUNTS = [
    {
        id: 'acc1',
        name: 'Santander Nómina',
        balance: 8250.20,
        type: 'DEBIT',
        lastFour: '4829',
        bank: 'Santander',
        status: 'Active'
    },
    {
        id: 'acc2',
        name: 'Visa Platinum',
        balance: 1850.00,
        type: 'CREDIT',
        lastFour: '4242',
        bank: 'Santander',
        status: 'Active',
        limit: 5000,
        closingDate: 'Oct 25',
        dueDate: 'Nov 05'
    }
];
const MOCK_INSTALLMENTS = [
    {
        id: 'inst1',
        name: 'MacBook Pro M3 Purchase',
        merchant: 'Apple Store',
        category: 'Electronics',
        totalAmount: 2400.00,
        paidAmount: 800.00,
        totalInstallments: 12,
        currentInstallment: 4,
        nextPaymentDate: 'Nov 01, 2023',
        monthlyAmount: 200.00
    }
];
const MOCK_BUDGETS = [
    {
        id: 'b1',
        category: 'Supermercado',
        limit: 600,
        spent: 450,
        period: 'MONTHLY',
        severity: 'NORMAL'
    }
];
const MOCK_COMMITMENTS = [
    {
        id: 'c1',
        name: 'Alquiler',
        amount: 800,
        frequency: 'MONTHLY',
        nextDueDate: '2024-11-01',
        status: 'PENDING'
    }
];
const MOCK_RULES = [
    {
        id: 'r1',
        name: 'Alquiler Apartamento',
        category: 'Vivienda',
        account: 'Banco Principal',
        amount: 850.00,
        type: 'EXPENSE',
        frequency: 'Mensual (Día 5)',
        nextDate: '5 Oct',
        active: true,
        icon: 'home'
    },
    {
        id: 'r2',
        name: 'Suscripción Spotify',
        category: 'Entretenimiento',
        account: 'Tarjeta Crédito',
        amount: 10.00,
        type: 'EXPENSE',
        frequency: 'Mensual',
        nextDate: '15 Oct',
        active: true,
        icon: 'music_note'
    },
    {
        id: 'r3',
        name: 'Sueldo Mensual',
        category: 'Ingresos',
        account: 'Banco Principal',
        amount: 3200.00,
        type: 'INCOME',
        frequency: 'Mensual (Día 30)',
        nextDate: '30 Oct',
        active: true,
        icon: 'payments'
    },
    {
        id: 'r4',
        name: 'Gimnasio',
        category: 'Salud',
        account: 'Tarjeta Débito',
        amount: 45.00,
        type: 'EXPENSE',
        frequency: 'Mensual',
        nextDate: 'Pausado',
        active: false,
        icon: 'fitness_center'
    }
];
const MOCK_LEDGERS = [
    {
        id: 'l1',
        name: 'Personal',
        description: 'Gastos del día a día',
        balance: 12450.00,
        isActive: true,
        isArchived: false,
        lastUpdate: 'Hace 2h',
        icon: 'home',
        color: 'blue',
        type: 'PERSONAL'
    },
    {
        id: 'l2',
        name: 'Freelance Design',
        description: 'Ingresos y Facturas',
        balance: 3200.50,
        isActive: false,
        isArchived: false,
        lastUpdate: 'Ayer',
        icon: 'work',
        color: 'purple',
        type: 'BUSINESS'
    },
    {
        id: 'l3',
        name: 'Viaje a Japón',
        description: 'Ahorro Meta 2024',
        balance: 800.00,
        isActive: false,
        isArchived: false,
        lastUpdate: 'Hace 3 días',
        icon: 'flight',
        color: 'green',
        type: 'SAVINGS'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cards/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/FinanceContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CardDetails() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { accounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinance"])();
    const creditCards = accounts.filter((acc)=>acc.type === 'CREDIT');
    const installments = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_INSTALLMENTS"];
    // KPIs
    const totalToPayThisMonth = creditCards.reduce((sum, card)=>sum + card.balance * 0.15, 1250); // Mocked logic to match image
    const totalPendingDebt = creditCards.reduce((sum, card)=>sum + card.balance, 4200);
    const activePlans = installments.length + 2;
    const renderPills = (total, current, colorClass)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1 h-2.5 w-full",
            children: Array.from({
                length: total
            }).map((_, i)=>{
                const isPaid = i < current - 1;
                const isCurrent = i === current - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex-1 rounded-full transition-all duration-500 ${isPaid ? colorClass : isCurrent ? `${colorClass} opacity-50` : 'bg-gray-200 dark:bg-slate-700'}`
                }, i, false, {
                    fileName: "[project]/app/cards/page.tsx",
                    lineNumber: 27,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/app/cards/page.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full overflow-y-auto scrollbar-hide pb-28 lg:pb-12 bg-background-light dark:bg-background-dark relative z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none opacity-40 dark:opacity-10 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-[40vw] h-[40vh] bg-primary/10 rounded-full blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-[40vw] h-[40vh] bg-primary/10 rounded-full blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cards/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto p-6 md:p-8 lg:px-12 flex flex-col gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-6 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl md:text-4xl font-black text-[#111418] dark:text-white tracking-tight mb-2 uppercase",
                                        children: "Mis Tarjetas y Cuotas"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 dark:text-gray-400 text-lg font-medium",
                                        children: "Controla tus pagos futuros sin estrés."
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "glass-card px-4 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:bg-white transition shadow-sm flex items-center gap-2 border border-white/50 dark:border-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[18px]",
                                                children: "calculate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 29
                                            }, this),
                                            "Simular Pago"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/edit-transaction'),
                                        className: "bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[20px]",
                                                children: "add"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 29
                                            }, this),
                                            "Nueva Compra"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in",
                        style: {
                            animationDelay: '0.1s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl p-6 shadow-glass relative overflow-hidden group border border-white/60 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-6xl text-primary",
                                            children: "calendar_month"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cards/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 dark:text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1",
                                        children: "Total a Pagar este Mes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-black text-gray-900 dark:text-white tracking-tighter",
                                                children: [
                                                    "$",
                                                    totalToPayThisMonth.toLocaleString('en-US', {
                                                        minimumFractionDigits: 2
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black text-gray-400 dark:text-slate-500",
                                                children: "USD"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 w-full bg-gray-200 dark:bg-slate-800 rounded-full h-1.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-primary h-1.5 rounded-full transition-all duration-1000",
                                            style: {
                                                width: '45%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/cards/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-gray-500 dark:text-slate-500 mt-2",
                                        children: "45% del límite mensual sugerido"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl p-6 shadow-glass relative overflow-hidden group border border-white/60 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-6xl text-gray-800 dark:text-white/20",
                                            children: "account_balance_wallet"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cards/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 dark:text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1",
                                        children: "Deuda Total Pendiente"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-black text-gray-900 dark:text-white tracking-tighter",
                                                children: [
                                                    "$",
                                                    totalPendingDebt.toLocaleString('en-US', {
                                                        minimumFractionDigits: 2
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black text-gray-400 dark:text-slate-500",
                                                children: "USD"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center border border-emerald-100/50 dark:border-emerald-800/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[14px] mr-1",
                                                    children: "trending_down"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cards/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 33
                                                }, this),
                                                " -2% vs mes pasado"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cards/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl p-6 shadow-glass relative overflow-hidden group border border-white/60 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-6xl text-orange-500",
                                            children: "pie_chart"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cards/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 dark:text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1",
                                        children: "Cuotas Activas"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-black text-gray-900 dark:text-white tracking-tighter",
                                            children: [
                                                activePlans,
                                                " Planes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cards/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-gray-500 dark:text-slate-500 mt-4",
                                        children: "2 finalizan este mes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-12 gap-8 items-start animate-fade-in",
                        style: {
                            animationDelay: '0.2s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-black text-gray-800 dark:text-white px-1 uppercase tracking-widest",
                                        children: "Mis Tarjetas"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this),
                                    creditCards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `glass-card p-6 rounded-[2rem] shadow-glass hover:shadow-md transition-all cursor-pointer border-l-[6px] relative overflow-hidden ${i === 0 ? 'border-l-primary' : 'border-l-indigo-500'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "size-10 rounded-2xl bg-white dark:bg-slate-800 shadow-inner flex items-center justify-center border border-slate-100 dark:border-slate-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: `https://logo.clearbit.com/${card.name.toLowerCase().includes('visa') ? 'visa.com' : 'mastercard.com'}`,
                                                                        className: "h-4 w-auto object-contain opacity-80",
                                                                        alt: "Logo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cards/page.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-black text-gray-900 dark:text-white text-base leading-tight",
                                                                            children: card.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 132,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest mt-0.5",
                                                                            children: [
                                                                                "**** ",
                                                                                card.lastFour
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 133,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cards/page.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cards/page.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 37
                                                        }, this),
                                                        i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-primary/10 text-primary dark:text-blue-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest",
                                                            children: "Principal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cards/page.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cards/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-end",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-black text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1",
                                                                            children: "Pendiente"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 142,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-2xl font-black text-gray-900 dark:text-white tracking-tighter",
                                                                            children: [
                                                                                "$",
                                                                                card.balance.toLocaleString('en-US', {
                                                                                    minimumFractionDigits: 2
                                                                                })
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 143,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cards/page.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-black text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1",
                                                                            children: "Disponible"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 146,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-black text-gray-600 dark:text-slate-300 tabular-nums",
                                                                            children: [
                                                                                "$",
                                                                                ((card.limit || 5000) - card.balance).toLocaleString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 147,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cards/page.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cards/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-full rounded-full transition-all duration-1000 ${i === 0 ? 'bg-primary' : 'bg-indigo-500'}`,
                                                                style: {
                                                                    width: `${card.balance / (card.limit || 5000) * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cards/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cards/page.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between pt-4 border-t border-gray-100 dark:border-slate-800",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-gray-400 dark:text-slate-500 uppercase font-black tracking-widest",
                                                                            children: "Cierre"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 157,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-bold text-gray-700 dark:text-slate-300",
                                                                            children: card.closingDate || '15 Oct'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 158,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cards/page.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-end",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-gray-400 dark:text-slate-500 uppercase font-black tracking-widest",
                                                                            children: "Pagar el"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 161,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-sm font-black ${i === 0 ? 'text-primary' : 'text-slate-800 dark:text-white'}`,
                                                                            children: card.dueDate || '28 Oct'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cards/page.tsx",
                                                                            lineNumber: 162,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cards/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cards/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cards/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, card.id, true, {
                                            fileName: "[project]/app/cards/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/accounts/add'),
                                        className: "w-full border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-3xl p-6 text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest h-20 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined group-hover:rotate-90 transition-transform",
                                                children: "add_card"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 29
                                            }, this),
                                            "Agregar Nueva Tarjeta"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8 flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center px-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-black text-gray-800 dark:text-white uppercase tracking-widest",
                                                children: "Planes de Cuotas Activos"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black text-gray-400 uppercase tracking-widest",
                                                        children: "Ordenar por:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cards/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "bg-transparent text-[10px] font-black text-gray-700 dark:text-slate-300 border-none p-0 pr-6 focus:ring-0 cursor-pointer uppercase tracking-widest",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Fecha Finalización"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cards/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Monto Restante"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cards/page.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cards/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            {
                                                name: 'MacBook Air M2',
                                                icon: 'laptop_mac',
                                                card: 'Visa Platinum',
                                                date: 'Jun 2024',
                                                monthly: 200,
                                                total: 2400,
                                                paid: 800,
                                                current: 4,
                                                all: 12,
                                                color: 'bg-primary',
                                                iconBg: 'bg-blue-50 text-blue-600',
                                                end: 'Mayo 2025'
                                            },
                                            {
                                                name: 'Muebles de Sala',
                                                icon: 'chair',
                                                card: 'Mastercard Gold',
                                                date: 'Ago 2024',
                                                monthly: 85,
                                                total: 510,
                                                paid: 340,
                                                current: 4,
                                                all: 6,
                                                color: 'bg-purple-500',
                                                iconBg: 'bg-purple-50 text-purple-600',
                                                end: 'Dic 2024'
                                            },
                                            {
                                                name: 'Vuelos a Japón',
                                                icon: 'flight',
                                                card: 'Visa Platinum',
                                                date: 'Sep 2024',
                                                monthly: 310,
                                                total: 3100,
                                                paid: 310,
                                                current: 1,
                                                all: 10,
                                                color: 'bg-orange-500',
                                                iconBg: 'bg-orange-50 text-orange-600',
                                                end: 'Jul 2025'
                                            }
                                        ].map((plan, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-card p-6 rounded-[2.5rem] shadow-glass flex flex-col sm:flex-row gap-6 items-center group hover:bg-white transition-all border border-white/40 dark:border-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `size-16 rounded-[1.5rem] ${plan.iconBg} dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-inner`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[32px]",
                                                            children: plan.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cards/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cards/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col sm:flex-row justify-between items-start mb-4 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-black text-gray-900 dark:text-white text-lg tracking-tight",
                                                                                children: plan.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cards/page.tsx",
                                                                                lineNumber: 202,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 mt-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] font-black text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-md uppercase tracking-widest",
                                                                                        children: plan.card
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                                        lineNumber: 204,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] font-bold text-gray-400 dark:text-slate-500",
                                                                                        children: [
                                                                                            "• Compra: ",
                                                                                            plan.date
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                                        lineNumber: 205,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cards/page.tsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-left sm:text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xl font-black text-gray-900 dark:text-white tracking-tighter",
                                                                                children: [
                                                                                    "$",
                                                                                    plan.monthly.toFixed(2),
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] text-gray-400 uppercase tracking-widest font-black",
                                                                                        children: "/ mes"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                                        lineNumber: 209,
                                                                                        columnNumber: 157
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cards/page.tsx",
                                                                                lineNumber: 209,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5",
                                                                                children: [
                                                                                    "Restante: ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-black text-gray-700 dark:text-slate-300",
                                                                                        children: [
                                                                                            "$",
                                                                                            (plan.total - plan.paid).toLocaleString()
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                                        lineNumber: 210,
                                                                                        columnNumber: 143
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cards/page.tsx",
                                                                                lineNumber: 210,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                        lineNumber: 208,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cards/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between text-[10px] text-gray-400 dark:text-slate-500 mb-2 font-black uppercase tracking-widest",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "Progreso: ",
                                                                                    plan.current,
                                                                                    " de ",
                                                                                    plan.all,
                                                                                    " cuotas"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cards/page.tsx",
                                                                                lineNumber: 216,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `${plan.color.replace('bg-', 'text-')} font-black`,
                                                                                children: [
                                                                                    "Finaliza: ",
                                                                                    plan.end
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cards/page.tsx",
                                                                                lineNumber: 217,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    renderPills(plan.all, plan.current, plan.color)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cards/page.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cards/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card p-8 rounded-[2.5rem] shadow-glass mt-4 bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[10px] font-black text-gray-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-6",
                                                children: "Proyección Noviembre"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row justify-between items-center gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] font-black text-gray-500 uppercase tracking-widest",
                                                                        children: "Cuotas Fijas"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-2xl font-black text-gray-900 dark:text-white tracking-tighter",
                                                                        children: "$595.00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cards/page.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] font-black text-gray-500 uppercase tracking-widest",
                                                                        children: "Estimado Nuevos Consumos"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-2xl font-black text-gray-500 dark:text-slate-400 tracking-tighter",
                                                                        children: "~ $850.00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cards/page.tsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cards/page.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cards/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center sm:text-right bg-white dark:bg-slate-800 px-6 py-4 rounded-3xl shadow-soft border border-white dark:border-slate-700 min-w-[200px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1",
                                                                children: "Total Estimado"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cards/page.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-3xl font-black text-primary tracking-tighter",
                                                                children: "$1,445.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cards/page.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cards/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cards/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cards/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cards/page.tsx",
                                lineNumber: 176,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cards/page.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cards/page.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cards/page.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(CardDetails, "X5i++crkxAqwirW6Hwn5/06maTI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinance"]
    ];
});
_c = CardDetails;
var _c;
__turbopack_context__.k.register(_c, "CardDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d7f31eb3._.js.map