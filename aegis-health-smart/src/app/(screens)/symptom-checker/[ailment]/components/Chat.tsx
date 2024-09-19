import Messages from "./Message"
import SendMessage from "./SendMessage"

const Chat = () => {

  return (
    <div className='relative'>
      <div className=" overflow-y-auto h-[70vh] pb-20">
        <Messages />
      </div>
      <SendMessage />
    </div>
  )
}

export default Chat