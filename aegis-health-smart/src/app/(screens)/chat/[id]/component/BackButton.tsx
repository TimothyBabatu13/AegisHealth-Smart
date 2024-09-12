<<<<<<< HEAD
'use client';
import { ChevronLeftIcon } from "@/components/Svgs";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const navigate = useRouter()
    const handleBack = ()=> {
        navigate.back()
    }
  return (
    <button onClick={handleBack}>
      <ChevronLeftIcon isGrey/>
    </button>
  )
}

=======
'use client';
import { ChevronLeftIcon } from "@/components/Svgs";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const navigate = useRouter()
    const handleBack = ()=> {
        navigate.back()
    }
  return (
    <button onClick={handleBack}>
      <ChevronLeftIcon isGrey/>
    </button>
  )
}

>>>>>>> master
export default BackButton