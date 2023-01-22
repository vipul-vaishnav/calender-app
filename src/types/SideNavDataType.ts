import { ElementType } from "react"

export type Children = {
    id: string
    title: string
    isPrivate?: boolean
}

export type SideNavDataItem = {
    label: string
    hasChildren: boolean
    name?: "channels" | "targets" | "calender"
    icon?: string
    children?: ElementType | Children[]
}

export type SideNavDataType = SideNavDataItem[]