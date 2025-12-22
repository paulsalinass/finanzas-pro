module.exports = [
"[project]/utils/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://kddrngqmcltfwwfgmjxu.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZHJuZ3FtY2x0Znd3Zmdtanh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNTQ5MjYsImV4cCI6MjA4MTczMDkyNn0.2g6pmDPIV_S6s3VEGzFwUdYP857_okpDR2jbJDVimEE"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            }
        }
    });
}
}),
"[project]/app/actions/transaction-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"409177d0e1657581eae6dcd075dd20681ea0fe4bf6":"resetAndSeedTransactions"},"",""] */ __turbopack_context__.s([
    "resetAndSeedTransactions",
    ()=>resetAndSeedTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function resetAndSeedTransactions(bookId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // 1. Delete all transactions for this book
    const { error: deleteError } = await supabase.from('transactions').delete().eq('book_id', bookId);
    if (deleteError) return {
        error: 'Error deleting transactions: ' + deleteError.message
    };
    // 2. Fetch available resources
    const { data: categories } = await supabase.from('categories').select('id, name').eq('book_id', bookId);
    const { data: accounts } = await supabase.from('accounts').select('id, name').eq('book_id', bookId);
    if (!categories || categories.length === 0) return {
        error: 'No hay categorías disponibles para crear transacciones.'
    };
    if (!accounts || accounts.length === 0) return {
        error: 'No hay cuentas disponibles. Crea una cuenta primero.'
    };
    // 3. Generate Data
    const transactions = [];
    const now = new Date();
    // Helper to get random item
    const getRand = (arr)=>arr[Math.floor(Math.random() * arr.length)];
    // 2 Incomes
    for(let i = 0; i < 2; i++){
        transactions.push({
            book_id: bookId,
            account_id: getRand(accounts).id,
            category_id: getRand(categories).id,
            amount: Number((Math.random() * 4000 + 500).toFixed(2)),
            type: 'INCOME',
            description: `Ingreso de prueba ${i + 1}`,
            occurred_at: new Date(now.getTime() - Math.random() * 1000 * 60 * 60 * 24 * 30).toISOString()
        });
    }
    // 2 Expenses
    for(let i = 0; i < 2; i++){
        transactions.push({
            book_id: bookId,
            account_id: getRand(accounts).id,
            category_id: getRand(categories).id,
            amount: Number((Math.random() * 200 + 10).toFixed(2)),
            type: 'EXPENSE',
            description: `Gasto de prueba ${i + 1}`,
            occurred_at: new Date(now.getTime() - Math.random() * 1000 * 60 * 60 * 24 * 30).toISOString()
        });
    }
    // 4. Insert
    const { error: insertError } = await supabase.from('transactions').insert(transactions);
    if (insertError) return {
        error: 'Error inserting generic data: ' + insertError.message
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    resetAndSeedTransactions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resetAndSeedTransactions, "409177d0e1657581eae6dcd075dd20681ea0fe4bf6", null);
}),
"[project]/.next-internal/server/app/(dashboard)/transactions/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/transaction-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$transaction$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/transaction-actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/(dashboard)/transactions/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/transaction-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "409177d0e1657581eae6dcd075dd20681ea0fe4bf6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$transaction$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resetAndSeedTransactions"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$transactions$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$transaction$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/transactions/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/transaction-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$transaction$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/transaction-actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_4227ce44._.js.map