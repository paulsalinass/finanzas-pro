(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoginPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        const fullName = formData.get("fullName");
        if (isLogin) {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                setMessage(error.message);
            } else {
                router.push("/");
                router.refresh();
            }
        } else {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName
                    },
                    emailRedirectTo: `${window.location.origin}/auth/callback`
                }
            });
            if (error) {
                setMessage(error.message);
            } else {
                setMessage("Account created! Please check your email to confirm.");
            }
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background-page dark:bg-background-dark flex py-10 items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl w-full max-w-md p-8 relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-[-50px] left-[-50px] w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold font-display text-text-main dark:text-white mb-2",
                            children: isLogin ? "Bienvenido de nuevo" : "Comienza ahora"
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-text-muted",
                            children: isLogin ? "Ingresa tus credenciales para continuar." : "Crea tu cuenta e inicia sesión para continuar."
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-100 dark:bg-slate-800 p-1 rounded-full flex mb-8 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsLogin(true),
                            className: `flex-1 py-2 text-sm font-medium rounded-full transition-all duration-200 z-10 ${isLogin ? "bg-white dark:bg-slate-700 text-text-main dark:text-white shadow-sm" : "text-text-muted hover:text-text-main dark:hover:text-white"}`,
                            children: "Iniciar Sesión"
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsLogin(false),
                            className: `flex-1 py-2 text-sm font-medium rounded-full transition-all duration-200 z-10 ${!isLogin ? "bg-white dark:bg-slate-700 text-text-main dark:text-white shadow-sm" : "text-text-muted hover:text-text-main dark:hover:text-white"}`,
                            children: "Registrarse"
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 76,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex flex-col gap-4",
                    children: [
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-text-main dark:text-slate-300 ml-1",
                                    children: "Nombre completo"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "fullName",
                                    type: "text",
                                    placeholder: "Ej. Juan Pérez",
                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-text-main dark:text-white",
                                    required: !isLogin
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 99,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-text-main dark:text-slate-300 ml-1",
                                    children: "Correo electrónico"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "email",
                                    type: "email",
                                    placeholder: "hola@ejemplo.com",
                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-text-main dark:text-white",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-text-main dark:text-slate-300 ml-1",
                                    children: "Contraseña"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "password",
                                    type: "password",
                                    placeholder: "••••••••",
                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-text-main dark:text-white",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "mt-4 w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 145,
                                columnNumber: 29
                            }, this) : isLogin ? "Ingresar" : "Crear cuenta gratuita"
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this),
                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mt-6 p-4 rounded-xl text-sm text-center ${message.includes("created") ? "bg-green-50 text-green-600 border border-green-100" : "bg-red-50 text-red-600 border border-red-100"}`,
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 155,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 relative flex py-5 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-grow border-t border-slate-200 dark:border-slate-700"
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 161,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-shrink-0 mx-4 text-xs font-bold text-text-muted tracking-wider uppercase",
                            children: "O continúa con"
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-grow border-t border-slate-200 dark:border-slate-700"
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 163,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 160,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex-1 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-sm text-text-main dark:text-white",
                                children: "Google"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 168,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 167,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex-1 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-sm text-text-main dark:text-white",
                                children: "Apple"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.tsx",
                                lineNumber: 171,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 170,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 166,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-8 text-center text-xs text-text-muted",
                    children: [
                        "Al registrarte, aceptas nuestros ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "text-primary hover:underline",
                            children: "Términos"
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 176,
                            columnNumber: 54
                        }, this),
                        " y ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "text-primary hover:underline",
                            children: "Política de Privacidad"
                        }, void 0, false, {
                            fileName: "[project]/app/login/page.tsx",
                            lineNumber: 176,
                            columnNumber: 122
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/login/page.tsx",
                    lineNumber: 175,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/login/page.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/login/page.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
_s(LoginPage, "cgSWHYgBiI6wC2Z1jxRZn8vTzIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_login_page_tsx_e96a26ee._.js.map