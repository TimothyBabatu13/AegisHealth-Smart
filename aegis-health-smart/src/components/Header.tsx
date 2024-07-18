import HeaderTitle from "./HeaderTitle";
import HeaderSearch from "./HeaderSearch";
import HeaderLink from "./HeaderLink";

const Header = () => {

  return (
    <header className="flex py-[17px] px-5 items-center justify-between w-full">
        <HeaderTitle />
        <HeaderSearch />
        <HeaderLink />
    </header>
  )
}

export default Header