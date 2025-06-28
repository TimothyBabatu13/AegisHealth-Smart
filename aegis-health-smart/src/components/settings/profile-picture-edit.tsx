import { Camera } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { useRef } from "react"
import { userStore } from "@/stores/userStore"

const ProfilePictureEdit = ({ img } : {
  img: string
}) => {

    const { user } = userStore()
    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            console.log(file)
          console.log("Uploading file:", file.name)
        }
    }

  return (
    <div className="flex items-center gap-6">
      <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={img} alt="Profile" />
                    <AvatarFallback className="bg-blue-100 text-[#344054] text-xl">
                        {user?.email?.slice(0,3)}
                      {/* {profileData.firstName[0]} */}
                      {/* {profileData.lastName[0]} */}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white p-0"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#344054]">Profile Picture</h3>
                  <p className="text-sm text-[#344054]/70">
                    Upload a professional photo. Recommended size: 400x400px
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 text-[#344054] border-gray-200"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Change Photo
                  </Button>
                </div>
              </div>

  )
}

export default ProfilePictureEdit