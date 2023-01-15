import React, { FC, ReactElement, useState } from 'react'
import { ICalender } from './interfaces/ICalender'
import { format } from 'date-fns'

const Calender: FC<ICalender> = (props): ReactElement => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <div>
      <h2>{format(date, "LLLL yyyy")}</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto fugit odio saepe quia voluptatum assumenda accusamus vel officia quos, qui tenetur. Omnis minima corrupti, modi autem exercitationem tenetur voluptas provident ipsam repellat itaque voluptatum quod atque iste ut, quasi sit consectetur soluta voluptates adipisci? Aperiam sint eligendi tempore magni!
    </div>
  )
}

export default Calender