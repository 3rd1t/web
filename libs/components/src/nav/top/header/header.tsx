import React, { ReactNode } from "react";
import Breadcrumbs from "../../bread-crumbs/bread-crumbs";
/* eslint-disable-next-line */
export interface HeaderProps {
  breadcrumbs?: string[];
  user: {
    nickname: string;
  };
}

export const Header = ({ breadcrumbs, user }: HeaderProps) => {
  return (
    <div className="z-0 flex w-full h-20">
      <ul className="flex items-center justify-between w-full h-full px-4 pr-80">
        <li key="breadcrumbs" className="text-gray-700 ">
          <Breadcrumbs path={breadcrumbs || []} />
        </li>
        <li key="end">
          <ul className="flex items-center justify-between mr-4 space-x-16">
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Header;
