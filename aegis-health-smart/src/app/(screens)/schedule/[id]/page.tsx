'use client';
import { useEffect, useState } from "react"
import { Calendar, Clock, User, Stethoscope, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { userStore } from "@/stores/userStore";
import { appointmentTypes } from "@/utils/hardcoded-data";

const timeSlots = [
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

type Doctor = {
  id: string;
  active: boolean;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  phone: string;
  hospital: string;
  licenseNumber: string;
  specialization: string;
  profileURL: string;
  liveURL: string;
  isVerfied: boolean;
};

export type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  bloodType: string;
  allergies: string;
  currentMedications: string;
  medicalConditions: string;
  primaryPhysician: string;
  insuranceProvider: string;
  policyNumber: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
  liveURL: string;
  profileURL: string;
};

const fetchDoctor = async () => {
  try {
    const docRef = doc(db, 'specialist', '7hBnlxdbrNfxnFPnFHqw');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Doctor;
    } 
  } catch (error) {
    console.log(error);
  }
}

const fetchUserDetails = async ({ email } : {
  email: string
}) => {
  try {
    const q = query(
      collection(db, "patient"),
      where("email", "==", email)
    );

    const querySnapshot = await getDocs(q);

    const patients = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return patients[0] as Patient
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const PatientSchedule = () => {
  const { user } = userStore()
  const [isLoading, setIsLoading] = useState(false);
  const [patientData, setPatientData] = useState<Patient>()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedDoctor, setSelectedDoctor] = useState<string>("")
  const [doctors, setDoctors] = useState<Doctor>()
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [appointmentType, setAppointMentType] = useState('General Consultation');

  useEffect(() =>{
    const fetchData = async () => {
      const result = await fetchDoctor();
      if(result){
        setDoctors(result);
        setSelectedDoctor(`${result.firstName} ${result.lastName}`)
      }
    }
    fetchData()
  }, [])

  useEffect(() =>{
    const fetchData = async () => {
      const result = await fetchUserDetails({
        email: user?.email!
      });
      setPatientData(result);
    }
    fetchData();
  }, [])

  
  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const today = new Date()

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)

      const isCurrentMonth = date.getMonth() === month
      const isToday = date.toDateString() === today.toDateString()
      const isPast = date < today && !isToday
      const isSelected = selectedDate?.toDateString() === date.toDateString()

      days.push({
        date,
        isCurrentMonth,
        isToday,
        isPast,
        isSelected,
        day: date.getDate(),
      })
    }

    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev)
      newMonth.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1))
      return newMonth
    })
  }

  const handleDateSelect = (date: Date) => {
    if (date >= new Date() || date.toDateString() === new Date().toDateString()) {
      setSelectedDate(date)
    }
  }

  const handleBookAppointment = async () => {
    if (!selectedDate && !selectedTime && !selectedDoctor) {
      return
    }
    setIsLoading(true)
    const data = {
      selectedDate,
      selectedDoctor,
      selectedTime,
      patient: patientData?.email,
      specialist: doctors?.email,
      appointmentType
    }
    try {
      const docRef = await addDoc(collection(db, 'appointment'), {
        ...data,
      });
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#344054] mb-2">Schedule Appointment</h1>
          <p className="text-[#344054]/70">Book your appointment with our healthcare professionals</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[#344054] flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Select Date
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("prev")}
                      className="text-[#344054] border-gray-200"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-[#344054] font-medium min-w-[120px] text-center">
                      {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("next")}
                      className="text-[#344054] border-gray-200"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-[#344054]/70">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDays().map((day, index) => (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(day.date)}
                      disabled={day.isPast}
                      className={`
                        p-2 text-sm rounded-lg transition-all duration-200 hover:bg-blue-50
                        ${!day.isCurrentMonth ? "text-gray-300" : "text-[#344054]"}
                        ${day.isToday ? "bg-blue-100 font-semibold" : ""}
                        ${day.isSelected ? "bg-blue-500 text-white" : ""}
                        ${day.isPast ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                      `}
                    >
                      {day.day}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Slots */}
            {selectedDate && (
              <Card className="mt-6 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-[#344054] flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Available Time Slots
                  </CardTitle>
                  <CardDescription className="text-[#344054]/70">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          ${
                            selectedTime === time
                              ? "bg-blue-500 text-white"
                              : "text-[#344054] border-gray-200 hover:bg-blue-50"
                          }
                        `}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Form */}
          <div className="space-y-6">
            {/* Doctor Selection */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#344054] flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Select Doctor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {doctors && (
                  <div
                    key={doctors.id}
                    className={`
                    p-3 rounded-lg border cursor-pointer transition-all duration-200 border-blue-500 bg-blue-50
                  `}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={doctors.liveURL}
                      alt={`${doctors.firstName}`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-[#344054]">{`${doctors.firstName} ${doctors.lastName}`}</p>
                      <p className="text-sm text-[#344054]/70">{doctors.specialization}</p>
                    </div>
                  </div>
                </div>
                )}
              </CardContent>
            </Card>

            {/* Appointment Details */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#344054] flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Appointment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patient-name" className="text-[#344054]">
                    Patient Name
                  </Label>
                  <Input
                    id="patient-name"
                    placeholder="Enter patient name"
                    value={`${patientData?.firstName} ${patientData?.lastName}`}
                    className="text-[#344054] border-gray-200"
                    readOnly
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#344054]">
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    placeholder="Enter phone number" 
                    className="text-[#344054] border-gray-200"
                    readOnly
                    value={patientData?.phone} 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appointment-type" className="text-[#344054]">
                    Appointment Type
                  </Label>
                  <Select onValueChange={(value) =>{
                    setAppointMentType(value)
                  }}>
                    <SelectTrigger className="text-[#344054] border-gray-200">
                      <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                      {appointmentTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-[#344054]">
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific concerns or notes..."
                    className="text-[#344054] border-gray-200"
                  />
                </div>
              </CardContent>
            </Card>

            {selectedDate && selectedTime && selectedDoctor && (
              <Card className="border-gray-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-[#344054] flex items-center gap-2">
                    <CalendarDays className="h-5 w-5" />
                    Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#344054]/70">Date:</span>
                    <span className="text-[#344054] font-medium">{selectedDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#344054]/70">Time:</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {selectedTime}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#344054]/70">Doctor:</span>
                    <span className="text-[#344054] font-medium">{selectedDoctor}</span>
                  </div>

                  <Button
                    onClick={handleBookAppointment}
                    disabled={isLoading}
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    {
                      isLoading ? 'Booking...' : 'Book Appointment'
                    }
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientSchedule