import { Dispatch, SetStateAction } from "react";

export interface IOverlay {
    hideModal: Dispatch<SetStateAction<boolean>>
}