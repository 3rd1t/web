import { prependListener } from "process";
import React from "react";

/* eslint-disable-next-line */
export interface BaseProps {
  label: string | React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Base = ({ label, iconLeft, iconRight }: BaseProps) => {
  return (
    <div className="flex items-center justify-center px-4 py-2 space-x-2 rounded-sm">
      {iconLeft ? <span>{iconLeft}</span> : null}
      {label ? <span>{label}</span> : null}
      {iconRight ? <span>{iconRight}</span> : null}
    </div>
  );
};

export default Base;
