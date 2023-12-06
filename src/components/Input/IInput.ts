import React from "react";

type InputProps = React.JSX.IntrinsicElements["input"];
export interface IInput extends InputProps {
  value: string | number | readonly string[] | undefined;
  label?: string;
  className?: string;
  commonSvgs?: { [key: string]: string };
}
