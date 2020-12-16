import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface DocumentLinkProps {
  label: string;
  href: string;
}

export const DocumentLink = ({ label, href }: DocumentLinkProps) => {
  const router = useRouter();

  const active = router && href === router.pathname;

  return (
    <Link href={href}>
      <a
        className={`my-1 text-sm hover:text-docs-700 ${
          active ? "text-docs-700 font-semibold" : "text-gray-700"
        }`}
      >
        {label}
      </a>
    </Link>
  );
};

export default DocumentLink;
