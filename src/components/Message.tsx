import { cn } from "@/lib/utils"
import SendMessage from "./SendMessage"
import { TextMessage } from "./ViewMessage"
const messages = [
    {
        type: 'msg',
        content: 'Good afternoon, Doris! How are you feeling today?',
        senderID: 'aaa'
    },
    {
        type: 'msg',
        content: 'Good afternoon, Dr. Dina! I’m good. I have some questions for you and I’ll be asking them during the session.',
        senderID: 'rrr'
    },
    {
        type: 'msg',
        content: 'Okay, prepare your questions. We’ll meet in the next few minutes.',
        senderID: 'aaa'
    },
    {
        type: 'msg',
        content: 'Good afternoon, Doris! How are you feeling today?',
        senderID: 'aaa'
    },
    {
        type: 'msg',
        content: 'Good afternoon, Dr. Dina! I’m good. I have some questions for you and I’ll be asking them during the session.',
        senderID: 'rrr'
    },
    {
        type: 'msg',
        content: 'Okay, prepare your questions. We’ll meet in the next few minutes.',
        senderID: 'aaa'
    },
    

]
const Message = ({ id } : {
    id: string
}) => {


    // console.log(id)
    const myID = 'rrr'
  return (
    <div className="overflow-y-auto relative">
        <div className="max-h-[454px] mt-[52px]">
            {messages.map((message, key) =>(
                <div key={key} className={`flex justify-between mb-5 ${myID === message.senderID ? '' : 'flex-row-reverse'}`}>
                    <TextMessage className={cn(`text-sm text-[#141414CC] font-normal leading-[22px] py-2.5 pr-2 px-[15px] ${myID === message.senderID ? 'w-[259px] bg-[#F7F7F7] rounded-t-[12px] rounded-br-[12px]' : 'w-[315px] bg-[#FEEDE7] rounded-t-[12px] rounded-bl-[12px]'} ${key === messages.length - 1 && 'mb-5'} `)} content={message.content} />
                    <div className="flex-shrink-0 w-[70px]"/>
                </div>
            ))}
            <div className="h-9" />
        </div>
        <SendMessage />
    </div>
  )
}

export default Message