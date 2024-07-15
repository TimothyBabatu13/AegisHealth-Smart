'use client';

import { useAuthContextProvider } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useLayoutEffect } from "react";
// import { useRouter } from "next/router";

interface ProtectedRouteType {
  children:any
  //(props: any, deprecatedLegacyContext?: any) => ReactNode
}
const ProtectedRoute = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)=> {
    const route = useRouter();
    const { id } = useAuthContextProvider();

    useEffect(() => {
      if(id === null) route.push('/signup')
    } , [id])
    // if(id === null) return route.push('/signup')
      
    // if(id === null) return <h1>Loading...</h1>
  return (
    <section>
      {children}
    </section>
  )
}

export default ProtectedRoute