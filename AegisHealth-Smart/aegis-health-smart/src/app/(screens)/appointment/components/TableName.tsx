import { VerifiedTickIcon } from "@/components/Svgs"
import Image from "next/image"

const TableName = ({ img, isActive, name, type } : {
    img: string,
    isActive: boolean,
    name: string,
    type: string
}) => {
  return (
    <div className="flex items-center">
        <div className="mr-3 h-fit w-fit relative">
            <Image 
                height={40}
                width={40}
                src={img}
                alt={`${name} image`}
                className="min-w-10"
            />
            {isActive && <VerifiedTickIcon className="absolute right-0 -bottom-[2px]"/>}
        </div>
        <div className="">
            <h2 className="text-sm font-medium leading-[20.3px] text-[#101928]">{name}</h2>
            <h4 className="text-sm font-normal text-[#475367] leading-[20.3px]">{type}</h4>
        </div>
    </div>
  )
}

export default TableName