import { text } from "@storybook/addon-knobs";
import React from "react";
import { Section, SectionProps } from "./section";

export default {
  component: Section,
  title: "Section",
};

export const primary = () => {
  const props: SectionProps = {
    bg: text("bg", "bg-gray-100"),
    children: <p>Hello World</p>,
    className: text("className", ""),
    id: text("id", "id"),
  };

  return (
    <Section
      bg={props.bg}
      children={props.children}
      className={props.className}
      id={props.id}
    />
  );
};
