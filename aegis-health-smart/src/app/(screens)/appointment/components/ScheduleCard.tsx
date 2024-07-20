import { TimeIcon, ZoomIcon } from "@/components/Svgs"

const ScheduleCard = ({ day, time, name, type } : {
    day: string, 
    time: string, 
    name: string, 
    type: string
}) => {
  return (
    <div className="mt-[39px] border-[0.5px] border-[#E0E3EB] rounded-[10px] py-4 px-5">
        <div className="mb-[10px]">
            <h2 className="text-base font-medium leading-[23.2px] text-[#101928]">{name}</h2>
            <h4 className="text-sm font-normal text-[#475367] leading-[20.3px]">{type}</h4>
       </div>
       <h1 className="text-sm font-normal text-[#141414] leading-[22.08px] mb-3">{day}</h1>
       <div className="flex items-center mb-3">
            <TimeIcon />
            <h3 className="text-sm text-[#141414CC] font-normal leading-[22.08px] ml-[13.25px]">{time}</h3>
       </div>
       <div className="flex items-center mb-[30px]">
            <ZoomIcon />
            <h3 className="text-sm text-[#141414] font-normal leading-[22.08px] ml-[13.25px]">Zoom</h3>
       </div>
       
       <div className="h-[0.5px] w-full bg-[#E0E3EB]"/>
       <div className="mt-[20.5px] flex justify-between">
            <button className="text-sm font-semibold text-[#141414] leading-[21px] py-2 px-4 border border-[#E0E3EB] rounded-[10px]">Reschedule</button>
            <button className="text-[#1BAD55] text-sm font-semibold leading-[21px] py-2 px-4 bg-[#E9FCF0] rounded-[10px]">Join Now</button>
       </div>
    </div>
  )
}

export default ScheduleCard