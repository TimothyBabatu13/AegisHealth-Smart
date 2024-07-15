'use client';
import { useAuthContextProvider } from "@/context/AuthContext"

const UserId = () => {
    const { id } = useAuthContextProvider();

  return (
    <>
      {id}
    </>
  )
}

export default UserId