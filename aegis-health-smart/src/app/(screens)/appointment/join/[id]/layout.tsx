import PageWrapper from "@/components/PageWrapper";
import DoctorInformation from "./components/DoctorInformation";
import VideoCallScreen from "./components/VideoCallScreen";
import MessageNavBar from "./components/MessageNavBar";
import SmallPageWrapper from "@/components/SmallPageWrapper";
import UpcomingAppointment from "@/app/(screens)/components/UpcomingAppointment";
//Readonly<{
interface LayoutType {
    children:  React.ReactNode,
      params: {
        id: string
    }
}
const layout = ({
    children, params
  }: LayoutType) => {
    
    const { id } = params;
  return (
    <div className="min-[1220px]:flex">
        <PageWrapper>
            <DoctorInformation />
            <VideoCallScreen />
            <MessageNavBar id={id} />
            {children}
        </PageWrapper>
        <SmallPageWrapper>
          <UpcomingAppointment />
        </SmallPageWrapper>
        
    </div>
  )
}

export default layout