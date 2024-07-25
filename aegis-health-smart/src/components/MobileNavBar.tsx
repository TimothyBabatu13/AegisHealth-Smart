import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import { ActivityIcon, AppointmentIcon, HomeIcon, MentalSupportIcon, SymptomCheckerIcon } from "./Svgs"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileSearch } from "./MobileSearch";

  
const MobileNavBar = () => {
    const [activeLink, setActiveLink] = useState<string>('');
    const pathName = usePathname();
    const links = [
        {
            text: 'Home',
            url: '/',
            id: 'aaa',
            icon: <HomeIcon active={activeLink === '/'}/>,
        },
        {
            text: 'Appointments',
            url: '/appointment',
            id: 'bbb',
            icon: <AppointmentIcon active={activeLink === '/appointment'}/>
        },
        {
            text: 'Symptom Checker',
            url: '/symptom-checker',
            id: 'ccc',
            icon: <SymptomCheckerIcon active={activeLink === '/symptom-checker'}/>
        },
        {
            text: 'Activity',
            url: '/activity',
            id: 'ddd',
            icon: <ActivityIcon active={activeLink === '/activity'}/>
        },
        {
            text: 'Mental Support',
            url: '/mental-support',
            id: 'fff',
            icon: <MentalSupportIcon active={activeLink === '/mental-support'}/>
        }
    ]

    const toCheckIfURLMatches = (url: string) => {
        return pathName.match(url)
    }
    useEffect(()=>{
        setActiveLink(pathName);
    }, [pathName])
  return (
    <nav className="min-[1220px]:hidden flex items-center">
        <MobileSearch />
        <Sheet>
            <SheetTrigger>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                {
                    links.map((link, id) => (
                        <SheetClose className="flex" key={link.id} asChild><Link className={`flex items-center py-3 px-4 text-sm text-[#141414] leading-5 ${activeLink === link.url || id === 1 && toCheckIfURLMatches(link.url)  ? 'bg-[#F2F2FD] rounded-r-[10px] shadow-[#00663547] border-l-2 border-l-[#291ED7] font-medium' : 'font-normal'}`} href={link.url} key={link.id}> <span className="mr-3">{link.icon}</span>{link.text}</Link></SheetClose>
                    ))
                }
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNavBar