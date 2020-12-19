import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as Scroll } from "react-scroll";
/* eslint-disable-next-line */
export interface DesktopProps {
  links: {
    label: string;
    href: string;
    scroll?: boolean;
  }[];
}

export const Desktop = (props: DesktopProps) => {
  const router = useRouter();

  const navbarLinkStyle =
    "text-lg text-gray-700 transition duration-150 ease-in-out hover:text-black";

  const links = props.links.map((l) => {
    const path = l.href.split("#")[0];
    return (
      <li key={l.label}>
        {l.scroll && router.pathname == path ? (
          <Scroll
            href={path}
            className={navbarLinkStyle}
            smooth={true}
            spy={true}
            to={l.href.split("#")[1]}
          >
            {l.label}
          </Scroll>
        ) : (
          <Link href={l.href}>
            <a className={navbarLinkStyle}>{l.label}</a>
          </Link>
        )}
      </li>
    );
  });


  links.push(
    <li key="i18n">
      <Link href={router.pathname||"/"} locale={router.locale === "en" ? "de" : "en"}>
        <a>{router.locale === "en" ? "Deutsch" : "English"}</a>
      </Link>
    </li>
  )

  links.push(
    <li key="signin">
      <Link href="https://app.perfol.io/api/signin">
        <a className="px-4 py-2 font-medium text-gray-100 bg-gray-900 rounded">
          {router.locale === "en" ? "Sign in" : "Anmelden"}
        </a>
      </Link>
    </li>
  );

  return (
    <div className="w-auto">
      <ul className="flex items-center space-x-10">{links}</ul>
    </div>
  );
};

export default Desktop;
