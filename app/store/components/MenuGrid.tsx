"use client";

import { MenuItem } from "@/lib/types";
import { formatCurrency } from "@/lib/formats";

export default function MenuGrid({
    menuItems,
    activeCategory,
}: {
    menuItems: MenuItem[];
    activeCategory: string;
}) {

    const filtered =
        activeCategory === "all"
            ? menuItems
            : menuItems.filter((i) => i.category === activeCategory);

    return (
        <div className="mx-6 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                        <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500">
                            {item.name}
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-primary font-bold">
                                {formatCurrency(item.price)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
