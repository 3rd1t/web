import React, { useState } from "react"
import { Snippet } from "../snippet/snippet"
import { motion } from "framer-motion"
/* eslint-disable-next-line */
export interface CodeExamplesProps {
  code: {
    language: string
    snippet: string
  }[]
}

export const CodeExamples = (props: CodeExamplesProps) => {
  const [selectedLanguage, setSelectedlanguage] = useState<string>(props.code[0].language)
  const getSnippet = (selectedLanguage: string): string => {
    return props.code.filter((c) => {
      return c.language === selectedLanguage
    })[0].snippet
  }

  return (
    <motion.div layout className="shadow-lg">
      <motion.nav layout className="flex items-center justify-start px-4 space-x-4 border border-gray-500 rounded-t">
        {props.code.map((c) => {
          return (
            <motion.button
              data-testid="selectLanguage"
              layout
              key={c.language}
              onClick={() => setSelectedlanguage(c.language)}
              className={`py-3 mr-8 text-xs font-semibold tracking-wide no-underline uppercase focus:outline-none hover:text-gray-900 ${
                c.language === selectedLanguage ? "text-gray-900 " : "text-gray-600"
              }`}
            >
              {c.language}
            </motion.button>
          )
        })}
      </motion.nav>
      <motion.div layout className="px-4 overflow-x-visible overflow-y-hidden bg-gray-900 rounded-b">
        <Snippet key={selectedLanguage} language={selectedLanguage}>
          {getSnippet(selectedLanguage)}
        </Snippet>
      </motion.div>
    </motion.div>
  )
}

export default CodeExamples
