import React, { FC, ReactElement, useState } from 'react'
import { ICalender } from './interfaces/ICalender'
import { format } from 'date-fns'
import CalenderHeader from './CalenderHeader'
import CalenderBody from './CalenderBody'

const Calender: FC<ICalender> = (props): ReactElement => {
  const [date, setDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  return (
    <section className="w-full">
      <CalenderHeader date={date} setDate={setDate} />
      <CalenderBody date={date} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </section>
  )
}

export default Calender