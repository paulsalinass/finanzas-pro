import Link from "next/link"
import { ArrowLeft, Book, Calendar, Eye, Bell, AlertTriangle } from "lucide-react"

export function BookConfigLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full w-full overflow-y-auto scrollbar-hide relative pb-20 scroll-smooth">
            <div className="max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col gap-8">
                {/* Breadcrumbs */}
                <nav className="text-sm text-text-muted flex items-center gap-2">
                    <Link href="/dashboard" className="hover:text-primary transition-colors">Inicio</Link>
                    <span>&gt;</span>
                    <span className="text-text-main font-medium">Configuración del Libro</span>
                </nav>

                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-text-main">Configuración del Libro</h1>
                    <p className="text-text-muted text-lg font-normal">Gestiona los parámetros fundamentales, divisas y preferencias de visualización.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1 space-y-1">
                        <nav className="flex flex-col gap-1 sticky top-6">
                            <NavItem href="#general" icon={Book} label="General" active />
                            <NavItem href="#periods" icon={Calendar} label="Periodos y Fechas" />
                            <NavItem href="#visualization" icon={Eye} label="Visualización" />
                            <NavItem href="#notifications" icon={Bell} label="Notificaciones" />
                            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-white/5">
                                <NavItem href="#danger" icon={AlertTriangle} label="Zona de Peligro" variant="danger" />
                            </div>
                        </nav>
                    </aside>

                    <main className="lg:col-span-3 space-y-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

function NavItem({ href, icon: Icon, label, active, variant = "default" }: any) {
    const isDanger = variant === "danger"
    return (
        <a
            href={href}
            className={`
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${active
                    ? "bg-primary/10 text-primary"
                    : isDanger
                        ? "text-danger hover:bg-danger/10"
                        : "text-text-muted hover:bg-gray-100 dark:hover:bg-white/5 hover:text-text-main"
                }
            `}
        >
            <Icon size={18} />
            {label}
        </a>
    )
}
