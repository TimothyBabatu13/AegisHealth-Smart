import PageWrapper from "@/components/PageWrapper"
import SmallPageWrapper from "@/components/SmallPageWrapper"
import SuggestedPhysicians from "../components/SuggestedPhysicians"

interface AilmentTyoe {
    params: {
        ailment: 'ai',
    },
    searchParams: {
        ailment: string
    }
}

const page = (id: AilmentTyoe) => {
    const { searchParams : { ailment } } = id
    
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

                <h5>You&apos;re here from another page and you&apos;re here to look for symptoms of {ailment}</h5>
                {/* <PopularSymptoms /> */}
            </PageWrapper>
            <SmallPageWrapper>
                <SuggestedPhysicians />
            </SmallPageWrapper>
        </section>
  )
}

export default page