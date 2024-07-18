import MedicineSchedule from "./components/MedicineSchedule";

export default function Home() {
  return (
      <section>
        <div>
          <h2 className="text-[28px] font-semibold leading-[33.6px]">Hello, Doris👋</h2>
          <h3 className="text-[15px] text-[#141414CC] font-normal leading-[20px]">Let’s stay on top your health</h3>
          <MedicineSchedule />
        </div>
      </section>
  );
}
