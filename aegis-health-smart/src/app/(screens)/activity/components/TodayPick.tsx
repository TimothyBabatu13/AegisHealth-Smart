"use client";

import React from "react";
import ActivityCard from "../../components/ActivityCard";
import ScrollButtons from "../../components/ScrollButtons";
interface TodayPickProps {
    img: string;
    activityName: string;
    completedSessions: number;
    totalSessions: number;
}

function TodayPick() {
    const galleryRef = React.useRef(null);
    const data: TodayPickProps[] = [
        {
            img: "/activity1.png",
            completedSessions: 2,
            totalSessions: 18,
            activityName: "Energy Morning",
        },
        {
            img: "/activity2.png",
            completedSessions: 2,
            totalSessions: 18,
            activityName: "Energy Morning",
        },
        {
            img: "/activity3.png",
            completedSessions: 2,
            totalSessions: 18,
            activityName: "Energy Morning",
        },
        {
            img: "/activity4.png",
            completedSessions: 2,
            totalSessions: 18,
            activityName: "Energy Morning",
        },
    ];
    return (
        <div className="text-[#141414]">
            <div className="flex items-center justify-between mt-10">
                <h2 className="font-semibold text-lg leading-5">
                    Today&apos;s Picks
                </h2>
            </div>
            <div className="relative mt-5 ">
                <div
                    id="gallery"
                    ref={galleryRef}
                    className=" flex items-center gap-5 overflow-x-scroll scroll-smooth"
                >
                    {data.map(
                        (
                            {
                                activityName,
                                completedSessions,
                                totalSessions,
                                img,
                            },
                            id
                        ) => {
                            return (
                                <ActivityCard
                                    key={id}
                                    activityName={activityName}
                                    completedSessions={completedSessions}
                                    totalSessions={totalSessions}
                                    img={img}
                                />
                            );
                        }
                    )}
                </div>
            </div>
            <div className="mr-5 py-7">
                <ScrollButtons galleryRef={galleryRef} />
            </div>
        </div>
    );
}

export default TodayPick;
