'use client'

import HeaderTitle from "./HeaderTitle";
import HeaderSearch from "./HeaderSearch";
import HeaderLink from "./HeaderLink";
import { useContext } from "react";
import { ScrollContext } from "./ScrollObserver";

const Header = () => {
  const scrollActive = useContext(ScrollContext)

  return (
    <header className={`sticky top-0 left-0 z-40 bg-[#FCFCFD] flex py-[17px] px-5 items-center justify-between w-full transition-shadow ease-in-out duration-500 ${scrollActive ? 'shadow-md' : ''}`}>
        <HeaderTitle />
        <HeaderSearch />
        <HeaderLink />
    </header>
  )
}

export default Header