import React from "react"
import { Base } from "../base/base"
import { getHoverColor } from "../util/hoverColor"
import NextLink from "next/link"

/* eslint-disable-next-line */
export interface LinkProps {
  label?: string
  textColor?: string
  bgColor?: string
  href: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  className?: string
}

export const Link = (props: LinkProps) => {
  const className = [
    "focus:outline-none transition duration-200",
    props.textColor,
    getHoverColor(props.textColor),
    props.bgColor,
    getHoverColor(props.bgColor),
    props.className,
  ].join(" ")

  return (
    <NextLink href={props.href} locale="de">
      <a>
        <div className={className}>
          <Base label={props.label} iconLeft={props.iconLeft} iconRight={props.iconRight}></Base>
        </div>
      </a>
    </NextLink>
  )
}

export default Link
