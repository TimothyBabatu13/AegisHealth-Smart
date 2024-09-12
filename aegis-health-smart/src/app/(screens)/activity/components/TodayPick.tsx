<<<<<<< HEAD
import React from "react";
import ActivityCard from "../../components/ActivityCard";
import ScrollComponent from "../../components/ScrollComponent";
interface TodayPickProps {
    img: string;
    activityName: string;
    completedSessions: number;
    totalSessions: number;
}

function TodayPick() {
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
            <ScrollComponent>
                {data.map(
                    (
                        { activityName, completedSessions, totalSessions, img },
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
            </ScrollComponent>
        </div>
    );
}

export default TodayPick;
=======
import React from "react";
import ActivityCard from "../../components/ActivityCard";
import ScrollComponent from "../../components/ScrollComponent";
interface TodayPickProps {
    img: string;
    activityName: string;
    completedSessions: number;
    totalSessions: number;
}

function TodayPick() {
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
            <ScrollComponent>
                {data.map(
                    (
                        { activityName, completedSessions, totalSessions, img },
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
            </ScrollComponent>
        </div>
    );
}

export default TodayPick;
>>>>>>> master
