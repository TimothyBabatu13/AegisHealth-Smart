'use client';
import { useAuthContextProvider } from "@/context/AuthContext"

const UserName = () => {
    const user = useAuthContextProvider();
    const userName = user.user?.displayName
  return (
    <span>{userName || "user"}</span>
  )
}

export default UserName