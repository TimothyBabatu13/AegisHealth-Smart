"use client"

import { useState } from "react"
import {
  Calendar,
  Clock,
  Users,
  MessageSquare,
  Activity,
  Bell,
  Plus,
  Stethoscope,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { DoctorAccountSetting } from "@/components/AccountSettings"
import DoctorDashboardOverview from "./components/doctor-dashboard-overview"
import DashboardPatients from "./components/dashboard-patients"
import { userStore } from "@/stores/userStore"
import DashboardPatientAppointMent from "./components/dashboard-patient-appointment"

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const { user } = userStore();
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-lg md:text-3xl font-bold text-[#344054]">Good morning, Dr. {user?.displayName}</h1>
            <p className="text-sm md:text-base text-[#344054]/70">You have 5 appointments scheduled for today</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
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
            <TabsTrigger value="overview" className="text-[#344054] flex gap-2 items-center">
              <span className="hidden md:block">Overview</span>
              <Clock className="h-4 w-4"/>
            </TabsTrigger>
            <TabsTrigger value="appointments" className="text-[#344054] flex gap-2 items-center">
              <span className="hidden md:block">Appointments</span>
              <Stethoscope className="h-4 w-4"/>
            </TabsTrigger>
            <TabsTrigger value="patients" className="text-[#344054] flex gap-2 items-center">
              <span className="hidden md:block">Patients</span>
              <Users className="h-4 w-4"/>
            </TabsTrigger>
            <TabsTrigger value="messages" className="text-[#344054] flex gap-2 items-center">
              <span className="hidden md:block">Messages</span>
              <MessageSquare className="h-4 w-4"/>
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-[#344054] flex gap-2 items-center">
              <span className="hidden md:block">Settings</span>
              <Settings className="h-4 w-4"/>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <DoctorDashboardOverview />
          </TabsContent>

          <TabsContent value="patients" className="space-y-6">
            <DashboardPatients />
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
                <div className="text-center">
                  <DashboardPatientAppointMent />
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
            <DoctorAccountSetting />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default DoctorDashboard