import { create } from "zustand"

interface ProfileData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialty: string;
    licenseNumber: string;
    hospital: string;
    address: string;
    bio: string;
  }

interface useAccountSettingsInfo {
    profileData: ProfileData;
    setProfileData: (data: Partial<ProfileData>) => void;
    resetProfileData: () => void;    
}

export const useAccountSettingsStore = create<useAccountSettingsInfo>((set) => ({
    profileData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialty: "",
      licenseNumber: "",
      hospital: "",
      address: "",
      bio: "",
    },
    setProfileData: (data) =>
      set((state) => ({
        profileData: {
          ...state.profileData,
          ...data,
        },
      })),
    resetProfileData: () =>
      set(() => ({
        profileData: {
          firstName: "Sarah",
          lastName: "Johnson",
          email: "sarah.johnson@hospital.com",
          phone: "+1 (555) 123-4567",
          specialty: "Cardiologist",
          licenseNumber: "MD123456789",
          hospital: "City General Hospital",
          address: "123 Medical Center Dr, City, State 12345",
          bio: "Experienced cardiologist with over 15 years of practice specializing in interventional cardiology and heart disease prevention.",
        },
      })),
  }));

