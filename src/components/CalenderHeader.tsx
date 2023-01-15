import React, { FC, ReactElement } from 'react'
import { ICalenderHeader } from './interfaces/ICalenderHeader'
import { add, format, sub } from 'date-fns'

const CalenderHeader: FC<ICalenderHeader> = (props): ReactElement => {
  const { date, setDate } = props

  const jumpToNextMonth = () => {
    const newDate = add(date, { months: 1 })
    setDate(newDate)
  }

  const jumpToPrevMonth = () => {
    const newDate = sub(date, { months: 1 })
    setDate(newDate)
  }

  return (
    <div className="flex items-center justify-between">
      <h2>{format(date, "LLLL yyyy")}</h2>

      <div className="flex items-center gap-2">
        <button onClick={jumpToPrevMonth} className="dark:bg-zinc-800 bg-zinc-200 rounded-md p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button className="dark:bg-zinc-800 bg-zinc-200 rounded-md p-1 text-sm">Today</button>
        <button onClick={jumpToNextMonth} className="dark:bg-zinc-800 bg-zinc-200 rounded-md p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CalenderHeader