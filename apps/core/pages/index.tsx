import React from "react"
import { HeroSection } from "@perfolio/components"
const Index = () => {
  return (
    <HeroSection
      color="red"
      headline={<p>Hello World</p>}
      paragraph="very important text goes here"
      primaryButton={{
        label: "Primary",
        href: "#",
      }}
      secondaryButton={{
        label: "Secondary",
        href: "#",
      }}
    />
  )
}

export default Index
