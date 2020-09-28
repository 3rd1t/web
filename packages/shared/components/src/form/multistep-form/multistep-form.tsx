import React, {  useState } from "react"
import { Menu } from "@headlessui/react"
import { Select } from "@perfolio/shared/components"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

type Step = {
  name: string
  description: string
  choices: string[]
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

/* eslint-disable-next-line */
export interface MultistepFormProps {
  steps: Step[]
}

export const MultistepForm = (props: MultistepFormProps) => {
  const [progress, setProgress] = useState<number>(0)
  const [active, setActive] = useState<number>(0)

  const updateState = (step: Step) => (v: number) => {
    // Only advance if the field did not have a selection in the first place.
    if (step.value < 0) {
      setProgress(progress + 1)
    }
    setActive(progress + 1)
    step.setValue(v)
  }
  return (
    <div className="space-y-4">
      {props.steps.map((step, i) => {
        return (
          <AnimatePresence>
            {i <= progress ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  damping: 300,
                }}
                onClick={() => {(active !== i) ?setActive(i) : setActive(-1)}}
                className={`flex items-center justify-between p-3 border border-gray-400 hover:bg-gray-100 rounded ${
                  i === progress ? "bg-gray-100" : ""
                }`}
              >
                <AnimateSharedLayout>
                  <motion.div layout className="flex flex-col items-start w-2/3">
                    <div className="flex items-center space-x-3">
                      <AnimatePresence>
                        {i < progress && i !== active ? (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <svg
                              className="w-6 h-6 text-data-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                      <motion.h3 layout className="text-2xl font-extrabold text-gray-900">
                        {step.name}
                      </motion.h3>
                    </div>
                    <AnimatePresence>
                      {i === progress || i === active ? (
                        <motion.p
                          layout
                          initial={{opacity:0, height:0, y:-10}}
                          animate={{ opacity: 1, height: "auto", y:0 }}
                          exit={{ opacity: 0, height: 0, y:-10 }}
                          className="text-sm text-gray-500 "
                        >
                          {step.description}
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                </AnimateSharedLayout>

                <div className="w-1/3">
                  <Select selected={step.value} setSelected={updateState(step)} choices={step.choices} />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        )
      })}
    </div>
  )
}

export default MultistepForm
