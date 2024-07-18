'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"
import { ActivityIcon, AppointmentIcon, HomeIcon, MentalSupportIcon, SignOutIcon, SymptomCheckerIcon } from "./Svgs";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState<string>('');
    const pathName = usePathname();
    const links = [
        {
            text: 'Home',
            url: '/',
            id: 'aaa',
            icon: <HomeIcon active={activeLink === '/'}/>
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

    useEffect(()=>{
        setActiveLink(pathName);
    }, [pathName])

  return (
    <nav className="h-[100vh] border-r-[0.7px] border-r-[#E4E7EC] px-2 flex flex-col w-[248px]">
        <h1 className="mb-8">Logo</h1>
        {links.map(link => <Link className={`flex py-3 px-4 text-sm text-[#141414] leading-5 ${activeLink === link.url ? 'bg-[#F2F2FD] rounded-r-[10px] shadow-[#00663547] border-l-2 border-l-[#291ED7] font-medium' : 'font-normal'}`} href={link.url} key={link.id}> <span className="mr-3">{link.icon}</span>{link.text}</Link>)}
        {/* <div className="mt-auto py-5 px-[21px] flex items-center">
            <div className="h-10 w-10 rounded-full bg-[#FFE7CC] relative">
                <div className="h-[10px] w-[10px] bg-[#04802E] rounded-full absolute bottom-0 right-0"></div>
            </div>
            <div className="text-base leading-5 ">
                <h3 className="font-semibold">Doris Eyo</h3>
                <h5 className="">Doris.e@gmail.com</h5>
            </div>
            <button>
                <SignOutIcon />
            </button>
        </div> */}
    </nav>
  )
}

export default NavBar