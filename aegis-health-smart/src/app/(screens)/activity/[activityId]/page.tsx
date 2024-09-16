import PageWrapper from "@/components/PageWrapper";
import SmallPageWrapper from "@/components/SmallPageWrapper";
import Vitals from "../components/Vitals";
import SupplementsRecommendations from "../components/SupplementsRecommendations";
import ExerciseCard from "./ExerciseCard";

type paramsType = {
    params: {
        activityId: string
    }
}

const fetchData = async (url : string) => {
    const baseURL = `https://exercisedb.p.rapidapi.com/exercises/exercise/${url}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '44e1d38ee4msh7f5e486e5ae78d1p170cacjsn4a13faf3bb2b',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(baseURL, options);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }
}

const page = async ({ params : {
    activityId
} } : paramsType) => {
    console.log(activityId)

    const data = await fetchData(activityId)
    console.log(data)
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
                <ExerciseCard 
                    bodyPart={data?.bodyPart}
                    equipment={data?.equipment}
                    gifUrl={data?.gifUrl}
                    id={data?.id}
                    name={data?.name}
                    target={data?.target}
                    secondaryMuscles={data?.secondaryMuscles}
                    instructions={data?.instructions}
                />
            </PageWrapper>
            <SmallPageWrapper>
                <Vitals />
                <SupplementsRecommendations />
            </SmallPageWrapper>
        </section>
  )
}

export default page


// {
//     bodyPart: 'waist',
//     equipment: 'body weight',
//     gifUrl: 'https://v2.exercisedb.io/image/yTnunBPnc4CLNy',
//     id: '0001',
//     name: '3/4 sit-up',
//     target: 'abs',
//     secondaryMuscles: [ 'hip flexors', 'lower back' ],
//     instructions: [
//       'Lie flat on your back with your knees bent and feet flat on the ground.', 'Place your hands behind your head with your elbows pointing outwards.',
      
//         'Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.',
      
//         'Pause for a moment at the top, then slowly lower your upper body back down to the starting position.',
//       'Repeat for the desired number of repetitions.'
//     ]
//   }
