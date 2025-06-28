'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getStatusColor } from "@/lib/utils";
import { ChevronRight, Clock, MessageSquare, MoreHorizontal, Phone, Video } from "lucide-react"

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


const DoctorDashboardOverview = () => {

  return (
    <div className="grid lg:grid-cols-2 gap-6">
                  {/* Today's Schedule */}
                  <div className="lg:col-span-1">
                    <Card className="border-gray-200  ">
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
                                <p className="font-medium text-sm md:text-base text-[#344054]">{appointment.patient}</p>
                                <p className="text-xs md:text-sm text-[#344054]/70">{appointment.condition}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="text-xs md:text-sm font-medium text-[#344054]">{appointment.time}</p>
                                <p className="text-[10px] md:text-xs text-[#344054]/70">{appointment.duration}</p>
                              </div>
                              <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                              <div className="flex gap-1">
                                <Button variant="outline" size="sm" className="text-[#344054] hidden md:block border-gray-200">
                                  <Phone className="h-3 w-3" />
                                </Button>
                                <Button variant="outline" size="sm" className="text-[#344054] hidden md:block border-gray-200">
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
                  <div className="w-full">
                    <Card className="border-gray-200 md:sticky md:top-[100px]">
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
  )
}

export default DoctorDashboardOverview