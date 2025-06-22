"use client"

import { useState, useRef } from "react"
import { User, Camera, Save, Lock, Bell,  Shield, Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export const DoctorAccountSetting = () => {
  const [profileData, setProfileData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@hospital.com",
    phone: "+1 (555) 123-4567",
    specialty: "Cardiologist",
    licenseNumber: "MD123456789",
    hospital: "City General Hospital",
    address: "123 Medical Center Dr, City, State 12345",
    bio: "Experienced cardiologist with over 15 years of practice specializing in interventional cardiology and heart disease prevention.",
  })

  const [notifications, setNotifications] = useState({
    emailAppointments: true,
    smsReminders: true,
    pushNotifications: true,
    emergencyAlerts: true,
    patientMessages: true,
    systemUpdates: false,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "colleagues",
    showOnlineStatus: true,
    allowDirectMessages: true,
  })

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleProfileUpdate = (field: string, value: string) => {
    setProfileData((prev) => ({
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

  const handlePrivacyToggle = (setting: string, value: any) => {
    setPrivacy((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // In a real app, you would upload the file to your server
      console.log("Uploading file:", file.name)
      // For demo purposes, we'll just show an alert
      alert("Profile picture updated successfully!")
    }
  }

  const handleSaveProfile = () => {
    // In a real app, you would send this data to your server
    console.log("Saving profile data:", profileData)
    alert("Profile updated successfully!")
  }

  const handleSaveNotifications = () => {
    console.log("Saving notification settings:", notifications)
    alert("Notification settings updated successfully!")
  }

  const handleChangePassword = () => {
    // In a real app, you would validate and update the password
    alert("Password changed successfully!")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#344054]">Settings</h2>
          <p className="text-[#344054]/70">Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
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
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                    <AvatarFallback className="bg-blue-100 text-[#344054] text-xl">
                      {profileData.firstName[0]}
                      {profileData.lastName[0]}
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

              <Separator />

              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#344054]">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
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
                    value={profileData.lastName}
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
                  value={profileData.email}
                  onChange={(e) => handleProfileUpdate("email", e.target.value)}
                  className="text-[#344054] border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#344054]">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={profileData.phone}
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
                    value={profileData.specialty}
                    onValueChange={(value) => handleProfileUpdate("specialty", value)}
                  >
                    <SelectTrigger className="text-[#344054] border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cardiologist">Cardiologist</SelectItem>
                      <SelectItem value="Dermatologist">Dermatologist</SelectItem>
                      <SelectItem value="Pediatrician">Pediatrician</SelectItem>
                      <SelectItem value="Orthopedist">Orthopedist</SelectItem>
                      <SelectItem value="Neurologist">Neurologist</SelectItem>
                      <SelectItem value="General Practitioner">General Practitioner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="licenseNumber" className="text-[#344054]">
                    License Number
                  </Label>
                  <Input
                    id="licenseNumber"
                    value={profileData.licenseNumber}
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
                  value={profileData.hospital}
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
                  value={profileData.address}
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
                  value={profileData.bio}
                  onChange={(e) => handleProfileUpdate("bio", e.target.value)}
                  className="text-[#344054] border-gray-200"
                  rows={4}
                />
              </div>

              <Button onClick={handleSaveProfile} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Profile
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
              <CardDescription className="text-[#344054]/70">Manage your password and security preferences</CardDescription>
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
              <CardDescription className="text-[#344054]/70">Configure your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Email Appointments</Label>
                  <p className="text-sm text-[#344054]/70">Receive appointment notifications via email</p>
                </div>
                <Switch
                  checked={notifications.emailAppointments}
                  onCheckedChange={() => handleNotificationToggle("emailAppointments")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">SMS Reminders</Label>
                  <p className="text-sm text-[#344054]/70">Get SMS reminders for appointments</p>
                </div>
                <Switch
                  checked={notifications.smsReminders}
                  onCheckedChange={() => handleNotificationToggle("smsReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Push Notifications</Label>
                  <p className="text-sm text-[#344054]/70">Receive push notifications on your device</p>
                </div>
                <Switch
                  checked={notifications.pushNotifications}
                  onCheckedChange={() => handleNotificationToggle("pushNotifications")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Emergency Alerts</Label>
                  <p className="text-sm text-[#344054]/70">Critical emergency notifications</p>
                </div>
                <Switch
                  checked={notifications.emergencyAlerts}
                  onCheckedChange={() => handleNotificationToggle("emergencyAlerts")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Patient Messages</Label>
                  <p className="text-sm text-[#344054]/70">Notifications for new patient messages</p>
                </div>
                <Switch
                  checked={notifications.patientMessages}
                  onCheckedChange={() => handleNotificationToggle("patientMessages")}
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
              <CardDescription className="text-[#344054]/70">Control your privacy and visibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-[#344054]">Profile Visibility</Label>
                <Select
                  value={privacy.profileVisibility}
                  onValueChange={(value) => handlePrivacyToggle("profileVisibility", value)}
                >
                  <SelectTrigger className="text-[#344054] border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="colleagues">Colleagues Only</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Show Online Status</Label>
                  <p className="text-sm text-[#344054]/70">Let others see when you&apos;re online</p>
                </div>
                <Switch
                  checked={privacy.showOnlineStatus}
                  onCheckedChange={(checked) => handlePrivacyToggle("showOnlineStatus", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-[#344054]">Allow Direct Messages</Label>
                  <p className="text-sm text-[#344054]/70">Allow patients to message you directly</p>
                </div>
                <Switch
                  checked={privacy.allowDirectMessages}
                  onCheckedChange={(checked) => handlePrivacyToggle("allowDirectMessages", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
