import { ReactNode } from "react";

export interface IQuantity {
    children: ReactNode;
    primary?: true;
    iconColor: string;
    onDecrease: (id: string) => void
    onIncrease: (id: string) => void
  }