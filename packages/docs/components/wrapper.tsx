import React from "react"
import { NavWrapper, Navbar, Logo, Footer } from "@perfolio/shared/ui"

/* eslint-disable-next-line */
export interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  const navbar = (
    <Navbar
      logo={<Logo domain="docs" color="text-docs-700" />}
      links={[
        {
          label: "Source",
          href: "https://github.com/perfolio/",
        },
      ]}
    ></Navbar>
  )

  const footer = <Footer bg="bg-gray-900" primaryText="text-white" secondaryText="text-gray-100"></Footer>

  return (
    <NavWrapper navbar={navbar} footer={footer}>
      {children}
    </NavWrapper>
  )
}

export default Wrapper
