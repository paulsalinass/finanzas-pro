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
                "primary": "#10B981", // Emerald 500: Vibrant but soft green
                "primary-hover": "#059669", // Emerald 600
                "background-page": "#f6f7f8",
                "background-dark": "#111821",
                "text-main": "#1e293b",
                "text-muted": "#64748b",
                "text-light": "#94a3b8",
                "success": "#34d399",
                "warning": "#fbbf24",
                "danger": "#fb7185",
                "dark-muted": "#9da9b8",
                "dark-card": "rgba(26, 30, 36, 0.65)",
            },
            fontFamily: {
                "display": ["'Plus Jakarta Sans'", "sans-serif"],
                "body": ["'Plus Jakarta Sans'", "sans-serif"],
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
                "glass": "0 8px 32px 0 rgba(16, 185, 129, 0.04)", // Updated shadow tint
                "soft": "0 4px 20px rgba(0, 0, 0, 0.03)",
                "premium": "0 20px 50px rgba(0, 0, 0, 0.05)",
                "dark-soft": "0 4px 30px rgba(0, 0, 0, 0.1)"
            },
            backgroundImage: {
                "gradient-primary": "linear-gradient(135deg, #6EE7B7 0%, #10B981 100%)", // Emerald 300 to Emerald 500
            }
        },
    },
    plugins: [],
};
export default config;
