import { Dispatch, SetStateAction } from "react";
import { SideNavDataType } from "../../types/SideNavDataType";

export interface IChannelView {
    setSideNavData: Dispatch<SetStateAction<SideNavDataType>>
    hideModal: Dispatch<SetStateAction<boolean>>
}