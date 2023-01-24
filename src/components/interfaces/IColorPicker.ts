import { Dispatch, SetStateAction } from "react";
import { EventFormType } from "../../types/EventFormType";

export interface IColorPicker {
    color: string
    setFormData: Dispatch<SetStateAction<EventFormType>>
}