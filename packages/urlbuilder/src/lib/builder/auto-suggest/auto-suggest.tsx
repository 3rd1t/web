import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
export interface AutoSuggestProps {
  suggestions: string[]
  placeholder: string
  icon?: React.ReactNode
  className?: string
}

function useOutsideAlerter(ref: React.Ref<HTMLDivElement>, callback) {}

export const AutoSuggest = ({ suggestions, placeholder, icon, className }: AutoSuggestProps) => {
  const ref = useRef(null)
  const [done, setDone] = useState(false)
  const [input, setInput] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [activeSuggestion, setActiveSuggestion] = useState(-1)

  const handleChange = (e) => {
    setInput(e.currentTarget.value)
  }

  const onKeyDown = (e) => {
    // Enter key to select the active suggestion
    if (filteredSuggestions.length < 1) {
      return
    }

    // Enter key
    if (e.keyCode === 13 && activeSuggestion >= 0 && activeSuggestion < filteredSuggestions.length) {
      setInput(filteredSuggestions[activeSuggestion])
    }
    //Up arrow
    else if (e.keyCode === 38) {
      const next = activeSuggestion - 1
      setActiveSuggestion(next >= 0 ? next : filteredSuggestions.length - 1)
    }
    // Down arrow
    else if (e.keyCode === 40) {
      const next = activeSuggestion + 1
      setActiveSuggestion(next < filteredSuggestions.length ? next : 0)
    }
  }
  // Closes the dropdown if the user clicks away
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  useEffect(() => {
    const filtered = suggestions.filter((suggestion) => suggestion.toLowerCase().includes(input.toLowerCase()))
    setFilteredSuggestions(filtered)

    // Hide suggestions if the user entered a correct value
    if (filtered.includes(input)) {
      setShowSuggestions(false)
      setDone(true)
    } else {
      setDone(false)
    }
  }, [input])

  return (
    <div ref={ref} className={className}>
      <div className="relative flex">
        {done ? null : icon}
        <input
          className="appearance-none focus:outline-none"
          onKeyDown={onKeyDown}
          onFocus={() => setShowSuggestions(true)}
          onSubmit={() => setInput(suggestions[0])}
          value={input}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {showSuggestions ? (
          <div className="absolute z-50 mt-8 rounded shadow-lg">
            <div className="bg-white rounded-md shadow-xs">
              <ul className="">
                {filteredSuggestions.map((s, i) => (
                  <li
                    key={i}
                    className={`px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 ${
                      activeSuggestion === i ? "bg-research-100" : ""
                    }`}
                    onClick={() => setInput(s)}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default AutoSuggest
