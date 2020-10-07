import React, { useState } from "react"
import { Form, Format } from "./form/form"
import { Select } from "@perfolio/forms"
/* eslint-disable-next-line */
export interface BuilderProps {
  choices: {
    factorModels: { value: string; display: string; factors: { value: string; display: string }[] }[]
    regions: { value: string; display: string }[]
    currencies: { value: string; display: string }[]
    intervals: { value: string; display: string }[]
  }
}

export const Builder = ({ choices }: BuilderProps) => {
  const [url, setURL] = useState("URL")

  return (
    <div>
      {/* <Select /> */}
      <Form choices={choices} setURL={setURL} baseURL="https://api.perfol.io/d/beta/" format={Format.XLXS} />
      <div>-{url}-</div>
    </div>
  )
}

export default Builder
