import { VerifiedTickIcon } from "@/components/Svgs"
import Image from "next/image"
import RedirectToMessage from "./RedirectToMessage"

interface UpcomingSessionCardType {
    img: string,
    isActive: boolean,
    name: string,
    type: string,
}

const UpcomingSessionCard = ({ img, isActive, name, type } : UpcomingSessionCardType) => {
  return (
    <div className="flex items-center border border-[#E0E3EB] rounded-[8px] py-[10px] px-5 mb-[18px]">
        <div className="mr-3 h-fit w-fit relative">
            <Image 
                height={40}
                width={40}
                src={img}
                alt={`${name} image`}
            />
            {isActive && <VerifiedTickIcon className="absolute right-0 -bottom-[2px]"/>}
        </div>
        <div className="flex-grow mr-3">
            <h2 className="text-sm font-medium leading-[20.3px] text-[#101928]">{name}</h2>
            <h4 className="text-sm font-normal text-[#475367] leading-[20.3px]">{type}</h4>
        </div>
        <RedirectToMessage 
            href=""
        />
    </div>
  )
}

export default UpcomingSessionCard