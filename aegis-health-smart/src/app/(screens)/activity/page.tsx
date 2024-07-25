import PageWrapper from "@/components/PageWrapper";
import TodayPick from "./components/TodayPick";

const Activity = () => {
    return (
        <section>
            <PageWrapper>
                <h2 className="text-[28px] font-semibold leading-[33.6px]">Wellness Activity</h2>
                <h3 className="text-[15px] text-[#141414CC] font-normal leading-[20px]">Get expert advice for your symptoms</h3>
                <TodayPick />
            </PageWrapper>
        </section>
    );
};

export default Activity;
