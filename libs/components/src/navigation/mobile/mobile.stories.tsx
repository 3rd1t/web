import React from "react";
import { Mobile, MobileProps } from "./mobile";
import Logo from "../../logo/logo";

export default {
  component: Mobile,
  title: "Mobile",
};

export const primary = () => {
  const props: MobileProps = {
    logo: <Logo />,
    links: [
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
    ],
  };

  return <Mobile logo={props.logo} links={props.links} />;
};
