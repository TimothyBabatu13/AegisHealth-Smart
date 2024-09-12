<<<<<<< HEAD
'use client';
import { AppointmentTableContextType, AppointmentTableType } from "@/types/types";
import { useContextHook } from "@/utils/useContext";
import { createContext, useContext, useState } from "react";


const data : AppointmentTableType[] = [
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
  const [tableData, setTableData] = useState<AppointmentTableType[]>(data);
  const [realData, setRealData] = useState(data);
  return (
    <Context.Provider value={{tableData, setTableData, realData}}>
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


=======
'use client';
import { AppointmentTableContextType, AppointmentTableType } from "@/types/types";
import { useContextHook } from "@/utils/useContext";
import { createContext, useContext, useState } from "react";


const data : AppointmentTableType[] = [
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
  const [tableData, setTableData] = useState<AppointmentTableType[]>(data);
  const [realData, setRealData] = useState(data);
  return (
    <Context.Provider value={{tableData, setTableData, realData}}>
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


>>>>>>> master
export default AppointmentTableContext;