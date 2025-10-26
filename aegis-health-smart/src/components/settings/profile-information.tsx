'use client';

import { Save, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { userStore } from "@/stores/userStore";
import ProfilePictureEdit from "./profile-picture-edit";
import { collection, doc, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { app, db } from "@/config/firebaseConfig";
import { specializations } from "@/app/(screens)/components/on-boarding-flow";
import { getAuth, updateProfile } from "firebase/auth";

interface DataType {
  active: boolean;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  phone: string;
  hospital: string;
  licenseNumber: string;
  specialization: string;
  profileURL: string;
  liveURL: string;
  isVerfied: boolean;
  address: string,
  bio: string,
  id: string
}

const ListenToProfileData = async ({ email, callback } : {
  email: string,
  callback: (val: DataType) => void
}) => {
  const q = query(collection(db, "specialist"), where("email", "==", email));

  const unsubscribe = onSnapshot(
    q,
    (querySnapshot) => {
      
        const doc = querySnapshot.docs[0];
        const dataToReturn = {
          ...doc.data(),
          id: doc.id
        } as DataType
        
        callback(dataToReturn);
      
    },
    (error) => {
      console.error("Error listening to user profile:", error);
    }
  );

  return unsubscribe; 
}

const ProfileInformationChange = () => {

    const { user } = userStore();
    const auth = getAuth(app);
    const [isLoading, setIsLoading] = useState(false);
    const [profileData, setProfileData] = useState<null | DataType>()
    
      useEffect(() => {
        const fetchData = async () => {
          await ListenToProfileData({
            email: user?.email!,
            callback: (val) => {
              setProfileData(prev => ({
                ...prev,
                ...val
              }) as DataType)
            }
          })
        }
        fetchData();
      }, [])

      const handleProfileUpdate = (field: string, value: string) => {
        setProfileData((prev) => ({
          ...prev,
          [field]: value,
        }) as DataType)
      }
      
      const handleSaveProfile = async () => {
        
        if(!profileData) return
            setIsLoading(true)
            const docRef = doc(db, "specialist", profileData?.id!);
            try {
              await setDoc(docRef, profileData, { merge: true });
              if(profileData.firstName || profileData.lastName){
                await updateProfile(auth.currentUser!, {
                  displayName: `${profileData.firstName} ${profileData.lastName}`
                })
                
                auth.currentUser?.reload();
              }
              
              setIsLoading(false)
            } catch (error) {
              console.log(error)
            }
            finally{
              setIsLoading(false)
            }
      }

  return (
    <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#344054] flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
              <CardDescription className="text-[#344054]/70">
                Update your personal and professional information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ProfilePictureEdit img={profileData?.liveURL!} />
              <Separator />

              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#344054]">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={profileData?.firstName}
                    onChange={(e) => handleProfileUpdate("firstName", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#344054]">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={profileData?.lastName}
                    onChange={(e) => handleProfileUpdate("lastName", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#344054]">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData?.email!}
                  readOnly
                  onChange={(e) => handleProfileUpdate("email", e.target.value)}
                  className="text-[#344054] border-gray-200 focus:border-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#344054]">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={profileData?.phone}
                  onChange={(e) => handleProfileUpdate("phone", e.target.value)}
                  className="text-[#344054] border-gray-200"
                />
              </div>

              {/* Professional Information */}
              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="specialty" className="text-[#344054]">
                    Medical Specialty
                  </Label>
                  <Select
                    value={profileData?.specialization}
                    onValueChange={(value) => handleProfileUpdate("specialization", value)}
                  >
                    <SelectTrigger className="text-[#344054] border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {
                        specializations.map((specialization, id) => (
                          <SelectItem value={specialization} key={id}>{specialization}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="licenseNumber" className="text-[#344054]">
                    License Number
                  </Label>
                  <Input
                    id="licenseNumber"
                    value={profileData?.licenseNumber}
                    onChange={(e) => handleProfileUpdate("licenseNumber", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hospital" className="text-[#344054]">
                  Hospital/Clinic
                </Label>
                <Input
                  id="hospital"
                  value={profileData?.hospital}
                  onChange={(e) => handleProfileUpdate("hospital", e.target.value)}
                  className="text-[#344054] border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-[#344054]">
                  Address
                </Label>
                <Input
                  id="address"
                  value={profileData?.address}
                  onChange={(e) => handleProfileUpdate("address", e.target.value)}
                  className="text-[#344054] border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-[#344054]">
                  Professional Bio
                </Label>
                <Textarea
                  id="bio"
                  value={profileData?.bio}
                  onChange={(e) => handleProfileUpdate("bio", e.target.value)}
                  className="text-[#344054] border-gray-200"
                  rows={4}
                />
              </div>

              <Button 
                onClick={handleSaveProfile} 
                className="bg-blue-500 hover:bg-blue-600 text-white"
                disabled={isLoading}
              >
                <Save className="h-4 w-4 mr-2" />
                {
                  isLoading ? 'Saving...' : 'Save Profile' 
                }
                
              </Button>
            </CardContent>
          </Card>
  )
}

export default ProfileInformationChange