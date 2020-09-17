import React from "react"
import { NavWrapper, Navbar, Logo, Footer } from "@perfolio/shared/ui"

export interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  const navbar = (
    <Navbar
      logo={<Logo color="text-data-500" domain="data"></Logo>}
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
          label: "Documentation",
          href: "docs.perfol.io/data",
        },
      ]}
    ></Navbar>
  )

  const footer = <Footer bg="bg-data-700" primaryText="text-white" secondaryText="text-gray-100"></Footer>

  return (
    <NavWrapper navbar={navbar} footer={footer}>
      <div className="mt-16">{children}</div>
    </NavWrapper>
  )
}

export default Wrapper
