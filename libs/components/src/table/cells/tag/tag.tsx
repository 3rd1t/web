import React from "react";
import { Wrapper } from "../wrapper/wrapper";

/* eslint-disable-next-line */
export interface TagProps {
  label: string | number | React.ReactNode;
  color: string;
}

export const Tag = ({ label, color }: TagProps) => {
  const colors = `text-${color}-800 bg-${color}-100`;

  return (
    <Wrapper>
      <span className={`inline-flex px-2 text-sm rounded-full ${colors}`}>
        {label}
      </span>
    </Wrapper>
  );
};

export default Tag;
