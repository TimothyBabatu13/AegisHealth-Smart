import { userStore } from "@/stores/userStore"
import { useState, useRef, Dispatch, SetStateAction, useEffect } from "react"
import { Camera, User, Stethoscope, ArrowRight, Check, Upload, Mail, Phone, Calendar, Heart, Shield, LoaderIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore"
import { db } from "@/config/firebaseConfig"
import { handeleUploadImage } from "@/utils/helper-functions"
import Link from "next/link"

const handleCompleteFunction = async ({ ref, email, data, setOnBoarded} : {
  ref: 'patient' | 'specialist',
  email: string,
  data: any,
  setOnBoarded: (value: boolean) => void
}) => {
  try {
    const patientsRef = collection(db, ref);
  const q = query(patientsRef, where("email", "==", email));
  
  const userRef = collection(db, "users");
  const qr = query(userRef, where("email", "==", email));

  const snapshot = await getDocs(q);

  const id: string = snapshot.docs[0].id

  const snapshots = await getDocs(qr);
  const ids: string = snapshots.docs[0].id

  const docRef = doc(db, ref, id);
  const userReff = doc(db, "users", ids);

  await setDoc(docRef, data, { merge: true });
  await updateDoc(userReff, {
      onboarded: true
  })
  setOnBoarded(true)  
  } catch (error) {
    console.log(error)
  }
  
}

const Header = ({ children, text } : {
  children: React.ReactNode,
  text: string
}) => {
  return(
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          {children}
        </div>
      </div>
      <h1 className="text-3xl font-bold text-[#344054] mb-2">Welcome to AegisHealth</h1>
      <p className="text-[#344054]/70 text-lg">{text}</p>
    </div>
  )
}

const ProgressBar = ({ currentStep, totalSteps } : {
  currentStep: number,
  totalSteps: number
}) => {
  const getProgressPercentage = () => {
    return (currentStep / totalSteps) * 100
  }
  return(
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[#344054]/70">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm text-[#344054]/70">{Math.round(getProgressPercentage())}% Complete</span>
        </div>
          <Progress value={getProgressPercentage()} className="h-2" />
        </div>

  )
}

const RenderAvatar = ({ getLiveURL, localPreview } : {
  getLiveURL: (value: string) => any,
  localPreview: Dispatch<SetStateAction<string>>
}) => {
  const [profileImage, setProfileImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0]!
    handeleUploadImage({
      file:file,
      localPreview: (url) => {
        setProfileImage(url)
        localPreview(url)
      },
      liveURLPreview: (url) => {
        getLiveURL(url)
      }
    })
  }
  return(
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <Avatar className="h-32 w-32 border-4 border-gray-200">
          {profileImage ? (
            <AvatarImage src={profileImage || "/placeholder.svg"} alt="Profile" className="object-cover" />
          ) : (
          <AvatarFallback className="bg-gray-100 text-[#344054] text-2xl">
            <Camera className="h-12 w-12" />
          </AvatarFallback>
        )}
        </Avatar>
        <Button
          size="sm"
          className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white p-0"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-4 w-4" />
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      <div className="text-center">
        <p className="text-sm text-[#344054] font-medium">Upload Profile Picture</p>
        <p className="text-xs text-[#344054]/70">Recommended: 400x400px, max 5MB</p>
        <p className="text-xs font-extrabold text-red-500">This is a required field</p>
      </div>
    </div>
  )
}

const Footer = ({isDoctor}:{isDoctor: boolean}) => {
  return(
    <>
      {
        isDoctor ? (
          <div className="text-center mt-6">
      <p className="text-sm text-[#344054]/70">
      Need help? Contact our support team at{" "}
        <Link prefetch={false} href="mailto:knbtimothy@gmail.com" className="text-blue-600 hover:underline">
          support@aegishealth.com
        </Link>
      </p>
    </div>
        ) : (
          <div className="text-center mt-6">
          <p className="text-sm text-[#344054]/70">
            Your information is secure. Need help?{" "}
            <Link prefetch={false} href="mailto:knbtimothy@gmail.com" className="text-blue-600 hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
        )
      }
    </>
    
  )
}

const NavigationButtons = ({ currentStep, totalSteps, setSteps, isStepValid, handleComplete, isLoding } : {
  currentStep: number,
  totalSteps: number,
  setSteps: Dispatch<SetStateAction<number>>,
  isStepValid: boolean,
  handleComplete: () => void,
  isLoding?: boolean
}) => {

  const handlePrevious = () => {
    if (currentStep > 1) {
      setSteps(currentStep - 1)
    }
  }
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setSteps(currentStep + 1)
    }
  }
  return(
    <div className="flex items-center justify-between p-6 border-t border-gray-200">
      <Button
        variant="outline"
        onClick={handlePrevious}
        disabled={currentStep === 1}
        className="text-[#344054] border-gray-200 bg-transparent"
      >
        Previous
      </Button>
      
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i + 1 <= currentStep ? "bg-blue-500" : "bg-gray-300"}`}
          />
          ))}
          </div>
          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={isStepValid}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            ) : (
              <Button
                onClick={handleComplete}
                disabled={isStepValid}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                {
                  isLoding ? (<>
                    <LoaderIcon className="animate-spin"/>
                  </>) : (<>
                  Complete Setup
                  <Check className="h-4 w-4 ml-2" />
                  </>)
                }
              </Button>
            )}
          </div>
  )
}

export const specializations = [ 
  "Allergist",
  "Anesthesiologist",
  "Cardiologist",
  "Dermatologist",
  "Endocrinologist",
  "Gastroenterologist",
  "Gynecologist",
  "Hematologist",
  "Infectious Disease Specialist",
  "Nephrologist",
  "Neurologist",
  "Neurosurgeon",
  "Oncologist",
  "Ophthalmologist",
  "Orthopedic Surgeon",
  "Otolaryngologist",
  "Pathologist",
  "Pediatrician",
  "Physiatrist",
  "Plastic Surgeon",
  "Psychiatrist",
  "Pulmonologist",
  "Radiologist",
  "Rheumatologist",
  "Surgeon",
  "Thoracic Surgeon",
  "Urologist",
  "Vascular Surgeon"
];

const  DoctorOnboarding = () => {
  const { user, setOnBoarded } = userStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [profileImage, setProfileImage] = useState<string>("")
  const [doctorData, setDoctorData] = useState({
    firstName: "",
    lastName: "",
    specialization: "",
    licenseNumber: "",
    hospital: "",
    email: user?.email,
    phone: "",
    liveURL: ''
  })

  const totalSteps = 3

  const handleInputChange = (field: string, value: string) => {
    setDoctorData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleComplete = async () => {
    try {
      await handleCompleteFunction({
        data: {
          ...doctorData
        },
        email: user?.email!,
        ref: 'specialist',
        setOnBoarded: () => {
          setOnBoarded(true)
        }
      })  
    } catch (error) {
      console.log(error)
    }
    
  }

  
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !(profileImage.length && doctorData.firstName && doctorData.lastName)
      case 2:
        return !(doctorData.specialization)
      case 3:
        return !(doctorData.email && doctorData.phone)
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">

        <Header text="Let's set up your doctor profile to get started">
          <Stethoscope className="h-8 w-8 text-blue-600" />
        </Header>
        
        <ProgressBar 
          currentStep={currentStep}
          totalSteps={totalSteps}
        />


        <Card className="border-gray-200 shadow-lg">
          
          {currentStep === 1 && (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-[#344054] flex items-center justify-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
                <CardDescription className="text-[#344054]/70">Upload your photo and enter your name</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">

                <RenderAvatar 
                  getLiveURL={(url)=>{
                  setDoctorData(prev => ({
                    ...prev,
                    liveURL: url
                  }));
                  }}
                  localPreview={setProfileImage}
                />

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#344054]">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={doctorData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      className="text-[#344054] border-gray-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#344054]">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={doctorData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      className="text-[#344054] border-gray-200"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 2: Specialization */}
          {currentStep === 2 && (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-[#344054] flex items-center justify-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Medical Specialization
                </CardTitle>
                <CardDescription className="text-[#344054]/70">
                  Select your primary medical specialization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="specialization" className="text-[#344054]">
                    Primary Specialization *
                  </Label>
                  <Select
                    value={doctorData.specialization}
                    onValueChange={(value) => handleInputChange("specialization", value)}
                    required
                  >
                    <SelectTrigger className="text-[#344054] border-gray-200">
                      <SelectValue placeholder="Select your medical specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      {specializations.map((spec) => (
                        <SelectItem key={spec} value={spec}>
                          {spec}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licenseNumber" className="text-[#344054]">
                    Medical License Number
                  </Label>
                  <Input
                    id="licenseNumber"
                    value={doctorData.licenseNumber}
                    onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                    placeholder="Enter your medical license number"
                    className="text-[#344054] border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hospital" className="text-[#344054]">
                    Hospital/Clinic Affiliation
                  </Label>
                  <Input
                    id="hospital"
                    value={doctorData.hospital}
                    onChange={(e) => handleInputChange("hospital", e.target.value)}
                    placeholder="Enter your primary hospital or clinic"
                    className="text-[#344054] border-gray-200"
                  />
                </div>
              </CardContent>
            </>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-[#344054] flex items-center justify-center gap-2">
                  <Check className="h-5 w-5" />
                  Contact Information
                </CardTitle>
                <CardDescription className="text-[#344054]/70">
                  Provide your contact details to complete setup
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#344054]">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={doctorData.email!}
                    readOnly
                    placeholder="Enter your professional email"
                    className="text-[#344054] border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#344054]">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={doctorData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    className="text-[#344054] border-gray-200"
                  />
                </div>

                {/* Summary */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-[#344054] mb-3">Profile Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        {profileImage ? (
                          <img
                            src={profileImage || "/placeholder.svg"}
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <span className="text-[#344054]">
                        Dr. {doctorData.firstName} {doctorData.lastName}
                      </span>
                    </div>
                    <p className="text-[#344054]/70 ml-10">{doctorData.specialization}</p>
                    <p className="text-[#344054]/70 ml-10">{doctorData.email}</p>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          <NavigationButtons 
            currentStep={currentStep}
            handleComplete={handleComplete}
            isStepValid={isStepValid()!}
            setSteps={setCurrentStep}
            totalSteps={totalSteps}
          />
        </Card>

        {/* Footer */}
        <Footer isDoctor/>
      </div>
    </div>
  )
}

const PatientOnboarding = () => {
    const { user, setOnBoarded } = userStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [profileImage, setProfileImage] = useState<string>("");

  const [isCompleteRegistrationLoading, setIsCompleteRegistrationLoading] = useState<boolean>(false);
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    email: user?.email!,
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    bloodType: "",
    allergies: "",
    currentMedications: "",
    medicalConditions: "",
    insuranceProvider: "",
    policyNumber: "",
    primaryPhysician: "",
    liveURL: '',
    localPreviewURL: ''
  })

  const [preferences, setPreferences] = useState({
    appointmentReminders: true,
    healthTips: false,
    promotionalEmails: false,
    dataSharing: true,
  })

  const totalSteps = 4
  const handleInputChange = (field: string, value: string) => {
    setPatientData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handlePreferenceChange = (field: string, value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleComplete = async () => {
    
    setIsCompleteRegistrationLoading(true)

    try {
      
        const patientsRef = collection(db, "patient");
      
        const q = query(patientsRef, where("email", "==", user?.email));
        
        const userRef = collection(db, "users");
        const qr = query(userRef, where("email", "==", user?.email));
       
        const snapshot = await getDocs(q);

        const id: string = snapshot.docs[0].id

        const snapshots = await getDocs(qr);
        const ids: string = snapshots.docs[0].id

        const docRef = doc(db, "patient", id);
        const userReff = doc(db, "users", ids);

        await setDoc(docRef, {...patientData, profileURL: patientData.liveURL }, { merge: true });
        await updateDoc(userReff, {
            onboarded: true
        })
        setOnBoarded(true)
    } catch (error) {
      console.log(error)
    }
    finally{
      setIsCompleteRegistrationLoading(false)
    }
        
        
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !(patientData.email && patientData.phone && profileImage.length)
      case 2:
        return !(patientData.dateOfBirth && patientData.gender)
      case 3:
        return !patientData.bloodType 
      case 4:
        return false
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        
        <Header text="Let's create your patient profile to get started">
          <Heart className="h-8 w-8 text-blue-600" />
        </Header>
        <ProgressBar 
          currentStep={currentStep}
          totalSteps={totalSteps}
        />

        <Card className="border-gray-200 shadow-lg">
          {currentStep === 1 && (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-[#344054] flex items-center justify-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription className="text-[#344054]/70">
                  Tell us about yourself and how to reach you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RenderAvatar getLiveURL={(url)=>{
                  setPatientData(prev => ({
                    ...prev,
                    liveURL: url
                  }));
                }}
                  localPreview={setProfileImage}
                />


                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#344054] flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={patientData.email}
                      readOnly
                      required
                      placeholder="Enter your email address"
                      className="text-[#344054] border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#344054] flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={patientData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="text-[#344054] border-gray-200"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 2: Demographics */}
          {currentStep === 2 && (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-[#344054] flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Demographics & Emergency Contact
                </CardTitle>
                <CardDescription className="text-[#344054]/70">
                  Basic information for your medical records
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-[#344054]">
                      Date of Birth *
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={patientData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className="text-[#344054] border-gray-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-[#344054]">
                      Gender *
                    </Label>
                    <Select required value={patientData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger className="text-[#344054] border-gray-200">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-[#344054]">
                    Address
                  </Label>
                  <Input
                    id="address"
                    value={patientData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter your full address"
                    className="text-[#344054] border-gray-200"
                  />
                </div>

                {/* Emergency Contact */}
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-medium text-[#344054]">Emergency Contact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContactName" className="text-[#344054]">
                        Contact Name
                      </Label>
                      <Input
                        id="emergencyContactName"
                        value={patientData.emergencyContactName}
                        onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                        placeholder="Emergency contact name"
                        className="text-[#344054] border-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContactPhone" className="text-[#344054]">
                        Contact Phone
                      </Label>
                      <Input
                        id="emergencyContactPhone"
                        value={patientData.emergencyContactPhone}
                        onChange={(e) => handleInputChange("emergencyContactPhone", e.target.value)}
                        placeholder="Emergency contact phone"
                        className="text-[#344054] border-gray-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactRelation" className="text-[#344054]">
                      Relationship
                    </Label>
                    <Select
                      value={patientData.emergencyContactRelation}
                      onValueChange={(value) => handleInputChange("emergencyContactRelation", value)}
                    >
                      <SelectTrigger className="text-[#344054] border-gray-200">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 3: Medical Information */}
          {currentStep === 3 && (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-[#344054] flex items-center justify-center gap-2">
                  <Heart className="h-5 w-5" />
                  Medical Information
                </CardTitle>
                <CardDescription className="text-[#344054]/70">
                  Help us provide better care (all fields optional)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bloodType" className="text-[#344054]">
                      Blood Type *
                    </Label>
                    <Select
                      value={patientData.bloodType}
                      onValueChange={(value) => handleInputChange("bloodType", value)}
                      required
                    >
                      <SelectTrigger className="text-[#344054] border-gray-200">
                        <SelectValue placeholder="Select blood type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="primaryPhysician" className="text-[#344054]">
                      Primary Physician
                    </Label>
                    <Input
                      id="primaryPhysician"
                      value={patientData.primaryPhysician}
                      onChange={(e) => handleInputChange("primaryPhysician", e.target.value)}
                      placeholder="Dr. Name"
                      className="text-[#344054] border-gray-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies" className="text-[#344054]">
                    Known Allergies
                  </Label>
                  <Textarea
                    id="allergies"
                    value={patientData.allergies}
                    onChange={(e) => handleInputChange("allergies", e.target.value)}
                    placeholder="List any known allergies (medications, foods, etc.)"
                    className="text-[#344054] border-gray-200"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentMedications" className="text-[#344054]">
                    Current Medications
                  </Label>
                  <Textarea
                    id="currentMedications"
                    value={patientData.currentMedications}
                    onChange={(e) => handleInputChange("currentMedications", e.target.value)}
                    placeholder="List current medications and dosages"
                    className="text-[#344054] border-gray-200"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicalConditions" className="text-[#344054]">
                    Medical Conditions
                  </Label>
                  <Textarea
                    id="medicalConditions"
                    value={patientData.medicalConditions}
                    onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                    placeholder="List any chronic conditions or ongoing health issues"
                    className="text-[#344054] border-gray-200"
                    rows={2}
                  />
                </div>

                {/* Insurance Information */}
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-medium text-[#344054]">Insurance Information (Optional)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="insuranceProvider" className="text-[#344054]">
                        Insurance Provider
                      </Label>
                      <Input
                        id="insuranceProvider"
                        value={patientData.insuranceProvider}
                        onChange={(e) => handleInputChange("insuranceProvider", e.target.value)}
                        placeholder="Insurance company name"
                        className="text-[#344054] border-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="policyNumber" className="text-[#344054]">
                        Policy Number
                      </Label>
                      <Input
                        id="policyNumber"
                        value={patientData.policyNumber}
                        onChange={(e) => handleInputChange("policyNumber", e.target.value)}
                        placeholder="Policy number"
                        className="text-[#344054] border-gray-200"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 4: Preferences & Privacy */}
          {currentStep === 4 && (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-[#344054] flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5" />
                  Preferences & Privacy
                </CardTitle>
                <CardDescription className="text-[#344054]/70">
                  Customize your experience and privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-[#344054]">Communication Preferences</h4>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="appointmentReminders"
                      checked={preferences.appointmentReminders}
                      onCheckedChange={(checked) => handlePreferenceChange("appointmentReminders", checked as boolean)}
                    />
                    <Label htmlFor="appointmentReminders" className="text-[#344054]">
                      Receive appointment reminders via email and SMS
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="healthTips"
                      checked={preferences.healthTips}
                      onCheckedChange={(checked) => handlePreferenceChange("healthTips", checked as boolean)}
                    />
                    <Label htmlFor="healthTips" className="text-[#344054]">
                      Receive health tips and wellness advice
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="promotionalEmails"
                      checked={preferences.promotionalEmails}
                      onCheckedChange={(checked) => handlePreferenceChange("promotionalEmails", checked as boolean)}
                    />
                    <Label htmlFor="promotionalEmails" className="text-[#344054]">
                      Receive promotional emails about new services
                    </Label>
                  </div>
                </div>

                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-medium text-[#344054]">Privacy Settings</h4>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dataSharing"
                      checked={preferences.dataSharing}
                      onCheckedChange={(checked) => handlePreferenceChange("dataSharing", checked as boolean)}
                    />
                    <Label htmlFor="dataSharing" className="text-[#344054]">
                      Allow sharing of anonymized data to improve healthcare research
                    </Label>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-[#344054] mb-3">Account Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        {profileImage ? (
                          <img
                            src={profileImage || "/placeholder.svg"}
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <span className="text-[#344054]">
                        {patientData.firstName} {patientData.lastName}
                      </span>
                    </div>
                    <p className="text-[#344054]/70 ml-10">{patientData.email}</p>
                    <p className="text-[#344054]/70 ml-10">{patientData.phone}</p>
                    {patientData.dateOfBirth && (
                      <p className="text-[#344054]/70 ml-10">
                        Born: {new Date(patientData.dateOfBirth).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </>
          )}
          
          <NavigationButtons 
            currentStep={currentStep}
            handleComplete={handleComplete}
            isStepValid={isStepValid()}
            setSteps={setCurrentStep}
            totalSteps={totalSteps}
            isLoding={isCompleteRegistrationLoading}
          />
        </Card>

        {/* Footer */}
        <Footer isDoctor={false}/>
      </div>
    </div>
  )
}

 


const OnBoardingFlow = () => {

    const { isDoctor } = userStore()

  return (
    <div>
        {
            isDoctor ? (<DoctorOnboarding />) : (
                <PatientOnboarding />
            )
        }
    </div>
  )
}

export default OnBoardingFlow