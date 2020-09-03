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
      <a
        aria-label="Settings"
        className="flex items-center h-12 space-x-2 text-gray-400 rounded-lg hover:text-gray-900"
      >
        {icon ? icon : null}
        <div className="flex items-center justify-between">
          {label ? <span className="text-gray-700 hover:text-gray-900">{label}</span> : null}
          {tag ? (
            <span className="flex items-center justify-center h-6 px-2 text-xs font-semibold uppercase bg-gray-200 rounded-full text-research-600">
              {tag}
            </span>
          ) : null}
        </div>
      </a>
    </Link>
  )
}

export default Item
