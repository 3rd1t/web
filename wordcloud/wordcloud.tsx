import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";
export interface WordcloudProps {
  words: string[];
}

export const Wordcloud = ({ words }: WordcloudProps) => {
  return (
    <div className="relative flex items-center justify-center ">
      <div
        style={{ height: 300, width: 300 }}
        className="hidden border-2 border-gray-300 rounded-full lg:flex"
      ></div>
      <AnimateSharedLayout>
        <motion.ul
          animate={{ transition: { staggerChildren: 0.5 } }}
          layout
          className="inset-0 z-10 flex flex-wrap items-center justify-center w-full text-gray-700 lg:absolute"
        >
          {[
            ...words.sort((a, b) => {
              return 0.5 - Math.random();
            }),
            "And more..",
          ].map((word, i) => {
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
                className="px-2 py-1 m-2 text-sm font-semibold bg-gray-100 border border-gray-400 rounded-full shadow-md lg:text-xs xl:m-4 xl:text-large"
              >
                {word}
              </motion.li>
            );
          })}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
};

export default Wordcloud;
