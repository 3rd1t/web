import React from "react"
import { NavWrapper, Navbar, Logo } from "@perfolio/shared/ui"
import { Footer } from "@perfolio/components/nav/footer/footer"

export interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  const navbar = (
    <Navbar
      logo={<Logo color="text-data-700" domain="data"></Logo>}
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

  return (
    <NavWrapper navbar={navbar} footer={<Footer />}>
      <div className="mt-16">{children}</div>
    </NavWrapper>
  )
}

export default Wrapper
