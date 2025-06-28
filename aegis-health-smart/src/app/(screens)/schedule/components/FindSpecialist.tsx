'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope } from "lucide-react"
import { useEffect, useState } from "react";
import { FindSpecialistCardType } from "../../components/FindSpecialist";
import { useScheduleStore } from "@/stores/useScheduleStore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";


const fetchListOfSpecialists = async () => {
  
  const specialistsRef = collection(db, "specialist");
  const querySnapshot = await getDocs(specialistsRef);
  
  if(querySnapshot.empty){
    console.log('ends here')
    return [];

  }
  const specialists = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  
  return specialists
}

const FindSpecialist = () => {

    const { selectedDoctor, setSelectedDoctor, setDoctorEmail } = useScheduleStore();
    const [doctors, setDoctors] = useState<Array<FindSpecialistCardType>>([]); 
    
    useEffect(()=> {
        const fetchSpecialist = async () => {
          const res  = await fetchListOfSpecialists();
          setDoctors(res as Array<FindSpecialistCardType>);
        };
        fetchSpecialist();
      } , [])

      const handleSelectSpecialist = (doctor: FindSpecialistCardType) => {
        setSelectedDoctor(`${doctor.firstName} ${doctor.lastName}`);
        setDoctorEmail(doctor.email);
      }
  return (
    <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#344054] flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Select Doctor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    onClick={()=>{
                      handleSelectSpecialist(doctor)
                    }}
                    className={`
                      p-3 rounded-lg border cursor-pointer transition-all duration-200
                      ${
                        selectedDoctor === `${doctor.firstName} ${doctor.lastName}`
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={doctor.liveURL}
                        alt={doctor.firstName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-[#344054]">{`${doctor.firstName} ${doctor.lastName}`}</p>
                        <p className="text-sm text-[#344054]/70">{doctor.specialization}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
  )
}

export default FindSpecialist