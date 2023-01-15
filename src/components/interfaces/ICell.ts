import { PropsWithChildren } from "react";

export interface ICell extends PropsWithChildren {
    className?: string;
    onClick?: (x: number) => void
}