import { Dispatch, SetStateAction } from "react"

export interface ICalenderBody {
    date: Date
    selectedDate: Date
    setSelectedDate: Dispatch<SetStateAction<Date>>
}