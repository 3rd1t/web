import React from "react"
import { Base } from "../base/base"
import { getHoverColor } from "../util/hoverColor"
import NextLink from "next/link"

/* eslint-disable-next-line */
export interface LinkProps {
  label: string
  textColor: string
  href: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

export const Link = (props: LinkProps) => {
  const className = ["focus:outline-none", props.textColor, getHoverColor(props.textColor)].join(" ")

  return (
    <NextLink href={props.href}>
      <a className={className}>
        <Base label={props.label} iconLeft={props.iconLeft} iconRight={props.iconRight}></Base>
      </a>
    </NextLink>
  )
}

export default Link
