'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MessageNavBar = ({ id } : {
    id: string
}) => {
    const [active, setActive] = useState('');
    const pathName = usePathname();

    const data = [
        {
            text: 'Messages',
            link: `/appointment/join/${id}`
        },
        {
            text: 'Shared Files',
            link: `/appointment/join/${id}/shared-files`
        },
        {
            text: 'Canceled Sessions',
            link: `/appointment/join/${id}/canceled-sessions`
        },
    ]

    useEffect(() => {
        setActive(pathName);
    }, [pathName])
    
  return (
    <div className="flex items-center py-2.5 px-5 bg-[#FCFCFD] border-b border-b-[#E4E7EC]">
        {data.map((link, id) => <Link className={cn(`py-2 px-[21.5px] text-sm font-normal text-[#141414CC] leading-[21px] ${active === link.link && "text-[#141414] font-medium border-b-2 border-b-[#1BAD55]"} `)} href={link.link} key={id}>{link.text}</Link>)}
    </div>
  )
}

export default MessageNavBar