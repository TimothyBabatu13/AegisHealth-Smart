import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

const Text = ({ width, address, hospital, className } : {
  width: boolean,
  address: string,
  hospital: string,
  className?: string
}) => {
  return (
    <>
      <h3 className={cn(`text-[#344054] ${width && 'w-[100px] min-[585px]:w-[201px]'} overflow-x-hidden whitespace-nowrap overflow-ellipsis text-sm font-medium leading-[20.3px] ` + className)}>{hospital}</h3>
      <h4 className={cn(`text-[#667185] ${width && 'w-[100px] min-[585px]:w-[201px]'} overflow-x-hidden whitespace-nowrap overflow-ellipsis text-sm font-normal leading-[20.3px] ` + className)}>{address}</h4>
    </>
  )
}

const TableHospital = ({ hospital, address, width=false } : {
    hospital : string,
    address: string,
    width?: boolean
}) => {
  
  return (
    <div>
      {
        width ? 
        (
        <HoverCard>
          <HoverCardTrigger>
            <Text 
              width={width}
              address={address}
              hospital={hospital}
            />
          </HoverCardTrigger>
          <HoverCardContent>
          <h3 className={cn(`text-[#344054] text-sm font-medium leading-[20.3px] `)}>{hospital}</h3>
          <h4 className={cn(`text-[#667185] text-sm font-normal leading-[20.3px] `)}>{address}</h4>
          </HoverCardContent>
        </HoverCard>
        ) 
        :  
        (
          <Text 
            hospital={hospital}
            address={address}
            width={width}
          />
        )
      }
    </div>
  )
}

export default TableHospital