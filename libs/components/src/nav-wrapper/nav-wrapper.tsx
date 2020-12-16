import React from "react";

/* eslint-disable-next-line */
export interface NavWrapperProps {
  navbar: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export const NavWrapper = ({ children, navbar, footer }: NavWrapperProps) => {
  return (
    <div>
      <div className="pt-16 -mt-16 bg-gray-100 ">
        <div className="fixed inset-x-0 top-0 z-20 bg-gray-100">{navbar}</div>
        {children}
      </div>
      {footer}
    </div>
  );
};

export default NavWrapper;
