import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

/* eslint-disable-next-line */
export interface FactorItemProps {
  author: string
  href: string
  factor: string
  year: number
}

export const FactorItem = ({ author, href, factor, year }) => {
  const router = useRouter()

  const active = router && router.pathname === ("/factor/" + factor).toLowerCase()
  return (
    <Link href={href}>
      <a className="flex items-start h-16 hover:text-gray-900 ">
        <span className={active ? "text-gray-900 font-medium" : "text-gray-700"}>{factor}</span>
        <div className="flex flex-col items-end w-full">
          <span className="text-sm text-gray-700 hover:text-gray-900">{author}</span>
          <span className="flex items-center justify-center text-xs font-thin text-gray-700">{year}</span>
        </div>
      </a>
    </Link>
  )
}

export default FactorItem
