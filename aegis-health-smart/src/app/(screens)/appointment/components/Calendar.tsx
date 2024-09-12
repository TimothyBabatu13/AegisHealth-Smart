<<<<<<< HEAD
'use client';
import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react"



const CalendarComponent = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    
    return (
    <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border flex justify-center"
        classNames={{day_selected: 'bg-[#1BAD55] text-[#FFFFFF] rounded-[50%] flex items-center justify-centeR'}}
    />
)
}

=======
'use client';
import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react"



const CalendarComponent = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    
    return (
    <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border flex justify-center"
        classNames={{day_selected: 'bg-[#1BAD55] text-[#FFFFFF] rounded-[50%] flex items-center justify-centeR'}}
    />
)
}

>>>>>>> master
export default CalendarComponent