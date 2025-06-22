"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Paperclip, Phone, Video, MoreVertical, Circle, ImageIcon, FileText, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import MessageInput from "./component/MessageInput"
import { ChatUser, initialMessages, Message } from "@/utils/hardcoded-data"
import { formatDate, formatTime } from "@/utils/format-date"
import ChatHeader from "./component/ChatHeader"
import ChatMessages from "./component/ChatMessages"



export default function HealthcareChat({ id } : {
    id: string
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [currentUser] = useState<"patient" | "doctor">("patient") // This would come from auth context
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const doctor: ChatUser = {
    id: "doc1",
    name: "Dr. Sarah Johnson",
    role: "doctor",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Cardiologist",
    isOnline: true,
  }

  const patient: ChatUser = {
    id: "pat1",
    name: "John Smith",
    role: "patient",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
  }


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  

  

  

  

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
