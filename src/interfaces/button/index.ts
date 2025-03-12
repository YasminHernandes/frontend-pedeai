import { ReactNode } from "react";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    isFill?: boolean,
    hasIcon?: boolean,
    radius: string,
    padding: string,
    onClick?: () => void
}