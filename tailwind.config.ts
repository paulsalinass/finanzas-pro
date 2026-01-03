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
                "primary": "#8967F3", // New Purple Primary
                "primary-hover": "#7C5DF0",
                "secondary": "#A78BFA",
                "background-page": "#F8F9FE", // Lighter, more pastel gray/blue
                "background-dark": "#0B1120", // Deep matte blue-black
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
                "DEFAULT": "0.75rem", // More friendly default
                "lg": "1rem",
                "xl": "1.5rem",
                "2xl": "2rem",
                "3xl": "2.5rem",
                "full": "9999px"
            },
            boxShadow: {
                "glass": "0 8px 32px 0 rgba(137, 103, 243, 0.1)", // Purple tinted shadow
                "soft": "0 10px 40px -10px rgba(0,0,0,0.05)",
                "premium": "0 20px 40px -10px rgba(0,0,0,0.1)",
                "dark-soft": "0 10px 40px -10px rgba(0,0,0,0.3)"
            },
            backgroundImage: {
                "gradient-primary": "linear-gradient(135deg, #8967F3 0%, #6C4DE6 100%)",
                "gradient-pastel": "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)",
            }
        },
    },
    plugins: [],
};
export default config;
