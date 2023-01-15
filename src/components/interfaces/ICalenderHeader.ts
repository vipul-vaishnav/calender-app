import { Dispatch, SetStateAction } from "react"

export interface ICalenderHeader {
    date: Date
    setDate: Dispatch<SetStateAction<Date>>
}