"use client";

import React from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useActivePath } from "@/app/helper";

export interface NavItemProps {
  href: string;
  title: string;
  subItems?: {
    title: string;
    href: string;
  }[];
}

export interface FontProps {
  className: string;
  style: {
    fontFamily: string;
    fontWeight?: number;
    fontStyle?: string;
  };
  variable: string;
}

const Navbar = ({
  fonts,
  navItems,
}: {
  fonts: FontProps;
  navItems: NavItemProps[];
}) => {
  const activepath = useActivePath();

  return (
    <>
      <nav className={`hidden md:block px-10 md:p-0 py-8`}>
        <ul className={`flex gap-4 flex-col md:flex-row`}>
          {navItems.map((navLink, index) => (
            <li
              key={index}
              className={`${
                activepath(navLink.href) ? "text-white" : "text-gray-400"
              } hover:text-gray-200 transition-all duration-300 uppercase text-xl ${
                fonts.className
              }`}
            >
              {navLink.subItems ? (
                <DropdownMenu
                  subItems={navLink.subItems}
                  title={navLink.title}
                />
              ) : (
                <Link href={navLink.href}>{navLink.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
