'use client';
import { useState } from "react"
import MedicineScheduleCard from "./MedicineScheduleCard"

interface MedicineScheduleCardType {
    name: string,
    qty: string,
    time: string,
    isUsed: boolean,
}

const MedicineSchedule = () => {
    const [no, setNo] = useState(0);
    const data : MedicineScheduleCardType[] = [
        {
            name: 'Gynsomin Capsule',
            qty: '500mg, 1 capsule',
            time: 'After breakfast',
            isUsed: true,
        },
        {
            name: 'Gynsomin Capsule',
            qty: '500mg, 1 capsule',
            time: 'After breakfast',
            isUsed: false,
        },
        {
            name: 'Gynsomin Capsule',
            qty: '500mg, 1 capsule',
            time: 'After breakfast',
            isUsed: false,
        }
    ]

  return (
    <div className="mt-10">
        <h4 className="text-[18px] font-semibold leading-5 mb-5">Medicine Schedule</h4>
        <div className="flex overflow-x-scroll scroll-smooth">
            {data.map(({name, qty, time, isUsed}, id) => (<MedicineScheduleCard className={id === data.length-1 ? '':`mr-5`} handleClick={()=> setNo(id)} key={id} qty={qty} active={no === id} name={name} time={time} isUsed={isUsed}/>))}
        </div>
    </div>
  )
}

export default MedicineSchedule