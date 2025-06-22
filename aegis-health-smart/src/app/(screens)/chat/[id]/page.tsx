// import Message from "@/components/Message"
// import PageWrapper from "@/components/PageWrapper"
import type { paramsType } from "../../appointment/join/[id]/page"
// import BackButton from "./component/BackButton"
import HealthcareChat from "./component/Chat"

const page = ({params : { id }} : paramsType) => {

  return (
    <section>
      <HealthcareChat id={id}/>
      {/* <div className=""><BackButton /> Chat Header...</div>
      <PageWrapper>
        <Message id={id}/>
      </PageWrapper> */}
    </section>
  )
}

export default page