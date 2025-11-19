"use client";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function StoreHeader() {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            setCurrentDate(formatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-between m-6 mb-4">
            <div>
                <h1 className="font-semibold text-xl">Waroeng</h1>
                <div className="text-gray-600 mt-2">
                    <span className="font-medium text-sm">{currentDate}</span>
                </div>
            </div>

            <Input
                type="text"
                placeholder="Search Product, Food, Snack, etc..."
                className="w-72 bg-white"
            />
        </div>
    );
}
