import React from "react"
import { motion } from "framer-motion"
/* eslint-disable-next-line */
export interface ScrollTipProps {
  className?: string
  href: string
}

export const ScrollTip = (props: ScrollTipProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 5,
        y: { type: "spring", damping: 6, stiffness: 60 },
      }}
    >
      <div
        className={
          "inline-flex w-10 h-10 p-2 transform rotate-45 shadow-xl lg:p-4 md:h-12 md:w-12 lg:h-16 lg:w-16 hover:scale-110 ease-in-out duration-200" +
          " " +
          props.className
        }
      >
        <div className="flex items-center justify-center transform -rotate-45">
          <a href={props.href}>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ScrollTip
