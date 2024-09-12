import PageWrapper from "@/components/PageWrapper"
import Buttons from "./components/Buttons"
import AppointmentTableContext from "@/context/AppointmentTableContext"
import Table from "./components/Table"
import SmallPageWrapper from "@/components/SmallPageWrapper"
import Schedules from "./components/Schedules"

const page = () => {
  return (
    <section className="min-[1220px]:flex">
      <PageWrapper>
        <h2 className="text-[28px] text-[#040703] font-semibold leading-[33.6px]">My Appointments</h2>
        <h3 className="text-sm text-[#141414CC] font-normal leading-[20px] mb-10">See all your appointments in one place</h3>
        <AppointmentTableContext>
          <Buttons />
          <Table />
        </AppointmentTableContext>
      </PageWrapper>
      <SmallPageWrapper>
        <Schedules />
      </SmallPageWrapper>
    </section>
  )
}

export default page