import { History, LayoutDashboard, Settings, Store, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Sidebar = () => {
    return (
        <aside
            className="flex flex-col items-center w-20 p-3.5 h-screen shadow-sm bg-white"
            aria-label="Main navigation sidebar"
        >
            <Link
                href={'/'}
                aria-label="Go to homepage"
                title="Waroeng - Home"
                className="mb-8"
            >
                <Image
                    src={"/Waroeng.svg"}
                    alt="Waroeng Logo"
                    width={48}
                    height={48}
                    className="rounded-sm"
                    priority
                />
            </Link>

            <nav role="navigation" aria-label="Main menu" className="flex-1 flex items-center">
                <ul className="flex flex-col gap-5" role="list">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center justify-center p-3 rounded-sm text-black hover:text-white hover:bg-[#FF3F4F] transition-colors"
                            aria-label="Dashboard"
                            title="Dashboard"
                        >
                            <LayoutDashboard size={24} aria-hidden="true" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/store"
                            className="flex items-center justify-center p-3 rounded-sm text-black hover:text-white hover:bg-[#FF3F4F] transition-colors"
                            aria-label="Store"
                            title="Store"
                        >
                            <Store size={24} aria-hidden="true" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/history"
                            className="flex items-center justify-center p-3 rounded-sm text-black hover:text-white hover:bg-[#FF3F4F] transition-colors"
                            aria-label="History"
                            title="History"
                        >
                            <History size={24} aria-hidden="true" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/product"
                            className="flex items-center justify-center p-3 rounded-sm text-black hover:text-white hover:bg-[#FF3F4F] transition-colors"
                            aria-label="Product"
                            title="Product"
                        >
                            <Utensils size={24} aria-hidden="true" />
                        </Link>
                    </li>
                </ul>
            </nav>

            <Link
                href="/settings"
                className="flex items-center justify-center p-3 rounded-sm text-black hover:text-white hover:bg-[#FF3F4F] transition-colors mt-8"
                aria-label="Settings"
                title="Settings"
            >
                <Settings size={24} aria-hidden="true" />
            </Link>
        </aside>
    )
}

export default Sidebar