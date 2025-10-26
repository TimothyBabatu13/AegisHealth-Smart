"use client"

import type React from "react"
import { Card,  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import MessageInput from "./component/MessageInput"
import ChatHeader from "./component/ChatHeader"
import ChatMessages from "./component/ChatMessages"



export default function HealthcareChat({ id } : {
    id: string
}) {  

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6 max-w-4xl">

        <ChatHeader id={id}/>

        <Card className="border-gray-200 h-[600px] flex flex-col">
          <ChatMessages />

          <Separator />

          <MessageInput id={id}/>
        </Card>
      </div>
    </div>
  )
}
