<<<<<<< HEAD
import { EndCallIcon, MicroPhoneIcon, StartRecordingIcon, VideoIcon } from "@/components/Svgs";
import { cn } from "@/lib/utils";
import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface VideoCallButtonType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
    children: React.ReactNode,
    className: string
}
const VideoCallButton = ( { children, className, ...props } : VideoCallButtonType
     )=> {
    return(
        <button className={cn(`w-10 h-10 hover:bg-[#fefbfac6] rounded-[8px] flex absolute bottom-2.5 bg-[#FEFBFA] justify-center items-center  ${className}`)} {...props}>
            {children}
        </button>
    )
}

const VideoCallScreen = () => {

  return (
    <div className="w-full relative h-[413px] rounded-[16px] mb-10">
        <Image 
            src={'/videocall1.jpg'}
            fill
            alt="recipient image"
        />
        <Image 
            src={'/videocall2.jpg'}
            alt="my image"
            height={120}
            width={115.86}
            className="absolute right-5 top-[22px] rounded-[8px]"
        />
        
        <div className="text-[#141414E5] text-sm font-medium leading-[20.3px] rounded-[200px] left-5 flex items-center justify-center bg-[#FEFBFA] absolute bottom-2.5 h-10 w-20">
            04:02
        </div>
        
        <VideoCallButton className={'left-[247px]'}>
            <MicroPhoneIcon />
        </VideoCallButton>

        <VideoCallButton className={'left-[317px]'}>
            <VideoIcon  />
        </VideoCallButton>

        <VideoCallButton className={'left-[387px] bg-[#F25767] hover:bg-[#f25767c4]'}>
            <EndCallIcon  />
        </VideoCallButton>

        <VideoCallButton className={'right-5 w-[155px] rounded-[200px]'}>
            <StartRecordingIcon className='mr-1' />
            <span className="text-sm text-[#141414E5] font-medium leading-[35.62px]">Start recording</span>
        </VideoCallButton>

    </div>
  )
}

=======
import { EndCallIcon, MicroPhoneIcon, StartRecordingIcon, VideoIcon } from "@/components/Svgs";
import { cn } from "@/lib/utils";
import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface VideoCallButtonType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
    children: React.ReactNode,
    className: string
}
const VideoCallButton = ( { children, className, ...props } : VideoCallButtonType
     )=> {
    return(
        <button className={cn(`w-10 h-10 hover:bg-[#fefbfac6] rounded-[8px] flex absolute bottom-2.5 bg-[#FEFBFA] justify-center items-center  ${className}`)} {...props}>
            {children}
        </button>
    )
}

const VideoCallScreen = () => {

  return (
    <div className="w-full relative h-[413px] rounded-[16px] mb-10">
        <Image 
            src={'/videocall1.jpg'}
            fill
            alt="recipient image"
        />
        <Image 
            src={'/videocall2.jpg'}
            alt="my image"
            height={120}
            width={115.86}
            className="absolute right-5 top-[22px] rounded-[8px]"
        />
        
        <div className="text-[#141414E5] text-sm font-medium leading-[20.3px] rounded-[200px] left-5 flex items-center justify-center bg-[#FEFBFA] absolute bottom-2.5 h-10 w-20">
            04:02
        </div>
        
        <VideoCallButton className={'left-[247px]'}>
            <MicroPhoneIcon />
        </VideoCallButton>

        <VideoCallButton className={'left-[317px]'}>
            <VideoIcon  />
        </VideoCallButton>

        <VideoCallButton className={'left-[387px] bg-[#F25767] hover:bg-[#f25767c4]'}>
            <EndCallIcon  />
        </VideoCallButton>

        <VideoCallButton className={'right-5 w-[155px] rounded-[200px]'}>
            <StartRecordingIcon className='mr-1' />
            <span className="text-sm text-[#141414E5] font-medium leading-[35.62px]">Start recording</span>
        </VideoCallButton>

    </div>
  )
}

>>>>>>> master
export default VideoCallScreen