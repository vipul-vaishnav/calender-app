import { Dispatch, PropsWithChildren, SetStateAction } from "react";

export interface IModal extends PropsWithChildren {
    hideModal: Dispatch<SetStateAction<boolean>>
}