module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/utils/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://kddrngqmcltfwwfgmjxu.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZHJuZ3FtY2x0Znd3Zmdtanh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNTQ5MjYsImV4cCI6MjA4MTczMDkyNn0.2g6pmDPIV_S6s3VEGzFwUdYP857_okpDR2jbJDVimEE"));
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/context/FinanceContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FinanceProvider",
    ()=>FinanceProvider,
    "useFinance",
    ()=>useFinance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const FinanceContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const FinanceProvider = ({ children })=>{
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // State
    const [activeBookId, setActiveBookId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [accounts, setAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [budgets, setBudgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commitments, setCommitments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recurringRules, setRecurringRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Migration TODO: Link to commitments?
    const [ledgers, setLedgers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // These are 'books' now
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Theme Logic
    const toggleTheme = ()=>{
        setIsDarkMode((prev)=>{
            const newMode = !prev;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return newMode;
        });
    };
    // Initial Load: Auth & Books
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const init = async ()=>{
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
                const mappedLedgers = books.map((b)=>({
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
                    }));
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
        };
        init();
    }, []);
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
            fetchTransactions(bookId),
            fetchCommitments(bookId)
        ]);
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
            console.error("Account not found for transaction");
            return;
        }
        const { data, error } = await supabase.from('transactions').insert({
            book_id: activeBookId,
            account_id: accountId,
            type: t.type,
            amount: t.amount,
            description: t.description,
            occurred_at: t.date
        }).select().single();
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
    const totalBalance = accounts.reduce((sum, acc)=>sum + acc.balance, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FinanceContext.Provider, {
        value: {
            transactions,
            accounts,
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
            totalBalance,
            isDarkMode,
            toggleTheme,
            isLoading,
            activeBookId
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/FinanceContext.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useFinance = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FinanceContext);
    if (!context) throw new Error('useFinance must be used within a FinanceProvider');
    return context;
};
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9e9b2f26._.js.map