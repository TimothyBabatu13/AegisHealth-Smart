import PageWrapper from "@/components/PageWrapper"
import Buttons from "./components/Buttons"
import DemoPage from "./components/Table"

const page = () => {
  return (
    <section className="flex">
      <PageWrapper>
        <h2 className="text-[28px] text-[#040703] font-semibold leading-[33.6px]">My Appointments</h2>
        <h3 className="text-sm text-[#141414CC] font-normal leading-[20px] mb-10">See all your appointments in one place</h3>
        <Buttons />
        <DemoPage />
      </PageWrapper>
    </section>
  )
}

export default page