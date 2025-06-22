'use client';
import { useAuthContextProvider } from "@/context/AuthContext"
import { userStore } from "@/stores/userStore";

const UserName = () => {
    const user = useAuthContextProvider();
    // const { isDoctor, isLoading } = userStore()
    // console.log(isDoctor, isLoading);
    // console.log(user)
    const userName = user.user?.displayName
  return (
    <span>{userName || "user"}</span>
  )
}

export default UserName