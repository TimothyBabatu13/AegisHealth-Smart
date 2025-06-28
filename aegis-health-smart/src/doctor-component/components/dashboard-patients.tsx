import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FileText, MessageSquare, MoreHorizontal, Plus, Search, Users } from "lucide-react"
import { useState } from "react"

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

const DashboardPatients = () => {

    const [searchQuery, setSearchQuery] = useState("")

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
    <Card className="border-gray-200">
              <CardHeader>
                <div className="md:flex space-y-4 items-center justify-between">
                  <CardTitle className="text-[#344054] text-base md:text-2xl flex items-center gap-2">
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
                        className="pl-10 text-sm md:text-lg text-[#344054] border-gray-200"
                      />
                    </div>
                    <Button size={'sm'} className="bg-blue-500 text-sm hover:bg-blue-600 text-white md:h-10 md:px-4 md:py-2">
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
                          <p className="text-sm md:text-base font-medium text-[#344054]">{patient.name}</p>
                          <p className="text-xs md:text-sm text-[#344054]/70">
                            Age: {patient.age} • {patient.condition}
                          </p>
                          <p className="text-xs md:text-xs text-[#344054]/50">Last visit: {patient.lastVisit}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <Badge className={getPatientStatusColor(patient.status)}>{patient.status}</Badge>
                          <p className="text-xs text-[#344054]/70 mt-1">{patient.nextAppointment}</p>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm" className="text-[#344054] hidden md:block border-gray-200">
                            <FileText className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-[#344054] border-gray-200 hidden md:block">
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
  )
}

export default DashboardPatients