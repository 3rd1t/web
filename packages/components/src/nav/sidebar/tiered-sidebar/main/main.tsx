import React from "react"
import { Logo } from "@perfolio/shared/ui"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { App } from "../app/app"
import Link from "next/link"
/* eslint-disable-next-line */
export interface MainProps {
  navbarWidth: number
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Main = ({ navbarWidth, open, setOpen }: MainProps) => {
  return (
    <motion.nav
      initial={false}
      variants={{
        collapsed: {
          width: 20 * 4,
        },
        expanded: {
          width: navbarWidth,
        },
      }}
      transition={{ damping: 100, staggerChildren: 1 }}
      animate={open ? "expanded" : "collapsed"}
      className="relative flex flex-col justify-between min-h-screen pt-12 bg-gray-200"
    >
      <div>
        <Link href="/">
          <a className="flex items-center w-12 h-12 m-4 focus:outline-none">
            <Logo imageOnly imageColor="text-data-500" />
          </a>
        </Link>
        <div className="mt-12">
          <App
            href="/factor/3"
            open={open}
            label="Factor Returns"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 trending-up">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
          <App
            open={open}
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

          <App
            open={open}
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

          <App
            open={open}
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
          <App
            open={open}
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
        </div>
      </div>
      <div>
        <App
          onClick={() => setOpen(!open)}
          label="Close"
          icon={
            <motion.svg
              variants={{
                open: {
                  rotateZ: 180,
                },
                closed: {
                  rotateZ: 0,
                },
              }}
              transition={{ damping: 100 }}
              animate={open ? "open" : "closed"}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          }
          open={open}
        />

        <App
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          }
          label="Settings"
          open={open}
        />
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-y-0 right-0 flex items-center p-1"
          >
            <button
              aria-label="close menu"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-3 h-10 focus:outline-none "
            >
              <span className="w-1 h-10 bg-gray-400 rounded-full hover:bg-data-300"></span>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Main
