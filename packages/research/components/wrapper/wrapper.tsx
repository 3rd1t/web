import React from "react"
import { NavWrapper, Navbar, Logo, Footer } from "@perfolio/components"

export interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  const navbar = (
    <Navbar
      logo={<Logo color="text-research-500" domain="research"></Logo>}
      links={[
        {
          label: "Product",
          href: "/",
        },
        {
          label: "Features",
          href: "#features",
        },
        {
          label: "Team",
          href: "#team",
        },
        {
          label: "Documentation",
          href: "/docs",
        },
      ]}
    ></Navbar>
  )

  const footer = <Footer bg="bg-research-700" primaryText="text-white" secondaryText="text-gray-100"></Footer>

  return (
    <NavWrapper navbar={navbar} footer={footer}>
      {children}
    </NavWrapper>
  )
}

export default Wrapper
