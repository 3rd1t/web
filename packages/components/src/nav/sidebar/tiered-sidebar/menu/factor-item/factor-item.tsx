import React from "react"
import Link from "next/link"

/* eslint-disable-next-line */
export interface ItemProps {
  label: string
  href: string
  icon: React.ReactNode
  factors: string[]
}

export const FactorItem = ({ label, href, icon, factors }: ItemProps) => {
  return (
    <div>

      <Link href={href}>
        <a aria-label={label} className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-100">
          <span className="flex items-center justify-center text-lg text-gray-400">{icon}</span>
          <div className="flex items-center justify-between space-x-1">
            <span className="ml-3">{label}</span>

          </div>
        </a>
      </Link>
      <div className="flex flex-wrap mb-4">
        {factors.map((f, i) => {
          return <span key={i} className="p-1 m-1 text-xs bg-gray-100 rounded text-data-700">{f}</span>
        })}
      </div>
    </div>
  )
}

export default FactorItem
