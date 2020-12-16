import React from "react";
import { Base } from "../base/base";
import NextLink from "next/link";

/* eslint-disable-next-line */
export interface LinkProps {
  label?: string;
  textColor?: string;
  bgColor?: string;
  href: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const Link = (props: LinkProps) => {


  const className = [
    "focus:outline-none transition duration-200 rounded-sm py-2 px-4 font-medium",
    props.textColor,
    props.bgColor ,
    props.className,
  ].join(" ");

  return (
    <NextLink href={props.href}>
      <a>
        <div className={className}>
          <Base
            label={props.label}
            iconLeft={props.iconLeft}
            iconRight={props.iconRight}
          ></Base>
        </div>
      </a>
    </NextLink>
  );
};

export default Link;
