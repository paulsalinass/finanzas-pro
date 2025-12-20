import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#307de8",
                "primary-hover": "#2563eb",
                "background-page": "#f6f7f8",
                "background-dark": "#111821",
                "text-main": "#1e293b",
                "text-muted": "#64748b",
                "text-light": "#94a3b8",
                "success": "#0bda5e",
                "warning": "#f59e0b",
                "danger": "#fa6238",
                "dark-muted": "#9da9b8",
                "dark-card": "rgba(26, 30, 36, 0.65)",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "body": ["Inter", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "2xl": "1.25rem",
                "3xl": "1.75rem",
                "full": "9999px"
            },
            boxShadow: {
                "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.04)",
                "soft": "0 4px 20px rgba(0, 0, 0, 0.03)",
                "premium": "0 20px 50px rgba(0, 0, 0, 0.05)",
                "dark-soft": "0 4px 30px rgba(0, 0, 0, 0.1)"
            }
        },
    },
    plugins: [],
};
export default config;
