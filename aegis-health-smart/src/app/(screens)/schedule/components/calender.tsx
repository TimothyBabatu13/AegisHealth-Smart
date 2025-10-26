'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScheduleStore } from "@/stores/useScheduleStore";
import { timeSlots } from "@/utils/hardcoded-data"
import { ChevronLeft, ChevronRight, Clock, Calendar as LucideCalender } from 'lucide-react'
import { useState } from "react"

const Calendar = () => {
    const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } = useScheduleStore()

    const [currentMonth, setCurrentMonth] = useState(new Date())

    const generateCalendarDays = () => {
        const year = currentMonth.getFullYear()
        const month = currentMonth.getMonth()
        const firstDay = new Date(year, month, 1)
        const startDate = new Date(firstDay)
        startDate.setDate(startDate.getDate() - firstDay.getDay())
    
        const days = []
        const today = new Date()
    
        for (let i = 0; i < 42; i++) {
          const date = new Date(startDate)
          date.setDate(startDate.getDate() + i)
    
          const isCurrentMonth = date.getMonth() === month
          const isToday = date.toDateString() === today.toDateString()
          const isPast = date < today && !isToday
          const isSelected = selectedDate?.toDateString() === date.toDateString()
    
          days.push({
            date,
            isCurrentMonth,
            isToday,
            isPast,
            isSelected,
            day: date.getDate(),
          })
        }
    
        return days
      }
    
      const navigateMonth = (direction: "prev" | "next") => {
        setCurrentMonth((prev) => {
          const newMonth = new Date(prev)
          newMonth.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1))
          return newMonth
        })
      }
    
      const handleDateSelect = (date: Date) => {
        if (date >= new Date() || date.toDateString() === new Date().toDateString()) {
          setSelectedDate(date)
        }
      }
    


  return (
      <div className="lg:col-span-2">
                <Card className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-[#344054] flex items-center gap-2">
                        <LucideCalender className="h-5 w-5" />
                        Select Date
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigateMonth("prev")}
                          className="text-[#344054] border-gray-200"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <span className="text-[#344054] font-medium min-w-[120px] text-center">
                          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigateMonth("next")}
                          className="text-[#344054] border-gray-200"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="p-2 text-center text-sm font-medium text-[#344054]/70">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {generateCalendarDays().map((day, index) => (
                        <button
                          key={index}
                          onClick={() => handleDateSelect(day.date)}
                          disabled={day.isPast}
                          className={`
                            p-2 text-sm rounded-lg transition-all duration-200 hover:bg-blue-50
                            ${!day.isCurrentMonth ? "text-gray-300" : "text-[#344054]"}
                            ${day.isToday ? "bg-blue-100 font-semibold" : ""}
                            ${day.isSelected ? "bg-blue-500 text-white" : ""}
                            ${day.isPast ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                          `}
                        >
                          {day.day}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
    
                {/* Time Slots */}
                {selectedDate && (
                  <Card className="mt-6 border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-[#344054] flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Available Time Slots
                      </CardTitle>
                      <CardDescription className="text-[#344054]/70">
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              ${
                                selectedTime === time
                                  ? "bg-blue-500 text-white"
                                  : "text-[#344054] border-gray-200 hover:bg-blue-50"
                              }
                            `}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
  )
}

export default Calendar