import Message from "@/components/Message"
import PageWrapper from "@/components/PageWrapper"
import type { paramsType } from "../../appointment/join/[id]/page"
import BackButton from "./component/BackButton"

const page = ({params : { id }} : paramsType) => {

  return (
    <section>
      <div className=""><BackButton /> Chat Header...</div>
      <PageWrapper>
        <Message id={id}/>
        {/* id: {id} */}
      </PageWrapper>
    </section>
  )
}

export default page