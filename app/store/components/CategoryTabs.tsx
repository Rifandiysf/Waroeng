"use client";

import { Category } from "@/lib/types";

type Props = {
    categories: Category[];
    active: string;
    setActive: (value: string) => void;
};

export default function CategoryTabs({ categories, active, setActive }: Props) {
    return (
        <div className="mx-6 mb-6">
            <nav className="flex gap-8 border-b" role="tablist">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActive(cat.id)}
                        className={`pb-3 px-1 font-medium relative ${active === cat.id
                                ? "text-primary"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        {cat.label}

                        {active === cat.id && (
                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-prtext-primary rounded-t-full" />
                        )}
                    </button>
                ))}
            </nav>
        </div>
    );
}
