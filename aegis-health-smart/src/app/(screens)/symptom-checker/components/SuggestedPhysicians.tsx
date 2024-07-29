import React from "react";
import UpcomingSessionCard from "../../components/UpcomingSessionCard";
import ZoomCard from "../../components/ZoomCard";

function SuggestedPhysicians() {
    return (
        <div>
            <h2 className="font-semibold text-lg leading-[21.6px] mb-7 text-[#101928]">
                Suggested Physicians
            </h2>
            <div className="mb-5">
                <UpcomingSessionCard
                    isActive
                    img="/upcomingappointment.jpg"
                    name="Dr. Alison Ogaga"
                    type="General Practioner "
                />
            </div>
            <div>
                <ZoomCard
                    day="Friday, 4 November"
                    time="11.30 - 12.00 (30 min)"
                    name="Dr. Hardy Octavian"
                    isVerified
                    type="General Practioner "
                    img="/upcomingappointment.jpg"
                    id="aaa"
                />
            </div>
        </div>
    );
}

export default SuggestedPhysicians;
