
import { Sidebar } from "../../components/Sidebar";
import { MobileNav } from "../../components/MobileNav";
import React from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen w-full relative overflow-hidden">
            {/* Background Gradients - Re-added for dashboard consistency */}
            <div className="fixed top-[-10%] left-[-5%] w-[40vw] h-[40vh] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-5%] w-[35vw] h-[35vh] bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <Sidebar />

            <main className="flex-1 relative h-full flex flex-col z-10 overflow-hidden">
                {children}
                <MobileNav />
            </main>
        </div>
    );
}
