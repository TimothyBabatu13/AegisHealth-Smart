import Message from "@/components/Message"

interface paramsType {
    params: {
        id: string
    }
}
const page = ({params : { id }} : paramsType) => {
    
  return (
    <div>
        <Message id={id}/>
    </div>
  )
}

export default page