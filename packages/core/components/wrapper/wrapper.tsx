import React from "react"
import { NavWrapper, Navbar, Logo, Footer } from "@perfolio/shared/ui"

/* eslint-disable-next-line */
export interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  const navbar = (
    <Navbar
      logo={<Logo></Logo>}
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
          href: "https://docs.perfol.io",
        },
      ]}
    ></Navbar>
  )

  const footer = <Footer bg="bg-carbon-900" primaryText="text-white" secondaryText="text-gray-100"></Footer>

  return (
    <NavWrapper navbar={navbar} footer={footer}>
      <div className="mt-16">{children}</div>
    </NavWrapper>
  )
}

export default Wrapper
