import PageWrapper from "@/components/PageWrapper"
import SmallPageWrapper from "@/components/SmallPageWrapper"
import SuggestedPhysicians from "../components/SuggestedPhysicians"
import Chat from "./components/Chat"

interface AilmentTyoe {
    params: {
        ailment: 'ai',
    },
    searchParams: {
        ailment: string
    }
}
const getData = async (url : string) => {
    const data = {
        query: 'Tell me about headache'
    }
    try {
        const response = await fetch(url, {
          method: 'POST', // Specifies the request method
          headers: {
            'Content-Type': 'application/json', // Specify that we are sending JSON
          },
          body: JSON.stringify(data), // Convert data to JSON string
        });
    
        // Check if response is OK
        if (response.ok) {
          const jsonResponse = await response.json(); // Parse the JSON response
          console.log('Success:', jsonResponse); // Log the successful response
          return jsonResponse; // Optionally return the response for further use
        } else {
          console.error('HTTP Error:', response.status); // Log the error status
        }
      } catch (error) {
        console.error('Error:', error); // Catch and log any errors
      }
}
const page = async (id: AilmentTyoe) => {
    const { searchParams : { ailment } } = id
    const jj = getData('http://35.175.149.204/chat');
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
                <Chat />
                {/* <h5>You&apos;re here from another page and you&apos;re here to look for symptoms of {ailment}</h5> */}
                {/* <PopularSymptoms /> */}
            </PageWrapper>
            <SmallPageWrapper>
                <SuggestedPhysicians />
            </SmallPageWrapper>
        </section>
  )
}

export default page