import React from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import { Builder } from "@perfolio/urlbuilder"
import Content, { metadata, graph } from "../../../cms/src/research/factor/three.mdx"
/* eslint-disable-next-line */
export interface ThreeProps {}

export const Three = (props: ThreeProps) => {
  return (
    <div>
      <MultiColumn breadcrumbs={["research", "factors", "three"]}>
        <div className="flex items-center justify-between p-16 mx-auto space-x-4 prose-sm md:prose lg:prose-lg max-w-none">
          <div className="w-3/5">
            <div className="flex items-center space-x-4 text-sm">
              <span>{metadata.authors}</span>
              <span>{metadata.publishYear}</span>
            </div>
            <div className="mt-2">
              <Content />
            </div>
          </div>
          <div className="w-2/5">{graph}</div>
        </div>
        <div>{/* <Builder></Builder> */}</div>
      </MultiColumn>
    </div>
  )
}

export default Three
