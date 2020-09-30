import React, { useState } from "react"
import Link from "next/link"
import { Transition } from "@headlessui/react"

/* eslint-disable-next-line */
export interface AppProps {
  active?: boolean
  icon: React.ReactNode
  label: string
  href?: string
}

export const App = ({ href, icon, active, label }: AppProps) => {
  const [tooltip, showTooltip] = useState(false)

  return (
    <Link href={href || ""}>
      <a
        aria-label={label}
        aria-disabled={!!!href}
        className={`relative flex flex-col justify-center items-center w-16 h-16 transform duration-200 
        `}
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => showTooltip(false)}
      >
        <div
          className={`p-3 rounded 
          ${active ? "text-black bg-data-400" : ""}  
          ${!!href ? "hover:text-black hover:bg-data-400 " : ""}
        }`}
        >
          <div className={!!href ? "" : "opacity-50"}>{icon}</div>
          <Transition
            show={tooltip}
            enter="transition duration-100 ease-out delay-500"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0"
          >
            <div className="absolute z-10 bg-white border border-gray-300 rounded-sm">
              <span className="max-w-sm px-2 py-1 text-sm text-gray-900 truncate">{label}</span>
            </div>
          </Transition>
        </div>
      </a>
    </Link>
  )
}

export default App
