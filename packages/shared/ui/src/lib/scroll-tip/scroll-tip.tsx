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
          "inline-flex p-2 transform rotate-45 shadow-xl lg:p-4 bg-carbon-900 hover:scale-110 ease-in-out duration-200" +
          " " +
          props.className
        }
      >
        <div className="flex items-center justify-center transform -rotate-45">
          <a href={props.href}>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-carbon-50">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ScrollTip
