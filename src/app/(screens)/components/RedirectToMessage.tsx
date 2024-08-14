import { MessageIcon } from "@/components/Svgs"
import Link from "next/link"

const RedirectToMessage = ({ href } : {
    href: string
}) => {
  return (
    <Link className="border-[0.9px] w-9 h-9 flex items-center justify-center rounded-[10px]" href={href}> <MessageIcon /> </Link>
  )
}

export default RedirectToMessage