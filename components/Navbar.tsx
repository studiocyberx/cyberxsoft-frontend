"use client";

import React from "react";
import { NavDropDownMenu } from "./DropdownMenu";
import { useActivePath } from "@/app/helper";

export interface NavItemProps {
  href: string;
  title: string;
  subItems?: {
    title: string;
    href: string;
  }[];
}

export interface NavItemTypes {
  href: string;
  title: string;
  children: NavItemTypes[];
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
  navItems: NavItemTypes[];
}) => {
  const activepath = useActivePath();

  return (
    <>
      <nav className="hidden md:block px-10 md:p-0 py-8">
        <ul className="flex gap-4 flex-col md:flex-row">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`${
                activepath(item.href) ? "text-white" : "text-gray-400"
              } hover:text-gray-200 transition-all duration-300 uppercase text-xl ${
                fonts.className
              }`}
            >
              <NavDropDownMenu item={item} fonts={fonts} />
              {index < navItems.length - 1 && <div className="w-6" />}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
