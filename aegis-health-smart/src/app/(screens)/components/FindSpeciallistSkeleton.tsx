import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import RedirectToMessage from "./RedirectToMessage"

export function SkeletonCard() {
  return (
    <div className="mr-5">
        <Skeleton className="h-[156px] w-[234px] bg-slate-600 rounded-[20px] mb-[13px]" />
        <Skeleton className="h-[21px] w-[232px] mb-[5px] bg-slate-600"/>
        <Skeleton className="h-[21px] w-[232px] mb-[5px] bg-slate-600"/>
        <Skeleton className="h-[17px] w-[36px] rounded-[10px] mb-5 bg-slate-600"/>
        <div>
        <div className="flex">
            <Link className="text-sm text-[#344054] font-semibold mr-[10px] leading-[21px] py-2 px-4 border border-[#E0E3EB] rounded-[10px]" href={''}>View Schedule</Link>
            <RedirectToMessage 
                href={``}
            />
        </div>
        </div>
    </div>
  )
}

const FindSpeciallistSkeleton = () => {
  return (
    <div className="flex w-full overflow-x-scroll scroll-smooth">
       <SkeletonCard />
       <SkeletonCard />
       <SkeletonCard />
       <SkeletonCard />
       <SkeletonCard />
    </div>
  )
}

export default FindSpeciallistSkeleton