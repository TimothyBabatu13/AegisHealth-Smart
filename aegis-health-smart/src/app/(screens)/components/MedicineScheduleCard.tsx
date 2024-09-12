<<<<<<< HEAD
import { ThreeDotsIcon } from "@/components/Svgs"
import { CheckIcon } from "lucide-react"

interface MedicineScheduleCardType {
    name: string,
    qty: string,
    time: string,
    isUsed: boolean,
    active: boolean,
    className: string,
    handleClick: ()=> void
}

const MedicineScheduleCard = ({ name, qty, time, isUsed, active, className, handleClick } : MedicineScheduleCardType) => {
  return (
    <div role="button" onClick={handleClick} className={`w-[220px] min-w-[220px] cursor-pointer ${active ? 'bg-[#FEEDE7]' : 'border-[0.5px] border-[#E0E3EB]'} ${className} h-[121px] rounded-[10px] py-[15px] px-5`}>
        <div className="flex items-center justify-between">
            <h4 className="text-[15px] text-[#141414] font-medium leading-[21.75px]">{name}</h4>
            <button><ThreeDotsIcon /></button>
        </div>
        <h5 className="text-[13px] text-[#141414B2] my-[15px] font-normal leading-[18.85px]">{qty}</h5>
        <div className="flex items-center justify-between">
            <h6 className=" text-sm text-[#141414CC] font-medium leading-[20.3px]">{time}</h6>
            {isUsed ? <button><CheckIcon className="w-[15px] h-[15px]"/></button> : ''}
        </div>
    </div>
  )
}

=======
import { ThreeDotsIcon } from "@/components/Svgs"
import { CheckIcon } from "lucide-react"

interface MedicineScheduleCardType {
    name: string,
    qty: string,
    time: string,
    isUsed: boolean,
    active: boolean,
    className: string,
    handleClick: ()=> void
}

const MedicineScheduleCard = ({ name, qty, time, isUsed, active, className, handleClick } : MedicineScheduleCardType) => {
  return (
    <div role="button" onClick={handleClick} className={`w-[220px] min-w-[220px] cursor-pointer ${active ? 'bg-[#FEEDE7]' : 'border-[0.5px] border-[#E0E3EB]'} ${className} h-[121px] rounded-[10px] py-[15px] px-5`}>
        <div className="flex items-center justify-between">
            <h4 className="text-[15px] text-[#141414] font-medium leading-[21.75px]">{name}</h4>
            <button><ThreeDotsIcon /></button>
        </div>
        <h5 className="text-[13px] text-[#141414B2] my-[15px] font-normal leading-[18.85px]">{qty}</h5>
        <div className="flex items-center justify-between">
            <h6 className=" text-sm text-[#141414CC] font-medium leading-[20.3px]">{time}</h6>
            {isUsed ? <button><CheckIcon className="w-[15px] h-[15px]"/></button> : ''}
        </div>
    </div>
  )
}

>>>>>>> master
export default MedicineScheduleCard