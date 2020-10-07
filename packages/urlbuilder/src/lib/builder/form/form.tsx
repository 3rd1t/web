import React, { useState, useEffect } from "react"
import { AutoSuggest, State } from "../auto-suggest/auto-suggest"
import { motion } from "framer-motion"
import { join } from "path"
import { statelessFields } from "./data/fields"

export enum Format {
  JSON = "",
  CSV = "csv",
  XLXS = "xlxs",
  XML = "xml",
}

export interface FormProps {
  baseURL: string
  setURL: React.Dispatch<React.SetStateAction<string>>
  format?: Format
  choices: {
    factorModels: { value: string; display: string; factors: { value: string; display: string }[] }[]
    regions: { value: string; display: string }[]
    currencies: { value: string; display: string }[]
    intervals: { value: string; display: string }[]
  }
}

export const Form = ({ setURL, baseURL, format, choices }: FormProps) => {
  const addState = (
    statelessFields: {
      name: string
      options: string[]
    }[],
  ) => {
    const initValue = () => {
      const [state, setState] = useState("")
      return {
        state,
        setState,
      }
    }
    const initState = () => {
      const [state, setState] = useState(State.IDLE)
      return {
        state,
        setState,
      }
    }
    return statelessFields.map((f) => {
      return {
        name: f.name,
        options: f.options,
        value: initValue(),
        state: initState(),
      }
    })
  }


  const fields = addState(statelessFields)
  const [isValid, setIsValid] = useState(false)

  const getURL = () => {
    return join(baseURL, ...fields.map((f) => f.value.state)) + (format ? "&format=" + format : "")
  }
  useEffect(() => {
    const v = fields.every((field) => {
      return field.state.state === State.DONE
    })

    setIsValid(v)

    setURL(v ? getURL() : "")
  }, [fields])

  return (
    <div>
      <form className="flex items-center justify-center mt-20 appearance-none">
        <div className="flex items-center mx-20 text-gray-700 bg-white border border-gray-300 rounded shadow">
          <span className="p-2 font-thin bg-gray-100 border-r border-gray-300">{baseURL}</span>

          {fields.map((f, i) => (
            <div key={i} className="flex items-center">
              {i > 0 ? <span className="font-thin text-gray-500">/</span> : null}
              {
                <AutoSuggest
                  placeholder={f.name}
                  options={f.options}
                  value={f.value.state}
                  updateValue={f.value.setState}
                  state={f.state.state}
                  updateState={f.state.setState}
                />
              }
            </div>
          ))}
          <motion.span
            animate={{ opacity: isValid ? 1 : 0 }}
            className="p-2 font-thin bg-gray-100 border-l border-gray-300"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 block ${isValid ? "text-green-500" : "opacity-0"}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.span>
        </div>
      </form>
    </div>
  )
}

export default Form
