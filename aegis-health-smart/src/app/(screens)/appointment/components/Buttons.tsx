'use client';

import { useState } from "react";

const Button = ({ text, action, active } : {
    text: string,
    action: ()=>void,
    active: boolean
})=> {
    return (
        <button className={` text-sm py-2 px-[10px] mr-5 leading-[21px] ${active ? ' font-medium text-[#141414] border-b-2 border-b-[#006635]' : 'font-normal text-[#141414CC]'}`} onClick={action}>{text}</button>
    )
}
const Buttons = () => {
    const [active, setActive] = useState(0);
    // console.log(active)
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
  return (
    <div className="bg-[#FCFCFD] border-b border-b-[#E4E7EC] py-[10px] px-5 rounded-[4px]">
        {
            data.map((link, no) => <Button active={active === no} key={no} text={link.text} action={()=>link.action(no)} />)
        }
    </div>
  )
}

export default Buttons