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
      <a className="p-2 text-gray-800 rounded-lg hover:bg-gray-100">
        <div className="flex items-center justify-between">
          <span className={active ? "text-gray-900 font-medium" : ""}>{factor}</span>
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <div className="flex flex-wrap pt-2 mt-2 border-t border-gray-300 ">
          <span className="px-1 m-1 text-xs bg-opacity-25 rounded bg-data-400 text-data-700">MOM</span>
          <span className="px-1 m-1 text-xs bg-opacity-25 rounded bg-data-400 text-data-700">MOM</span>
          <span className="px-1 m-1 text-xs bg-opacity-25 rounded bg-data-400 text-data-700">MOM</span>
          <span className="px-1 m-1 text-xs bg-opacity-25 rounded bg-data-400 text-data-700">MOM</span>
          <span className="px-1 m-1 text-xs bg-opacity-25 rounded bg-data-400 text-data-700">MOM</span>
          <span className="px-1 m-1 text-xs bg-opacity-25 rounded bg-data-400 text-data-700">MOM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-700 hover:text-gray-900">{author}</span>
          <span className="flex items-center justify-center text-xs font-thin text-gray-700">{year}</span>
        </div>
      </a>
    </Link>
  )
}

export default FactorItem
