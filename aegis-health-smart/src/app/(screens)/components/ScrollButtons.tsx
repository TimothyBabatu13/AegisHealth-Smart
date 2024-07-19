import { ChevronLeftIcon, ChevvronRightIcon } from "@/components/Svgs"


const Button = ({ children } : {
    children: React.ReactElement
}) => {
    return (
        <button>{children}</button>
    )
}

const ScrollButtons = () => {
  return (
    <div className="absolute right-0">
        <Button>
            <ChevronLeftIcon isGrey/>
        </Button>
        <Button>
            <ChevvronRightIcon isGrey/>
        </Button>
    </div>
  )
}

export default ScrollButtons