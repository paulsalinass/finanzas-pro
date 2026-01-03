import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FinanceProvider } from "../context/FinanceContext";
import { TransactionModal } from "@/components/TransactionModal";


const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Finanzas Pro",
    description: "Management dashboard for personal finances",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="light">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
            </head>
            <body suppressHydrationWarning={true} className={`${plusJakarta.className} font-body selection:bg-primary/20 bg-background-page dark:bg-background-dark text-text-main dark:text-white h-screen overflow-hidden`}>
                <FinanceProvider>
                    {children}
                    <TransactionModal />
                </FinanceProvider>
            </body>
        </html>
    );
}
