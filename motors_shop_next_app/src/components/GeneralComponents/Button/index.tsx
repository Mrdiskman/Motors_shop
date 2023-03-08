import { ButtonHTMLAttributes, ReactNode } from "react";
import StyledButton from "./style";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width_mobile?: string;
  width_desktop?: string;
  colorStyle?:
    | "grey-0__white-fixed"
    | "grey-1__white-fixed"
    | "grey-6__grey-2"
    | "grey-5__grey-2"
    | "grey-5__white-fixed"
    | "brand-1__white-fixed"
    | "brand-2__white-fixed"
    | "brand-4__brand-1"
    | "grey-10__grey-1"
    | "transparent__grey-10"
    | "transparent__grey-0"
    | "grey-1__grey-10"
    | "grey-4__grey-0"
    | "transparent__grey-0_2"
    | "transparent__brand-1"
    | "brand-4__brand-1_2"
    | "grey-8__grey-0"
    | "alert-3__alert-1"
    | "alert-2__alert-1"
    | "success-3__success-1"
    | "success-2__success-1"
    | "brand-3__brand-4";
}

const Button = ({
  children,
  colorStyle,
  width_mobile,
  width_desktop,
  ...rest
}: IButton) => (
  <StyledButton
    colorStyle={colorStyle}
    width_mobile={width_mobile}
    width_desktop={width_desktop}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default Button;
