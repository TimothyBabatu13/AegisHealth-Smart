'use client';

import { Bell, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";

const PrivacyInformationChange = () => {

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
    
      
    
      const handleSaveNotifications = () => {
        console.log("Saving notification settings:", notifications)
        alert("Notification settings updated successfully!")
      }

  return (
    <div className="space-y-6">
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
  )
}

export default PrivacyInformationChange