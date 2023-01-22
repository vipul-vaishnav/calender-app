import React, { FC, ReactElement } from 'react'
import { v4 as uuidv4 } from "uuid"
import { endOfMonth, format, getDate, getDaysInMonth, getMonth, getYear, startOfMonth, setDate as set_date } from 'date-fns'
import { ICalenderBody } from './interfaces/ICalenderBody'
import Cell from './Cell'
import { toast } from "react-hot-toast"

const DAYS_IN_A_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const CalenderBody: FC<ICalenderBody> = (props): ReactElement => {
  const { date, selectedDate, setSelectedDate } = props
  const start_of_month = startOfMonth(date)
  const end_of_month = endOfMonth(date)
  const number_of_days = getDaysInMonth(date)
  const pre_days = start_of_month.getDay()
  const post_days = DAYS_IN_A_WEEK.length - 1 - end_of_month.getDay()

  const month = getMonth(date)
  const year = getYear(date)

  const selected_day = getDate(selectedDate)
  const selected_month = getMonth(selectedDate)
  const selected_year = getYear(selectedDate)

  const present_day = new Date().getDate()
  const present_month = new Date().getMonth()
  const present_year = new Date().getFullYear()

  const IS_TODAY = month === present_month && year === present_year
  const IS_SELECTED = month === selected_month && year === selected_year

  const handleClick = (x: number) => {
    const newDate = set_date(date, x);
    setSelectedDate(newDate)
    toast.success("Date changed to " + format(newDate, "dd LLLL yyyy"), { style: { backgroundColor: "#22c55e", color: "white" }, icon: "☑️" })
  }

  return (
    <div className="w-full aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-md mt-4 grid grid-cols-7">
      {DAYS_IN_A_WEEK.map(day => {
        return <div key={uuidv4()} className="w-full aspect-square grid place-content-center">
          <h6 className='text-sm uppercase font-semibold'>{day}</h6>
        </div>
      })}
      {Array.from({ length: pre_days }).map((_, idx) => {
        return <Cell key={idx} className="w-full aspect-square grid place-content-center hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50 rounded-sm" />
      })}
      {Array.from({ length: number_of_days }).map((_, idx) => {
        const date = idx + 1
        const isToday = date === present_day
        const isSelected = date === selected_day

        return <Cell key={idx} className={`w-full aspect-square grid place-content-center hover:bg-clip-padding rounded-sm cursor-pointer ${IS_SELECTED && isSelected && selected_day !== present_day ? "border dark:border-zinc-200 border-zinc-800" : ""} ${IS_TODAY && isToday ? "bg-indigo-600 text-white" : "hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50"}`} onClick={handleClick}>
          {date}
        </Cell>
      })}
      {Array.from({ length: post_days }).map((_, idx) => {
        return <Cell key={idx} className="w-full aspect-square grid place-content-center hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50 rounded-sm" />
      })}
    </div>

  )
}

export default CalenderBody