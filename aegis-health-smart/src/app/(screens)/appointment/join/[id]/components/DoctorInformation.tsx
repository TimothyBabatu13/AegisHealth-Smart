import { TimeIcon, VerifiedTickIcon } from "@/components/Svgs"
import Image from "next/image"

const DoctorInformationCard = ({ src, name, type, isActive, time } : {
  src : string, 
  name: string, 
  type: string, 
  isActive: boolean, 
  time: string
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="h-fit w-fit relative mr-3">
          <Image 
            height={40}
            width={40}
            src={src}
            alt={`${name} image`}
          />
          {isActive && <div className="h-[10px] w-[10px] bg-[#04802E] rounded-[50%] absolute right-0 bottom-[4px]"/>}
        </div>
        <div>
          <h2 className="text-lg text-[#101928] font-semibold leading-[26.1px]">{name}</h2>
          <h3 className="text-[#141414CC] text-sm font-normal leading-[20.3px]">{type}</h3>
        </div>
      </div>

      <div className="flex items-center">
        <TimeIcon />
        <h5 className="text-sm text-[#141414] font-normal leading-[22px] ml-[10px]">{time}</h5>
      </div>

    </div>
  )
}

const DoctorInformation = () => {
  return (
    <div className="mb-5">
      <DoctorInformationCard 
        src="/name....jpg"
        name="Dr. Uwadinachi Ofoegbunam"
        type="General Practioner "
        isActive
        time="11.30 - 12.00 (30 min)"
      />
    </div>
  )
}

export default DoctorInformation