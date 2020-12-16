import React from "react";
import { NavWrapper } from "@perfolio/components/nav-wrapper/nav-wrapper";
import { Navbar } from "@perfolio/components/navigation/navbar/navbar";
import { Logo } from "@perfolio/components/logo/logo";
import { Footer } from "@perfolio/components/nav/footer/footer";
/* eslint-disable-next-line */
export interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => {
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
          label: "Pricing",
          href: "pricing",
          scroll: true,
        },
        {
          label: "Team",
          href: "team",
          scroll: true,
        },
      ]}
    ></Navbar>
  );

  const footer = <Footer />;

  return (
    <NavWrapper navbar={navbar} footer={footer}>
      <div className="mt-16">{children}</div>
    </NavWrapper>
  );
};

export default Wrapper;
