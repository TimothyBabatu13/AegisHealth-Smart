import React from "react";
import ActivityCard from "../../components/ActivityCard";
import ScrollComponent from "../../components/ScrollComponent";
interface TodayPickProps {
    img: string;
    activityName: string;
    completedSessions: number;
    totalSessions: number;
}

const fetchData = async () => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '44e1d38ee4msh7f5e486e5ae78d1p170cacjsn4a13faf3bb2b',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result);
    return result;
} catch (error) {
	console.error(error);
}
}

async function TodayPick() {
    const gymData = await fetchData();

    return (
        <div className="text-[#141414]">
            <div className="flex items-center justify-between mt-10">
                <h2 className="font-semibold text-lg leading-5">
                    Today&apos;s Picks
                </h2>
            </div>
            <ScrollComponent>
                {
                    gymData?.map((gymDatum: any) => (
                        <ActivityCard 
                            key={gymDatum.id}
                            id={gymDatum.id}
                            activityName={gymDatum.name}
                            completedSessions={1}
                            totalSessions={20}
                            img={gymDatum.gifUrl}
                        />
                    ))
                }
            </ScrollComponent>
        </div>
    );
}

export default TodayPick;


// {
//     bodyPart: 'waist',
//     equipment: 'body weight',
//     gifUrl: 'https://v2.exercisedb.io/image/lYbM4050aVn3CR',
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
//   },