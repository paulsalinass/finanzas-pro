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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addYears.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isAfter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isBefore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isWithinInterval.js [app-ssr] (ecmascript)");
"use client";
;
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
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categoryFolders, setCategoryFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [budgets, setBudgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commitments, setCommitments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recurringRules, setRecurringRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Migration TODO: Link to commitments?
    const [ledgers, setLedgers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // These are 'books' now
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Theme Logic
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsDarkMode((prev)=>{
            const newMode = !prev;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return newMode;
        });
    }, []);
    const fetchBooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setIsLoading(false);
            return;
        }
        const { data: books, error } = await supabase.from('books').select('*');
        if (error) {
            console.error("Error fetching books:", error);
            console.error("Supabase URL present?", !!("TURBOPACK compile-time value", "https://kddrngqmcltfwwfgmjxu.supabase.co"));
            console.error("Supabase Key present?", !!("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZHJuZ3FtY2x0Znd3Zmdtanh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNTQ5MjYsImV4cCI6MjA4MTczMDkyNn0.2g6pmDPIV_S6s3VEGzFwUdYP857_okpDR2jbJDVimEE"));
        }
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
    }, [
        supabase
    ]);
    // Check for Credit Card Commitments
    const checkCreditCardCommitments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (accounts.length === 0 || transactions.length === 0 || isLoading) return;
        for (const account of accounts){
            if (account.type !== 'CREDIT' || !account.cutoffDay || !account.payDay) continue;
            const today = new Date();
            // Determine the latest CLOSED cutoff date
            let cycleCutoff = new Date(today.getFullYear(), today.getMonth(), account.cutoffDay);
            // If today is before or equal to this month's cutoff, the last closed cycle was LAST month.
            if (today.getDate() <= account.cutoffDay) {
                cycleCutoff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subMonths"])(cycleCutoff, 1);
            }
            // Identify this cycle uniquely
            const periodLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(cycleCutoff, 'MMM yyyy');
            const commitmentName = `Pago Tarjeta ${account.name} - ${periodLabel}`;
            // Find appropriate category (reused logic)
            let paymentCategoryid = categories.find((c)=>[
                    'pagos',
                    'tarjeta',
                    'tarjetas',
                    'credit',
                    'payment',
                    'finance',
                    'finanzas'
                ].some((key)=>c.name.toLowerCase().includes(key)))?.id;
            if (!paymentCategoryid) paymentCategoryid = categories.find((c)=>c.name === 'General')?.id;
            if (!paymentCategoryid && categories.length > 0) {
                paymentCategoryid = categories[0].id;
            }
            // Find Funding Account (Debit with money, or any Debit)
            const fundingAccount = accounts.find((a)=>a.type === 'DEBIT' && a.balance > 0) || accounts.find((a)=>a.type === 'DEBIT');
            // Deduplicate first
            const matches = commitments.filter((c)=>c.name === commitmentName && c.accountId === account.id);
            if (matches.length > 1) {
                // Identify the best one to keep (e.g., the one with funding account or correct type)
                const valid = matches.find((c)=>c.transaction_type === 'INCOME' && c.fundingAccountId) || matches.find((c)=>c.transaction_type === 'INCOME') || matches[0];
                const others = matches.filter((c)=>c.id !== valid.id);
                for (const other of others){
                    console.log(`Removing duplicate commitment: ${other.id}`);
                    await deleteCommitment(other.id);
                }
            // After delete, we continue with the 'valid' one as existing
            }
            // Check if commitment exists and needs update (Refresh find after dedupe)
            const existingCommitment = commitments.find((c)=>c.name === commitmentName && c.accountId === account.id);
            if (existingCommitment) {
                // Check if needs fix (wrong type or missing category or funding account)
                if (existingCommitment.transaction_type !== 'INCOME' || !existingCommitment.categoryId || !existingCommitment.fundingAccountId) {
                    console.log(`Fixing existing commitment: ${existingCommitment.name}`);
                    await updateCommitment(existingCommitment.id, {
                        transaction_type: 'INCOME',
                        categoryId: paymentCategoryid,
                        fundingAccountId: fundingAccount?.id
                    });
                }
                continue;
            }
            // Calculate Cycle Expenses
            // Cycle starts day after PREVIOUS cutoff.
            const prevCutoff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subMonths"])(cycleCutoff, 1);
            const startOfCycle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(prevCutoff, 1));
            const endOfCycle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfDay"])(cycleCutoff);
            const cycleExpenses = transactions.reduce((sum, t)=>{
                if ((t.account === account.name || t.account_id === account.id) && t.type === 'EXPENSE') {
                    const tDate = new Date(t.date);
                    if (tDate >= startOfCycle && tDate <= endOfCycle) {
                        return sum + t.amount;
                    }
                }
                return sum;
            }, 0);
            if (cycleExpenses <= 0) continue;
            // Calculate Due Date (Pay Day - 1 Day)
            let payDate = new Date(cycleCutoff.getFullYear(), cycleCutoff.getMonth(), account.payDay);
            // If payDate is before cutoff (unlikely but possible if payday < cutoff), move to next month.
            // E.g. Cutoff 18th, Payday 10th. Jan 18 close -> Due Feb 10.
            if (account.payDay <= account.cutoffDay) {
                payDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMonths"])(payDate, 1);
            } else {
            // Payday 28th. Jan 18 close -> Due Jan 28.
            // Already in same month as cycleCutoff.
            }
            const limitDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subDays"])(payDate, 1);
            // Create Commitment (Category finding moved up)
            await addCommitment({
                name: commitmentName,
                amount: cycleExpenses,
                frequency: 'MONTHLY',
                type: 'TEMPORAL',
                nextDueDate: limitDate.toISOString(),
                status: 'PENDING',
                isActive: true,
                accountId: account.id,
                categoryId: paymentCategoryid,
                transaction_type: 'INCOME',
                fundingAccountId: fundingAccount?.id,
                account: account.name
            });
            console.log(`Generated commitment for ${account.name}: ${cycleExpenses} due ${limitDate.toISOString()}`);
        }
    }, [
        accounts,
        transactions,
        isLoading,
        categories,
        commitments
    ]); // Dependencies updated
    // Deduplicate logic helper
    const deduplicateCommitments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (account, periodLabel)=>{
        const commitmentName = `Pago Tarjeta ${account.name} - ${periodLabel}`;
        // Find ALL matching commitments
        const matches = commitments.filter((c)=>c.name === commitmentName && c.accountId === account.id);
        if (matches.length > 1) {
            console.warn(`Found ${matches.length} duplicates for ${commitmentName}. Keeping the one with manual edits or the last one.`);
            // Sort by updated_at? We don't have it on type easily, assumed standard sort.
            // Keep the one with fundingAccountId if exists, or just the first/last.
            // Let's keep the one with ID that matches a 'valid' criteria or just the first one and delete others.
            const keep = matches.find((c)=>c.fundingAccountId) || matches[0];
            const toDelete = matches.filter((c)=>c.id !== keep.id);
            for (const c of toDelete){
                await deleteCommitment(c.id);
            }
        }
    }, [
        commitments
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Ensure commitments are loaded or at least we have tried to fetch them.
        // We can check if commitments array is populated or if we have a flag.
        // Relying on accounts/transactions implies data is loaded.
        // Adding `commitments` to deps ensures we re-run if they change (e.g. initial load finish).
        // But we must guard against infinite loop if this function *modifies* commitments.
        // checkCreditCardCommitments modifies commitments ONLY if needed.
        if (!isLoading && accounts.length > 0 && transactions.length > 0) {
            checkCreditCardCommitments();
            generateNotifications();
        }
    }, [
        isLoading,
        accounts,
        transactions.length,
        commitments.length,
        budgets.length
    ]); // Added dependencies
    // Notification Logic
    const generateNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const newNotifications = [];
        const today = new Date();
        // 1. Commitments Due Soon (3 days)
        commitments.forEach((c)=>{
            if (c.status === 'PENDING' && c.isActive) {
                const dueDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(c.nextDueDate);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBefore"])(dueDate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(today, 3)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAfter"])(dueDate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subDays"])(today, 1))) {
                    newNotifications.push({
                        id: `comm-${c.id}`,
                        title: 'Pago Próximo',
                        message: `El compromiso "${c.name}" vence el ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dueDate, 'dd MMM')}.`,
                        time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(today, 'HH:mm'),
                        type: 'WARNING',
                        read: false
                    });
                }
            }
        });
        // 2. Budgets (Approximate for Current Month)
        // We recreate simplistic logic here: Filter transactions for current month & category
        const startMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfMonth"])(today);
        const endMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMonth"])(today);
        budgets.forEach((b)=>{
            const categoryId = b.category_id;
            if (!categoryId) return; // Skip if no ID
            // Calculate spent for this budget's category in current month
            const spent = transactions.filter((t)=>t.type === 'EXPENSE' && t.category_id === categoryId && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWithinInterval"])(new Date(t.date), {
                    start: startMonth,
                    end: endMonth
                })).reduce((sum, t)=>sum + t.amount, 0);
            const ratio = b.limit > 0 ? spent / b.limit : 0;
            if (ratio >= 1) {
                newNotifications.push({
                    id: `bud-err-${b.id}`,
                    title: 'Presupuesto Excedido',
                    message: `Has excedido tu presupuesto de ${b.category || 'Categoría'}.`,
                    time: 'Ahora',
                    type: 'ERROR',
                    read: false
                });
            } else if (ratio >= 0.8) {
                newNotifications.push({
                    id: `bud-warn-${b.id}`,
                    title: 'Presupuesto al Límite',
                    message: `Estás al ${(ratio * 100).toFixed(0)}% de tu presupuesto de ${b.category || 'Categoría'}.`,
                    time: 'Ahora',
                    type: 'WARNING',
                    read: false
                });
            }
        });
        // 3. Credit Cards Pay Day (3 days)
        accounts.filter((a)=>a.type === 'CREDIT').forEach((acc)=>{
            if (acc.payDay) {
                // Calculate next pay date (naive approach: this month's pay day)
                let payDate = new Date(today.getFullYear(), today.getMonth(), acc.payDay);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBefore"])(payDate, today)) {
                    payDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMonths"])(payDate, 1);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWithinInterval"])(payDate, {
                    start: today,
                    end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(today, 3)
                })) {
                    newNotifications.push({
                        id: `cc-${acc.id}`,
                        title: 'Tarjeta de Crédito',
                        message: `La fecha de pago de ${acc.name} es el ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(payDate, 'dd MMM')}.`,
                        time: 'Ahora',
                        type: 'INFO',
                        read: false
                    });
                }
            }
        });
        // Deduplicate or Merge with existing read status?
        // For MVP, we replace, but we lose "read" status if we just replace.
        // Ideally we persist read status in local storage or DB. 
        // Let's implement a simple LocalStorage check for "read ids".
        const readIds = JSON.parse(localStorage.getItem('read_notifications') || '[]');
        const finalNotifications = newNotifications.map((n)=>({
                ...n,
                read: readIds.includes(n.id)
            }));
        // Sort?
        setNotifications(finalNotifications);
    }, [
        commitments,
        budgets,
        transactions,
        accounts
    ]);
    const markNotificationAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setNotifications((prev)=>prev.map((n)=>n.id === id ? {
                    ...n,
                    read: true
                } : n));
        const readIds = JSON.parse(localStorage.getItem('read_notifications') || '[]');
        if (!readIds.includes(id)) {
            readIds.push(id);
            localStorage.setItem('read_notifications', JSON.stringify(readIds));
        }
    }, []);
    const markAllNotificationsAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setNotifications((prev)=>prev.map((n)=>({
                    ...n,
                    read: true
                })));
        const allIds = notifications.map((n)=>n.id);
        const readIds = JSON.parse(localStorage.getItem('read_notifications') || '[]');
        const newReadIds = Array.from(new Set([
            ...readIds,
            ...allIds
        ]));
        localStorage.setItem('read_notifications', JSON.stringify(newReadIds));
    }, [
        notifications
    ]);
    const unreadCount = notifications.filter((n)=>!n.read).length;
    // Initial Load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchBooks().then((mappedLedgers)=>{
        // Logic moved inside to have access to the fetched ledgers directly if returned, 
        // or we rely on state updates which might be async.
        // Better approach: fetchBooks updates state. We wait for that.
        });
    }, []);
    // Effect to handle initial active book selection once ledgers are loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && ledgers.length > 0 && !activeBookId) {
            // Try to recover from localStorage
            const savedBookId = localStorage.getItem('finance_active_book_id');
            const targetBook = ledgers.find((l)=>l.id === savedBookId);
            if (targetBook) {
                handleChangeActiveBook(targetBook.id);
            } else {
                // Default to first if no saved book or saved book not found/deleted
                handleChangeActiveBook(ledgers[0].id);
            }
        }
    }, [
        isLoading,
        ledgers,
        activeBookId
    ]);
    // Helper to format currency based on active book
    const formatAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((amount)=>{
        const activeLedger = ledgers.find((l)=>l.id === activeBookId);
        const currency = activeLedger?.currency || 'MXN';
        let locale = 'es-MX';
        if (currency === 'USD') locale = 'en-US';
        if (currency === 'EUR') locale = 'es-ES';
        if (currency === 'PEN') return `S/ ${amount.toLocaleString('es-PE', {
            minimumFractionDigits: 2
        })}`;
        if (currency === 'COP') locale = 'es-CO';
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2
        }).format(amount);
    }, [
        ledgers,
        activeBookId
    ]);
    const fetchCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (bookId)=>{
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
    }, [
        supabase
    ]);
    const fetchCategoryFolders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (bookId)=>{
        const { data } = await supabase.from('category_folders').select('*').eq('book_id', bookId);
        if (data) {
            setCategoryFolders(data.map((folder)=>({
                    id: folder.id,
                    name: folder.name,
                    color: folder.color || '#6366f1',
                    icon: folder.icon || 'folder'
                })));
        }
    }, [
        supabase
    ]);
    const fetchAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (bookId)=>{
        const { data } = await supabase.from('accounts').select('*').eq('book_id', bookId);
        if (data) {
            setAccounts(data.map((a)=>({
                    ...a,
                    // Ensure types match UI expectation and map snake_case to camelCase
                    type: a.type,
                    creditLimit: a.credit_limit,
                    availableCredit: a.available_credit,
                    cutoffDay: a.cutoff_day,
                    payDay: a.pay_day,
                    lastFour: a.last_four,
                    autoPay: a.auto_pay,
                    isDefault: a.is_default,
                    cardholderName: a.cardholder_name,
                    expiryDate: a.expiry_date
                })));
        }
    }, [
        supabase
    ]);
    const fetchTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (bookId)=>{
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
                    location: t.location_text,
                    notes: t.notes,
                    beneficiary: t.beneficiary,
                    created_at: t.created_at,
                    updated_at: t.updated_at
                })));
        }
    }, [
        supabase
    ]);
    const fetchCommitments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (bookId)=>{
        const { data, error } = await supabase.from('commitments').select(`
        *,
        categories (name),
        accounts:account_id (name)
      `).eq('book_id', bookId);
        if (error) {
            console.error('Error fetching commitments:', error);
        }
        if (data) {
            setCommitments(data.map((c)=>({
                    id: c.id,
                    name: c.title,
                    amount: c.amount,
                    frequency: c.frequency,
                    nextDueDate: c.next_due_date,
                    status: c.status,
                    type: c.type || 'FIXED',
                    isActive: c.is_active ?? true,
                    endDate: c.end_date,
                    category: c.categories?.name || 'General',
                    account: c.accounts?.name || 'Cuenta principal',
                    categoryId: c.category_id,
                    accountId: c.account_id,
                    recurrence: c.recurrence,
                    transaction_type: c.transaction_type,
                    isAutoPay: c.is_auto_pay,
                    fundingAccountId: c.funding_account_id
                })));
        }
    }, [
        supabase
    ]);
    const fetchBudgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (bookId)=>{
        // Joining handled client-side in UI to ensure robustness
        const { data, error } = await supabase.from('budgets').select('*').eq('book_id', bookId);
        if (error) {
            console.warn('Error loading budgets', error.message);
            return;
        }
        if (data) {
            setBudgets(data.map((b)=>({
                    id: b.id,
                    category: 'Loading...',
                    category_id: b.category_id,
                    limit: Number(b.amount || 0),
                    spent: 0,
                    period: 'MONTHLY',
                    severity: 'NORMAL',
                    start_date: b.start_date,
                    end_date: b.end_date,
                    recurrence_type: b.recurrence_type,
                    recurrence_interval: b.recurrence_interval
                })));
        }
    }, [
        supabase
    ]);
    const fetchRecurringRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (bookId)=>{
        const { data, error } = await supabase.from('recurring_rules').select(`
        *,
        categories (name, icon, color),
        accounts (name)
      `).eq('book_id', bookId);
        if (error) {
            console.warn('No fue posible cargar reglas recurrentes', error.message);
            return;
        }
        if (data) {
            setRecurringRules(data.map((r)=>({
                    id: r.id,
                    name: r.name,
                    category: r.categories?.name || 'General',
                    account: r.accounts?.name || 'Cuenta principal',
                    amount: Number(r.amount ?? 0),
                    type: r.type || 'EXPENSE',
                    frequency: r.frequency || 'Mensual',
                    nextDate: r.next_run_at || '',
                    active: r.is_active ?? true,
                    icon: r.categories?.icon || 'autorenew'
                })));
        }
    }, [
        supabase
    ]);
    const refreshBooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
    }, [
        activeBookId,
        fetchBooks
    ]);
    const createDefaultBook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userId)=>{
        const { data, error } = await supabase.from('books').insert({
            name: 'Personal',
            user_id: userId
        }).select().single();
        if (error) {
            console.error("Error creating default book:", error);
        }
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
    }, [
        supabase
    ]);
    const handleChangeActiveBook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (bookId)=>{
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
    }, [
        fetchAccounts,
        fetchCategories,
        fetchCategoryFolders,
        fetchTransactions,
        fetchCommitments,
        fetchBudgets,
        fetchRecurringRules
    ]);
    // ACTIONS
    const addTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (t)=>{
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
        // Handle Location Tracking logic
        let lat = t.latitude;
        let lng = t.longitude;
        // If location is enabled in profile and no explicit location passed, try to fetch current
        if (userProfile?.is_location_enabled && (!lat || !lng)) {
            try {
                const pos = await new Promise((resolve, reject)=>{
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        timeout: 5000
                    });
                });
                lat = pos.coords.latitude;
                lng = pos.coords.longitude;
            } catch (e) {
                console.warn("Could not fetch location for transaction:", e);
            }
        }
        // If t already had coords, they trump everything (passed from manual input maybe)
        t.latitude = lat;
        t.longitude = lng;
        const { data, error } = await supabase.from('transactions').insert({
            book_id: activeBookId,
            account_id: accountId,
            type: t.type,
            amount: t.amount,
            description: t.description,
            occurred_at: t.date,
            category_id: categoryId,
            currency: account.currency || 'USD',
            location_text: t.location,
            location_lat: t.latitude,
            location_lng: t.longitude,
            notes: t.notes,
            beneficiary: t.beneficiary,
            frequency: t.frequency,
            commitment_id: t.commitment_id // Save commitment link
        }).select().single();
        if (error) {
            console.error("Error creating transaction:", error);
            alert("Error al guardar: " + error.message);
            return;
        }
        // Update Account Balance manually since no triggers exist
        if (account) {
            let newBalance = Number(account.balance);
            if (t.type === 'INCOME') {
                newBalance += Number(t.amount);
            } else {
                newBalance -= Number(t.amount);
            }
            const { error: accError } = await supabase.from('accounts').update({
                balance: newBalance
            }).eq('id', accountId);
            if (accError) {
                console.error("Error updating account balance:", accError);
            }
        }
        // Create Recurring Rule if needed
        if (data && t.frequency) {
            let nextDate = new Date(t.date);
            // Simple logic for next date
            if (t.frequency === 'DAILY') nextDate.setDate(nextDate.getDate() + 1);
            if (t.frequency === 'WEEKLY') nextDate.setDate(nextDate.getDate() + 7);
            if (t.frequency === 'BIWEEKLY') nextDate.setDate(nextDate.getDate() + 14);
            if (t.frequency === 'MONTHLY') nextDate.setMonth(nextDate.getMonth() + 1);
            if (t.frequency === 'ANNUAL') nextDate.setFullYear(nextDate.getFullYear() + 1);
            const { error: ruleError } = await supabase.from('recurring_rules').insert({
                book_id: activeBookId,
                name: t.description,
                amount: t.amount,
                category_id: categoryId,
                account_id: accountId,
                type: t.type,
                frequency: t.frequency,
                next_run_at: nextDate.toISOString(),
                end_date: t.end_date,
                is_active: true
            });
            if (ruleError) {
                console.warn("Failed to create recurring rule:", ruleError);
            } else {
                fetchRecurringRules(activeBookId);
            }
        }
        if (data) {
            // UI Optimistic Update or Refetch
            fetchTransactions(activeBookId);
            fetchAccounts(activeBookId); // Update balances
        }
    }, [
        activeBookId,
        accounts,
        categories,
        userProfile,
        supabase,
        fetchRecurringRules,
        fetchTransactions,
        fetchAccounts
    ]);
    const addAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (a)=>{
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
            pay_day: a.payDay,
            network: a.network,
            auto_pay: a.autoPay,
            last_four: a.lastFour,
            cardholder_name: a.cardholderName,
            expiry_date: a.expiryDate,
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
    }, [
        activeBookId,
        supabase,
        fetchAccounts
    ]);
    const updateAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, a)=>{
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
            cardholder_name: a.cardholderName,
            expiry_date: a.expiryDate,
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
    }, [
        activeBookId,
        supabase,
        fetchAccounts
    ]);
    const deleteAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
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
    }, [
        activeBookId,
        supabase,
        fetchAccounts
    ]);
    const addCommitment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (c)=>{
        if (!activeBookId) return;
        const payload = {
            book_id: activeBookId,
            title: c.name,
            amount: c.amount,
            frequency: c.frequency,
            next_due_date: c.nextDueDate,
            status: c.status,
            type: c.type,
            is_active: c.isActive,
            end_date: c.endDate,
            category_id: c.categoryId,
            account_id: c.accountId,
            recurrence: c.recurrence,
            transaction_type: c.transaction_type,
            is_auto_pay: c.isAutoPay,
            funding_account_id: c.fundingAccountId
        };
        if (!c.categoryId && c.category) {
            const cat = categories.find((cat)=>cat.name === c.category);
            if (cat) payload.category_id = cat.id;
        }
        if (!c.accountId && c.account) {
            const acc = accounts.find((a)=>a.name === c.account);
            if (acc) payload.account_id = acc.id;
        }
        const { error } = await supabase.from('commitments').insert(payload);
        if (error) {
            console.error('Error creating commitment:', error);
            alert('Error al crear compromiso: ' + error.message);
            return;
        }
        fetchCommitments(activeBookId);
    }, [
        activeBookId,
        accounts,
        categories,
        supabase,
        fetchCommitments
    ]);
    const updateCommitment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, updates)=>{
        if (!activeBookId) return;
        const payload = {};
        if (updates.name !== undefined) payload.title = updates.name;
        if (updates.amount !== undefined) payload.amount = updates.amount;
        if (updates.frequency !== undefined) payload.frequency = updates.frequency;
        if (updates.nextDueDate !== undefined) payload.next_due_date = updates.nextDueDate;
        if (updates.status !== undefined) payload.status = updates.status;
        if (updates.type !== undefined) payload.type = updates.type;
        if (updates.isActive !== undefined) payload.is_active = updates.isActive;
        if (updates.endDate !== undefined) payload.end_date = updates.endDate;
        if (updates.recurrence !== undefined) payload.recurrence = updates.recurrence;
        if (updates.transaction_type !== undefined) payload.transaction_type = updates.transaction_type;
        if (updates.isAutoPay !== undefined) payload.is_auto_pay = updates.isAutoPay;
        if (updates.fundingAccountId !== undefined) payload.funding_account_id = updates.fundingAccountId;
        if (updates.categoryId !== undefined) payload.category_id = updates.categoryId;
        if (updates.accountId !== undefined) payload.account_id = updates.accountId;
        // Fallback for names
        if (!updates.categoryId && updates.category) {
            const cat = categories.find((c)=>c.name === updates.category);
            if (cat) payload.category_id = cat.id;
        }
        if (!updates.accountId && updates.account) {
            const acc = accounts.find((a)=>a.name === updates.account);
            if (acc) payload.account_id = acc.id;
        }
        const { error } = await supabase.from('commitments').update(payload).eq('id', id);
        if (error) {
            console.error('Error updating commitment:', error);
            alert('Error updating commitment: ' + error.message);
            return;
        }
        fetchCommitments(activeBookId);
    }, [
        activeBookId,
        accounts,
        categories,
        supabase,
        fetchCommitments
    ]);
    const deleteCommitment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        const { error } = await supabase.from('commitments').delete().eq('id', id);
        if (error) {
            console.error("Error deleting commitment:", error);
            alert("Error deleting commitment: " + error.message);
            return;
        }
        if (activeBookId) fetchCommitments(activeBookId);
    }, [
        activeBookId,
        supabase,
        fetchCommitments
    ]);
    const deleteTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        // 1. Fetch transaction details to revert balance
        const { data: transaction } = await supabase.from('transactions').select('*').eq('id', id).single();
        const { error } = await supabase.from('transactions').delete().eq('id', id);
        if (error) {
            console.error("Error deleting transaction:", error);
            alert("Error deleting transaction: " + error.message);
            return;
        }
        // 2. Revert Balance
        if (transaction && transaction.account_id) {
            const { data: account } = await supabase.from('accounts').select('balance').eq('id', transaction.account_id).single();
            if (account) {
                let newBalance = Number(account.balance);
                // Inverse logic: Deleting Income -> Remove money (Subtract)
                // Inverse logic: Deleting Expense -> Give back money (Add)
                if (transaction.type === 'INCOME') {
                    newBalance -= Number(transaction.amount);
                } else {
                    newBalance += Number(transaction.amount);
                }
                await supabase.from('accounts').update({
                    balance: newBalance
                }).eq('id', transaction.account_id);
            }
        }
        // 3. Update Commitment Status if linked
        if (transaction && transaction.commitment_id) {
            await supabase.from('commitments').update({
                status: 'PENDING'
            }).eq('id', transaction.commitment_id);
            fetchCommitments(activeBookId);
        }
        if (activeBookId) {
            fetchTransactions(activeBookId);
            fetchAccounts(activeBookId);
        }
    }, [
        activeBookId,
        supabase,
        fetchTransactions,
        fetchAccounts,
        fetchCommitments
    ]);
    const updateTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, updates)=>{
        // Map UI fields to DB fields
        const payload = {};
        if (updates.amount !== undefined) payload.amount = updates.amount;
        if (updates.description !== undefined) payload.description = updates.description;
        if (updates.date !== undefined) payload.occurred_at = updates.date;
        if (updates.type !== undefined) payload.type = updates.type;
        if (updates.notes !== undefined) payload.notes = updates.notes;
        if (updates.location !== undefined) payload.location_text = updates.location;
        if (updates.beneficiary !== undefined) payload.beneficiary = updates.beneficiary;
        if (updates.frequency !== undefined) payload.frequency = updates.frequency;
        if (updates.end_date !== undefined) payload.end_date = updates.end_date;
        if (updates.end_date !== undefined) payload.end_date = updates.end_date;
        // Relationship updates
        if (updates.category_id) payload.category_id = updates.category_id;
        if (updates.account_id) payload.account_id = updates.account_id;
        // Also support name-based updates if IDs not passed (legacy/UI compatibility)
        if (!updates.category_id && updates.category) {
            const cat = categories.find((c)=>c.name === updates.category);
            if (cat) payload.category_id = cat.id;
        }
        payload.updated_at = new Date().toISOString();
        const { error } = await supabase.from('transactions').update(payload).eq('id', id);
        if (error) {
            console.error("Error updating transaction:", error);
            alert("Error updating transaction: " + error.message);
            return;
        }
        if (activeBookId) {
            fetchTransactions(activeBookId);
            fetchAccounts(activeBookId); // Balance might change
        }
    }, [
        activeBookId,
        categories,
        supabase,
        fetchTransactions,
        fetchAccounts
    ]);
    const duplicateTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        const original = transactions.find((t)=>t.id === id);
        if (!original) return;
        const newTrans = {
            ...original,
            date: new Date().toISOString(),
            notes: (original.notes ? original.notes + " " : "") + "(Copia)",
            created_at: undefined,
            updated_at: undefined
        };
        await addTransaction(newTrans);
    }, [
        transactions,
        addTransaction
    ]);
    const toggleCommitmentStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, currentStatus)=>{
        const newStatus = currentStatus === 'PAID' ? 'PENDING' : 'PAID';
        // Optimistic update
        await updateCommitment(id, {
            status: newStatus
        });
        // If marking as PAID, generate the transaction
        if (newStatus === 'PAID') {
            const commitment = commitments.find((c)=>c.id === id);
            if (commitment) {
                let transType = commitment.transaction_type || 'EXPENSE';
                // Safety override: Credit Card payments (Temporal) are always INCOME to the card
                if (commitment.accountId) {
                    const linkedAccount = accounts.find((a)=>a.id === commitment.accountId);
                    if (linkedAccount && linkedAccount.type === 'CREDIT' && commitment.type === 'TEMPORAL') {
                        transType = 'INCOME';
                    }
                }
                const transactionData = {
                    book_id: activeBookId,
                    amount: commitment.amount,
                    type: transType,
                    account: commitment.account,
                    account_id: commitment.accountId,
                    category: commitment.category,
                    category_id: commitment.categoryId,
                    description: `[Compromiso] ${commitment.name}`,
                    date: new Date().toISOString(),
                    notes: 'Generado automáticamente desde Compromisos',
                    commitment_id: id // Link back to commitment
                };
                await addTransaction(transactionData);
                // If Funding Account exists, create the EXPENSE side (Money leaving Debit)
                if (commitment.fundingAccountId) {
                    const fundingAcc = accounts.find((a)=>a.id === commitment.fundingAccountId);
                    if (fundingAcc) {
                        await addTransaction({
                            // book_id handled internally by addTransaction
                            amount: commitment.amount,
                            type: 'EXPENSE',
                            account: fundingAcc.name,
                            account_id: fundingAcc.id,
                            category: commitment.category,
                            category_id: commitment.categoryId,
                            description: `[Pago] ${commitment.name}`,
                            date: new Date().toISOString(),
                            notes: `Pago realizado a ${commitment.account}`,
                            icon: 'payments'
                        });
                    }
                }
                // Generate Next Occurrence for Recurring Commitments
                if (commitment.frequency && commitment.type !== 'TEMPORAL') {
                    const currentDate = new Date(commitment.nextDueDate);
                    // Ensure valid date
                    if (!isNaN(currentDate.getTime())) {
                        const nextDate = new Date(currentDate);
                        // Add time based on frequency (using UTC-safe or local logic? standard JS methods use local)
                        // Just basic iteration:
                        switch(commitment.frequency){
                            case 'DAILY':
                                nextDate.setDate(nextDate.getDate() + 1);
                                break;
                            case 'WEEKLY':
                                nextDate.setDate(nextDate.getDate() + 7);
                                break;
                            case 'BIWEEKLY':
                                nextDate.setDate(nextDate.getDate() + 14);
                                break;
                            case 'MONTHLY':
                                nextDate.setMonth(nextDate.getMonth() + 1);
                                break;
                            case 'QUARTERLY':
                                nextDate.setMonth(nextDate.getMonth() + 3);
                                break;
                            case 'SEMIANNUAL':
                                nextDate.setMonth(nextDate.getMonth() + 6);
                                break;
                            case 'ANNUAL':
                                nextDate.setFullYear(nextDate.getFullYear() + 1);
                                break;
                        }
                        // Check End Date
                        const hasEndDate = commitment.endDate && commitment.endDate.trim() !== '';
                        const isAfterEnd = hasEndDate && new Date(commitment.endDate) < nextDate;
                        if (!isAfterEnd) {
                            // Create the next commitment
                            // We omit 'id' effectively by constructing a new object.
                            // We pass the new calculated date.
                            const nextCommitment = {
                                ...commitment,
                                // Reset status to PENDING for the new one
                                status: 'PENDING',
                                nextDueDate: nextDate.toISOString()
                            };
                            // Remove IDs from the spread object to avoid TS issues if possible, 
                            // but addCommitment accepts Omit<Commitment, 'id'>. 
                            // We can cast or just rely on addCommitment implementation ignoring them.
                            // Let's rely on addCommitment implementation which constructs payload explicitly.
                            await addCommitment(nextCommitment);
                        }
                    }
                }
            }
        }
    }, [
        activeBookId,
        commitments,
        accounts,
        updateCommitment,
        addTransaction,
        addCommitment
    ]);
    const toggleRuleStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
    // impl
    }, []);
    const activateLedger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        handleChangeActiveBook(id);
    }, [
        handleChangeActiveBook
    ]);
    const generateSampleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
    }, [
        activeBookId,
        supabase,
        handleChangeActiveBook
    ]);
    const addBudget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (budgetData)=>{
        if (!activeBookId) return;
        const { error } = await supabase.from('budgets').insert({
            book_id: activeBookId,
            category_id: budgetData.categoryId,
            amount: budgetData.amount,
            recurrence_type: budgetData.recurrenceType || 'MONTHLY',
            recurrence_interval: budgetData.recurrenceInterval || 1,
            start_date: budgetData.startDate || new Date().toISOString(),
            end_date: budgetData.endDate || null,
            period: 'MONTHLY' // Default for legacy/required DB column if I made it NOT NULL default 'MONTHLY'
        });
        if (error) {
            console.error('Error creating budget:', error);
            alert('Error al crear presupuesto: ' + error.message);
            return;
        }
        await fetchBudgets(activeBookId);
    }, [
        activeBookId,
        supabase,
        fetchBudgets
    ]);
    const deleteBudget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        if (!activeBookId) return;
        const { error } = await supabase.from('budgets').delete().eq('id', id);
        if (error) {
            console.error('Error deleting budget:', error);
            alert('Error al eliminar presupuesto: ' + error.message);
            return;
        }
        await fetchBudgets(activeBookId);
    }, [
        activeBookId,
        supabase,
        fetchBudgets
    ]);
    const updateBudget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, updates)=>{
        if (!activeBookId) return;
        const payload = {};
        if (updates.amount !== undefined) payload.amount = updates.amount;
        if (updates.categoryId !== undefined) payload.category_id = updates.categoryId;
        if (updates.recurrenceType !== undefined) payload.recurrence_type = updates.recurrenceType;
        if (updates.recurrenceInterval !== undefined) payload.recurrence_interval = updates.recurrenceInterval;
        if (updates.startDate !== undefined) payload.start_date = updates.startDate;
        if (updates.endDate !== undefined) payload.end_date = updates.endDate;
        const { error } = await supabase.from('budgets').update(payload).eq('id', id);
        if (error) {
            console.error('Error updating budget:', error);
            alert('Error al actualizar presupuesto: ' + error.message);
            return;
        }
        await fetchBudgets(activeBookId);
    }, [
        activeBookId,
        supabase,
        fetchBudgets
    ]);
    const checkRecurringBudgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!activeBookId || budgets.length === 0) return;
        const today = new Date();
        const createdBudgets = [];
        for (const budget of budgets){
            if (!budget.recurrence_type || budget.recurrence_type === 'NONE' || !budget.start_date) continue;
            const startDate = new Date(budget.start_date);
            const endDate = budget.end_date ? new Date(budget.end_date) : null;
            let nextStartDate = null;
            let nextEndDate = null;
            if (!endDate) continue;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBefore"])(endDate, today)) {
                nextStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(endDate, 1);
                if (budget.recurrence_type === 'MONTHLY') {
                    nextStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMonths"])(startDate, 1);
                    nextEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMonth"])(nextStartDate);
                } else if (budget.recurrence_type === 'WEEKLY') {
                    nextStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addWeeks"])(startDate, 1);
                    nextEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(nextStartDate, 6);
                } else if (budget.recurrence_type === 'BIWEEKLY') {
                    nextStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(startDate, 14);
                    nextEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(nextStartDate, 13);
                } else if (budget.recurrence_type === 'ANNUAL') {
                    nextStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addYears"])(startDate, 1);
                    nextEndDate = new Date(nextStartDate.getFullYear(), 11, 31);
                } else {
                    continue;
                }
                const exists = budgets.some((b)=>b.category_id === budget.category_id && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(new Date(b.start_date), nextStartDate));
                if (!exists && nextStartDate) {
                    createdBudgets.push({
                        book_id: activeBookId,
                        category_id: budget.category_id,
                        amount: budget.limit,
                        recurrence_type: budget.recurrence_type,
                        recurrence_interval: budget.recurrence_interval,
                        start_date: nextStartDate.toISOString(),
                        end_date: nextEndDate ? nextEndDate.toISOString() : null,
                        period: 'MONTHLY'
                    });
                }
            }
        }
        if (createdBudgets.length > 0) {
            console.log("Generating recurring budgets:", createdBudgets.length);
            const { error } = await supabase.from('budgets').insert(createdBudgets);
            if (error) {
                console.error("Error generating recurring budgets:", error);
            } else {
                await fetchBudgets(activeBookId);
            }
        }
    }, [
        activeBookId,
        budgets,
        supabase,
        fetchBudgets
    ]);
    const checkAutoPayCommitments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!activeBookId || commitments.length === 0) return;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const pendingAutoPay = commitments.filter((c)=>c.isActive && c.isAutoPay && c.status === 'PENDING' && new Date(c.nextDueDate) <= today);
        for (const commitment of pendingAutoPay){
            console.log(`Auto-paying commitment: ${commitment.name}`);
            await toggleCommitmentStatus(commitment.id, 'PENDING');
        }
    }, [
        activeBookId,
        commitments,
        toggleCommitmentStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && activeBookId && commitments.length > 0) {
            checkAutoPayCommitments();
        }
    }, [
        isLoading,
        activeBookId,
        commitments
    ]);
    // Modal State
    const [isTransactionModalOpen, setIsTransactionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const openTransactionModal = ()=>setIsTransactionModalOpen(true);
    const closeTransactionModal = ()=>setIsTransactionModalOpen(false);
    const totalBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>accounts.reduce((sum, acc)=>sum + acc.balance, 0), [
        accounts
    ]);
    const fetchUserProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        let { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
        if (error && error.code !== 'PGRST116') {
            console.error("Error fetching user profile:", error);
        }
        if (error && error.code === 'PGRST116') {
            // Profile doesn't exist, create it
            const newProfile = {
                id: user.id,
                full_name: 'Paul',
                email: user.email || '',
                phone: '',
                username: '@paul',
                language: 'es',
                currency: 'PEN',
                country: 'Peru',
                city: 'Lima',
                notifications_enabled: true,
                two_factor_enabled: false
            };
            const { data: createdProfile, error: createError } = await supabase.from('profiles').insert(newProfile).select().single();
            if (createError) {
                console.error("Error creating default profile:", createError);
            } else {
                data = createdProfile;
            }
        }
        if (data) {
            setUserProfile(data);
        }
    }, [
        supabase
    ]);
    const updateUserProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (updates)=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { error } = await supabase.from('profiles').update(updates).eq('id', user.id);
        if (error) {
            console.error("Error updating profile:", error);
            alert("Error al actualizar perfil: " + error.message);
        } else {
            fetchUserProfile();
        }
    }, [
        supabase,
        fetchUserProfile
    ]);
    const uploadAvatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (file)=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;
        const fileExt = file.name.split('.').pop();
        const fileName = `${user.id}-${Math.random()}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;
        const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);
        if (uploadError) {
            console.error('Error uploading avatar:', uploadError);
            return null;
        }
        const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(filePath);
        return publicUrl;
    }, [
        supabase
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Fetch profile on mount if authorized
        fetchUserProfile();
    }, []);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            transactions,
            accounts,
            categories,
            categoryFolders,
            budgets,
            commitments,
            recurringRules,
            ledgers,
            userProfile,
            fetchUserProfile,
            updateUserProfile,
            uploadAvatar,
            addTransaction,
            deleteTransaction,
            addAccount,
            updateAccount,
            deleteAccount,
            addCommitment,
            updateCommitment,
            deleteCommitment,
            toggleCommitmentStatus,
            updateTransaction,
            duplicateTransaction,
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
            closeTransactionModal,
            addBudget,
            updateBudget,
            deleteBudget,
            checkRecurringBudgets,
            deleteCategory: async (id)=>{
                if (!activeBookId) return;
                const { error } = await supabase.from('categories').delete().eq('id', id);
                if (error) {
                    console.error("Error deleting category:", error);
                    alert("Error al eliminar categoría: " + error.message);
                } else {
                    await fetchCategories(activeBookId);
                }
            },
            deleteCategoryFolder: async (id)=>{
                if (!activeBookId) return;
                const { error } = await supabase.from('category_folders').delete().eq('id', id);
                if (error) {
                    console.error("Error deleting folder:", error);
                    alert("Error al eliminar carpeta: " + error.message);
                } else {
                    await fetchCategoryFolders(activeBookId);
                    await fetchCategories(activeBookId);
                }
            },
            notifications,
            unreadCount,
            markNotificationAsRead,
            markAllNotificationsAsRead
        }), [
        transactions,
        accounts,
        categories,
        categoryFolders,
        budgets,
        commitments,
        recurringRules,
        ledgers,
        userProfile,
        fetchUserProfile,
        updateUserProfile,
        uploadAvatar,
        addTransaction,
        deleteTransaction,
        addAccount,
        updateAccount,
        deleteAccount,
        addCommitment,
        updateCommitment,
        deleteCommitment,
        toggleCommitmentStatus,
        updateTransaction,
        duplicateTransaction,
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
        addBudget,
        updateBudget,
        deleteBudget,
        checkRecurringBudgets,
        notifications,
        unreadCount,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        supabase
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FinanceContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/FinanceContext.tsx",
        lineNumber: 1638,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useFinance = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FinanceContext);
    if (!context) throw new Error('useFinance must be used within a FinanceProvider');
    return context;
};
}),
"[project]/components/TransactionModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionModal",
    ()=>TransactionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/FinanceContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const TransactionModal = ({ isOpen, onClose, transactionToEdit })=>{
    const { isTransactionModalOpen, closeTransactionModal, addTransaction, updateTransaction, accounts, categories, formatAmount, ledgers, activeBookId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFinance"])();
    const finalIsOpen = isOpen !== undefined ? isOpen : isTransactionModalOpen;
    const finalOnClose = onClose || closeTransactionModal;
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('EXPENSE');
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [accountId, setAccountId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toTimeString().slice(0, 5));
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [beneficiary, setBeneficiary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecurring, setIsRecurring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [frequency, setFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('MONTHLY');
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Reset or Populate form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (finalIsOpen) {
            if (transactionToEdit) {
                // Edit Mode
                setAmount(transactionToEdit.amount.toString());
                setDescription(transactionToEdit.description);
                setType(transactionToEdit.type);
                setCategoryId(transactionToEdit.category_id || categories.find((c)=>c.name === transactionToEdit.category)?.id || '');
                setAccountId(transactionToEdit.account_id || accounts.find((a)=>a.name === transactionToEdit.account)?.id || '');
                const d = new Date(transactionToEdit.date);
                setDate(d.toISOString().split('T')[0]);
                setTime(d.toTimeString().slice(0, 5));
                setLocation(transactionToEdit.location || '');
                setNotes(transactionToEdit.notes || '');
                setBeneficiary(transactionToEdit.beneficiary || '');
                setIsPending(transactionToEdit.status === 'PENDING');
                setIsRecurring(transactionToEdit.isRecurring || false);
                setFrequency(transactionToEdit.frequency || 'MONTHLY');
                const endDateVal = transactionToEdit.end_date ? new Date(transactionToEdit.end_date).toISOString().split('T')[0] : '';
                setEndDate(endDateVal);
            } else {
                // Create Mode
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
                setBeneficiary('');
                setIsPending(false);
                setIsRecurring(false);
                setFrequency('MONTHLY');
                setEndDate('');
            }
        }
    }, [
        finalIsOpen,
        transactionToEdit,
        accounts,
        categories
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
        const selectedAccount = accounts.find((a)=>a.id === accountId);
        const transactionData = {
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
            beneficiary: beneficiary,
            icon: type === 'INCOME' ? 'trending_up' : 'trending_down',
            isRecurring: isRecurring,
            frequency: isRecurring ? frequency : null,
            end_date: isRecurring && endDate ? new Date(endDate).toISOString() : null
        };
        if (transactionToEdit) {
            await updateTransaction(transactionToEdit.id, transactionData);
        } else {
            await addTransaction(transactionData);
        }
        finalOnClose();
    };
    // Close on Escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape' && finalIsOpen) {
                finalOnClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        finalIsOpen,
        finalOnClose
    ]);
    if (!finalIsOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 bottom-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in transition-[left] duration-300",
        onClick: finalOnClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-[#1e2530] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-5/12 bg-gray-50 dark:bg-[#252b36] p-8 flex flex-col justify-center items-center relative border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-6 left-1/2 -translate-x-1/2 bg-gray-200 dark:bg-[#2f3642] p-1 rounded-xl flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setType('EXPENSE'),
                                    className: `px-6 py-2 rounded-lg text-sm font-bold transition-all ${type === 'EXPENSE' ? 'bg-white dark:bg-[#1e2530] shadow-sm text-danger' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`,
                                    children: "Gasto"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setType('INCOME'),
                                    className: `px-6 py-2 rounded-lg text-sm font-bold transition-all ${type === 'INCOME' ? 'bg-white dark:bg-[#1e2530] shadow-sm text-success' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`,
                                    children: "Ingreso"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 164,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 text-center w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-gray-400 uppercase tracking-widest mb-4",
                                    children: "MONTO TOTAL"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-[280px] mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: amount,
                                            onChange: (e)=>setAmount(e.target.value),
                                            placeholder: "0.00",
                                            className: `w-full bg-transparent text-6xl font-black text-center outline-none border-b-2 border-transparent focus:border-primary/50 transition-colors pb-2 placeholder-gray-200 dark:placeholder-gray-700 ${type === 'INCOME' ? 'text-success' : 'text-text-main dark:text-white'}`,
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute top-2 -left-6 text-4xl font-medium ${type === 'INCOME' ? 'text-success/50' : 'text-gray-300 dark:text-gray-600'}`,
                                            children: ledgers.find((l)=>l.id === activeBookId)?.currency || '$'
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 183,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 172,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3",
                                    children: "Cuenta de Origen"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: accountId,
                                            onChange: (e)=>setAccountId(e.target.value),
                                            className: "w-full appearance-none bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white rounded-xl px-4 py-3 pr-10 font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer",
                                            children: accounts.map((acc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: acc.id,
                                                    children: [
                                                        acc.name,
                                                        " (",
                                                        formatAmount(acc.balance),
                                                        ")"
                                                    ]
                                                }, acc.id, true, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 192,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                children: "expand_more"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TransactionModal.tsx",
                                                lineNumber: 204,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 203,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TransactionModal.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-7/12 p-8 overflow-y-auto custom-scrollbar bg-white dark:bg-[#1e2530]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-800 dark:text-white",
                                    children: "Nueva Transacción"
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 213,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: finalOnClose,
                                    className: "p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-gray-500",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TransactionModal.tsx",
                                        lineNumber: 215,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 212,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Categoría"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 223,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                        children: "category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: categoryId,
                                                    onChange: (e)=>setCategoryId(e.target.value),
                                                    className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Selecciona una categoría..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: cat.id,
                                                                children: cat.name
                                                            }, cat.id, false, {
                                                                fileName: "[project]/components/TransactionModal.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 224,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 222,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Descripción / Beneficiario"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 243,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                        children: "description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: description,
                                                    onChange: (e)=>setDescription(e.target.value),
                                                    placeholder: "Ej. Compra semanal, Starbucks, Nómina...",
                                                    className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 244,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 242,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                    children: "Fecha"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                                children: "calendar_today"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/TransactionModal.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: date,
                                                            onChange: (e)=>setDate(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 260,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                    children: "Hora"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                                children: "schedule"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/TransactionModal.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "time",
                                                            value: time,
                                                            onChange: (e)=>setTime(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 274,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 259,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Ubicación"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 292,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                        children: "location_on"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: location,
                                                    onChange: (e)=>setLocation(e.target.value),
                                                    placeholder: "Añadir ubicación...",
                                                    className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 right-0 pr-3 flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-colors text-gray-400",
                                                        title: "Usar ubicación actual",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[18px]",
                                                            children: "my_location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 293,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 291,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Notas"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 314,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: notes,
                                            onChange: (e)=>setNotes(e.target.value),
                                            placeholder: "Notas adicionales...",
                                            rows: 2,
                                            className: "w-full p-4 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 315,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 313,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-3 cursor-pointer group select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isPending ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `bg-white size-4 rounded-full shadow-md transform transition-transform duration-300 ${isPending ? 'translate-x-6' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors",
                                                    children: "Pendiente"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: isPending,
                                                    onChange: (e)=>setIsPending(e.target.checked),
                                                    className: "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 326,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-3 cursor-pointer group select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isRecurring ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `bg-white size-4 rounded-full shadow-md transform transition-transform duration-300 ${isRecurring ? 'translate-x-6' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors",
                                                    children: "Recurrente"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: isRecurring,
                                                    onChange: (e)=>setIsRecurring(e.target.checked),
                                                    className: "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 334,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 325,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                isRecurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-fade-in-down",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Frecuencia"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 346,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                        children: "repeat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: frequency,
                                                    onChange: (e)=>setFrequency(e.target.value),
                                                    className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white cursor-pointer appearance-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "DAILY",
                                                            children: "Diariamente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "WEEKLY",
                                                            children: "Semanalmente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "BIWEEKLY",
                                                            children: "Cada 2 semanas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "WEEKLY_3",
                                                            children: "Cada 3 semanas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "WEEKLY_4",
                                                            children: "Cada 4 semanas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "MONTHLY",
                                                            children: "Mensual"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "BIMONTHLY",
                                                            children: "Cada 2 meses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "QUARTERLY",
                                                            children: "Trimestral"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "SEMIANNUAL",
                                                            children: "Semestral"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "ANNUAL",
                                                            children: "Anual"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TransactionModal.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        children: "expand_more"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 347,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 345,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                isRecurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-fade-in-down delay-75",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Fecha de Finalización (Opcional)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 377,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors",
                                                        children: "event_busy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: endDate,
                                                    onChange: (e)=>setEndDate(e.target.value),
                                                    min: date,
                                                    className: "w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#252b36] border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-[#252b36] transition-all outline-none font-medium text-gray-700 dark:text-white placeholder-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setEndDate(''),
                                                    className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-danger transition-colors",
                                                    title: "Limpiar fecha",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[18px]",
                                                        children: "close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TransactionModal.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 378,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 376,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: finalOnClose,
                                            className: "flex-1 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all",
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 405,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-[2] py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    children: "save"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TransactionModal.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Guardar Transacción"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TransactionModal.tsx",
                                            lineNumber: 412,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TransactionModal.tsx",
                                    lineNumber: 404,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TransactionModal.tsx",
                            lineNumber: 219,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TransactionModal.tsx",
                    lineNumber: 211,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/TransactionModal.tsx",
            lineNumber: 150,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/TransactionModal.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__db73ede2._.js.map