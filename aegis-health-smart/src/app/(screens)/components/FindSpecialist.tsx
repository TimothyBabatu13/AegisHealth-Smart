'use client'

import FindSpecialistCard from "./FindSpecialistCard";
import ScrollButtons from "./ScrollButtons";
import LinkWithChevron from "./LinkWithChevron";
import { ChevronRightIcon } from "@/components/Svgs";
import { useRef } from "react";
interface FindSpecialistCardType {
    img: string;
    name: string;
    specialization: string;
    active: boolean;
}

const FindSpecialist = () => {
    const galleryRef = useRef(null)
    const data: FindSpecialistCardType[] = [
        {
            img: "/img1.jpg",
            name: "Dr. Uwadinachi Ofoegbunam",
            specialization: "Neonatal Consultant",
            active: true,
        },
        {
            img: "/img2.jpg",
            name: "Dr. Uwadinachi Ofoegbunam",
            specialization: "Neonatal Consultant",
            active: true,
        },
        {
            img: "/img1.jpg",
            name: "Dr. Uwadinachi Ofoegbunam",
            specialization: "Neonatal Consultant",
            active: false,
        },
        {
            img: "/img1.jpg",
            name: "Dr. Uwadinachi Ofoegbunam",
            specialization: "Neonatal Consultant",
            active: false,
        },
    ];
    return (
        <div className="mt-10">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold leading-5 text-[#141414]">
                    Find Specialist
                </h3>
                <LinkWithChevron href="" Icon={ChevronRightIcon}>See all</LinkWithChevron>
            </div>
            <div id="gallery" ref={galleryRef} className={`flex w-full overflow-x-scroll scroll-smooth`}>
                {data.map(({ name, active, img, specialization }, id) => (
                    <FindSpecialistCard
                        key={id}
                        name={name}
                        active={active}
                        img={img}
                        specialization={specialization}
                        className={`${id === data.length - 1 ? "" : "mr-5"}`}
                    />
                ))}
            </div>
            <ScrollButtons galleryRef={galleryRef}/>
        </div>
    );
};

export default FindSpecialist;
