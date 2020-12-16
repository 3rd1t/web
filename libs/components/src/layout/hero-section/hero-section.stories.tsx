import React from "react";
import { HeroSection, HeroSectionProps } from "./hero-section";

export default {
  component: HeroSection,
  title: "HeroSection",
};

export const primary = () => {
  const props: HeroSectionProps = {
    headline: "Portfolio analytics insights for everyone",
    paragraph: (
      <p className="flex flex-col xl:flex-row">
        Keeping track of all your assets and their performance is hard.Perfolio
        brings all information to one place and gives you access to the latest
        analytics methods in science.
      </p>
    ),
    primaryButton: {
      label: "Get started",
      href: "/signup",
      className: "text-white bg-gray-900 hover:bg-gray-800",
    },
    secondaryButton: {
      label: "Log in",
      href: "/login",
      className: "text-gray-900 hover:text-gray-700",
    },
  };

  return (
    <HeroSection
      headline={props.headline}
      paragraph={props.paragraph}
      primaryButton={props.primaryButton}
      secondaryButton={props.secondaryButton}
      children={props.children}
    />
  );
};
