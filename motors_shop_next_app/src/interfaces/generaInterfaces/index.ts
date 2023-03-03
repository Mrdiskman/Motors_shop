import { ReactNode } from "react";

export interface IProps {
  children?: ReactNode;
}

export interface IPropsCarrousel {
  children: ReactNode[];
}

export interface IModal {
  children: boolean;
}
