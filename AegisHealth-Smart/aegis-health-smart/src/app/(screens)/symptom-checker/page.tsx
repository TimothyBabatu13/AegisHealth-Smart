import PageWrapper from "@/components/PageWrapper";
import SmallPageWrapper from "@/components/SmallPageWrapper";
import PopularSymptoms from "./components/PopularSymptoms";
import SuggestedPhysicians from "./components/SuggestedPhysicians";

const page = () => {
    return (
        <section className="min-[1220px]:flex">
            <PageWrapper>
                <div>
                    <h2 className="text-[28px] font-semibold leading-[33.6px]">
                        Symptom Checker
                    </h2>
                    <h3 className="text-sm text-[#141414CC] font-normal leading-5">
                        Get expert advice for your symptoms
                    </h3>
                </div>
                <PopularSymptoms />
            </PageWrapper>
            <SmallPageWrapper>
                <SuggestedPhysicians />
            </SmallPageWrapper>
        </section>
    );
};

export default page;
