"use client"

import { useState } from "react"
import {
  Calendar,
  Clock,
  Users,
  MessageSquare,
  FileText,
  Activity,
  Bell,
  Search,
  Plus,
  MoreHorizontal,
  Phone,
  Video,
  ChevronRight,
  Stethoscope,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { AccountSettings } from "@/components/AccountSettings"

const todayAppointments = [
  {
    id: 1,
    patient: "John Smith",
    time: "09:00 AM",
    type: "Follow-up",
    status: "confirmed",
    avatar: "/placeholder.svg?height=40&width=40",
    condition: "Hypertension",
    duration: "30 min",
  },
  {
    id: 2,
    patient: "Emily Johnson",
    time: "09:30 AM",
    type: "Consultation",
    status: "confirmed",
    avatar: "/placeholder.svg?height=40&width=40",
    condition: "Chest Pain",
    duration: "45 min",
  },
  {
    id: 3,
    patient: "Michael Brown",
    time: "10:30 AM",
    type: "Routine Checkup",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40",
    condition: "Annual Physical",
    duration: "30 min",
  },
  {
    id: 4,
    patient: "Sarah Davis",
    time: "11:00 AM",
    type: "Emergency",
    status: "urgent",
    avatar: "/placeholder.svg?height=40&width=40",
    condition: "Cardiac Symptoms",
    duration: "60 min",
  },
  {
    id: 5,
    patient: "Robert Wilson",
    time: "02:00 PM",
    type: "Follow-up",
    status: "confirmed",
    avatar: "/placeholder.svg?height=40&width=40",
    condition: "Diabetes Management",
    duration: "30 min",
  },
]

const recentMessages = [
  {
    id: 1,
    patient: "John Smith",
    message: "Thank you for the medication adjustment. I'm feeling much better.",
    time: "10 min ago",
    unread: false,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    patient: "Emily Johnson",
    message: "I have some questions about the test results you sent.",
    time: "25 min ago",
    unread: true,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    patient: "Michael Brown",
    message: "Can we reschedule tomorrow's appointment?",
    time: "1 hour ago",
    unread: true,
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const patientList = [
  {
    id: 1,
    name: "John Smith",
    age: 45,
    condition: "Hypertension",
    lastVisit: "2024-01-15",
    status: "stable",
    avatar: "/placeholder.svg?height=40&width=40",
    nextAppointment: "Today, 9:00 AM",
  },
  {
    id: 2,
    name: "Emily Johnson",
    age: 32,
    condition: "Chest Pain Investigation",
    lastVisit: "2024-01-10",
    status: "monitoring",
    avatar: "/placeholder.svg?height=40&width=40",
    nextAppointment: "Today, 9:30 AM",
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 28,
    condition: "Annual Physical",
    lastVisit: "2023-12-20",
    status: "healthy",
    avatar: "/placeholder.svg?height=40&width=40",
    nextAppointment: "Today, 10:30 AM",
  },
]

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "urgent":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getPatientStatusColor = (status: string) => {
    switch (status) {
      case "stable":
        return "bg-green-100 text-green-700"
      case "monitoring":
        return "bg-yellow-100 text-yellow-700"
      case "critical":
        return "bg-red-100 text-red-700"
      default:
        return "bg-blue-100 text-blue-700"
    }
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#344054]">Good morning, Dr. Johnson</h1>
            <p className="text-[#344054]/70">You have 5 appointments scheduled for today</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-[#344054] border-gray-200">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
              <Badge className="ml-2 bg-red-500 text-white">3</Badge>
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Appointment
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#344054]/70">Today&apos;s Appointments</p>
                  <p className="text-2xl font-bold text-[#344054]">5</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <Progress value={60} className="h-2" />
                <p className="text-xs text-[#344054]/50 mt-1">3 completed, 2 remaining</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#344054]/70">Active Patients</p>
                  <p className="text-2xl font-bold text-[#344054]">127</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <p className="text-xs text-green-600">+12% from last month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#344054]/70">Unread Messages</p>
                  <p className="text-2xl font-bold text-[#344054]">8</p>
                </div>
                <MessageSquare className="h-8 w-8 text-orange-500" />
              </div>
              <div className="flex items-center mt-2">
                <AlertCircle className="h-3 w-3 text-orange-500 mr-1" />
                <p className="text-xs text-orange-600">2 urgent messages</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#344054]/70">This Week</p>
                  <p className="text-2xl font-bold text-[#344054]">32</p>
                </div>
                <Activity className="h-8 w-8 text-purple-500" />
              </div>
              <div className="flex items-center mt-2">
                <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                <p className="text-xs text-green-600">On track</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-[750px]">
            <TabsTrigger value="overview" className="text-[#344054]">
              Overview
            </TabsTrigger>
            <TabsTrigger value="appointments" className="text-[#344054]">
              Appointments
            </TabsTrigger>
            <TabsTrigger value="patients" className="text-[#344054]">
              Patients
            </TabsTrigger>
            <TabsTrigger value="messages" className="text-[#344054]">
              Messages
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-[#344054]">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Today's Schedule */}
              <div className="lg:col-span-2">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-[#344054] flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Today&apos;s Schedule
                    </CardTitle>
                    <CardDescription className="text-[#344054]/70">
                      {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {todayAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={appointment.avatar || "/placeholder.svg"} alt={appointment.patient} />
                            <AvatarFallback className="bg-blue-100 text-[#344054]">
                              {appointment.patient
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-[#344054]">{appointment.patient}</p>
                            <p className="text-sm text-[#344054]/70">{appointment.condition}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm font-medium text-[#344054]">{appointment.time}</p>
                            <p className="text-xs text-[#344054]/70">{appointment.duration}</p>
                          </div>
                          <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                              <Phone className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                              <Video className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Recent Messages */}
              <div>
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-[#344054] flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Recent Messages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentMessages.map((message) => (
                      <div
                        key={message.id}
                        className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.patient} />
                          <AvatarFallback className="bg-blue-100 text-[#344054] text-xs">
                            {message.patient
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-[#344054] truncate">{message.patient}</p>
                            {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                          </div>
                          <p className="text-xs text-[#344054]/70 truncate">{message.message}</p>
                          <p className="text-xs text-[#344054]/50 mt-1">{message.time}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full text-[#344054] border-gray-200">
                      View All Messages
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="patients" className="space-y-6">
            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[#344054] flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Patient Management
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#344054]/50" />
                      <Input
                        placeholder="Search patients..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 text-[#344054] border-gray-200"
                      />
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Patient
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patientList.map((patient) => (
                    <div
                      key={patient.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={patient.avatar || "/placeholder.svg"} alt={patient.name} />
                          <AvatarFallback className="bg-blue-100 text-[#344054]">
                            {patient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-[#344054]">{patient.name}</p>
                          <p className="text-sm text-[#344054]/70">
                            Age: {patient.age} • {patient.condition}
                          </p>
                          <p className="text-xs text-[#344054]/50">Last visit: {patient.lastVisit}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <Badge className={getPatientStatusColor(patient.status)}>{patient.status}</Badge>
                          <p className="text-xs text-[#344054]/70 mt-1">{patient.nextAppointment}</p>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                            <FileText className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                            <MessageSquare className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#344054] flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Appointment Management
                </CardTitle>
                <CardDescription className="text-[#344054]/70">Manage your schedule and appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Stethoscope className="h-12 w-12 text-[#344054]/30 mx-auto mb-4" />
                  <p className="text-[#344054]/70">Appointment management interface would go here</p>
                  <p className="text-sm text-[#344054]/50">Calendar view, scheduling tools, and appointment details</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#344054] flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Patient Communications
                </CardTitle>
                <CardDescription className="text-[#344054]/70">Secure messaging with your patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-[#344054]/30 mx-auto mb-4" />
                  <p className="text-[#344054]/70">Message management interface would go here</p>
                  <p className="text-sm text-[#344054]/50">Chat list, message threads, and communication tools</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="space-y-6">
            <AccountSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
