'use client';
import { db } from "@/config/firebaseConfig";
import { AppointmentTableContextType, AppointmentTableType } from "@/types/types";
import { useContextHook } from "@/utils/useContext";
import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const LoadingData : AppointmentTableType[] = [
  {
    id: "728ed52f",
    name: 'Dr. Alison Ogaga',
    type: 'General Practioner ',
    isActive: true,
    img: '/name....jpg',
    hospital: 'Cottage Medicare Hospital',
    address: '18 Iwaya Rd, Yaba 101245, Lagos',
    date: '6 Jul, 2023',
    time: '1:00 PM'
  },
  {
      id: "728ed52f",
      name: 'Dr.Jennifer Johnson',
      type: 'Primary Care Physician',
      isActive: true,
      img: '/name....jpg',
      hospital: 'Blue Cross Hospital',
      address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
      date: '7 Jul, 2023',
      time: '10:00 AM'
    },
    {
      id: "728ed52f",
      name: 'Dr.Jennifer Johnson',
      type: 'Primary Care Physician',
      isActive: true,
      img: '/name....jpg',
      hospital: 'Blue Cross Hospital',
      address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
      date: '7 Jul, 2023',
      time: '10:00 AM'
    },
    {
      id: "728ed52f",
      name: 'Dr.Jennifer Johnson',
      type: 'Primary Care Physician',
      isActive: true,
      img: '/name....jpg',
      hospital: 'Blue Cross Hospital',
      address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
      date: '7 Jul, 2023',
      time: '10:00 AM'
    },
]



const Context = createContext<null | any>(null)

const AppointmentTableContext = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [tableData, setTableData] = useState<AppointmentTableType[] | any>([]);
  const [realData, setRealData] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState<AppointmentTableType[]>(LoadingData)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect( ()=>{
    
    try {
      setIsLoading(true);
      const q = (collection(db, "sessions"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data : any[] = [];
        querySnapshot.forEach((doc) => {
            setIsLoading(false);    
            data.push({...doc.data(), id: doc.id});
        });
        setTableData(data.filter(item => item.status === 'upcoming'));
        setRealData(data)
    });  
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setTableData([]);
      setRealData([])
    }
    
    
  } ,[])
  return (
    <Context.Provider value={{tableData, setTableData, realData, isLoading, loadingData}}>
      {children}
    </Context.Provider>
  )
}

export const useAppointmentTableHook = () =>{
  const context = useContext(Context);
  if(context === null ) {
      throw new Error('using context hook outside it container');
  };
  return context;
} 


export default AppointmentTableContext;