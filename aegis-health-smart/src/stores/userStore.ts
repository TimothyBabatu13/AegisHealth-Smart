import { User } from "firebase/auth"
import { create } from "zustand"

interface userStoreType {
  isDoctor: boolean,
  isLoading: boolean,
  user: User | null
  setIsDoctor: (value: boolean) => void,
  setIsLoading: (value: boolean) => void,
  setUser: (value: User) => void,
  onboarded: boolean,
  setOnBoarded: (value: boolean) => void
}

export const userStore = create<userStoreType>((set) => ({
  isDoctor: false,
  isLoading: true,
  setIsDoctor: (value) => {
    set({isDoctor: value})
  },
  setIsLoading: (value) => {
    set({isLoading: value})
  },
  user: null,
  setUser: (value) => {
    set({user: value})
  },
  onboarded: false,
  setOnBoarded: (value) => {
    set({onboarded: value})
  }
}))