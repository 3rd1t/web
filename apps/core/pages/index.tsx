import React from "react"
import { HeroSection } from "@perfolio/components"
const Index = () => {
  return (
    <HeroSection
      color="red"
      headline="Hello World"
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
