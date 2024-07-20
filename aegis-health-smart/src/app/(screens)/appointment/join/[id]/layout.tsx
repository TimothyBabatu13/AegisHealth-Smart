import PageWrapper from "@/components/PageWrapper";
import DoctorInformation from "./components/DoctorInformation";
import VideoCallScreen from "./components/VideoCallScreen";
import MessageNavBar from "./components/MessageNavBar";
import SmallPageWrapper from "@/components/SmallPageWrapper";
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
    <div className="flex">
        <PageWrapper>
            <DoctorInformation />
            <VideoCallScreen />
            <MessageNavBar id={id} />
            {children}
        </PageWrapper>
        <SmallPageWrapper>
            Hello How&apos;re you?
        </SmallPageWrapper>
        
    </div>
  )
}

export default layout