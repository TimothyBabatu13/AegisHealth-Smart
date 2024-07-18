interface MedicineScheduleCardType {
    name: string,
    qty: string,
    time: string,
    isUsed: boolean,
    active: boolean,
    className: string
}

const MedicineScheduleCard = ({ name, qty, time, isUsed, active, className } : MedicineScheduleCardType) => {
  return (
    <div role="button" className={`w-[220px] cursor-pointer ${active ? 'bg-[#FEEDE7]' : 'border-[0.5px] border-[#E0E3EB]'} ${className} h-[121px] rounded-[10px] py-[15px] px-5`}>
        <div className="flex items-center justify-between">
            <h4 className="text-[15px] text-[#141414] font-medium leading-[21.75px]">{name}</h4>
            <button>...</button>
        </div>
        <h5 className="text-[13px] text-[#141414B2] my-[15px] font-normal leading-[18.85px]">{qty}</h5>
        <div className="flex items-center justify-between">
            <h6 className=" text-sm text-[#141414CC] font-medium leading-[20.3px]">{time}</h6>
            {isUsed ? <button>USed</button> : ''}
        </div>
    </div>
  )
}

export default MedicineScheduleCard