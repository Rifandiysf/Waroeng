"use client";

import { useState } from "react";

import StoreHeader from "./components/StoreHeader";
import CategoryTabs from "./components/CategoryTabs";
import MenuGrid from "./components/MenuGrid";
import OrderSidebar from "./components/OrderSidebar";
import { menuItems } from "@/lib/data";

export default function Store() {
    const categories = [
        { id: "all", label: "Semua" },
        { id: "food", label: "Makanan" },
        { id: "drink", label: "Minuman" },
        { id: "snack", label: "Snack" },
    ];

    // tambahkan state
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <section className="flex h-screen ml-[90px]">
            <div className="flex-1 overflow-auto">
                <StoreHeader />

                <CategoryTabs
                    categories={categories}
                    active={activeCategory}
                    setActive={setActiveCategory}
                />

                <MenuGrid
                    menuItems={menuItems}
                    activeCategory={activeCategory}
                />
            </div>

            <OrderSidebar />
        </section>
    );
}
