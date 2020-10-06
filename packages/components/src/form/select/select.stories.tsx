import React from "react"
import { Select } from "./select"

export default {
  component: Select,
  title: "components/Form/Select",
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

  return <Select label="Label" choices={choices} selected={-1} setSelected={(_: number) => {}} />
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

  return <Select label="Label" choices={choices} selected={2} setSelected={(_: number) => {}} />
}
