'use client';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { db } from "@/config/firebaseConfig";
import { userStore } from "@/stores/userStore";
import { useScheduleStore } from "@/stores/useScheduleStore";
import { appointmentTypes } from "@/utils/hardcoded-data"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { CalendarDays, User } from "lucide-react"
import { useEffect, useState } from "react";
import { type Patient } from "../[id]/page";

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


const Form = () => {
    const { user } = userStore();
    const [isLoading, setIsLoading] = useState(false);
    const { selectedDate, selectedTime, selectedDoctor, doctorEmail } = useScheduleStore();
    const [appointmentType, setAppointMentType] = useState(appointmentTypes[0]);
    const [patientData, setPatientData] = useState<Patient>()
    
    useEffect(()=>{
      const fetchData = async () => {
        const response = await fetchUserDetails({email: user?.email!});
        setPatientData(response);
      }
      fetchData();
    }, [])

    const handleBookAppointment = async () => {
        if(!doctorEmail) return
        if (selectedDate && selectedTime && selectedDoctor) {
          setIsLoading(true)
          const data = {
            selectedDate,
            selectedDoctor,
            selectedTime,
            patient: user?.email!,
            specialist: doctorEmail,
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
      }

  return (
    <div>
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
                    className="text-[#344054] border-gray-200"
                    readOnly
                    value={`${patientData?.firstName} ${patientData?.lastName}`}
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
                  <Select onValueChange={(value) => {
                    setAppointMentType(value);
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
              <Card className="border-gray-200 bg-blue-50 mt-2">
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
  )
}

export default Form