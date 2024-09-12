<<<<<<< HEAD
import Message from "@/components/Message"

export interface paramsType {
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

=======
import Message from "@/components/Message"

export interface paramsType {
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

>>>>>>> master
export default page