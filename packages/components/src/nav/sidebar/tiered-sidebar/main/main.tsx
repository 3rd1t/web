import React from "react"
import Link from "next/link"
import { Logo } from "@perfolio/shared/ui"

/* eslint-disable-next-line */
export interface MainProps {
  open: boolean
}

export interface AppProps {
  active?: boolean
  icon: React.ReactNode
  label: string
  href?: string
  open: boolean
}

const App = ({ href, icon, active, label, open }: AppProps) => {
  return (
    <Link href={href || ""}>
      <a
        className={` h-16 flex items-center justify-center ${open ? "min-w-full px-4" : "w-16"}`}
        aria-label={label}
        aria-disabled={!!!href}
      >
        <div
          className={`flex items-center justify-start rounded hover:bg-data-400 ${
            active ? "bg-data-600 text-gray-100" : ""
          }`}
        >
          <span className="flex items-center justify-center w-12 h-12">{icon}</span>
          {open ? <span>{label}</span> : null}
        </div>
      </a>
    </Link>
  )
}

export const Main = ({ open }: MainProps) => {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <div>
        <Link href="/">
          <a
            className={` h-16 flex items-center justify-center ${open ? "min-w-full px-4" : "w-16"}`}
            aria-label="home"
          >
            <div className="flex items-center justify-start">
              <Logo imageOnly={!open} />
            </div>
          </a>
        </Link>{" "}
      </div>
      <div className="flex flex-col items-center">
        <App
          open={open}
          href="notImplemented"
          label="Factor Returns"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <App
          open={open}
          href="notImplemented"
          label="Factor Returns"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 trending-up">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
        />
        <App
          open={open}
          href="notImplemented"
          label="Factor Returns"
          icon={
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
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
          }
        />
      </div>
    </div>
  )
}

export default Main
