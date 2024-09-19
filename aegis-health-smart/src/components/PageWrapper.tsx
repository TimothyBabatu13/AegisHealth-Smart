import { cn } from "@/lib/utils";

const PageWrapper = ({
    children, clx=''
} : Readonly<{
    children: React.ReactNode;
    clx?: string
  }>) => {
 
  return (
    <main className={cn(`mx-5 p-5 mb-5 rounded-[10px] border-[0.7px]  border-[#E4E7EC] min-[1220px]:w-[742px] min-[1220px]:mb-0 ${clx}`)}>
      {children}    
    </main>
  )
}

export default PageWrapper