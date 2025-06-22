import { create } from "zustand"

interface userStoreType {
  isDoctor: boolean,
  isLoading: boolean,
  setIsDoctor: (value: boolean) => void,
  setIsLoading: (value: boolean) => void
}

export const userStore = create<userStoreType>((set) => ({
  isDoctor: false,
  isLoading: true,
  setIsDoctor: (value) => {
    set({isDoctor: value})
  },
  setIsLoading: (value) => {
    set({isLoading: value})
  }
}))