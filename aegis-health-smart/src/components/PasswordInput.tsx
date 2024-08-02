import { FormInputType } from "@/types/types"

const PasswordInput = ({ Onchange, value } : FormInputType) => {
  return (
    <input
    id="password"
    name="password"
    type="password"
    autoComplete="current-password"
    required
    className="block w-full text-base rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    onChange={Onchange}
    value={value}
  />
  )
}

export default PasswordInput