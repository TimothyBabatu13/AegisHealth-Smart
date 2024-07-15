'use client';
import { useAuthContextProvider } from "@/context/AuthContext"
import { useState } from "react";

const UserId = () => {
    const { id, setId } = useAuthContextProvider();
    const [num ,setNum] = useState<number>(0)

  return (
    <>
    {id}{num}
      <div>
      <button onClick={()=>{setId('hhh'); setNum(prev => prev+1)}}>click</button>
      </div>
    </>
  )
}

export default UserId