import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TransactionData } from "@/lib/data";
import { EllipsisVertical } from "lucide-react";

export default function DataTable() {
    return (
        <div className="overflow-hidden rounded-lg border">
            <Table className="table-fixed">
                <TableHeader className="bg-white sticky top-0 z-10">
                    <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Item</TableHead>
                        <TableHead>Qty</TableHead>
                        <TableHead>Total Price</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {TransactionData.map((row, index) => {
                        const totalQty = row.item.reduce((sum, i) => sum + i.qty, 0);
                        const totalPrice = row.item.reduce((sum, i) => sum + i.qty * i.price, 0);
                        const itemNames = row.item.map((i) => i.name).join(", ");

                        return (
                            <TableRow key={index} className="bg-white/45">
                                <TableCell>{row.invoice}</TableCell>
                                <TableCell>{itemNames}</TableCell>
                                <TableCell>{totalQty}</TableCell>
                                <TableCell>IDR {totalPrice.toLocaleString("id-ID")}</TableCell>
                                <TableCell>{row.date.toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" className="hover:bg-[#1a1a1a0c] hover:text-black">
                                        <EllipsisVertical />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
}