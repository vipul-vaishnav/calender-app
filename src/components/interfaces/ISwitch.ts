import { Dispatch, SetStateAction } from "react"

export interface ISwitch {
    theme?: string
    toggleTheme: () => void
}