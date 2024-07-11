'use client';

import { useAuthContextProvider } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";


const ProtectedRoute = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const route = useRouter();
    const { id } = useAuthContextProvider();
    console.log(id)
    if(!id){
        route.push('/signup')
    }
  return (
    <section>
        {children}
    </section>
  )
}

export default ProtectedRoute