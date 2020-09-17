import React from "react"
import { NavWrapper, Navbar, Logo, Footer } from "@perfolio/shared/ui"

export interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  const navbar = (
    <Navbar
      logo={<Logo color="text-data-600" domain="data"></Logo>}
      links={[
        {
          label: "Product",
          href: "index",
          scroll: true,
        },
        {
          label: "Features",
          href: "data",
          scroll: true,
        },
        {
          label: "Documentation",
          href: "https://docs.perfol.io/data",
        },
      ]}
    ></Navbar>
  )

  const footer = <Footer bg="bg-data-800" primaryText="text-white" secondaryText="text-gray-100"></Footer>

  return (
    <NavWrapper navbar={navbar} footer={footer}>
      <div className="mt-16">{children}</div>
    </NavWrapper>
  )
}

export default Wrapper
