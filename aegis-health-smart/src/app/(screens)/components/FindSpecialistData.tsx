import { db } from "@/config/firebaseConfig"
import { collection, DocumentData, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { FindSpecialistCardType } from "./FindSpecialist";
import FindSpecialistCard from "./FindSpecialistCard";

const FindSpecialistData = () => {

  const [specialist, setSpecialist] = useState<FindSpecialistCardType | any>([]);

  useEffect( ()=>{
    const getSpecialistData = async () => {
      const data : any = [];
      const colRef = collection(db, 'specialist');
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach(doc => {
        // console.log(doc.data());
        data.push({...doc.data(), id: doc.id})
        setSpecialist(data);
    })
    }
    getSpecialistData();
  } ,[])
  return (
    <>
      {
        specialist.map((doctor:FindSpecialistCardType, index: number) => (
          <FindSpecialistCard 
            img={doctor.img}
            name={doctor.name}
            specialization={doctor.specialization}
            active={doctor.active}
            id={doctor.id}
            key={index}
            className={`${index === specialist.length - 1 ? "" : "mr-5"}`}
          />
        ))
      }
    </>
  )
}

export default FindSpecialistData