import { TimeIcon, VerifiedTickIcon, ZoomIcon } from "@/components/Svgs"
import Image from "next/image"

interface ZoomCardType {
    day: string,
    time: string,
    name: string,
    isVerified: boolean,
    type: string,
    img: string
}
const ZoomCard = ({ day, time, name, isVerified, type, img } : ZoomCardType) => {
  return (
    <div className="mt-[39px] border-[0.5px] border-[#E0E3EB] rounded-[10px] py-4 px-5">
       <h1 className="text-base font-semibold text-[#141414] leading-[26.5px] mb-3">{day}</h1>
       <div className="flex items-center mb-3">
            <TimeIcon />
            <h3 className="text-sm text-[#141414CC] font-normal leading-[22.08px] ml-[13.25px]">{time}</h3>
       </div>
       <div className="flex items-center mb-[30px]">
            <ZoomIcon />
            <h3 className="text-sm text-[#141414CC] font-normal leading-[22.08px] ml-[13.25px]">Zoom</h3>
       </div>
       <div className="flex items-center mb-[20.79px]">
            <div className="mr-3 h-fit w-fit relative">
                <Image 
                    height={50}
                    width={50}
                    src={img}
                    alt={`${name} image`}
                />
                {isVerified && <VerifiedTickIcon className="absolute right-0 -bottom-[2px]"/>}
            </div>
            <div>
                <h2 className="text-base font-medium leading-[26.5px] text-[#141414] mb-[2.21px]">{name}</h2>
                <h4 className="text-sm font-normal text-[#141414CC] leading-[22.08px]">{type}</h4>
            </div>
       </div>
       <div className="h-[0.5px] w-full bg-[#E0E3EB]"/>
       <div className="mt-[20.5px] flex justify-between">
            <button className="text-sm font-semibold text-[#141414] leading-[21px] py-2 px-4 border border-[#E0E3EB] rounded-[10px]">Reschedule</button>
            <button className="text-[#291ED7] text-sm font-semibold leading-[21px] py-2 px-4 bg-[#EAE9FC] rounded-[10px]">Join Now</button>
       </div>
    </div>
  )
}

export default ZoomCard