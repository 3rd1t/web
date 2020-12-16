import React from "react";
import { Link } from "./link";

/* eslint-disable-next-line */
export interface ButtonProps {
  label?: string;
  textColor?: string;
  bgColor?: string;
  href: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <Link
      label={props.label}
      textColor={props.textColor}
      bgColor={
        props.bgColor ||
        "bg-gradient-to-t from-indigo-900 to-purple-800 hover:from-indigo-800 hover:to-purple-700"
      }
      href={props.href}
      iconLeft={props.iconLeft}
      iconRight={props.iconRight}
      className={props.className}
    ></Link>
  );
};

export default Button;
