import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { db } from "@/config/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"
import { MoreVertical, Phone, Video } from "lucide-react"
import { useEffect, useState } from "react"

interface docType {
    id: string,
    active: boolean,
    specialization: string,
    name: string,
    img: string
}

const fetchData = async (id:string) : Promise<docType | undefined>=> {
    
    const specialistsRef = collection(db, "specialist");
    const querySnapshot = await getDocs(specialistsRef);
    if(querySnapshot.empty){
        console.log('ends here')
        return
    }
    const specialists = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  const requiredSpecialist = specialists.filter(it => it.id === id)
  
  return requiredSpecialist[0] as docType
}

const ChatHeader = ({ id } : { 
    id: string
 }) => {

    const [docProfile, setDocProfile] = useState<docType>()
    useEffect(()=>{
        const fetch = async () => {
            const result = await fetchData(id);
            setDocProfile(result as docType);
        }
        fetch();
    },[id])
    
  return (
    <Card className="border-gray-200 mb-4 sticky top-[5.2rem] z-50">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={docProfile?.img} alt={docProfile?.name} />
                    <AvatarFallback className="bg-blue-100 text-[#344054]">
                      {docProfile?.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#344054]">{docProfile?.name}</h2>
                  <div className="flex items-center gap-2">
                    {docProfile?.specialization && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                        {docProfile?.specialization}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-[#344054] border-gray-200">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

  )
}

export default ChatHeader