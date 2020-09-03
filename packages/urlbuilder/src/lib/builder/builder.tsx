import React, { useState } from "react"
import { Form, Format } from "./form/form"
import { Select } from "@perfolio/forms"
/* eslint-disable-next-line */
export interface BuilderProps {}

export const Builder = (props: BuilderProps) => {
  const [url, setURL] = useState("URL")

  return (
    <div>
      {/* <Select /> */}
      <Form setURL={setURL} baseURL="https://api.perfol.io/v1/" format={Format.XLXS} />
      <div>-{url}-</div>
    </div>
  )
}

export default Builder
