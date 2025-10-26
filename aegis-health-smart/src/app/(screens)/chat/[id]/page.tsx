
import type { paramsType } from "../../appointment/join/[id]/page"
import HealthcareChat from "./component/Chat"

const page = ({params : { id }} : paramsType) => {

  return (
    <section>
      <HealthcareChat id={id}/>
    </section>
  )
}

export default page