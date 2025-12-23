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
    const fetchBooks = async ()=>{
        setIsLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setIsLoading(false);
            return;
        }
        const { data: books, error } = await supabase.from('books').select('*');
        if (books && books.length > 0) {
            const mappedLedgers = books.map((b)=>({
                    id: b.id,
                    name: b.name,
                    description: b.short_description || '',
                    balance: 0,
                    isActive: false,
                    isArchived: false,
                    lastUpdate: b.created_at,
                    icon: b.icon || 'Wallet',
                    color: b.color || 'blue',
                    type: 'PERSONAL',
                    members: [],
                    currency: b.currency
                }));
            setLedgers(mappedLedgers);
        // Initial activation logic can be here or in useEffect
        // We will activate first if none active in useEffect or consumer
        } else {
            await createDefaultBook(user.id);
        }
        setIsLoading(false);
    };
    // Initial Load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinanceProvider.useEffect": ()=>{
            fetchBooks().then({
                "FinanceProvider.useEffect": (mappedLedgers)=>{
                // Logic moved inside to have access to the fetched ledgers directly if returned, 
                // or we rely on state updates which might be async.
                // Better approach: fetchBooks updates state. We wait for that.
                }
            }["FinanceProvider.useEffect"]);
        }
    }["FinanceProvider.useEffect"], []);
    // Effect to handle initial active book selection once ledgers are loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinanceProvider.useEffect": ()=>{
            if (!isLoading && ledgers.length > 0 && !activeBookId) {
                // Try to recover from localStorage
                const savedBookId = localStorage.getItem('finance_active_book_id');
                const targetBook = ledgers.find({
                    "FinanceProvider.useEffect.targetBook": (l)=>l.id === savedBookId
                }["FinanceProvider.useEffect.targetBook"]);
                if (targetBook) {
                    handleChangeActiveBook(targetBook.id);
                } else {
                    // Default to first if no saved book or saved book not found/deleted
                    handleChangeActiveBook(ledgers[0].id);
                }
            }
        }
    }["FinanceProvider.useEffect"], [
        isLoading,
        ledgers,
        activeBookId
    ]);
    // Helper to format currency based on active book
    const formatAmount = (amount)=>{
        const activeLedger = ledgers.find((l)=>l.id === activeBookId);
        const currency = activeLedger?.currency || 'MXN';
        let locale = 'es-MX';
        if (currency === 'USD') locale = 'en-US';
        if (currency === 'EUR') locale = 'es-ES';
        if (currency === 'PEN') locale = 'es-PE';
        if (currency === 'COP') locale = 'es-CO';
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2
        }).format(amount);
    };
    const refreshBooks = async ()=>{
        await fetchBooks();
        if (activeBookId) {
            await Promise.all([
                fetchAccounts(activeBookId),
                fetchCategories(activeBookId),
                fetchCategoryFolders(activeBookId),
                fetchTransactions(activeBookId),
                fetchCommitments(activeBookId),
                fetchBudgets(activeBookId),
                fetchRecurringRules(activeBookId)
            ]);
        }
    };
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
        localStorage.setItem('finance_active_book_id', bookId); // Persist selection
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
            fetchCommitments(bookId),
            fetchBudgets(bookId),
            fetchRecurringRules(bookId)
        ]);
    };
    const fetchCategories = async (bookId)=>{
        const { data } = await supabase.from('categories').select('*').eq('book_id', bookId);
        if (data) {
            setCategories(data.map((cat)=>({
                    id: cat.id,
                    name: cat.name,
                    color: cat.color || '#2563eb',
                    icon: cat.icon || 'category',
                    folder_id: cat.folder_id || null
                })));
        }
    };
    const fetchCategoryFolders = async (bookId)=>{
        const { data } = await supabase.from('category_folders').select('*').eq('book_id', bookId);
        if (data) {
            setCategoryFolders(data.map((folder)=>({
                    id: folder.id,
                    name: folder.name,
                    color: folder.color || '#6366f1',
                    icon: folder.icon || 'folder'
                })));
        }
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
        const { data } = await supabase.from('transactions').select(`
        *,
        categories (name, icon, color),
        accounts (name)
      `).eq('book_id', bookId).order('occurred_at', {
            ascending: false
        });
        if (data) {
            setTransactions(data.map((t)=>({
                    id: t.id,
                    amount: t.amount,
                    type: t.type,
                    category: t.categories?.name || 'Uncategorized',
                    category_id: t.category_id,
                    account: t.accounts?.name || 'Unknown',
                    account_id: t.account_id,
                    description: t.description || '',
                    date: t.occurred_at,
                    icon: t.categories?.icon || 'attach_money',
                    status: t.status,
                    location: t.location,
                    notes: t.notes
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
    const fetchBudgets = async (bookId)=>{
        const { data, error } = await supabase.from('budgets').select('*').eq('book_id', bookId);
        if (error) {
            console.warn('No fue posible cargar presupuestos', error.message);
            return;
        }
        if (data) {
            setBudgets(data.map((b)=>({
                    id: b.id,
                    category: b.category || b.name || 'Sin categoría',
                    limit: Number(b.limit ?? b.amount_limit ?? 0),
                    spent: Number(b.spent ?? 0),
                    period: b.period || 'MONTHLY',
                    severity: b.severity || 'NORMAL'
                })));
        }
    };
    const fetchRecurringRules = async (bookId)=>{
        const { data, error } = await supabase.from('recurring_rules').select('*').eq('book_id', bookId);
        if (error) {
            console.warn('No fue posible cargar reglas recurrentes', error.message);
            return;
        }
        if (data) {
            setRecurringRules(data.map((r)=>({
                    id: r.id,
                    name: r.name,
                    category: r.category || 'General',
                    account: r.account || r.account_name || 'Cuenta principal',
                    amount: Number(r.amount ?? 0),
                    type: r.type || 'EXPENSE',
                    frequency: r.frequency || 'Mensual',
                    nextDate: r.next_run_at || r.next_date || '',
                    active: r.is_active ?? true,
                    icon: r.icon || 'autorenew'
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
        // Prepare payload - casting to any to bypass strict database types until migration is run
        const payload = {
            book_id: activeBookId,
            name: a.name,
            type: a.type,
            balance: a.balance,
            currency: a.currency,
            is_default: a.isDefault,
            // Credit Card Fields
            credit_limit: a.creditLimit,
            available_credit: a.availableCredit,
            cutoff_day: a.cutoffDay,
            pay_day: a.payDay,
            network: a.network,
            auto_pay: a.autoPay,
            last_four: a.lastFour,
            color: 'blue',
            icon: 'account_balance' // Default
        };
        const { error } = await supabase.from('accounts').insert(payload);
        if (error) {
            console.error("Error creating account:", error);
            alert("Error creating account: " + error.message);
            return;
        }
        fetchAccounts(activeBookId);
        fetchAccounts(activeBookId);
    };
    const updateAccount = async (id, a)=>{
        if (!activeBookId) return;
        // Prepare payload
        const payload = {
            name: a.name,
            type: a.type,
            balance: a.balance,
            currency: a.currency,
            is_default: a.isDefault,
            credit_limit: a.creditLimit,
            available_credit: a.availableCredit,
            cutoff_day: a.cutoffDay,
            pay_day: a.payDay,
            network: a.network,
            auto_pay: a.autoPay,
            last_four: a.lastFour,
            color: a.color || 'blue'
        };
        // Remove undefined keys
        Object.keys(payload).forEach((key)=>payload[key] === undefined && delete payload[key]);
        const { error } = await supabase.from('accounts').update(payload).eq('id', id);
        if (error) {
            console.error("Error updating account:", error);
            alert("Error updating account: " + error.message);
            return;
        }
        fetchAccounts(activeBookId);
    };
    const deleteAccount = async (id)=>{
        if (!activeBookId) return;
        // Check for dependencies? Ideally transactions cascade or block. 
        // Supabase usually set to CASECADE or RESTRICT. Assuming CASCADE or user handled.
        const { error } = await supabase.from('accounts').delete().eq('id', id);
        if (error) {
            console.error("Error deleting account:", error);
            alert("Error al eliminar cuenta: " + error.message);
            return;
        }
        fetchAccounts(activeBookId);
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
    // Modal State
    const [isTransactionModalOpen, setIsTransactionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openTransactionModal = ()=>setIsTransactionModalOpen(true);
    const closeTransactionModal = ()=>setIsTransactionModalOpen(false);
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
            updateAccount,
            deleteAccount,
            addCommitment,
            toggleCommitmentStatus,
            toggleRuleStatus,
            activateLedger,
            generateSampleData,
            totalBalance,
            isDarkMode,
            toggleTheme,
            isLoading,
            activeBookId,
            refreshBooks,
            formatAmount,
            isTransactionModalOpen,
            openTransactionModal,
            closeTransactionModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/FinanceContext.tsx",
        lineNumber: 557,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FinanceProvider, "MGhX0HkQhN6+7VFYq1+NldVlG0w=", false, function() {
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
"[project]/components/TransactionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionModal",
    ()=>TransactionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/FinanceContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TransactionModal = ()=>{
    _s();
    const { isTransactionModalOpen, closeTransactionModal, addTransaction, accounts, categories, formatAmount, ledgers, activeBookId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinance"])();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('EXPENSE');
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [accountId, setAccountId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toTimeString().slice(0, 5));
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecurring, setIsRecurring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Future implementation for actual rules
    // Reset form when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionModal.useEffect": ()=>{
            if (isTransactionModalOpen) {
                setAmount('');
                setDescription('');
                setType('EXPENSE');
                setCategoryId('');
                setAccountId(accounts[0]?.id || '');
                const now = new Date();
                setDate(now.toISOString().split('T')[0]);
                setTime(now.toTimeString().slice(0, 5));
                setLocation('');
                setNotes('');
                setIsPending(false);
                setIsRecurring(false);
            }
        }
    }["TransactionModal.useEffect"], [
        isTransactionModalOpen,
        accounts
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
            alert('Por favor ingresa un monto válido');
            return;
        }
        if (!accountId) {
            alert('Por favor selecciona una cuenta');
            return;
        }
        const dateTime = new Date(`${date}T${time}`);
        // Find selected account name for legacy support/logic if needed
        const selectedAccount = accounts.find((a)=>a.id === accountId);
        await addTransaction({
            amount: numAmount,
            type: type,
            description: description || (type === 'INCOME' ? 'Ingreso' : 'Gasto'),
            account: selectedAccount?.name || 'Unknown',
            account_id: accountId,
            category_id: categoryId || undefined,
            category: categories.find((c)=>c.id === categoryId)?.name || 'Sin categoría',
            date: dateTime.toISOString(),
            status: isPending ? 'PENDING' : 'COMPLETED',
            location: location,
            notes: notes,
            icon: type === 'INCOME' ? 'trending_up' : 'trending_down',
            isRecurring: isRecurring // This maps to property in type, but logic handled elsewhere likely?
        });
        closeTransactionModal();
    };
    if (!isTransactionModalOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-[#1e2530] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-5/12 bg-gray-50 dark:bg-[#252b36] p-8 flex flex-col justify-center items-center relative border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-6 left-1/2 -translate-x-1/2 bg-gray-200 dark:bg-[#2f3642] p-1 rounded-xl flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setType('EXPENSE'),
                                    className: `px-6 py-2 rounded-lg text-sm font-bold transition-all ${type === 'EXPENSE' ? 'bg-white dark:bg-[#1e2530] shadow-sm text-danger' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`,
                                    children: "Gasto"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setType('INCOME'),
                                    className: `px-6 py-2 rounded-lg text-sm font-bold transition-all ${type === 'INCOME' ? 'bg-white dark:bg-[#1e2530] shadow-sm text-success' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`,
                                    children: "Ingreso"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 text-center w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-gray-400 uppercase tracking-widest mb-4",
                                    children: "MONTO TOTAL"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-[280px] mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: amount,
                                            onChange: (e)=>setAmount(e.target.value),
                                            placeholder: "0.00",
                                            className: `w-full bg-transparent text-6xl font-black text-center outline-none border-b-2 border-transparent focus:border-primary/50 transition-colors pb-2 placeholder-gray-200 dark:placeholder-gray-700 ${type === 'INCOME' ? 'text-success' : 'text-text-main dark:text-white'}`,
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 113,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute top-2 -left-6 text-4xl font-medium ${type === 'INCOME' ? 'text-success/50' : 'text-gray-300 dark:text-gray-600'}`,
                                            children: ledgers.find((l)=>l.id === activeBookId)?.currency || '$'
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3",
                                    children: "Cuenta de Origen"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: accountId,
                                            onChange: (e)=>setAccountId(e.target.value),
                                            className: "w-full appearance-none bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white rounded-xl px-4 py-3 pr-10 font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer",
                                            children: accounts.map((acc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: acc.id,
                                                    children: [
                                                        acc.name,
                                                        " (",
                                                        formatAmount(acc.balance),
                                                        ")"
                                                    ]
                                                }, acc.id, true, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                children: "expand_more"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TransactionModal.tsx",
                                                lineNumber: 142,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 127,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TransactionModal.tsx",
                    lineNumber: 94,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-7/12 p-8 overflow-y-auto custom-scrollbar bg-white dark:bg-[#1e2530]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-800 dark:text-white",
                                    children: "Nueva Transacción"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeTransactionModal,
                                    className: "p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-gray-500",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TransactionModal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Categoría"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 161,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                        children: "category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: categoryId,
                                                    onChange: (e)=>setCategoryId(e.target.value),
                                                    className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Selecciona una categoría..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: cat.id,
                                                                children: cat.name
                                                            }, cat.id, false, {
                                                                fileName: "[project]/components/TransactionModal.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 162,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Descripción / Beneficiario"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 181,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                        children: "description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: description,
                                                    onChange: (e)=>setDescription(e.target.value),
                                                    placeholder: "Ej. Compra semanal, Starbucks, Nómina...",
                                                    className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 182,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                    children: "Fecha"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                                children: "calendar_today"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/TransactionModal.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: date,
                                                            onChange: (e)=>setDate(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                    children: "Hora"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                                children: "schedule"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/TransactionModal.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "time",
                                                            value: time,
                                                            onChange: (e)=>setTime(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 212,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Ubicación"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 230,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                        children: "location_on"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: location,
                                                    onChange: (e)=>setLocation(e.target.value),
                                                    placeholder: "Añadir ubicación...",
                                                    className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 right-0 pr-3 flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-colors text-gray-400",
                                                        title: "Usar ubicación actual",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[18px]",
                                                            children: "my_location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 231,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 229,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Notas"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 252,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: notes,
                                            onChange: (e)=>setNotes(e.target.value),
                                            placeholder: "Notas adicionales...",
                                            rows: 2,
                                            className: "w-full p-4 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 253,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 251,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-3 cursor-pointer group select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isPending ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `bg-white size-4 rounded-full shadow-md transform transition-transform duration-300 ${isPending ? 'translate-x-6' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors",
                                                    children: "Pendiente"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: isPending,
                                                    onChange: (e)=>setIsPending(e.target.checked),
                                                    className: "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 264,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-3 cursor-pointer group select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isRecurring ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `bg-white size-4 rounded-full shadow-md transform transition-transform duration-300 ${isRecurring ? 'translate-x-6' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors",
                                                    children: "Recurrente"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: isRecurring,
                                                    onChange: (e)=>setIsRecurring(e.target.checked),
                                                    className: "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 272,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 263,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closeTransactionModal,
                                            className: "flex-1 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all",
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 283,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-[2] py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    children: "save"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Guardar Transacción"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 290,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 282,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TransactionModal.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/TransactionModal.tsx",
            lineNumber: 91,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/TransactionModal.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TransactionModal, "Q6Ttr1wKRXuoiPxSWZ8JXuJWz8k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinance"]
    ];
});
_c = TransactionModal;
var _c;
__turbopack_context__.k.register(_c, "TransactionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_aa963d78._.js.map