'use client';

import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const LazyLoadImage = ({ img, activityName } : {
    img: string,
    activityName: string
}) => {
    const ref = useRef<HTMLImageElement | null>(null);
    const [visible, setIsVisible] = useState<boolean>(false);
    // const [isSeen, setIsSeen] = useState<boolean>(false)

    useLayoutEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
          const [entry] = entries;
          if(entry.isIntersecting){
            setIsVisible(true)
          }
          // setIsVisible(entry.isIntersecting)
          // setIsSeen(true)

        }, {
          threshold: 0.5
        })
        if(ref.current){
          observer.observe(ref.current)
        }
        return () => {
          observer.disconnect()
        }
    }, [])
    // console.log('hi')
  return (
          <div className="relative">
            <Image
              ref={ref}
              height={156}
              width={234}
              className="rounded-[10px] mb-[13px] w-full aspect-[6/4] object-fill"
              src={visible ? img : ''}
              alt={`${activityName} image`}
              priority
              unoptimized
          /> 
          {
            !visible && <Skeleton className="h-[156px] ml-3 w-[234px] mb-[13px] bg-slate-600 absolute top-0 left-0"/>
          }
          </div>
  )
}

export default LazyLoadImage