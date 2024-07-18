'use client';
import Link from "next/link"
import { BellIcon, PlusIcon, WhyIcon } from "./Svgs"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";

const HeaderLink = () => {

    const [url, setUrl] = useState('');
    const pathName = usePathname();

    const checkIfToShow = (...text : string[]) => {
        const result = text.filter(item => item=== url).length > 0;
        return result ? 'block' : 'hidden'
    }

    const bookSession = url === '/' || url === '/appointment' || url === '/symptom-checker'; 
    useEffect(()=>{
        setUrl(pathName)
    }, [pathName])

  return (
    <div className="flex items-center">
        <Link className={`mr-5 ${checkIfToShow('/')}`} href={''}><WhyIcon /></Link>
        <Link className={`mr-5 ${checkIfToShow('/', '/appointment')}`} href={''}><BellIcon /></Link>
        <Link className={`${bookSession ? 'flex' : 'hidden'}  items-center text-[#FFFFFF] text-sm font-semibold leading-[35.62px] bg-[#291ED7] py-2 px-4 rounded-[8px]`} href={'/'}><PlusIcon className="mr-[7px]"/> Book Sessions</Link>
    </div>
  )
}

export default HeaderLink