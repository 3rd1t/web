import React from "react";
import Wrapper from "../wrapper/wrapper";

/* eslint-disable-next-line */
export interface IconProps {
  icon: React.ReactNode;
  color?: string;
  label?: string;
  content?:string
  align?: string
}

export const Icon = ({ icon, color, label, content, align }: IconProps) => {
  align = align ?? "justify-center"
  const colors = color ? `text-${color}-800 bg-${color}-200` : "";

  return (
    <Wrapper>
      <div className={`flex items-center ${align}`}>

      <div className="flex-shrink-0 w-10 h-10">
        <div className={colors}>
          <span>{icon}</span>
        </div>
      </div>
      <div className="flex flex-col items-start pl-2">

      {label ? (
        <span className="text-sm text-gray-900">
          {label}
        </span>
      ) : null}
      {content ? (
        <span className="text-xs text-gray-500">
          {content}
        </span>
      ) : null}
      </div>
      </div>
    </Wrapper>
  );
};

export default Icon;
