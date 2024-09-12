import PageWrapper from "@/components/PageWrapper";
import TodayPick from "./components/TodayPick";
import SmallPageWrapper from "@/components/SmallPageWrapper";
import Vitals from "./components/Vitals";
import SupplementsRecommendations from "./components/SupplementsRecommendations";

const Activity = () => {
    return (
        <section className="min-[1220px]:flex">
            <PageWrapper>
                <div>
                    <h2 className="text-[28px] font-semibold leading-[33.6px]">
                        Wellness Activity
                    </h2>
                    <h3 className="text-sm text-[#141414CC] font-normal leading-5">
                        Get expert advice for your symptoms
                    </h3>
                </div>
                <TodayPick />
            </PageWrapper>
            <SmallPageWrapper>
                <Vitals />
                <SupplementsRecommendations />
            </SmallPageWrapper>
        </section>
    );
};

export default Activity;
