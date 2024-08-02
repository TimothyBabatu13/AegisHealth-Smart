'use client';

import { useState } from "react";
import { FilterIcon, SearchIcon, SortIcon } from "@/components/Svgs";

const Button = ({ text, action, active } : {
    text: string,
    action: ()=>void,
    active: boolean
})=> {
    return (
        <button className={` text-sm py-2 px-[10px] mr-5 leading-[21px] ${active ? ' font-medium text-[#141414] border-b-2 border-b-[#006635]' : 'font-normal text-[#141414CC]'}`} onClick={action}>{text}</button>
    )
}

const ButtonWithIcon = ({ children, onClick } : {
    children: any,
    onClick?: ()=> void
})=> {
    return(
        <button onClick={onClick} className="text-sm text-[#667185] font-medium leading-5 flex items-center ml-6">{children}</button>
    )
}

const Buttons = () => {
    const [active, setActive] = useState(0);
    const data = [
        {
            text:'Upcoming Sessions',
            action: (id : number)=>{
                changeActiveTab(id)
            }
        }, 
        {
            text: 'Completed Sessions',
            action: (id : number)=>{
                changeActiveTab(id)
            }
        }, 
        {
            text:'Canceled Sessions',
            action: (id : number)=>{
                changeActiveTab(id)
            }
        }
    ]

    const changeActiveTab = (id : number) => {
        setActive(id)
    }

    const handleSearch = () => {
        
    }
  return (
    <>
        <div className="bg-[#FCFCFD] flex items-center overflow-x-auto whitespace-nowrap border-b border-b-[#E4E7EC] py-[10px] rounded-[4px] mb-[30px]">
            {
                data.map((link, no) => <Button active={active === no} key={no} text={link.text} action={()=>link.action(no)} />)
            }
        </div>
        <div>
            <h3 className="text-lg text-[#101928] font-semibold leading-[26.1px]">{data[active].text}</h3>
        </div>
        <div className="flex items-center justify-between">
            <h4 className="text-[15px] hidden min-[560px]:block text-[#141414] font-normal leading-[20px]">All sessions were held via zoom</h4>
            <div className="block min-[560px]:hidden"/>
            <div className="flex items-center justify-between">
                <ButtonWithIcon onClick={handleSearch}>
                    <SearchIcon fill /> <span className="ml-1">Search</span>
                </ButtonWithIcon>
                <ButtonWithIcon>
                    <FilterIcon /> <span className="ml-1">Filter</span>
                </ButtonWithIcon>
                <ButtonWithIcon>
                    <SortIcon />  <span className="ml-1">Sort</span>
                </ButtonWithIcon>
            </div>
        </div>
    </>
  )
}

export default Buttons