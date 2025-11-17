'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'

const Page = () => {
    const [currentDate, setCurrentDate] = useState<string>('')

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()

            const dateOptions: Intl.DateTimeFormatOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            const formattedDate = now.toLocaleDateString('id-ID', dateOptions)

            setCurrentDate(formattedDate)
        }

        updateDateTime()
        const interval = setInterval(updateDateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <section className='relative flex'>
                <div className='w-full'>
                    <div className="flex items-center justify-between m-6">
                        <div>
                            <h1 className="font-semibold text-xl">Waroeng</h1>
                            <div className="flex items-center gap-2 mt-2 text-gray-600">
                                <time dateTime={currentDate ? new Date().toISOString() : ''}>
                                    <span className="font-medium">{currentDate}</span>
                                </time>
                            </div>
                        </div>
                        <div>
                            <Input
                                type='text'
                                placeholder='Search Product, Food, Snack, etc...'
                                className='w-72 bg-white'
                            />
                        </div>
                    </div>
                </div>

                <div className='relative w-200 h-screen bg-white p-6'>
                    <h1 className='text-2xl font-semibold'>Orders</h1>

                    <div></div>

                    <div className='absolute p-5 bottom-0 right-0 left-0'>
                        <Button className='w-full h-12 font-bold text-base cursor-pointer'>Lanjutkan Pembayaran</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page