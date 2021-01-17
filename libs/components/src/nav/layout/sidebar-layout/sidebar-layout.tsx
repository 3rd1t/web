import React from "react";
import { Header } from "../../top/header/header";
import TieredSidebar from "../../sidebar/tiered-sidebar/tiered-sidebar";
import {Title} from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/title/title"
import {Item} from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/item/item"

/* eslint-disable-next-line */
export interface SidebarLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: {label: string, href: string}[];
  user: {
    nickname: string;
  };
}
const menuContent: {
  title: React.ReactNode;
  items: React.ReactNode[];
}[]= [
  {
    title: <Title label="Transactions" />,
    items: [
      <Item
        label="My Transactions"
        href="/transactions"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
               }
      />,
      <Item
        href=""
        label="Upload statement"
        icon={
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        }
      />,
      
      <Item
        label="Add manually"
        href="/add-transaction"
        icon={
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        }
      />,
    ],
  },
]
export const SidebarLayout = ({
  children,
  breadcrumbs,
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
