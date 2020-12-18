import React from "react";

/* eslint-disable-next-line */
export interface SectionTitleProps {
  title: string;
  tag: string;
  onRight?: boolean;
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { title, tag, onRight } = props;

  return (
    <div className={onRight ? "lg:text-right" : "text-center sm:text-left"}>
      <span className="font-semibold tracking-wide uppercase text-gradient bg-gradient-to-tr from-indigo-900 to-purple-800 sm:text-lg sm:leading-snug">
        {tag}
      </span>
      <p className="mt-4 mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
