import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-700 text-xs md:text-sm"
    case "pending":
      return "bg-yellow-100 text-yellow-700 text-xs md:text-sm"
    case "urgent":
      return "bg-red-100 text-red-700 text-xs md:text-sm"
    default:
      return "bg-gray-100 text-gray-700 text-xs md:text-sm"
  }
}