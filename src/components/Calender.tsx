import React, { FC, ReactElement, useState } from 'react'
import { ICalender } from './interfaces/ICalender'
import { format } from 'date-fns'
import CalenderHeader from './CalenderHeader'

const Calender: FC<ICalender> = (props): ReactElement => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <section className="w-full">
      <CalenderHeader date={date} setDate={setDate} />
      <div className="w-full aspect-square bg-teal-400 mt-4"></div>
    </section>
  )
}

export default Calender