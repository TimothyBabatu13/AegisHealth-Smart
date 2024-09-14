import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"


const Text = ({ width } : {
    width: boolean
}) => {
    return (
    <div>
        <Skeleton className={cn(`text-[#344054] mb-1 h-[14px] bg-slate-600 ${width && 'w-[100px] min-[585px]:w-[201px]'} overflow-x-hidden whitespace-nowrap overflow-ellipsis text-sm font-medium leading-[20.3px] `)}/>
        <Skeleton className={cn(`text-[#667185] h-[14px] bg-slate-600 ${width && 'w-[100px] min-[585px]:w-[201px]'} overflow-x-hidden whitespace-nowrap overflow-ellipsis text-sm font-normal leading-[20.3px] `)}/>
    </div>
    )
}
const TableHospitalLoader = ({ width } : {
    width: boolean
}) => {
  return (
    <Text width={width}/>
  )
}

export default TableHospitalLoader