import React from "react"
import { useRouter } from "next/router"
import Breadcrumbs from "../../lib/bread-crumbs/bread-crumbs"
import Link from "next/link"
/* eslint-disable-next-line */
export interface HeaderProps {
  breadcrumbs?: string[]
}

export const Header = ({ breadcrumbs }: HeaderProps) => {
  const router = useRouter()
  return (
    <div className="w-full h-20 bg-white border-b border-gray-300">
      <ul className="flex items-center justify-between h-full px-4">
        <li key="breadcrumbs" className="text-gray-700 ">
          <Breadcrumbs path={breadcrumbs} />
        </li>
        <li key="end">
          <ul className="flex items-center justify-between space-x-16">
            <li key="documentation">
              <Link href="/docs">
                <a className="font-medium text-gray-800 hover:text-gray-900">Documentation</a>
              </Link>
            </li>
            <li key="userProfile">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-end">
                  <span>Vin Venture</span>
                  <span className="text-xs font-semibold text-research-600">Premium</span>
                </div>
                <img
                  alt="Profile picture"
                  className="object-cover w-12 h-12 border rounded-full border-research-500"
                  src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fit=crop&w=651&q=80"
                ></img>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Header
