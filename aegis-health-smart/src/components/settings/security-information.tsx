'use client';

import { Eye, EyeOff, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const SecurityInformationChange = () => {
    const [showPassword, setShowPassword] = useState({
        showCurrentPassword: false,
        showNewPassword: false,
        showConfirmPassword: false
    })

    const handleChangePassword = () => {
        alert("Password changed successfully!")
    }
    
  return (
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
                    type={showPassword.showCurrentPassword ? "text" : "password"}
                    className="text-[#344054] border-gray-200 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-[#344054]/50"
                    onClick={() => setShowPassword(prev => (({
                        ...prev,
                        showCurrentPassword: !showPassword.showCurrentPassword
                    })))}
                  >
                    {showPassword.showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
                    type={showPassword.showNewPassword ? "text" : "password"}
                    className="text-[#344054] border-gray-200 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-[#344054]/50"
                    onClick={() => setShowPassword(prev =>(({
                        ...prev,
                        showNewPassword: !showPassword.showNewPassword
                    })))}
                  >
                    {showPassword.showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
                    type={showPassword.showConfirmPassword ? "text" : "password"}
                    className="text-[#344054] border-gray-200 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-[#344054]/50"
                    onClick={() => setShowPassword(prev => (({
                        ...prev,
                        showCurrentPassword: !showPassword.showConfirmPassword
                    })))}
                  >
                    {showPassword.showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Button onClick={handleChangePassword} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Lock className="h-4 w-4 mr-2" />
                Change Password
              </Button>
            </CardContent>
          </Card>
  )
}

export default SecurityInformationChange