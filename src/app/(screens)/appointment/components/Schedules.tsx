import CalendarComponent from "./Calendar"
import ScheduleCard from "./ScheduleCard"

const Schedules = () => {
  return (
    <div>
        <h3 className="text-lg text-[#101928] font-semibold leading-[26.1px]">Schedules</h3>
        <CalendarComponent />
        <ScheduleCard 
            day=""
            type="General Practioner "
            time="11.30 - 12.00 (30 min)"
            name="Dr. Hardy Octavian"
            id="bbb"
        />
    </div>
  )
}

export default Schedules