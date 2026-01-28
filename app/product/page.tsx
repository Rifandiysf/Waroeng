'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit2, Plus } from 'lucide-react'
import CategoryTabs from '../store/components/CategoryTabs'
import { useState } from 'react'
import { useProduct } from '@/hooks/useProduct'
import { formatCurrency } from '@/lib/formats'

const Product = () => {
    const { state, dispatch, isLoading, dataProduct } = useProduct()

    const categories = [
        { id: "all", label: "Semua" },
        { id: "food", label: "Makanan" },
        { id: "drink", label: "Minuman" },
        { id: "snack", label: "Snack" },
    ];

    const [activeCategory, setActiveCategory] = useState("all");
    return (
        <section className='ml-[90px]'>
            <div className='flex items-center justify-between m-6 mb-4'>
                <div className=''>
                    <h1 className='font-semibold text-xl'>Product</h1>
                </div>
                <div className='flex items-center gap-6'>
                    <Input
                        type="text"
                        placeholder="Search product"
                        className="w-72 bg-white"
                    />
                    <Button className='flex justify-center items-center font-semibold cursor-pointer' title='Add Product'>
                        <Plus size={18} aria-hidden="true" />Add Product
                    </Button>
                </div>
            </div>

            <div>
                <CategoryTabs
                    categories={categories}
                    active={activeCategory}
                    setActive={setActiveCategory}
                />

                <div className="mx-6 pb-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {dataProduct.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                            >
                                <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500">
                                    {item.product_name}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="p-4">
                                        <h3 className="font-semibold">{item.product_name}</h3>
                                        <p className="text-primary font-bold">
                                            {formatCurrency(item.price)}
                                        </p>
                                    </div>
                                    {/* <div className="p-4">{elements}</div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product