import { create } from "zustand"
export type messageType = {
    senderId: string,
    receiverId: string,
    timestamp: Date,
    type: "text" | 'media' | 'file',
    id: string,
    message: string
}

interface useChatStoreType {
  isDoctor: boolean,
  isLoading: boolean,
  setIsDoctor: (value: boolean) => void,
  setIsLoading: (value: boolean) => void,
  messages: messageType[];
  recipientPfp: string,
  setMessages: (value: messageType[]) => void
}

export const useChatStore = create<useChatStoreType>((set) => ({
  isDoctor: false,
  isLoading: true,
  setIsDoctor: (value) => {
    set({isDoctor: value})
  },
  setIsLoading: (value) => {
    set({isLoading: value})
  },
  messages: [],
  recipientPfp: '',
  setMessages: (value) => {
    set({messages: value})
  }
}))