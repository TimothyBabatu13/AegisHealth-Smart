'use client';

import { userStore } from "@/stores/userStore";
import Loader from "./Loader";

const LoaderLayer = ({ children } : {
  children: React.ReactNode
}) => {
  const { isLoading } = userStore()
  if(isLoading) return <Loader />
  return (
    <div>{children}</div>
  )
}

export default LoaderLayer;