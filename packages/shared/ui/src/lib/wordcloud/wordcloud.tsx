import React from "react"
import { AnimateSharedLayout, motion } from "framer-motion"
import Link from "next/link"
export interface WordcloudProps {
  words: string[]
}

export const Wordcloud = ({ words }: WordcloudProps) => {
  return (
    <div className="relative ">
      <div style={{ width: 300, height: 300 }} className="border-2 border-gray-400 rounded-full"></div>
      <AnimateSharedLayout>
        <motion.ul
          animate={{ transition: { staggerChildren: 0.5 } }}
          layout
          className="absolute inset-0 z-10 flex flex-wrap items-center justify-center w-full text-gray-700"
        >
          {[...words, "And more.."].map((word, i) => {
            return (
              <motion.li
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: Math.random() * 2 + 5,
                  ease: "easeInOut",
                  loop: Infinity,
                }}
                key={i}
                className={
                  i < words.length
                    ? "px-2 py-1 m-1 bg-gray-100 border border-gray-300 rounded-full shadow-lg"
                    : "px-2 py-1 m-1 font-semibold bg-gray-100 border border-gray-300 rounded-full shadow-lg"
                }
              >
                <Link href="/signup">
                  <a>{word}</a>
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  )
}

export default Wordcloud
