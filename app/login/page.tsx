"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const supabase = createClient();
    const [isLogin, setIsLogin] = useState(true);
    const [rememberMe, setRememberMe] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const fullName = formData.get("fullName") as string;

        if (isLogin) {
            // Create a specific client for auth with the desired persistence
            // If rememberMe is true, we use defaults (persistent)
            // If rememberMe is false, we try to simulate a session cookie by omitting maxAge/expires
            // Note: @supabase/ssr might have defaults, but we attempt to override.
            const authClient = createClient(rememberMe ? undefined : { maxAge: undefined, expires: undefined, sameSite: 'lax', secure: true });

            const { error } = await authClient.auth.signInWithPassword({
                email,
                password,
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
                        full_name: fullName,
                    },
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                },
            });

            if (error) {
                setMessage(error.message);
            } else {
                setMessage("Account created! Please check your email to confirm.");
            }
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-background-page dark:bg-background-dark flex py-10 items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 text-center mb-8">
                    <h1 className="text-2xl font-bold font-display text-text-main dark:text-white mb-2">
                        {isLogin ? "Bienvenido de nuevo" : "Comienza ahora"}
                    </h1>
                    <p className="text-sm text-text-muted">
                        {isLogin
                            ? "Ingresa tus credenciales para continuar."
                            : "Crea tu cuenta e inicia sesión para continuar."}
                    </p>
                </div>

                {/* Toggle Pills */}
                <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full flex mb-8 relative">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-200 z-10 ${isLogin
                            ? "bg-white dark:bg-slate-700 text-text-main dark:text-white shadow-sm"
                            : "text-text-muted hover:text-text-main dark:hover:text-white"
                            }`}
                    >
                        Iniciar Sesión
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-200 z-10 ${!isLogin
                            ? "bg-white dark:bg-slate-700 text-text-main dark:text-white shadow-sm"
                            : "text-text-muted hover:text-text-main dark:hover:text-white"
                            }`}
                    >
                        Registrarse
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {!isLogin && (
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-text-main dark:text-slate-300 ml-1">
                                Nombre completo
                            </label>
                            <input
                                name="fullName"
                                type="text"
                                placeholder="Ej. Juan Pérez"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-text-main dark:text-white"
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-text-main dark:text-slate-300 ml-1">
                            Correo electrónico
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="hola@ejemplo.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-text-main dark:text-white"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-text-main dark:text-slate-300 ml-1">
                            Contraseña
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-text-main dark:text-white"
                            required
                        />
                    </div>

                    {isLogin && (
                        <div className="flex items-center gap-2 ml-1">
                            <button
                                type="button"
                                onClick={() => setRememberMe(!rememberMe)}
                                className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${rememberMe
                                    ? "bg-primary border-primary text-white"
                                    : "bg-transparent border-slate-300 dark:border-slate-600"
                                    }`}
                            >
                                {rememberMe && <span className="material-symbols-outlined text-[16px] font-bold">check</span>}
                            </button>
                            <button
                                type="button"
                                onClick={() => setRememberMe(!rememberMe)}
                                className="text-xs text-text-muted hover:text-text-main dark:hover:text-white transition-colors"
                            >
                                Mantener sesión iniciada
                            </button>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : isLogin ? (
                            "Ingresar"
                        ) : (
                            "Crear cuenta gratuita"
                        )}
                    </button>
                </form>

                {message && (
                    <div className={`mt-6 p-4 rounded-xl text-sm text-center ${message.includes("created") ? "bg-green-50 text-green-600 border border-green-100" : "bg-red-50 text-red-600 border border-red-100"}`}>
                        {message}
                    </div>
                )}

                <div className="mt-8 relative flex py-5 items-center">
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                    <span className="flex-shrink-0 mx-4 text-xs font-bold text-text-muted tracking-wider uppercase">O continúa con</span>
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                </div>

                <div className="flex gap-3">
                    <button className="flex-1 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="font-bold text-sm text-text-main dark:text-white">Google</span>
                    </button>
                    <button className="flex-1 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="font-bold text-sm text-text-main dark:text-white">Apple</span>
                    </button>
                </div>

                <p className="mt-8 text-center text-xs text-text-muted">
                    Al registrarte, aceptas nuestros <a href="#" className="text-primary hover:underline">Términos</a> y <a href="#" className="text-primary hover:underline">Política de Privacidad</a>.
                </p>
            </div>
        </div>
    );
}
