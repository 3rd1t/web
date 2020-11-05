import React from "react"
import { SelectLight } from "./select-light"

export default {
  component: SelectLight,
  title: "components/Form/SelectLight",
}

export const noneSelected = () => {
  const choices = [
    "Wade Cooper",
    "Arlene Mccoy",
    "Devon Webb",
    "Tom Cook",
    "Tanya Fox",
    "Hellen Schmidt",
    "Caroline Schultz",
    "Mason Heaney",
    "Claudie Smitham",
    "Emil Schaefer",
  ]

  return <SelectLight label="Label" choices={choices} selected={-1} setselectLighted={(_: number) => {}} />
}

export const withSelection = () => {
  const choices = [
    "Wade Cooper",
    "Arlene Mccoy",
    "Devon Webb",
    "Tom Cook",
    "Tanya Fox",
    "Hellen Schmidt",
    "Caroline Schultz",
    "Mason Heaney",
    "Claudie Smitham",
    "Emil Schaefer",
  ]

  return <SelectLight label="Label" choices={choices} selected={2} setselectLighted={(_: number) => {}} />
}
