import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { db } from "@/config/firebaseConfig";
import { userStore } from "@/stores/userStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FileText, MessageSquare, MoreHorizontal, Stethoscope } from "lucide-react";
import { useEffect, useState } from "react";

type DataType = {
    address: string;
    allergies: string;
    appointmentType: string;
    arrId1: string;
    arrId2: string;
    bloodType: string;
    currentMedications: string;
    dateOfBirth: string;
    email: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    emergencyContactRelation: string;
    firstName: string;
    gender: string;
    id: string;
    insuranceProvider: string;
    lastName: string;
    liveURL: string;
    medicalConditions: string;
    name: string;
    patient: string;
    phone: string;
    policyNumber: string;
    primaryPhysician: string;
    profileURL: string;
    selectedDate: {
      seconds: number;
      nanoseconds: number;
    };
    selectedDoctor: string;
    selectedTime: string;
    specialist: string;
    age: string,
    lastVisit: string
    status: string
    nextAppointment: string
};

function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  
  type Patient = {
    id: string;
    email: string;
    [key: string]: any;
  };
  
  type Appointment = {
    id: string;
    patient: string;
    [key: string]: any;
  };
  
  type Merged = {
    arrId1: string;
    arrId2: string;
    [key: string]: any;
  };
  
  export const mergeByEmail = (
    patients: Patient[],
    appointments: Appointment[]
  ): Merged[] => {
    const merged: Merged[] = [];
  
    patients.forEach(patient => {
      const matchedAppointments = appointments.filter(
        appointment => appointment.patient === patient.email
      );
  
      matchedAppointments.forEach(appointment => {
        merged.push({
          arrId1: patient.id,
          arrId2: appointment.id,
          ...patient,
          ...appointment,
        });
      });
    });
  
    return merged;
  };
  
  const getPatients = async ({ specialist }: { specialist: string }) => {
    try {
      const appointmentsRef = collection(db, "appointment");
      const appointmentsQuery = query(
        appointmentsRef,
        where("specialist", "==", specialist)
      );
      const appointmentsSnap = await getDocs(appointmentsQuery);
  
      const appointmentData: Appointment[] = appointmentsSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Appointment[];
  
      const patientEmails = Array.from(
        new Set(
          appointmentData.map(app => app.patient).filter(Boolean)
        )
      );
  
      if (patientEmails.length === 0) return [];
  
      const chunks = chunkArray(patientEmails, 10);
      let patients: Patient[] = [];
  
      for (const chunk of chunks) {
        const patientsQuery = query(
          collection(db, "patient"),
          where("email", "in", chunk)
        );
        const patientsSnap = await getDocs(patientsQuery);
  
        const docs = patientsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Patient[];
  
        patients.push(...docs);
      }
  
      const mergedValue = mergeByEmail(patients, appointmentData);
      return mergedValue as never as DataType[];
    } catch (error) {
      console.log(error);
    }
  };
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

const DashboardPatientAppointMent = () => {

    const { user } = userStore()
    const [data, setData] = useState<Array<DataType>>([]); 

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPatients({specialist: user?.email!})! as DataType[]; 
            setData(result);
        }
        fetchData();
        
    }, [])

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
      
      const calculateAge = (dobString: string) => {
        const dob = new Date(dobString);
        const today = new Date
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }
    const formatDate = (timestamp: { seconds: number, nanoseconds: number }): string => {
        const date = new Date(timestamp.seconds * 1000);
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, "0");
        const day = `${date.getDate()}`.padStart(2, "0");
      
        return `${year}-${month}-${day}`;
      }

  return (
    <div>
        {
            data.length ? (         
              <CardContent>
                <div className="space-y-4">
                  {data.map((patient) => (
                    <div
                      key={patient.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={patient.liveURL} alt={patient.name} />
                          <AvatarFallback className="bg-blue-100 text-[#344054]">
                            {patient.email}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="text-sm md:text-base font-medium text-[#344054]">{`${patient.firstName} ${patient.lastName}`}</p>
                          <p className="text-xs md:text-sm text-[#344054]/70">
                            {patient.dateOfBirth && <span>Age: {calculateAge(patient.dateOfBirth)} •</span>} {patient.appointmentType}
                          </p>
                          {
                            patient.selectedDate && <p className="text-xs md:text-xs text-[#344054]/50">{formatDate(patient.selectedDate)}</p>
                          }
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {
                            patient.status && (
                            <div className="text-right">
                                <Badge className={getPatientStatusColor(patient.status)}>{patient.status}</Badge>
                                {
                                    patient.nextAppointment && <p className="text-xs text-[#344054]/70 mt-1">{patient.nextAppointment}</p>
                                }
                            </div>
                            )
                        }
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
            ) : (
                <div>
                    <Stethoscope className="h-12 w-12 text-[#344054]/30 mx-auto mb-4" />
                    <h2>No appointment</h2>
                </div>
            )
        }
        
    </div>
  )
}

export default DashboardPatientAppointMent