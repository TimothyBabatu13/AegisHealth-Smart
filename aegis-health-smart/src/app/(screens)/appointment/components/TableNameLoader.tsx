import { VerifiedTickIcon } from "@/components/Svgs"
import { Skeleton } from "@/components/ui/skeleton"

const TableNameLoader = () => {
  return (
    <div className="flex items-center">
        <div className="mr-3 h-fit w-fit relative">
            <Skeleton className="min-w-10 h-10 w-10 rounded-full bg-slate-600"/>
            <VerifiedTickIcon className="absolute right-0 -bottom-[2px]"/>
        </div>
        <div className="">
            <Skeleton className="w-[80px] h-[14px] bg-slate-600 mb-1"/>
            <Skeleton className="w-[80px] h-[14px] bg-slate-600"/>
        </div>
    </div>
  )
}

export default TableNameLoader

