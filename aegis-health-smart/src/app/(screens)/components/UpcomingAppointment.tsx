import LinkWithChevron from "./LinkWithChevron"
import { ChevronRightIcon } from "@/components/Svgs";
import UpcomingSessionCard from "./UpcomingSessionCard"
import ZoomCard from "./ZoomCard"

const UpcomingAppointment = () => {
  return (
    <div>
       <div className="flex items-center justify-between">
            <h3 className="text-lg text-[#101928] font-semibold leading-[26.5px]">Upcoming Appointments</h3>
            <LinkWithChevron href="" Icon={ChevronRightIcon}></LinkWithChevron>
       </div>
       <ZoomCard 
            day="Friday, 4 November"
            time="11.30 - 12.00 (30 min)"
            name="Dr. Hardy Octavian"
            isVerified
            type="General Practioner "
            img="/upcomingappointment.jpg"
            id='aaa'
        />
        <div className="mt-[39px]">
            <h3 className="text-lg text-[#141414] font-semibold leading-[21.6px] mb-5">Upcoming Sessions</h3>
            <UpcomingSessionCard 
                isActive
                img="/upcomingappointment.jpg"
                name="Dr. Alison Ogaga"
                type="General Practioner "
                id="0"
            />
            <UpcomingSessionCard 
                isActive
                img="/upcomingappointment.jpg"
                name="Dr. Alison Ogaga"
                type="General Practioner "
                id="1"
            />
            <UpcomingSessionCard 
                isActive
                img="/upcomingappointment.jpg"
                name="Dr. Alison Ogaga"
                type="General Practioner "
                id="2"
            />
            <UpcomingSessionCard 
                isActive
                img="/upcomingappointment.jpg"
                name="Dr. Alison Ogaga"
                type="General Practioner "
                id="3"
            />
        </div>
    </div>
  )
}

export default UpcomingAppointment