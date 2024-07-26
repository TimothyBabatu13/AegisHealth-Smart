'use client'
import React from "react";
import FindSpecialistCard from "../../components/FindSpecialistCard";
import ScrollButtons from "../../components/ScrollButtons";
interface FindSpecialistCardType {
    img: string;
    name: string;
    specialization: string;
    active: boolean;
}

function TodayPick() {
    const galleryRef = React.useRef(null);
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
        <div>
            <div className="flex items-center justify-between mt-10">
                <h2 className="font-semibold">Find Specialist</h2>
                {/* <Link to="/home/specialists" className="cursor-pointer">
                    <div className="flex items-center gap-2 text-[#667185] font-semibold">
                        <span>See all</span>
                        <GrNext />
                    </div>
                </Link> */}
            </div>
            <div className="relative mt-6 ">
                <div
                    id="gallery"
                    ref={galleryRef}
                    className=" flex items-center gap-5 overflow-x-scroll scroll-smooth"
                >
                    {data.map(({ name, active, img, specialization }, id) => {
                        return (
                            <FindSpecialistCard
                                key={id}
                                name={name}
                                active={active}
                                img={img}
                                specialization={specialization}
                                className={`${
                                    id === data.length - 1 ? "" : "mr-5"
                                }`}
                            />
                        );
                    })}
                </div>
            </div>
            <ScrollButtons galleryRef={galleryRef}/>
            {/* <div className="flex justify-end mt-5">
                <div className="flex items-center gap-4">
                    <button
                        className={`border p-2 rounded-lg ${
                            atStart ? "opacity-40" : ""
                        }`}
                        onClick={backScroll}
                        disabled={atStart}
                    >
                        <GrPrevious />
                    </button>
                    <button
                        className={`border p-2 rounded-lg ${
                            atEnd ? "opacity-40" : ""
                        }`}
                        onClick={forwardScroll}
                        disabled={atEnd}
                    >
                        <GrNext />
                    </button>
                </div>
            </div> */}
        </div>
    );
}

export default TodayPick;
