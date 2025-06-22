export const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
]

export const appointmentTypes = [
  "General Consultation",
  "Follow-up Visit",
  "Routine Checkup",
  "Specialist Consultation",
  "Emergency Consultation",
]


export interface Message {
  id: string
  sender: "patient" | "doctor"
  content: string
  timestamp: Date
  type: "text" | "image" | "file"
  fileName?: string
  fileSize?: string
  status: "sent" | "delivered" | "read"
}

export interface ChatUser {
  id: string
  name: string
  role: "patient" | "doctor"
  avatar: string
  specialty?: string
  isOnline: boolean
  lastSeen?: Date
}

export const initialMessages: Message[] = [
  {
    id: "1",
    sender: "doctor",
    content:
      "Good morning! How are you feeling today? I reviewed your recent test results and wanted to discuss them with you.",
    timestamp: new Date(Date.now() - 3600000),
    type: "text",
    status: "read",
  },
  {
    id: "2",
    sender: "patient",
    content:
      "Good morning, Dr. Johnson. I'm feeling much better than last week. The medication you prescribed seems to be working well.",
    timestamp: new Date(Date.now() - 3300000),
    type: "text",
    status: "read",
  },
  {
    id: "3",
    sender: "doctor",
    content:
      "That's excellent news! Your blood pressure readings have improved significantly. Let's continue with the current treatment plan.",
    timestamp: new Date(Date.now() - 3000000),
    type: "text",
    status: "read",
  },
  {
    id: "4",
    sender: "patient",
    content: "Thank you! I have a question about the dietary restrictions you mentioned. Can I have the detailed list?",
    timestamp: new Date(Date.now() - 2700000),
    type: "text",
    status: "read",
  },
  {
    id: "5",
    sender: "doctor",
    content: "Of course! I'll send you the comprehensive dietary guidelines document.",
    timestamp: new Date(Date.now() - 2400000),
    type: "text",
    status: "read",
  },
]