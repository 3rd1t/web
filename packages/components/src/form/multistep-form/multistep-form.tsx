import React, { useEffect, useState } from "react"
import { Select } from "@perfolio/components/form/select/select"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { Dots } from "../../progress/dots/dots"

type Step = {
  name: string
  description: string
  choices: string[]
  choice: number
  setChoice: React.Dispatch<React.SetStateAction<number>>
}

/* eslint-disable-next-line */
export interface MultistepFormProps {
  title: string
  steps: Step[]
}

export const MultistepForm = (props: MultistepFormProps) => {
  const [progress, setProgress] = useState<number>(0)
  const [active, setActive] = useState<number>(0)

  const updateState = (step: Step) => (newChoice: number) => {
    // Only advance if the field did not have a selection in the first place.
    if (step.choice < 0) {
      setProgress(progress + 1)
    }
    setActive(progress + 1)
    step.setChoice(newChoice)
  }
  useEffect(() => {
    setActive(progress)
  }, [progress])

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Build your custom file</h3>
        <Dots current={progress} max={props.steps.length} />
      </div>

      <div className="space-y-4">
        <AnimateSharedLayout>
          {props.steps.map((step, i) => {
            return (
              <AnimatePresence key={i}>
                {i <= progress ? (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      damping: 300,
                    }}
                    onClick={() => {
                      if (active !== i) {
                        setActive(i)
                      }
                    }}
                    className="flex flex-col p-3 bg-white border border-gray-300 rounded md:flex-row md:items-center md:justify-between hover:border-data-500"
                  >
                    <div className="md:w-2/3">
                      <div className="flex items-center justify-start space-x-3">
                        <AnimatePresence>
                          {i < progress && i !== active ? (
                            <motion.div
                              layout
                              initial={{ opacity: 0, x: -20, width: 0 }}
                              animate={{ opacity: 1, x: 0, width: "auto" }}
                              exit={{ opacity: 0, x: -20, width: 0 }}
                              transition={{ damping: 300 }}
                            >
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
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ damping: 400 }}
                            className="text-sm text-gray-700 "
                          >
                            {step.description}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>

                    <div className="w-full mt-4 md:w-1/3 md:mt-0">
                      <Select
                        label={step.name}
                        selected={step.choice}
                        setSelected={updateState(step)}
                        choices={step.choices}
                      />
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            )
          })}
        </AnimateSharedLayout>
      </div>
    </>
  )
}

export default MultistepForm
