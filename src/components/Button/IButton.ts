import { ReactNode } from "react";

type ButtonProps = JSX.IntrinsicElements["button"];

export type ButtonRefType = HTMLButtonElement;

type ButtonVariantType = "primary" | "secondary" | "tertiary" | "outlined";
export interface IButton extends ButtonProps {
  variant?: ButtonVariantType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
