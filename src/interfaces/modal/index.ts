import { ReactNode } from "react";

export interface IModal {
    children?: ReactNode;
    title: string;
    description: string;
    buttonText: string;
    buttonTextSecondary?: string;
  }