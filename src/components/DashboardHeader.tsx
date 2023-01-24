import { format } from 'date-fns'
import React, { FC, ReactElement } from 'react'
import { IDashboardHeader } from './interfaces/IDashboardHeader'

const DashboardHeader: FC<IDashboardHeader> = (props): ReactElement => {
  const { selectedDate } = props

  return (
    <header className="bg-white dark:bg-darkbg rounded-md p-3 flex items-center justify-between text-lg">
      <div>{format(selectedDate, "dd LLLL yyyy")}</div>
      <div>
        <span className="font-bold">Today, </span>
        <span className="text-indigo-600">{format(new Date(), "dd LLLL yyyy")}</span>
      </div>
    </header>
  )
}

export default DashboardHeader