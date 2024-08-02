'use client'

import FindSpecialistCard from "./FindSpecialistCard";
import ScrollButtons from "./ScrollButtons";
import LinkWithChevron from "./LinkWithChevron";
import { ChevronRightIcon } from "@/components/Svgs";
import { Suspense, useRef } from "react";
import FindSpecialistData from "./FindSpecialistData";
import Loader from "@/components/Loader";
export interface FindSpecialistCardType {
    img: string;
    name: string;
    specialization: string;
    active: boolean;
    id: string
}

const FindSpecialist = () => {
    const galleryRef = useRef(null)

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold leading-5 text-[#141414]">
                    Find Specialist
                </h3>
                <LinkWithChevron href="" Icon={ChevronRightIcon}>See all</LinkWithChevron>
            </div>
            <div id="gallery" ref={galleryRef} className={`flex w-full overflow-x-scroll scroll-smooth`}>
                <Suspense fallback={<Loader />}>
                    <FindSpecialistData />
                </Suspense>
            </div>
            <ScrollButtons galleryRef={galleryRef}/>
        </div>
    );
};

export default FindSpecialist;
