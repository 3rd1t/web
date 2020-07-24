import React from "react"
import { HeroSection } from "@perfolio/components"
export const Index = () => {
  return (
    <HeroSection
      color="red"
      headline={{
        regular: "Why was this",
        highlight: "great again?",
      }}
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
