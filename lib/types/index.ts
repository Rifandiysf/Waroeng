export interface OrderItem {
    id: string
    name: string
    qty: number
    price: number
}

export interface MenuItem {
    id: string
    name: string
    price: number
    category: string
    image: string
}

export interface Category {
    id: string
    label: string
}

export interface MenuGridProps {
    menuItems: MenuItem[]
    activeTab: string
    onAddToOrder: (item: MenuItem) => void
}

export interface OrderSidebarProps {
    orders: OrderItem[]
    onUpdateQuantity: (id: string, change: number) => void
    onRemoveItem: (id: string) => void
}

export interface CategoryTabsProps {
    categories: Category[]
    activeTab: string
    onTabChange: (tabId: string) => void
}

export type TransactionDataType = {
    invoice: string
    item: {
        name: string
        qty: number
        price: number
    }[]
    date: Date
}