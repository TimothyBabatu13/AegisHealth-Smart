import PageWrapper from "@/components/PageWrapper";
import TodayPick from "./components/TodayPick";
import SmallPageWrapper from "@/components/SmallPageWrapper";
import Vitals from "./components/Vitals";
import SupplementsRecommendations from "./components/SupplementsRecommendations";

const Activity = () => {
    return (
        <section className="min-[1220px]:flex gap-5 pr-5 items-start justify-center w-full relative">
            <div className="relative xl:w-[742px] 2xl:w-[70%] bg-white min-h-lvh max-w-[650px] xl:max-w-[800px] 2xl:max-w-[1280px] border border-[#E4E7EC] rounded-lg">
                <div className="py-4 px-5">
                    <h2 className="text-[28px] font-semibold leading-[33.6px]">
                        Wellness Activity
                    </h2>
                    <h3 className="text-sm text-[#141414CC] font-normal leading-5">
                        Get expert advice for your symptoms
                    </h3>
                </div>
                <TodayPick />
            </div>
            <div className="min-h-lvh bg-white rounded-md p-5 border border-[#E4E7EC] w-[390px]">
                <Vitals />
                <SupplementsRecommendations />
            </div>
        </section>
    );
};

export default Activity;
