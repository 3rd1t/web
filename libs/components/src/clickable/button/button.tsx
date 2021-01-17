import { prependListener } from "process";
import React from "react";
import { Base } from "../base/base";

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string;
  textColor?: string;
  bgColor?: string;
  onClick: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const className = [
    "focus:outline-none transition duration-200 rounded-sm py-1 px-4 font-medium",
    props.textColor,
    props.bgColor ||
      "bg-gradient-to-tr from-indigo-900 to-purple-800 hover:from-indigo-800 hover:to-purple-700",
    props.className,
  ].join(" ");

  return (
    <button className={className} onClick={props.onClick}>
      <Base
        label={props.label}
        iconLeft={props.iconLeft}
        iconRight={props.iconRight}
      ></Base>
    </button>
  );
};

export default Button;
