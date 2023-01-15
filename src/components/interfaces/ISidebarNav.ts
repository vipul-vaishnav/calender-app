import { Dispatch, SetStateAction } from "react"

export interface ISidebarNav {
    selectedDate: Date
    setSelectedDate: Dispatch<SetStateAction<Date>>
}