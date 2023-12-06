import { forwardRef } from "react";
import { IButton, ButtonRefType } from "./IButton";
import style from "./Button.module.scss";

const Button = forwardRef<ButtonRefType, IButton>((props, ref) => {
  const { variant, leftIcon, rightIcon, children, className, ...otherProps } = props;

  return (
    <button ref={ref} {...otherProps} className={`${style.buttonRoot} ${style[`${variant}Button`]} ${className}`}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});

Button.displayName = "Button";

Button.defaultProps = {
  variant: "primary",
};

export default Button;
