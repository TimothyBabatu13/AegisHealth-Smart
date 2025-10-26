import ProfileInformationChange from "./settings/profile-information"
import SecurityInformationChange from "./settings/security-information"
import PrivacyInformationChange from "./settings/privacy-information"


export const DoctorAccountSetting = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#344054]">Settings</h2>
          <p className="text-[#344054]/70">Manage your account settings and preferences</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProfileInformationChange />
          <SecurityInformationChange />
        </div>
        <PrivacyInformationChange />
      </div>
    </div>
  )
}
