import MedicineScheduleCard from "./MedicineScheduleCard"

interface MedicineScheduleCardType {
    name: string,
    qty: string,
    time: string,
    isUsed: boolean,
    active: boolean
}

const MedicineSchedule = () => {
    const data : MedicineScheduleCardType[] = [
        {
            name: 'Gynsomin Capsule',
            qty: '500mg, 1 capsule',
            time: 'After breakfast',
            isUsed: true,
            active: true
        },
        {
            name: 'Gynsomin Capsule',
            qty: '500mg, 1 capsule',
            time: 'After breakfast',
            isUsed: false,
            active: false
        },
        {
            name: 'Gynsomin Capsule',
            qty: '500mg, 1 capsule',
            time: 'After breakfast',
            isUsed: false,
            active: false
        }
    ]
  return (
    <div className="mt-10">
        <h4 className="text-[18px] font-semibold leading-5 mb-5">Medicine Schedule</h4>
        <div className="flex">
            {data.map(({name, qty, time, isUsed, active}, id) => (<MedicineScheduleCard className={id === data.length-1 ? '':`mr-5`} key={id} qty={qty} active={active} name={name} time={time} isUsed={isUsed}/>))}
        </div>
    </div>
  )
}

export default MedicineSchedule