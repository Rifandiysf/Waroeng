'use client'
import { Input } from '@/components/ui/input'
import DataTable from './components/DataTable'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { ChevronDownIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import React from 'react'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

const History = () => {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<DateRange | undefined>(undefined)

    return (
        <section className='ml-[90px]'>
            <div className='flex items-center justify-between m-6 mb-4'>
                <div>
                    <h1 className='font-semibold text-xl'>History Transaction</h1>
                </div>

                <div className='flex justify-center items-center gap-6'>
                    <div>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="date"
                                    className="w-56 justify-between font-normal"
                                >
                                    {date?.from && date?.to
                                        ? `${format(date.from, "dd MMM yyyy")} - ${format(date.to, "dd MMM yyyy")}`
                                        : "Filter Date"}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                <Calendar
                                    mode="range"
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                    defaultMonth={date?.from}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <Input
                        type="text"
                        placeholder="Search"
                        className="w-72 bg-white"
                    />
                </div>
            </div>

            <div className='relative mx-5'>
                <DataTable />
            </div>
        </section>
    )
}

export default History
