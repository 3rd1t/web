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
          width: 20 * 4,
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
            href="/factor/3"
            open={open}
            label="Dashboard"
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
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            }
          />
          <App
            open={open}
            label="Shares"
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            }
          />

          <App
            open={open}
            label="Real Estate"
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            }
          />

          <App
            open={open}
            label="Crypto Currencies"
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
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            }
          />
          <App
            open={open}
            label="P2P Lending"
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            }
          />
          <App
            open={open}
            label="Bonds"
            icon={
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 library"
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
              <span className="w-1 h-10 bg-gray-400 rounded-full hover:bg-purple-300"></span>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Main;
