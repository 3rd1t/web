import React from "react"
import { NavWrapper, Navbar, Logo } from "@perfolio/shared/ui"
import { Footer } from "@perfolio/components/nav/footer/footer"
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
          href: "index",
          scroll: true,
        },
        {
          label: "Features",
          href: "features",
          scroll: true,
        },
        {
          label: "Team",
          href: "team",
          scroll: true,
        },
        {
          label: "Documentation",
          href: "https://docs.perfol.io",
        },
      ]}
    ></Navbar>
  )

  const footer = <Footer />

  return (
    <NavWrapper navbar={navbar} footer={footer}>
      <div className="mt-16">{children}</div>
    </NavWrapper>
  )
}

export default Wrapper
