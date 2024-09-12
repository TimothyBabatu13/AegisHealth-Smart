'use client';

import {  useRef, useState } from "react";
import { SearchIcon } from "./Svgs";

const HeaderSearch = () => {

    const inputBox = useRef<HTMLInputElement | null>(null);
    const [text, setText] = useState('');
    const handleFocus = () => {
        inputBox?.current?.focus();
    }

    const handleChange = (e: any) => {
        setText(e.target.value)
    }

  return (
    <div className="hidden min-[450px]:block relative">
        <input value={text} onChange={handleChange} ref={inputBox} type="text" placeholder="Search doctors" className="text-sm font-normal leading-5 rounded-[10px] shadow-sm border-[0.5px] border-[#E4E7EC] min-[650px]:w-[390px] h-[46px] py-5 px-[13px]" width={390} height={46}/>
        <button onClick={handleFocus} className="absolute right-[13px] top-[50%] -translate-y-1/2"><SearchIcon /></button>
    </div>
  )
}

export default HeaderSearch