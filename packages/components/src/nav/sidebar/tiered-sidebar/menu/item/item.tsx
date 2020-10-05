import React from "react"
import Link from "next/link"

/* eslint-disable-next-line */
export interface ItemProps {
  label?: string
  href: string
  icon?: React.ReactNode
  tag?: string
}

export const Item = ({ label, href, icon, tag }: ItemProps) => {
  return (
    <Link href={href}>
      <a aria-label={label} className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-100">
        <span className="flex items-center justify-center text-lg text-gray-400">{icon ? icon : null}</span>
        <div className="flex items-center justify-between space-x-1">
          {label ? <span className="ml-3">{label}</span> : null}
          {tag ? (
            <span className="flex items-center justify-center px-1 text-xs uppercase bg-opacity-25 rounded bg-data-400 text-data-700">
              {tag}
            </span>
          ) : null}
        </div>
      </a>
    </Link>
  )
}

export default Item
