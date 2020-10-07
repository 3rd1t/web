import React from "react"
import { Imprint as Content } from "@perfolio/pages"
import { Section } from "@perfolio/shared/ui"
import { NextPage } from "next"
import { Wrapper } from "../components/wrapper/wrapper"
/* eslint-disable-next-line */
export interface ImprintProps {}

export const Imprint: NextPage = (props: ImprintProps) => {
  return (
    <Wrapper>
      <Section className="min-h-screen">
        <Content />
      </Section>
    </Wrapper>
  )
}

export default Imprint
