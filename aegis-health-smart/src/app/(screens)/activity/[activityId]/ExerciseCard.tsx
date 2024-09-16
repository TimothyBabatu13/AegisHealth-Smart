import Image from "next/image"
export interface ExerciseCardType {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: string,
    name: string,
    target: string,
    secondaryMuscles: string[],
    instructions: string[]
}
const ExerciseCard = ({ 
    bodyPart, equipment, gifUrl, id, name, target, secondaryMuscles, instructions
 } : ExerciseCardType) => {

    const turnToUppercase = (text : string) => {
        const transformedText = text.split(' ').map(text => `${text.charAt(0).toUpperCase() + text.slice(1)}`).join(' ') 
        return transformedText;
    }

    const text = turnToUppercase(name)
    console.log(bodyPart, equipment, gifUrl, id, name, target, secondaryMuscles, instructions)
  return (
    <main>
        <h3>Name: <span>{text}</span></h3>
        <h3>Target: <span>{target}</span></h3>
        <h3>Body part: <span>{bodyPart}</span></h3>
        <h3>Equipment: <span>{equipment}</span></h3>
        <h3>Secondary Muscles: {secondaryMuscles.map((secondaryMuscle, id) => <span key={id}>{secondaryMuscle}{id === secondaryMuscles.length - 1 ? null : ','}</span>)}</h3>
        <Image className="w-[50%] mx-auto" height={200} width={400} src={gifUrl} alt={name + 'workout gif'}/>
        <h4 className=" underline">Instructions</h4>
        <ul className="ml-40px">
            {
                instructions.map((instruction, id) => (
                    <li className=" list-disc" key={id}>{instruction}</li>
                ))
            }
        </ul>
    </main>
  )
}

export default ExerciseCard

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