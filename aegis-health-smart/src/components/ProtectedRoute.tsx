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

    if(id === null) return route.push('/signup')
      
  return (
    <section>
      {children}
    </section>
  )
}

export default ProtectedRoute