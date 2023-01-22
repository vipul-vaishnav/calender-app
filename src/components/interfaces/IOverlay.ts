import { Dispatch, SetStateAction } from "react";
import { VIEW } from "../../constants/View";

export interface IOverlay {
    hideModal: Dispatch<SetStateAction<boolean>>
    setModalView: Dispatch<SetStateAction<VIEW | null>>
}