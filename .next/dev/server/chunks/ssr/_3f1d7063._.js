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
"[project]/app/actions/book-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e45e70d015f84a65d26dca3e235a6efb164dd243":"deleteBook","6095f0c14631a054e1fcd79cfd112a6245dfe25f6d":"createBook","70063ef086deaa73ce98203c3b48b46dddf6c2ed0b":"updateBook"},"",""] */ __turbopack_context__.s([
    "createBook",
    ()=>createBook,
    "deleteBook",
    ()=>deleteBook,
    "updateBook",
    ()=>updateBook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function createBook(prevState, formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            message: 'Error: No autorizado. Por favor inicia sesión.'
        };
    }
    const name = formData.get('name');
    const description = formData.get('description');
    const currency = formData.get('currency');
    const periodStart = formData.get('periodStart');
    const fiscalClose = formData.get('fiscalClose');
    // Appearance
    const color = formData.get('color') || 'blue';
    const icon = formData.get('icon') || 'Wallet';
    // Visualization settings
    const hideCents = formData.get('hideCents') === 'on';
    const groupSmall = formData.get('groupSmall') === 'on';
    const autoDark = formData.get('autoDark') === 'on';
    // Notification settings
    const weeklySummary = formData.get('weeklySummary') === 'on';
    const budgetAlerts = formData.get('budgetAlerts') === 'on';
    const paymentReminders = formData.get('paymentReminders') === 'on';
    const { data, error } = await supabase.from('books').insert({
        user_id: user.id,
        name,
        short_description: description,
        currency,
        color,
        icon,
        period_start: periodStart || null,
        fiscal_close_month: fiscalClose,
        visualization_settings: {
            hide_cents: hideCents,
            group_small_categories: groupSmall,
            auto_dark_mode: autoDark
        },
        notification_settings: {
            weekly_summary: weeklySummary,
            budget_alerts: budgetAlerts,
            payment_reminders: paymentReminders
        }
    }).select().single();
    if (error) {
        return {
            message: 'Error creating book: ' + error.message
        };
    }
    if (data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        return {
            message: 'Libro creado correctamente',
            data: data
        };
    }
    return {
        message: 'Error desconocido al crear el libro'
    };
}
async function updateBook(id, prevState, formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const name = formData.get('name');
    const description = formData.get('description');
    const currency = formData.get('currency');
    const periodStart = formData.get('periodStart');
    const fiscalClose = formData.get('fiscalClose');
    // Appearance
    const color = formData.get('color') || 'blue';
    const icon = formData.get('icon') || 'Wallet';
    // Visualization settings
    const hideCents = formData.get('hideCents') === 'on';
    const groupSmall = formData.get('groupSmall') === 'on';
    const autoDark = formData.get('autoDark') === 'on';
    // Notification settings
    const weeklySummary = formData.get('weeklySummary') === 'on';
    const budgetAlerts = formData.get('budgetAlerts') === 'on';
    const paymentReminders = formData.get('paymentReminders') === 'on';
    const { error } = await supabase.from('books').update({
        name,
        short_description: description,
        currency,
        color,
        icon,
        period_start: periodStart || null,
        fiscal_close_month: fiscalClose,
        visualization_settings: {
            hide_cents: hideCents,
            group_small_categories: groupSmall,
            auto_dark_mode: autoDark
        },
        notification_settings: {
            weekly_summary: weeklySummary,
            budget_alerts: budgetAlerts,
            payment_reminders: paymentReminders
        }
    }).eq('id', id);
    if (error) {
        return {
            message: 'Error updating book: ' + error.message
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/books/${id}/settings`);
    return {
        message: 'Libro actualizado correctamente'
    };
}
async function deleteBook(id) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.from('books').delete().eq('id', id);
    if (error) {
        throw new Error(error.message);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createBook,
    updateBook,
    deleteBook
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBook, "6095f0c14631a054e1fcd79cfd112a6245dfe25f6d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBook, "70063ef086deaa73ce98203c3b48b46dddf6c2ed0b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBook, "40e45e70d015f84a65d26dca3e235a6efb164dd243", null);
}),
"[project]/.next-internal/server/app/(dashboard)/books/[id]/settings/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/book-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$book$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/book-actions.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/(dashboard)/books/[id]/settings/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/book-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40e45e70d015f84a65d26dca3e235a6efb164dd243",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$book$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBook"],
    "6095f0c14631a054e1fcd79cfd112a6245dfe25f6d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$book$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBook"],
    "70063ef086deaa73ce98203c3b48b46dddf6c2ed0b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$book$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBook"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$books$2f5b$id$5d2f$settings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$book$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/books/[id]/settings/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/book-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$book$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/book-actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_3f1d7063._.js.map