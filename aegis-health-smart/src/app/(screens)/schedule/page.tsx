import FindSpecialist from "./components/FindSpecialist";
import Calendar from "./components/calender";
import Form from "./components/Form";

const PatientSchedule = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#344054] mb-2">Schedule Appointment</h1>
          <p className="text-[#344054]/70">Book your appointment with our healthcare professionals</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <Calendar />
          <div className="space-y-6">
            <FindSpecialist />
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}


export default PatientSchedule