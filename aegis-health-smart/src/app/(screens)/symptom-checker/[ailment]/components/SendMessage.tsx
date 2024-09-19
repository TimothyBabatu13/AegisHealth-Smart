'use client';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const SendMessage = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex items-center">
        <Textarea className="h-5" />
        <Button  className="ml-3">Send</Button>
    </div>
  )
}

export default SendMessage