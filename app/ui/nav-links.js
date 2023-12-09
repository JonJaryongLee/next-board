"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

/**
 * 네비게이션 링크의 정의입니다.
 * @typedef {Object} NavLink
 * @property {string} name - 링크의 이름입니다.
 * @property {string} href - 링크의 URL입니다.
 */

/**
 * 표시할 네비게이션 링크의 배열입니다.
 * @type {NavLink[]}
 */
const links = [
  { name: "Home", href: "/" },
  { name: "Board", href: "/board" },
];

/**
 * 링크를 포함하는 네비게이션 바를 렌더링합니다.
 * @function NavLinks
 */
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "block my-4 py-1 px-3 rounded hover:bg-blue-500 hover:text-white",
              {
                "bg-blue-500 text-white": pathname === link.href,
              }
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
