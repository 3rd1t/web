import React, { ReactNode } from "react"
import Breadcrumbs from "../../bread-crumbs/bread-crumbs"
import Link from "@perfolio/components/clickable/link/link"
import NextLink from "next/link"
import Dropdown from "@perfolio/components/form/dropdown/dropdown"
import { capitalize } from "@perfolio/util/strings/capitalize"
/* eslint-disable-next-line */
export interface HeaderProps {
  breadcrumbs?: string[]
  user: {
    nickname: string
  }
}

function dropdownItem(label: string, href: string, icon: React.ReactNode): React.ReactNode {
  return (
    <NextLink href={href}>
      <a href="#" className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg">
        <div className="text-data-500">{icon}</div>
        <p className="text-base font-medium leading-6">{label}</p>
      </a>
    </NextLink>
  )
}

export const Header = ({ breadcrumbs, user }: HeaderProps) => {
  return (
    <div className="w-full h-20">
      <ul className="flex items-center justify-between h-full px-4">
        <li key="breadcrumbs" className="text-gray-700 ">
          <Breadcrumbs path={breadcrumbs} />
        </li>
        <li key="end">
          <ul className="flex items-center justify-between space-x-16">
            <li key="documentation">
              <Link label="Documentation" textColor="text-gray-800" href="/docs" />
            </li>
            <li key="user">
              <Dropdown
                button={
                  <div className="flex flex-col items-end w-40 rounded hover:text-data-800 hover:font-semibold">
                    <span>{capitalize(user.nickname)}</span>
                    <span className="text-xs font-semibold text-data-700">Premium</span>
                  </div>
                }
                options={[
                  dropdownItem(
                    "Settings",
                    "",
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>,
                  ),
                  dropdownItem(
                    "Support",
                    "",
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>,
                  ),
                  <div className="pt-3 border-t border-gray-300">
                    {dropdownItem(
                      "Log out",
                      "/api/logout",
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                          clipRule="evenodd"
                        />
                      </svg>,
                    )}
                  </div>,
                ]}
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Header
