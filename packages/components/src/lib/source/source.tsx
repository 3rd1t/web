import React, { useState, createRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
export interface SourceProps {
  author: string
  date: string
  headline: string
  description: string
  citation: string
  link: string
}

export const Source = ({ author, date, headline, description, citation, link }: SourceProps) => {
  const primaryKey = ("citation_" + author + "_" + date).replace(" ", "")
  
  const [isOpen, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const copy = () => {
    const textArea = document.getElementById(primaryKey) as HTMLTextAreaElement
    textArea.select()
    document.execCommand("copy")
    setCopied(true)
  }

  const buttonStyle = "text-xs text-gray-900 focus:outline-none hover:text-research-600"

  return (
    <div>
      <div className="flex flex-wrap py-8 md:flex-no-wrap">
        <div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
          <span className="font-medium tracking-widest text-gray-900">{author}</span>
          <span className="mt-1 text-sm text-gray-600">{date}</span>
        </div>
        <div className="space-y-4 md:flex-grow">
          <h2 className="text-2xl text-gray-900">{headline}</h2>
          <p className="text-gray-700">{description}</p>
          <div className="flex items-center space-x-4">
            <a href={link} target="blank" className={buttonStyle}>
              Go to source
            </a>
            <button onClick={() => setOpen(!isOpen)} className={buttonStyle}>
              Citation
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <AnimateSharedLayout>
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center mx-20 mb-4 overflow-hidden bg-white border-l-8 border-gray-900 shadow-lg"
            >
              <motion.textarea
                layout
                readOnly
                id={primaryKey}
                className="w-full p-4 text-gray-800 bg-white border-r border-gray-200 resize-none"
                value={citation}
              />
              <button onClick={copy} className="relative h-full px-6 text-gray-800 focus:outline-none ">
                {copied ? (
                  <motion.svg
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="h-8 text-research-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </motion.svg>
                ) : (
                  <AnimatePresence>
                    <motion.svg
                      initial={false}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 2, y: -20 }}
                      className="h-6 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path>
                    </motion.svg>
                  </AnimatePresence>
                )}
              </button>
            </motion.div>
          </AnimateSharedLayout>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Source
