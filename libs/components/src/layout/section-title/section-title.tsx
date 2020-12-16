import React from "react";

/* eslint-disable-next-line */
export interface SectionTitleProps {
  title: string;
  tag: string
  onRight?:boolean
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { title, tag, onRight } = props;

  return (
    <div className={onRight ? "text-right": "text-left"}>
        <h2 className="mb-3 font-semibold tracking-wide text-purple-800 uppercase sm:text-lg sm:leading-snug">
          {tag}
        </h2>
        <p className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {title}
        </p>
    </div>
  );
};

export default SectionTitle;
