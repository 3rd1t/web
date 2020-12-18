import React from "react";
import { Header } from "../../top/header/header";
import TieredSidebar from "../../sidebar/tiered-sidebar/tiered-sidebar";

/* eslint-disable-next-line */
export interface SidebarLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: {label: string, href: string}[];
  menuContent: {
    title: React.ReactNode;
    items: React.ReactNode[];
  }[];
  user: {
    nickname: string;
  };
}

export const SidebarLayout = ({
  children,
  breadcrumbs,
  menuContent,
  user,
}: SidebarLayoutProps) => {
  return (
    <div className="flex">
      <div>
        <div className="fixed top-0">
          <TieredSidebar menuContent={menuContent} />
        </div>
      </div>
      <div className="w-full min-h-screen pl-80">
        <div className="fixed top-0 w-full bg-white border-b border-gray-300">
          <div className="w-full">
            <Header breadcrumbs={breadcrumbs} user={user}></Header>
          </div>
        </div>
        <main className="min-h-screen pt-20 overflow-y-auto bg-warmGray-50">
          <div className="border-t border-gray-300 ">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
