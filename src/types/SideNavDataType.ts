import { ElementType } from "react"

export type Children = {
    label: string
}

export type SideNavDataItem = {
    label: string
    hasChildren: boolean
    name?: string
    icon?: string
    children?: ElementType | Children[]
}

export type SideNavDataType = SideNavDataItem[]