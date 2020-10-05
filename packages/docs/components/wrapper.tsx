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
      logo={<Logo domain="docs" color="text-docs-700" />}
      links={[
        {
          label: "Source",
          href: "https://github.com/perfolio/",
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
