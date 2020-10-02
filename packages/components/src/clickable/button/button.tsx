import React from "react"
import { Base } from "../base/base"
import { getHoverColor } from "../util/hoverColor"

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string | React.ReactNode
  textColor: string
  bgColor?: string
  onClick: () => void
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  width?: string
}

export const Button = (props: ButtonProps) => {
  const classNames = [
    "focus:outline-none",
    props.width,
    props.textColor,
    getHoverColor(props.textColor),
    props.bgColor,
    getHoverColor(props.bgColor),
  ].join(" ")

  return (
    <button onClick={props.onClick} className={classNames}>
      <Base label={props.label} iconLeft={props.iconLeft} iconRight={props.iconRight}></Base>
    </button>
  )
}

export default Button
