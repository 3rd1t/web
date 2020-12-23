import React from "react";
import { Logo } from "../../../../logo/logo";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { App } from "../app/app";
import Link from "next/link";
/* eslint-disable-next-line */
export interface MainProps {
  navbarWidth: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Main = ({ navbarWidth, open, setOpen }: MainProps) => {
  return (
    <motion.nav
      initial={false}
      variants={{
        collapsed: {
          width: navbarWidth / 4,
        },
        expanded: {
          width: navbarWidth,
        },
      }}
      transition={{ damping: 100, staggerChildren: 1 }}
      animate={open ? "expanded" : "collapsed"}
      className="relative flex flex-col justify-between min-h-screen pt-2 bg-gray-100 hover:shadow"
    >
      <div>
        <Link href="/">
          <a className="flex items-center justify-center w-12 h-12 m-4 focus:outline-none">
            <svg
              className="w-10 h-10 text-gray-900 stroke-current"
              viewBox="0 0 194 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 106.208L97.3883 17.8199L134.158 54.5894M185.07 41.8615L96.6814 130.25L59.9118 93.4803"
                strokeWidth="25"
              />
            </svg>
          </a>
        </Link>
        <div className="mt-12">
          <App
            href="/"
            open={open}
            label="Overview"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            }
          />
          <App
            open={open}
            label="Equities"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            }
          />

          <App
            open={open}
            label="Fixed Income"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            }
          />

          <App
            open={open}
            label="Real Estate"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> }
          />
          <App
            open={open}
            label="Cryptos"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>         }
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
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
              className="flex items-center justify-center w-3 h-10 focus:outline-none"
            >
              <span className="w-1 h-12 bg-gray-400 rounded-full bg-gradient-to-t hover:from-indigo-600 hover:to-violet-500"></span>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Main;
