import React from "react"
import { Logo } from "@perfolio/shared/ui"
import { App } from "./app/app"
import { Link } from "@perfolio/components/clickable/link/link"
/* eslint-disable-next-line */
export interface AppsProps {}

export const Apps = (props: AppsProps) => {
  return (
    <div className="flex flex-col items-center justify-between w-16 py-4 text-gray-900 bg-gray-100">
      <div className="flex flex-col items-center ">
        <App
          href="/"
          icon={
            <svg
              className="w-8 p-1 stroke-current"
              viewBox="0 0 194 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 106.208L97.3883 17.8199L134.158 54.5894M185.07 41.8615L96.6814 130.25L59.9118 93.4803"
                strokeWidth="25"
              />
            </svg>
          }
          label="Home"
        />
        <ul className="w-full mt-16">
          <li key="Factor Returns">
            <App
              href="notImplemented"
              active
              label="Factor Returns"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 trending-up">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              }
            />
          </li>
          <li key="Sustainability">
            <App
              label="Sunstainability"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 globe-alt">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              }
            />
          </li>
          <li key="Digitalization">
            <App
              label="Digitalization"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 chip">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              }
            />
          </li>
          <li key="Exchange Rates">
            <App
              label="FX Rates"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 currency-dollar">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          </li>
          <li key="Riskfree Rates">
            <App
              label="Riskfree Rates"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 library">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              }
            />
          </li>
        </ul>
      </div>
      <div>
        <App
          label="Settings"
          href="/options"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
      </div>
    </div>
  )
}

export default Apps
