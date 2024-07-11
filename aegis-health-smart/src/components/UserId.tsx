'use client';
import { useAuthContextProvider } from "@/context/AuthContext"

const UserId = () => {
    const { id } = useAuthContextProvider();
  return (
    <div>{id}</div>
  )
}

export default UserId