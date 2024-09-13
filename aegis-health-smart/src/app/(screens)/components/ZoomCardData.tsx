'use client';
import { db } from "@/config/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import ZoomCard from "./ZoomCard";
import { Skeleton } from "@/components/ui/skeleton";
import { TimeIcon, VerifiedTickIcon, ZoomIcon } from "@/components/Svgs";
import Link from "next/link";
import RedirectToMessage from "./RedirectToMessage";
import UpcomingSessionCard from "./UpcomingSessionCard";

interface AppoitmentDataType {
    type: string,
    time: string,
    isVerified: boolean,
    img: string,
    day: string,
    name: string,
    isActive: boolean,
    id: string,
}
const UseAppointMentData = () => {
    const [ZoomCardData, setZoomCardData] = useState<AppoitmentDataType[] | any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect( ()=>{
        setIsLoading(true);
        const q = (collection(db, "upComingSession"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const data : any[] = [];
          querySnapshot.forEach((doc) => {
            // console.log({...doc.data(), id: doc.id})
            setIsLoading(false)
              data.push({...doc.data(), id: doc.id});
          });
          setZoomCardData(data);
        });
      } ,[])

      return { ZoomCardData, isLoading }
}

export const ZoomCardAppointmentData = () => {
    const { ZoomCardData, isLoading } = UseAppointMentData()

    const data = ZoomCardData[0];

    if(isLoading){
         return (
        <div>
            <Skeleton className="h-[21px] w-[200px] mb-[7px] bg-slate-600"/>
            <div className="flex items-center mb-3">
                <TimeIcon />
                <Skeleton className="h-[21px] ml-3 w-[170px] bg-slate-600"/>
            </div>
            <div className="flex items-center mb-3">
                <ZoomIcon />
                <Skeleton className="h-[21px] ml-3 w-[170px] bg-slate-600"/>
            </div>
            <div className="flex items-center mb-[20.79px]">
                <div className="mr-3 h-fit relative">
                    <Skeleton className="h-[50px] w-[50px] rounded-full bg-slate-600"/>
                    <VerifiedTickIcon className="absolute right-0 -bottom-[2px]"/>
                </div>
                <div>
                    <Skeleton className="mb-[2.21px] w-[140px] h-[21px] bg-slate-600"/>
                    <Skeleton  className="bg-slate-600 w-[140px] h-[21px]"/>

                </div>
            </div>
            <div className="h-[0.5px] w-full bg-[#E0E3EB]"/>
                <div className="mt-[20.5px] flex justify-between">
                <button className="text-sm font-semibold text-[#141414] leading-[21px] py-2 px-4 border border-[#E0E3EB] rounded-[10px]">Reschedule</button>
                <Link href={`/appointment/join/${''}`} className="text-[#291ED7] text-sm font-semibold leading-[21px] py-2 px-4 bg-[#EAE9FC] rounded-[10px]">Join Now</Link>
            </div>
        </div>
        )
    }
    
    return (
        <ZoomCard 
            day={data?.day}
            time={data?.time}
            name={data?.name}
            isVerified={data?.isVerified}
            type={data?.type}
            img={data?.img}
            id={data?.id}
        />
        
    )
}


export const UpcomingsessionData = () => {
    const { ZoomCardData, isLoading } = UseAppointMentData()

    const data = Array.from(Array(4).keys())
    const secondData = ZoomCardData[1];

    const ZoomData = [secondData, secondData, secondData, secondData]

    if(isLoading) {
        return(
            <div>
                {
                    data.map((item, id) => {
                        return (
                            <div key={id} className="flex items-center border border-[#E0E3EB] rounded-[8px] py-[10px] px-5 mb-[18px]">
                                <div className="mr-3 h-fit w-fit relative">
                                    <Skeleton className="h-10 w-10 rounded-full bg-slate-600"/>
                                    <VerifiedTickIcon className="absolute right-0 -bottom-[2px]"/>
                                </div>
                                <div className="flex-grow mr-3">
                                    <Skeleton  className="bg-slate-600 mb-1 w-[140px] h-[21px]"/>
                                    <Skeleton  className="bg-slate-600 w-[140px] h-[21px]"/>
                                </div>
                                <RedirectToMessage 
                                    href={``}
                                />
                         </div>
                        )
                    })
                }
                 
            </div>
        )
    }
  return (<>
  {ZoomData.map((datum) =>
    <UpcomingSessionCard 
        isActive={datum?.isActive}
        img={datum?.img}
        name={datum?.name}
        type={datum?.type}
        id={datum?.id}
    />)}
  </>
  
  )
}

export default UpcomingsessionData
