import { ChevronRightIcon } from "@/components/Svgs"
import Link from "next/link"

const LinkWithChevron = ({ href } : {
    href: string
}) => {
  return (
    <Link className="text-base flex font-semibold text-[#667185] leading-[23.2px]" href={href}>See all <ChevronRightIcon /></Link>
  )
}

export default LinkWithChevron