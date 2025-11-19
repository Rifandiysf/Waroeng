"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { OrderItem } from "@/lib/types";
import { formatCurrency } from "@/lib/formats";

export default function OrderSidebar() {
    const [orders, setOrders] = useState<OrderItem[]>([]);

    const updateQty = (id: string, change: number) => {
        setOrders((prev) =>
            prev.map((o) =>
                o.id === id ? { ...o, qty: Math.max(1, o.qty + change) } : o
            )
        );
    };

    const removeItem = (id: string) => {
        setOrders((prev) => prev.filter((o) => o.id !== id));
    };

    const subtotal = orders.reduce((s, i) => s + i.qty * i.price, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return (
        <aside className="w-96 h-screen bg-white shadow-lg flex flex-col">
            <div className="p-6 border-b">
                <h2 className="text-2xl font-semibold">Orders</h2>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                {orders.length === 0 ? (
                    <p className="text-center text-gray-400">Belum ada item</p>
                ) : (
                    orders.map((item) => (
                        <div key={item.id} className="bg-gray-50 p-4 rounded-lg mb-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-600">
                                        {formatCurrency(item.price)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 p-1"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>

                            <div className="flex justify-between mt-3">
                                <div className="flex items-center gap-3 border rounded-lg px-2">
                                    <button onClick={() => updateQty(item.id, -1)}>
                                        <Minus size={16} />
                                    </button>
                                    <span className="font-semibold">{item.qty}</span>
                                    <button onClick={() => updateQty(item.id, 1)}>
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <p className="font-bold">
                                    {formatCurrency(item.qty * item.price)}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="p-6 border-t bg-gray-50">
                <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatCurrency(subtotal)}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Pajak (10%)</span>
                        <span>{formatCurrency(tax)}</span>
                    </div>

                    <div className="flex justify-between text-lg font-semibold border-t pt-2">
                        <span>Total</span>
                        <span className="text-primary">{formatCurrency(total)}</span>
                    </div>
                </div>

                <Button className="w-full mt-4" disabled={orders.length === 0}>
                    Lanjutkan Pembayaran
                </Button>
            </div>
        </aside>
    );
}
