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

const Logo = (language: string): React.ReactNode => {
  switch (language) {
    case "curl":
      return (
        <svg className="h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 128">
          <defs>
            <symbol id="a" overflow="visible">
              <path d="M15.031-26.813c0 7.094 1.328 10.579 6.86 15.141l8.53 7.11C35.829-.125 38.595 0 45.329 0H63.61c3.844 0 7.938-.844 7.938-5.766 0-5.062-4.563-5.78-7.938-5.78H43.297c-2.297 0-4.578-1.204-6.625-2.892l-6.969-5.89c-1.812-1.438-3.125-2.64-3.125-4.922v-14.313c0-2.28 1.313-3.484 3.125-4.937l6.969-5.89c2.047-1.672 4.328-2.876 6.625-2.876h20.312c3.375 0 7.938-.734 7.938-5.78 0-4.923-4.094-5.767-7.938-5.767H45.33c-6.735 0-9.5.126-14.907 4.563l-8.531 7.094c-5.532 4.578-6.86 8.062-6.86 15.156zm0 0" />
            </symbol>
            <symbol id="b" overflow="visible">
              <path d="M71.547-56.875c0-3.969-.844-7.938-5.766-7.938-4.937 0-5.781 3.97-5.781 7.938v33.547L43.047-12.625c-1.078.719-2.281 1.078-3.61 1.078h-3.843c-2.766 0-5.766-.719-6.735-2.406-.968-1.672-1.078-4.813-1.203-7.453l-1.203-35.469c-.125-3.734-.719-7.938-5.656-7.938-5.281 0-5.89 4.454-5.766 8.657l1.203 36.312c.235 6.25.125 11.188 5.297 15.64C25.375-.968 28.984 0 32.234 0h8.532c3.125 0 6.25-1.438 9.984-3.844l9.375-6.14v1.921c0 3.97.844 8.063 5.766 8.063 6.14 0 5.656-5.89 5.656-8.531zm0 0" />
            </symbol>
            <symbol id="c" overflow="visible">
              <path d="M15.031-7.938c0 3.97.844 7.938 5.766 7.938 4.937 0 5.781-3.969 5.781-7.938v-29.218L42.688-50.5c2.046-1.688 3.609-2.766 5.765-2.766h3.375c2.766 0 5.531 0 6.969 2.047C60-49.547 60-48.094 60-46.172c0 3.719 1.688 7.094 5.89 7.094 4.938 0 5.657-4.094 5.657-8.063 0-5.28-1.328-9.25-5.172-13.109-3.125-3.125-6.844-4.563-11.297-4.563h-9.266c-3.609 0-6.968 2.282-10.218 4.922l-9.016 7.47v-4.704c0-3.844-1.203-7.688-5.781-7.688-5.281 0-5.766 4.329-5.766 8.532zm0 0" />
            </symbol>
            <symbol id="d" overflow="visible">
              <path d="M49.297-80.563c0-6.859-1.922-8.062-8.531-8.062H28.625c-3.86 0-7.938.844-7.938 5.766 0 5.062 4.563 5.78 7.938 5.78h9.14v65.532h-9.14c-3.86 0-7.938.844-7.938 5.781C20.688-.719 25.25 0 28.625 0h29.328c3.375 0 7.938-.719 7.938-5.766 0-4.937-4.079-5.78-7.938-5.78h-8.656zm0 0" />
            </symbol>
          </defs>
          <use
            xmlns="http://www.w3.org/1999/xlink"
            transform="translate(-86.211 -184.055)"
            height="100%"
            width="100%"
            y="286.977"
            x="71.18"
            href="#a"
          />
          <use
            xmlns="http://www.w3.org/1999/xlink"
            transform="translate(-86.211 -184.055)"
            height="100%"
            width="100%"
            y="286.977"
            x="133.711"
            href="#b"
          />
          <use
            xmlns="http://www.w3.org/1999/xlink"
            transform="translate(-86.211 -184.055)"
            height="100%"
            width="100%"
            y="286.977"
            x="196.242"
            href="#c"
          />
          <use
            xmlns="http://www.w3.org/1999/xlink"
            transform="translate(-86.211 -184.055)"
            height="100%"
            width="100%"
            y="286.977"
            x="239.653"
            href="#d"
          />
        </svg>
      )

    case "python":
      return (
        <svg className="h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path
            fill="fill-current"
            d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
          />
        </svg>
      )

    case "r":
      return (
        <svg
          className="h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 724 561"
        >
          <path
            fill="fill-current"
            fillRule="evenodd"
            d="M361.453 485.937C162.329 485.937.906 377.828.906 244.469.906 111.109 162.329 3 361.453 3 560.578 3 722 111.109 722 244.469c0 133.359-161.422 241.468-360.547 241.468zm55.188-388.531c-151.352 0-274.047 73.908-274.047 165.078s122.695 165.078 274.047 165.078c151.351 0 263.046-50.529 263.046-165.078 0-114.513-111.695-165.078-263.046-165.078z"
          />
          <path
            fill="fill-current"
            fillRule="evenodd"
            d="M550 377s21.822 6.585 34.5 13c4.399 2.226 12.01 6.668 17.5 12.5 5.378 5.712 8 11.5 8 11.5l86 145-139 .062L492 437s-13.31-22.869-21.5-29.5c-6.832-5.531-9.745-7.5-16.5-7.5h-33.026L421 558.974l-123 .052V152.938h247S657.5 154.967 657.5 262 550 377 550 377zm-53.5-135.976l-74.463-.048-.037 69.05 74.5-.024s34.5-.107 34.5-35.125c0-35.722-34.5-33.853-34.5-33.853z"
          />
        </svg>
      )

    default:
      return null
  }
}

export const CodeExamples = ({ code }: CodeExamplesProps) => {
  const [active, setActive] = useState(0)

  const getSnippet = (active: number): React.ReactNode => {
    return (
      <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-gray-900 ">
        <Snippet language={code[active].language}>{code[active].snippet}</Snippet>
      </motion.div>
    )
  }

  return (
    <motion.div layout className="flex-grow">
      <motion.nav layout className="flex bg-gray-800">
        {code.map((c, i) => (
          <button
            aria-label={c.language}
            data-testid="selectLanguage"
            key={i}
            className={`p-4 text-xs font-semibold tracking-wide no-underline uppercase focus:outline-none  hover:text-gray-400 ${
              i === active ? "text-gray-200" : "text-gray-600"
            }`}
            onClick={() => setActive(i)}
          >
            {Logo(c.language)}
          </button>
        ))}
      </motion.nav>
      {getSnippet(active)}
    </motion.div>
  )
}

export default CodeExamples
