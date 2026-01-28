export function formatCurrency(value: number | string): string {
    const number =
        typeof value === "string"
            ? Number(value.replace(/[^0-9]/g, ""))
            : value

    if (isNaN(number)) return "Rp 0"

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(number)
}

