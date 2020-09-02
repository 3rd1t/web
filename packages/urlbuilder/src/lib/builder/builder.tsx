import React, { useState } from "react"
import { Form, Format } from "./form/form"
/* eslint-disable-next-line */
export interface BuilderProps {}

export const Builder = (props: BuilderProps) => {
  const [url, setURL] = useState("URL")

  return (
    <div>
      <Form setURL={setURL} format={Format.XLXS} />
      <div>-{url}-</div>
    </div>
  )
}

export default Builder
