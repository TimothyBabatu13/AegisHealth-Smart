import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { db } from "@/config/firebaseConfig"
import { useAuthContextProvider } from "@/context/AuthContext"
import { messageType, useChatStore } from "@/stores/use-chat-store"
import { userStore } from "@/stores/userStore"
import { formatDate, formatTime } from "@/utils/format-date"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { FileText } from "lucide-react"
import { useEffect, useRef } from "react"

export const listenToMessages = (
    callback: (message: messageType[]) => void
  ) => {
    const messagesRef = collection(db, "messages");

    const q = query(messagesRef, orderBy("timestamp", "asc"));
  
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: messageType[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate(),
        id: doc.id
      })) as messageType[];
      callback(messages);
    });
  
    return unsubscribe;
  };

const ChatMessages = () => {
    const { messages, setMessages } = useChatStore()
    const { isDoctor } = userStore();
    const { id: currentUser } = useAuthContextProvider();
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(() => {
        scrollToBottom()
    }, [messages.length])

    useEffect(() =>{
        const unsubscribe = listenToMessages((newMessages) => {
            setMessages(newMessages);
          });
      
          return () => unsubscribe(); 
    } , [messages.length])

    if(!messages.length) {
        return <div className="flex-1 overflow-y-auto p-4 space-y-4 flex justify-center">No message</div>
    }
  return (
    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => {
              const showDate =
                index === 0 || formatDate(message.timestamp) !== formatDate(messages[index - 1].timestamp)

              return (
                <div key={message.id}>
                  {showDate && (
                    <div className="flex justify-center my-4">
                      <Badge variant="secondary" className="bg-gray-100 text-[#344054]/70 text-xs">
                        {formatDate(message.timestamp)}
                      </Badge>
                    </div>
                  )}

                  <div className={`flex ${message.senderId === currentUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex gap-2 max-w-[70%] ${message.senderId === currentUser ? "flex-row-reverse" : ""}`}
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage
                          src={''}
                          alt={''}
                        />
                        <AvatarFallback className="bg-blue-100 text-[#344054] text-xs">
                          {isDoctor ? "DR" : "PT"}
                        </AvatarFallback>
                      </Avatar>

                      <div
                        className={`space-y-1 ${message.senderId === currentUser ? "items-end" : "items-start"} flex flex-col`}
                      >
                        <div
                          className={`
                            px-4 py-2 rounded-2xl max-w-full break-words
                            ${
                              message.senderId === currentUser
                                ? "bg-blue-500 text-white rounded-br-md"
                                : "bg-gray-100 text-[#344054] rounded-bl-md"
                            }
                          `}
                        >
                          {message.type === "text" && <p className="text-sm leading-relaxed">{message.message}</p>}

                          {message.type === "file" && (
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              <div>
                                {/* <p className="text-sm font-medium">{message.fileName}</p> */}
                                {/* <p className="text-xs opacity-70">{message.fileSize}</p> */}
                              </div>
                            </div>
                          )}
                        </div>

                        <div
                          className={`flex items-center gap-1 text-xs text-[#344054]/50 ${message.senderId === currentUser ? "flex-row-reverse" : ""}`}
                        >
                          <span>{formatTime(message.timestamp)}</span>
                          {/* {message.sender === currentUser && (
                            <div className="flex">
                              <Circle
                                className={`h-2 w-2 ${message.status === "read" ? "fill-blue-500 text-blue-500" : "fill-gray-400 text-gray-400"}`}
                              />
                              <Circle
                                className={`h-2 w-2 -ml-1 ${message.status === "read" ? "fill-blue-500 text-blue-500" : "fill-gray-400 text-gray-400"}`}
                              />
                            </div>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <div ref={messagesEndRef} />
          </CardContent>
  )
}

export default ChatMessages