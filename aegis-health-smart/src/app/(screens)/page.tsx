<<<<<<< HEAD
import PageWrapper from "@/components/PageWrapper";
import MedicineSchedule from "./components/MedicineSchedule";
import FindSpecialist from "./components/FindSpecialist";
import MentalSupport from "./components/MentalSupport";
import SmallPageWrapper from "@/components/SmallPageWrapper";
import UpcomingAppointment from "./components/UpcomingAppointment";
import UserName from "./components/UserName";

export default function Home() {
  return (
      <section className="min-[1220px]:flex">
        <PageWrapper>
          <h2 className="text-[28px] font-semibold leading-[33.6px]">Hello, <UserName />👋</h2>
          <h3 className="text-[15px] text-[#141414CC] font-normal leading-[20px]">Let’s stay on top your health</h3>
          <MedicineSchedule />
          <FindSpecialist />
          <MentalSupport />
        </PageWrapper>
       <SmallPageWrapper>
        <UpcomingAppointment />
       </SmallPageWrapper>
      </section>
  );
}
=======
import PageWrapper from "@/components/PageWrapper";
import MedicineSchedule from "./components/MedicineSchedule";
import FindSpecialist from "./components/FindSpecialist";
import MentalSupport from "./components/MentalSupport";
import SmallPageWrapper from "@/components/SmallPageWrapper";
import UpcomingAppointment from "./components/UpcomingAppointment";
import UserName from "./components/UserName";

export default function Home() {
  return (
      <section className="min-[1220px]:flex">
        <PageWrapper>
          <h2 className="text-[28px] font-semibold leading-[33.6px]">Hello, <UserName />👋</h2>
          <h3 className="text-[15px] text-[#141414CC] font-normal leading-[20px]">Let’s stay on top your health</h3>
          <MedicineSchedule />
          <FindSpecialist />
          <MentalSupport />
        </PageWrapper>
       <SmallPageWrapper>
        <UpcomingAppointment />
       </SmallPageWrapper>
      </section>
  );
}
>>>>>>> master
