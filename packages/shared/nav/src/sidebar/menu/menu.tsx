import React from "react"
import { Title } from "./title/title"
import { Item } from "./item/item"
import { FactorItem } from "./factor-item/factor-item"
/* eslint-disable-next-line */
export interface MenuProps {}

export const Menu = (props: MenuProps) => {
  return (
    <div className="flex flex-col justify-between px-4 py-4 bg-gray-100 border-l border-r border-gray-300 ">
      <ul className="flex flex-col w-full">
        <li>
          <Title label="Builder" />
        </li>
        <li key="api">
          <Item
            label="API"
            href="/notImplemented"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 code">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
          />
        </li>
        <li key="csv">
          <Item
            label="CSV Download"
            href="/notImplemented"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cloud-download">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            }
          />
        </li>
        <li key="charts">
          <Item
            label="Charts"
            href="/notImplemented"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 chart-square-bar">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            tag="coming soon"
          />
        </li>
        <li>
          <Title label="Factor models" />
        </li>
        <li>
          <FactorItem factor="Three" author="Fama & French" year="1993" href="/notImplemented" />
        </li>
        <li>
          <FactorItem factor="Four" author="Carhart" year="1997" href="/notImplemented" />
        </li>
        <li>
          <FactorItem factor="Five" author="Fama & French" year="2015" href="/notImplemented" />
        </li>
        <li>
          <FactorItem factor="Six" author="Fama & French" year="2018" href="/notImplemented" />
        </li>
      </ul>
      <div>
        <div className="pt-3 border-t border-gray-300">
          <Item
            label="Request feature"
            href="mailto:request@perfol.io"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-data-400">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
