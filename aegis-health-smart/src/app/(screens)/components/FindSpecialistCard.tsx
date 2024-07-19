import Image from "next/image"
import Link from "next/link"
import RedirectToMessage from "./RedirectToMessage"

interface FindSpecialistCardType {
    img: string,
    name: string,
    specialization: string,
    active: boolean,
    className: string
}

const Badge = ({ text, className } : {
    text: string,
    className: string
}) => {
    return(
        <div className={`${className} text-xs font-medium leading-[17.4px] w-fit px-2 rounded-[10px] mb-5`}>
            {text}
        </div>
    )
}

const FindSpecialistCard = ({ img, name, specialization, active, className } : FindSpecialistCardType) => {
  return (
    <div className={`h-[325px] min-w-[264px] w-[264px] rounded-[20px] border-[0.5px] border-[#E0E3EB] p-[15px] ${className}`}>
        <Image 
            height={156}
            width={234}
            className="rounded-[20px] mb-[13px]"
            src={img}
            alt={`${name} image`}
        />
        <h4 className="text-[#141414] text-sm font-semibold leading-[21px] mb-[5px]">{name}</h4>
        <h5 className="text-xs text-[#141414CC] font-medium leading-[21px] mb-[5px]">{specialization}</h5>
        {active ? <Badge className="bg-[#E5FFF3] text-[#006635]" text="Online"/> : <Badge className="bg-[#FDECE3] text-[#AD3307]" text="Offline" />}
        <div className="flex">
            <Link className="text-sm text-[#344054] font-semibold mr-[10px] leading-[21px] py-2 px-4 border border-[#E0E3EB] rounded-[10px]" href={''}>View Schedule</Link>
            <RedirectToMessage 
                href=""
            />
        </div>
    </div>
  )
}

export default FindSpecialistCard