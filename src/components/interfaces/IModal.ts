import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { VIEW } from "../../constants/View";

export interface IModal extends PropsWithChildren {
    hideModal: Dispatch<SetStateAction<boolean>>
    setModalView: Dispatch<SetStateAction<VIEW | null>>
}