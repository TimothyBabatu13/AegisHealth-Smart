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

export default BackButton