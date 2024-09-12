<<<<<<< HEAD
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SearchIcon } from "./Svgs"


export function MobileSearch() {
  return (
    <div className="min-[450px]:hidden">

    <Dialog>
      <DialogTrigger asChild>
      <button className="mr-3"><SearchIcon /></button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Doctors</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <input 
            type="text"
            className="text-sm font-normal leading-5 rounded-[10px] shadow-sm border-[0.5px] border-[#E4E7EC] min-[650px]:w-[390px] h-[46px] py-5 px-[13px]"
            placeholder="search doctors..."
        />
        <DialogFooter>
          <Button type="submit">Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}
=======
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SearchIcon } from "./Svgs"


export function MobileSearch() {
  return (
    <div className="min-[450px]:hidden">

    <Dialog>
      <DialogTrigger asChild>
      <button className="mr-3"><SearchIcon /></button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Doctors</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <input 
            type="text"
            className="text-sm font-normal leading-5 rounded-[10px] shadow-sm border-[0.5px] border-[#E4E7EC] min-[650px]:w-[390px] h-[46px] py-5 px-[13px]"
            placeholder="search doctors..."
        />
        <DialogFooter>
          <Button type="submit">Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}
>>>>>>> master
