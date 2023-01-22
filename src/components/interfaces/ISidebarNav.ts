import { Dispatch, SetStateAction } from "react"
import { SideNavDataType } from "../../types/SideNavDataType"
import { VIEW } from "../../constants/View"

export interface ISidebarNav {
    selectedDate: Date
    setSelectedDate: Dispatch<SetStateAction<Date>>
    showModal: Dispatch<SetStateAction<boolean>>
    sideNavData: SideNavDataType
    setSideNavData: Dispatch<SetStateAction<SideNavDataType>>
    setModalView: Dispatch<SetStateAction<VIEW | null>>
}