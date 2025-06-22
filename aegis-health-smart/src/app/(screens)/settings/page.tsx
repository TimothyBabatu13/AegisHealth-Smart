"use client"

import type React from "react"

import { useState, useRef } from "react"
import {
  User,
  Camera,
  Save,
  Lock,
  Bell,
  Shield,
  Eye,
  EyeOff,
  Heart,
  Calendar,
  CreditCard,
  UserPlus,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function PatientSettings() {
  const [personalData, setPersonalData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 987-6543",
    dateOfBirth: "1978-05-15",
    gender: "male",
    address: "456 Oak Street, City, State 12345",
    emergencyContactName: "Jane Smith",
    emergencyContactPhone: "+1 (555) 123-4567",
    emergencyContactRelation: "spouse",
  })

  const [medicalData, setMedicalData] = useState({
    bloodType: "O+",
    allergies: "Penicillin, Shellfish",
    currentMedications: "Lisinopril 10mg daily, Metformin 500mg twice daily",
    medicalConditions: "Hypertension, Type 2 Diabetes",
    primaryPhysician: "Dr. Sarah Johnson",
    preferredPharmacy: "City Pharmacy - 123 Main St",
  })

  const [insuranceData, setInsuranceData] = useState({
    provider: "Blue Cross Blue Shield",
    policyNumber: "BC123456789",
    groupNumber: "GRP001",
    subscriberName: "John Smith",
    relationToSubscriber: "self",
  })

  const [notifications, setNotifications] = useState({
    appointmentReminders: true,
    medicationReminders: true,
    testResultsNotifications: true,
    healthTips: false,
    promotionalEmails: false,
    smsNotifications: true,
    emailNotifications: true,
  })

  const [privacy, setPrivacy] = useState({
    shareDataWithDoctors: true,
    allowResearchParticipation: false,
    shareAnonymousData: true,
    familyAccessToRecords: false,
  })

  const [preferences, setPreferences] = useState({
    preferredAppointmentTime: "morning",
    communicationMethod: "email",
    languagePreference: "english",
    appointmentRemindersAdvance: "24hours",
  })

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePersonalUpdate = (field: string, value: string) => {
    setPersonalData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleMedicalUpdate = (field: string, value: string) => {
    setMedicalData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleInsuranceUpdate = (field: string, value: string) => {
    setInsuranceData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNotificationToggle = (setting: string) => {
    setNotifications((prev) => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev],
    }))
  }

  const handlePrivacyToggle = (setting: string) => {
    setPrivacy((prev) => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev],
    }))
  }

  const handlePreferenceUpdate = (field: string, value: string) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log("Uploading file:", file.name)
      alert("Profile picture updated successfully!")
    }
  }

  const handleSavePersonal = () => {
    console.log("Saving personal data:", personalData)
    alert("Personal information updated successfully!")
  }

  const handleSaveMedical = () => {
    console.log("Saving medical data:", medicalData)
    alert("Medical information updated successfully!")
  }

  const handleSaveInsurance = () => {
    console.log("Saving insurance data:", insuranceData)
    alert("Insurance information updated successfully!")
  }

  const handleSaveNotifications = () => {
    console.log("Saving notification settings:", notifications)
    alert("Notification preferences updated successfully!")
  }

  const handleSavePrivacy = () => {
    console.log("Saving privacy settings:", privacy)
    alert("Privacy settings updated successfully!")
  }

  const handleSavePreferences = () => {
    console.log("Saving preferences:", preferences)
    alert("Preferences updated successfully!")
  }

  const handleChangePassword = () => {
    alert("Password changed successfully!")
  }

  return (
    <div className="space-y-6 w-[96%] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#344054]">Account Settings</h2>
          <p className="text-[#344054]/70">Manage your personal information and preferences</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#344054] flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription className="text-[#344054]/70">
                Update your personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                    <AvatarFallback className="bg-blue-100 text-[#344054] text-xl">
                      {personalData.firstName[0]}
                      {personalData.lastName[0]}
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
                  <p className="text-sm text-[#344054]/70">Upload a clear photo of yourself</p>
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

              <Separator />

              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#344054]">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={personalData.firstName}
                    onChange={(e) => handlePersonalUpdate("firstName", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#344054]">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={personalData.lastName}
                    onChange={(e) => handlePersonalUpdate("lastName", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#344054]">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={personalData.email}
                    onChange={(e) => handlePersonalUpdate("email", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#344054]">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={personalData.phone}
                    onChange={(e) => handlePersonalUpdate("phone", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-[#344054]">
                    Date of Birth
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={personalData.dateOfBirth}
                    onChange={(e) => handlePersonalUpdate("dateOfBirth", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-[#344054]">
                    Gender
                  </Label>
                  <Select value={personalData.gender} onValueChange={(value) => handlePersonalUpdate("gender", value)}>
                    <SelectTrigger className="text-[#344054] border-gray-200">
                      <SelectValue />
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
                  value={personalData.address}
                  onChange={(e) => handlePersonalUpdate("address", e.target.value)}
                  className="text-[#344054] border-gray-200"
                />
              </div>

              <Separator />

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h4 className="font-medium text-[#344054] flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Emergency Contact
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactName" className="text-[#344054]">
                      Contact Name
                    </Label>
                    <Input
                      id="emergencyContactName"
                      value={personalData.emergencyContactName}
                      onChange={(e) => handlePersonalUpdate("emergencyContactName", e.target.value)}
                      className="text-[#344054] border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactPhone" className="text-[#344054]">
                      Contact Phone
                    </Label>
                    <Input
                      id="emergencyContactPhone"
                      value={personalData.emergencyContactPhone}
                      onChange={(e) => handlePersonalUpdate("emergencyContactPhone", e.target.value)}
                      className="text-[#344054] border-gray-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyContactRelation" className="text-[#344054]">
                    Relationship
                  </Label>
                  <Select
                    value={personalData.emergencyContactRelation}
                    onValueChange={(value) => handlePersonalUpdate("emergencyContactRelation", value)}
                  >
                    <SelectTrigger className="text-[#344054] border-gray-200">
                      <SelectValue />
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

              <Button onClick={handleSavePersonal} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Personal Information
              </Button>
            </CardContent>
          </Card>

          {/* Medical Information */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#344054] flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Medical Information
              </CardTitle>
              <CardDescription className="text-[#344054]/70">
                Keep your medical information up to date for better care
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bloodType" className="text-[#344054]">
                    Blood Type
                  </Label>
                  <Select
                    value={medicalData.bloodType}
                    onValueChange={(value) => handleMedicalUpdate("bloodType", value)}
                  >
                    <SelectTrigger className="text-[#344054] border-gray-200">
                      <SelectValue />
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
                    value={medicalData.primaryPhysician}
                    onChange={(e) => handleMedicalUpdate("primaryPhysician", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="allergies" className="text-[#344054] flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Allergies
                </Label>
                <Textarea
                  id="allergies"
                  value={medicalData.allergies}
                  onChange={(e) => handleMedicalUpdate("allergies", e.target.value)}
                  className="text-[#344054] border-gray-200"
                  placeholder="List any known allergies..."
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentMedications" className="text-[#344054]">
                  Current Medications
                </Label>
                <Textarea
                  id="currentMedications"
                  value={medicalData.currentMedications}
                  onChange={(e) => handleMedicalUpdate("currentMedications", e.target.value)}
                  className="text-[#344054] border-gray-200"
                  placeholder="List current medications and dosages..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medicalConditions" className="text-[#344054]">
                  Medical Conditions
                </Label>
                <Textarea
                  id="medicalConditions"
                  value={medicalData.medicalConditions}
                  onChange={(e) => handleMedicalUpdate("medicalConditions", e.target.value)}
                  className="text-[#344054] border-gray-200"
                  placeholder="List any chronic conditions or ongoing health issues..."
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredPharmacy" className="text-[#344054]">
                  Preferred Pharmacy
                </Label>
                <Input
                  id="preferredPharmacy"
                  value={medicalData.preferredPharmacy}
                  onChange={(e) => handleMedicalUpdate("preferredPharmacy", e.target.value)}
                  className="text-[#344054] border-gray-200"
                />
              </div>

              <Button onClick={handleSaveMedical} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Medical Information
              </Button>
            </CardContent>
          </Card>

          {/* Insurance Information */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#344054] flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Insurance Information
              </CardTitle>
              <CardDescription className="text-[#344054]/70">
                Keep your insurance details current for billing purposes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="provider" className="text-[#344054]">
                  Insurance Provider
                </Label>
                <Input
                  id="provider"
                  value={insuranceData.provider}
                  onChange={(e) => handleInsuranceUpdate("provider", e.target.value)}
                  className="text-[#344054] border-gray-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="policyNumber" className="text-[#344054]">
                    Policy Number
                  </Label>
                  <Input
                    id="policyNumber"
                    value={insuranceData.policyNumber}
                    onChange={(e) => handleInsuranceUpdate("policyNumber", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="groupNumber" className="text-[#344054]">
                    Group Number
                  </Label>
                  <Input
                    id="groupNumber"
                    value={insuranceData.groupNumber}
                    onChange={(e) => handleInsuranceUpdate("groupNumber", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subscriberName" className="text-[#344054]">
                    Subscriber Name
                  </Label>
                  <Input
                    id="subscriberName"
                    value={insuranceData.subscriberName}
                    onChange={(e) => handleInsuranceUpdate("subscriberName", e.target.value)}
                    className="text-[#344054] border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="relationToSubscriber" className="text-[#344054]">
                    Relation to Subscriber
                  </Label>
                  <Select
                    value={insuranceData.relationToSubscriber}
                    onValueChange={(value) => handleInsuranceUpdate("relationToSubscriber", value)}
                  >
                    <SelectTrigger className="text-[#344054] border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Self</SelectItem>
                      <SelectItem value="spouse">Spouse</SelectItem>
                      <SelectItem value="child">Child</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleSaveInsurance} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Insurance Information
              </Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#344054] flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription className="text-[#344054]/70">Manage your password and account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="text-[#344054]">
                  Current Password
                </Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    className="text-[#344054] border-gray-200 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-[#344054]/50"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword" className="text-[#344054]">
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    className="text-[#344054] border-gray-200 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-[#344054]/50"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#344054]">
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="text-[#344054] border-gray-200 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-[#344054]/50"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Button onClick={handleChangePassword} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Lock className="h-4 w-4 mr-2" />
                Change Password
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Notification Settings */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#344054] flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription className="text-[#344054]/70">Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Appointment Reminders</Label>
                  <p className="text-sm text-[#344054]/70">Get reminders for upcoming appointments</p>
                </div>
                <Switch
                  checked={notifications.appointmentReminders}
                  onCheckedChange={() => handleNotificationToggle("appointmentReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Medication Reminders</Label>
                  <p className="text-sm text-[#344054]/70">Reminders to take your medications</p>
                </div>
                <Switch
                  checked={notifications.medicationReminders}
                  onCheckedChange={() => handleNotificationToggle("medicationReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Test Results</Label>
                  <p className="text-sm text-[#344054]/70">Notifications when test results are available</p>
                </div>
                <Switch
                  checked={notifications.testResultsNotifications}
                  onCheckedChange={() => handleNotificationToggle("testResultsNotifications")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Health Tips</Label>
                  <p className="text-sm text-[#344054]/70">Receive health tips and wellness advice</p>
                </div>
                <Switch
                  checked={notifications.healthTips}
                  onCheckedChange={() => handleNotificationToggle("healthTips")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">SMS Notifications</Label>
                  <p className="text-sm text-[#344054]/70">Receive notifications via text message</p>
                </div>
                <Switch
                  checked={notifications.smsNotifications}
                  onCheckedChange={() => handleNotificationToggle("smsNotifications")}
                />
              </div>

              <Button
                onClick={handleSaveNotifications}
                variant="outline"
                className="w-full text-[#344054] border-gray-200"
              >
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#344054] flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy Settings
              </CardTitle>
              <CardDescription className="text-[#344054]/70">Control how your health data is used</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Share Data with Doctors</Label>
                  <p className="text-sm text-[#344054]/70">Allow your healthcare providers to access your data</p>
                </div>
                <Switch
                  checked={privacy.shareDataWithDoctors}
                  onCheckedChange={() => handlePrivacyToggle("shareDataWithDoctors")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Research Participation</Label>
                  <p className="text-sm text-[#344054]/70">Allow your data to be used for medical research</p>
                </div>
                <Switch
                  checked={privacy.allowResearchParticipation}
                  onCheckedChange={() => handlePrivacyToggle("allowResearchParticipation")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Anonymous Data Sharing</Label>
                  <p className="text-sm text-[#344054]/70">Share anonymized data to improve healthcare</p>
                </div>
                <Switch
                  checked={privacy.shareAnonymousData}
                  onCheckedChange={() => handlePrivacyToggle("shareAnonymousData")}
                />
              </div>

              <Button onClick={handleSavePrivacy} variant="outline" className="w-full text-[#344054] border-gray-200">
                Save Privacy Settings
              </Button>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#344054] flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Preferences
              </CardTitle>
              <CardDescription className="text-[#344054]/70">
                Set your appointment and communication preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-[#344054]">Preferred Appointment Time</Label>
                <Select
                  value={preferences.preferredAppointmentTime}
                  onValueChange={(value) => handlePreferenceUpdate("preferredAppointmentTime", value)}
                >
                  <SelectTrigger className="text-[#344054] border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                    <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                    <SelectItem value="no-preference">No Preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-[#344054]">Communication Method</Label>
                <Select
                  value={preferences.communicationMethod}
                  onValueChange={(value) => handlePreferenceUpdate("communicationMethod", value)}
                >
                  <SelectTrigger className="text-[#344054] border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="app">App Notifications</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-[#344054]">Reminder Timing</Label>
                <Select
                  value={preferences.appointmentRemindersAdvance}
                  onValueChange={(value) => handlePreferenceUpdate("appointmentRemindersAdvance", value)}
                >
                  <SelectTrigger className="text-[#344054] border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1hour">1 Hour Before</SelectItem>
                    <SelectItem value="2hours">2 Hours Before</SelectItem>
                    <SelectItem value="24hours">24 Hours Before</SelectItem>
                    <SelectItem value="48hours">48 Hours Before</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleSavePreferences}
                variant="outline"
                className="w-full text-[#344054] border-gray-200"
              >
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
