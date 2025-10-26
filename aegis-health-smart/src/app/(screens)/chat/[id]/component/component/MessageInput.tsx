import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { db } from "@/config/firebaseConfig"
import { useAuthContextProvider } from "@/context/AuthContext"
import { addDoc, collection } from "firebase/firestore"
import { ImageIcon, Paperclip, Send, Smile } from "lucide-react"
import { useState } from "react"

interface messageType {
    senderId: string,
    receiverId: string,
    timestamp: Date,
    type: "text" | 'media',
    message: string
}

const MessageInput = ({ id } : {
    id: string
}) => {
    
    const [messages, setMessages] = useState("")
    const { id: senderId } = useAuthContextProvider();
    const [isSending, setIsSending] = useState<boolean>(false)
    
    const handleSendMessage = async () => {
        if (messages.trim()) {
            setIsSending(true)
            const message: messageType = {
                senderId: senderId!,
                receiverId: id,
                timestamp: new Date(),
                type: "text",
                message: messages
            }

            try {
                const docRef = await addDoc(collection(db, "messages"), {
                    ...message,
                    timestamp: message.timestamp || new Date(),
                });
                if(docRef){
                    setMessages('');
                }
                setIsSending(false)
            } catch (error) {
                console.error("Error sending message:", error);
                setIsSending(false)
            }
            
        }
      }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (!isSending && e.key === "Enter" && !e.shiftKey) {
          e.preventDefault()
          handleSendMessage()
        }
      }

  return (
    <div className="p-4 sticky bottom-0 z-10 bg-white">
            <div className="flex items-end gap-2">
              <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                <ImageIcon className="h-4 w-4" />
              </Button>

              <div className="flex-1 relative">
                <Input
                  value={messages}
                  onChange={(e) => setMessages(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="text-[#344054] border-gray-200 pr-12 resize-none min-h-[40px]"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#344054] border-gray-200"
                >
                  <Smile className="h-4 w-4" />
                </Button>
              </div>

              <Button
                onClick={handleSendMessage}
                disabled={!messages.trim() || isSending}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
  )
}

export default MessageInput