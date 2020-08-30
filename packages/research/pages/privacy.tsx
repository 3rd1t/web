import React from "react"
import { Privacy as Content } from "@perfolio/pages"
import { Section } from "@perfolio/shared/ui"
import { Wrapper } from "../components/wrapper/wrapper"
/* eslint-disable-next-line */
export interface PrivacyProps {}

export const Privacy = (props: PrivacyProps) => {
  return (
    <Wrapper>
      <Section className="min-h-screen">
        <Content />
      </Section>
    </Wrapper>
  )
}

export default Privacy
