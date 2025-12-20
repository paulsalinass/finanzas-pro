import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FinanceProvider } from "../context/FinanceContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Finanzas Pro",
    description: "Management dashboard for personal finances",
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
            <body className={`${inter.className} font-body selection:bg-primary/20 bg-background-page dark:bg-background-dark text-text-main dark:text-white h-screen overflow-hidden`}>
                <FinanceProvider>
                    {children}
                </FinanceProvider>
            </body>
        </html>
    );
}
