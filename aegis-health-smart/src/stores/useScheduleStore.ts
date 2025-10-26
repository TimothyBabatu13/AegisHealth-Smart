import { create } from "zustand"

interface useScheduleStoreType {
    selectedDate: Date | null,
    selectedTime: string,
    selectedDoctor: string,
    setSelectedDate: (Date: Date) => void,
    setSelectedTime: (value: string) => void,
    setSelectedDoctor: (value: string) => void,
    doctorEmail: string,
    setDoctorEmail: (value: string) => void
}

export const useScheduleStore = create<useScheduleStoreType>((set) => ({
  selectedDate: null,
  selectedTime: "",
  selectedDoctor: "",
  setSelectedDate: (value) => {
    set({selectedDate: value})
  },
  setSelectedDoctor: (value) => {
    set({selectedDoctor: value})
  },
  setSelectedTime: (value) => {
    set({selectedTime: value})
  },
  doctorEmail: '',
  setDoctorEmail: (value) =>{
    set({doctorEmail: value})
  }
}))