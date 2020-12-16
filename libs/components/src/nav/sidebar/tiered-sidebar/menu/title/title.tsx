import React from "react";

export interface TitleProps {
  label: string;
}

export const Title = ({ label }: TitleProps) => {
  return (
    <span className="flex my-4 text-sm font-medium text-gray-600 uppercase">
      {label}
    </span>
  );
};

export default Title;
