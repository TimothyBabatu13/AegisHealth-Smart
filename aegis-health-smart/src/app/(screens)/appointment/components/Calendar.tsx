'use client';
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"



const CalendarComponent = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    console.log(date)
    return (
    <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        classNames={{day_selected: 'bg-[#1BAD55] text-[#FFFFFF] rounded-[50%] flex items-center justify-centeR'}}
    />
)
}

export default CalendarComponent