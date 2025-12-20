(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://kddrngqmcltfwwfgmjxu.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZHJuZ3FtY2x0Znd3Zmdtanh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNTQ5MjYsImV4cCI6MjA4MTczMDkyNn0.2g6pmDPIV_S6s3VEGzFwUdYP857_okpDR2jbJDVimEE"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/FinanceContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FinanceProvider",
    ()=>FinanceProvider,
    "useFinance",
    ()=>useFinance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const FinanceContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const FinanceProvider = ({ children })=>{
    _s();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // State
    const [activeBookId, setActiveBookId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [accounts, setAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categoryFolders, setCategoryFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [budgets, setBudgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commitments, setCommitments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recurringRules, setRecurringRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Migration TODO: Link to commitments?
    const [ledgers, setLedgers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // These are 'books' now
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Theme Logic
    const toggleTheme = ()=>{
        setIsDarkMode((prev)=>{
            const newMode = !prev;
            if ("TURBOPACK compile-time truthy", 1) {
                const root = window.document.documentElement;
                if (newMode) root.classList.add('dark');
                else root.classList.remove('dark');
            }
            return newMode;
        });
    };
    // Initial Load: Auth & Books
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinanceProvider.useEffect": ()=>{
            const init = {
                "FinanceProvider.useEffect.init": async ()=>{
                    setIsLoading(true);
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        // Allow public mock view OR redirect? 
                        // For now, let's keep loading false so UI shows "empty" or redirects in middleware
                        setIsLoading(false);
                        return;
                    }
                    // Fetch Books (mapped to Ledgers in UI)
                    const { data: books, error } = await supabase.from('books').select('*');
                    if (books && books.length > 0) {
                        // Map DB Books to UI Ledgers
                        const mappedLedgers = books.map({
                            "FinanceProvider.useEffect.init.mappedLedgers": (b)=>({
                                    id: b.id,
                                    name: b.name,
                                    description: '',
                                    balance: 0,
                                    isActive: false,
                                    isArchived: false,
                                    lastUpdate: b.created_at,
                                    icon: 'account_balance_wallet',
                                    color: 'blue',
                                    type: 'PERSONAL',
                                    members: []
                                })
                        }["FinanceProvider.useEffect.init.mappedLedgers"]);
                        setLedgers(mappedLedgers);
                        // Activate first book or saved preference
                        if (mappedLedgers.length > 0) {
                            handleChangeActiveBook(mappedLedgers[0].id);
                        }
                    } else {
                        // Create Default Book if none exists
                        await createDefaultBook(user.id);
                    }
                    setIsLoading(false);
                }
            }["FinanceProvider.useEffect.init"];
            init();
        }
    }["FinanceProvider.useEffect"], []);
    const createDefaultBook = async (userId)=>{
        const { data, error } = await supabase.from('books').insert({
            name: 'Personal',
            user_id: userId
        }).select().single();
        if (data) {
            const newLedger = {
                id: data.id,
                name: data.name,
                description: 'Mi primer libro contable',
                balance: 0,
                isActive: true,
                isArchived: false,
                lastUpdate: new Date().toISOString(),
                icon: 'person',
                color: 'blue',
                type: 'PERSONAL',
                members: []
            };
            setLedgers([
                newLedger
            ]);
            handleChangeActiveBook(data.id);
        }
    };
    const handleChangeActiveBook = async (bookId)=>{
        setActiveBookId(bookId);
        setLedgers((prev)=>prev.map((l)=>({
                    ...l,
                    isActive: l.id === bookId
                })));
        // Fetch Data for this Book
        await Promise.all([
            fetchAccounts(bookId),
            fetchCategories(bookId),
            fetchCategoryFolders(bookId),
            fetchTransactions(bookId),
            fetchCommitments(bookId)
        ]);
    };
    const fetchCategories = async (bookId)=>{
        const { data } = await supabase.from('categories').select('*').eq('book_id', bookId);
        if (data) setCategories(data);
    };
    const fetchCategoryFolders = async (bookId)=>{
        const { data } = await supabase.from('category_folders').select('*').eq('book_id', bookId);
        if (data) setCategoryFolders(data);
    };
    const fetchAccounts = async (bookId)=>{
        const { data } = await supabase.from('accounts').select('*').eq('book_id', bookId);
        if (data) {
            setAccounts(data.map((a)=>({
                    ...a,
                    // Ensure types match UI expectation
                    type: a.type
                })));
        }
    };
    const fetchTransactions = async (bookId)=>{
        const { data } = await supabase.from('transactions').select('*').eq('book_id', bookId).order('occurred_at', {
            ascending: false
        });
        if (data) {
            setTransactions(data.map((t)=>({
                    id: t.id,
                    amount: t.amount,
                    type: t.type,
                    category: 'Uncategorized',
                    category_id: t.category_id,
                    account: 'Unknown',
                    account_id: t.account_id,
                    description: t.description || '',
                    date: t.occurred_at,
                    icon: 'attach_money' // Default
                })));
        }
    };
    const fetchCommitments = async (bookId)=>{
        const { data } = await supabase.from('commitments').select('*').eq('book_id', bookId);
        if (data) {
            setCommitments(data.map((c)=>({
                    id: c.id,
                    name: c.title,
                    amount: c.amount,
                    frequency: c.frequency,
                    nextDueDate: c.next_due_date,
                    status: c.status
                })));
        }
    };
    // ACTIONS
    const addTransaction = async (t)=>{
        if (!activeBookId) return;
        // Find account ID by name (current UI passes name)
        // In future UI should pass ID. For now, matching by name:
        const account = accounts.find((a)=>a.name === t.account);
        const accountId = account?.id; // Fallback?
        if (!accountId) {
            console.error("Account not found forTransaction name:", t.account); // Log the name we looked for
            alert("Error: No se encontró la cuenta seleccionada ('" + t.account + "'). Por favor selecciona una cuenta válida.");
            return;
        }
        // Find category ID
        // If t.category is a name, find ID. If t.category_id is provided, use it.
        let categoryId = t.category_id;
        if (!categoryId && t.category) {
            const cat = categories.find((c)=>c.name === t.category);
            categoryId = cat?.id;
        }
        const { data, error } = await supabase.from('transactions').insert({
            book_id: activeBookId,
            account_id: accountId,
            type: t.type,
            amount: t.amount,
            description: t.description,
            occurred_at: t.date,
            category_id: categoryId
        }).select().single();
        if (error) {
            console.error("Error creating transaction:", error);
            alert("Error al guardar: " + error.message);
            return;
        }
        if (data) {
            // UI Optimistic Update or Refetch
            fetchTransactions(activeBookId);
            fetchAccounts(activeBookId); // Update balances
        }
    };
    const addAccount = async (a)=>{
        if (!activeBookId) return;
        const { error } = await supabase.from('accounts').insert({
            book_id: activeBookId,
            name: a.name,
            type: a.type,
            balance: a.balance
        });
        if (!error) fetchAccounts(activeBookId);
    };
    const addCommitment = async (c)=>{
        if (!activeBookId) return;
    // implementation...
    };
    const deleteTransaction = async (id)=>{
        await supabase.from('transactions').delete().eq('id', id);
        if (activeBookId) {
            fetchTransactions(activeBookId);
            fetchAccounts(activeBookId);
        }
    };
    const toggleCommitmentStatus = async (id, currentStatus)=>{
    // impl
    };
    const toggleRuleStatus = (id)=>{
    // impl
    };
    const activateLedger = (id)=>{
        handleChangeActiveBook(id);
    };
    const generateSampleData = async ()=>{
        if (!activeBookId) return;
        setIsLoading(true);
        // 1. Create Accounts
        const accountsData = [
            {
                book_id: activeBookId,
                name: 'Chase Sapphire',
                type: 'CREDIT',
                balance: -1250.00,
                last_four: '4242'
            },
            {
                book_id: activeBookId,
                name: 'Bank of America',
                type: 'DEBIT',
                balance: 5430.50,
                last_four: '8899'
            },
            {
                book_id: activeBookId,
                name: 'Efectivo',
                type: 'CASH',
                balance: 200.00,
                last_four: 'N/A'
            },
            {
                book_id: activeBookId,
                name: 'Inversiones',
                type: 'INVESTMENT',
                balance: 15000.00,
                last_four: 'N/A'
            }
        ];
        const { data: newAccounts } = await supabase.from('accounts').insert(accountsData).select();
        if (newAccounts) {
            // 2. Create Transactions (Random dates in last 30 days)
            const categories = [
                'Alimentos',
                'Transporte',
                'Vivienda',
                'Entretenimiento',
                'Salud',
                'Servicios'
            ];
            const types = [
                'EXPENSE',
                'EXPENSE',
                'EXPENSE',
                'INCOME'
            ]; // More expenses usually
            const transactionsData = Array.from({
                length: 20
            }).map((_, i)=>{
                const type = types[Math.floor(Math.random() * types.length)];
                const amount = Math.floor(Math.random() * 500) + 10;
                const account = newAccounts[Math.floor(Math.random() * newAccounts.length)];
                const category = categories[Math.floor(Math.random() * categories.length)];
                const date = new Date();
                date.setDate(date.getDate() - Math.floor(Math.random() * 30));
                return {
                    book_id: activeBookId,
                    account_id: account.id,
                    type: type,
                    amount: type === 'INCOME' ? amount * 5 : amount,
                    description: `Movimiento de prueba ${i + 1}`,
                    category_id: null,
                    occurred_at: date.toISOString()
                };
            });
            await supabase.from('transactions').insert(transactionsData);
            // 3. Create Commitments
            await supabase.from('commitments').insert([
                {
                    book_id: activeBookId,
                    title: 'Netflix Premium',
                    amount: 15.99,
                    frequency: 'MONTHLY',
                    next_due_date: new Date().toISOString(),
                    status: 'PENDING'
                },
                {
                    book_id: activeBookId,
                    title: 'Spotify Couple',
                    amount: 12.99,
                    frequency: 'MONTHLY',
                    next_due_date: new Date().toISOString(),
                    status: 'PAID'
                },
                {
                    book_id: activeBookId,
                    title: 'Gym Membership',
                    amount: 45.00,
                    frequency: 'MONTHLY',
                    next_due_date: new Date().toISOString(),
                    status: 'PENDING'
                }
            ]);
        }
        // Refresh all
        await handleChangeActiveBook(activeBookId);
        setIsLoading(false);
    };
    const totalBalance = accounts.reduce((sum, acc)=>sum + acc.balance, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FinanceContext.Provider, {
        value: {
            transactions,
            accounts,
            categories,
            categoryFolders,
            budgets,
            commitments,
            recurringRules,
            ledgers,
            addTransaction,
            deleteTransaction,
            addAccount,
            addCommitment,
            toggleCommitmentStatus,
            toggleRuleStatus,
            activateLedger,
            generateSampleData,
            totalBalance,
            isDarkMode,
            toggleTheme,
            isLoading,
            activeBookId
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/FinanceContext.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FinanceProvider, "Mgyep+74TlPE3VnGvfgp2KTQrCs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FinanceProvider;
const useFinance = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FinanceContext);
    if (!context) throw new Error('useFinance must be used within a FinanceProvider');
    return context;
};
_s1(useFinance, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "FinanceProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_61887947._.js.map