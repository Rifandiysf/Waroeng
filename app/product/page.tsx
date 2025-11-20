'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit2, Plus } from 'lucide-react'
import CategoryTabs from '../store/components/CategoryTabs'
import MenuGrid from '../store/components/MenuGrid'
import { useState } from 'react'
import { menuItems } from '@/lib/data'

const Product = () => {
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

                <MenuGrid
                    menuItems={menuItems}
                    activeCategory={activeCategory}
                    elements={
                        <Button title='Edit'>
                            <Edit2 size={18}/>
                        </Button>
                    }
                />
            </div>
        </section>
    )
}

export default Product