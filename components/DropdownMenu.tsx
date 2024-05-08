"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { FontProps, NavItemTypes } from "./Navbar";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

export const NavDropDownMenu = ({
  item,
  fonts,
}: {
  item: NavItemTypes;
  fonts: FontProps;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Link
          href={item.href}
          onMouseEnter={() => setOpen(!open)}
          className="flex items-center gap-2"
        >
          {item.title} {item.children.length > 0 && <FaChevronDown size={12} />}
        </Link>
      </DropdownMenuTrigger>
      <div className="" onMouseLeave={() => setOpen(!open)}>
        {item.children.length > 0 && (
          <DropdownMenuContent>
            {item.children.map((item, index) =>
              item.children.length > 0 ? (
                <NavSubMenu item={item} key={index} fonts={fonts} />
              ) : (
                <DropdownMenuItem key={index} className="group cursor-pointer">
                  <Link
                    href={item.href}
                    className={`group-hover:text-custom-purple-400 transition-all duration-300 group-hover:bg-transparent group-focus:bg-transparent uppercase text-xl ${fonts.className}`}
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              )
            )}
          </DropdownMenuContent>
        )}
      </div>
    </DropdownMenu>
  );
};

export const NavSubMenu = ({
  item,
  fonts,
}: {
  item: NavItemTypes;
  fonts: FontProps;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenuSub open={open} onOpenChange={setOpen}>
      <DropdownMenuSubTrigger>
        <Link
          href={item.href}
          className={`group-hover:text-custom-purple-400 transition-all duration-300 group-hover:bg-transparent group-focus:bg-transparent uppercase text-xl ${fonts.className}`}
        >
          {item.title}
        </Link>
      </DropdownMenuSubTrigger>
      <div className="" onMouseLeave={() => setOpen(!open)}>
        <DropdownMenuSubContent>
          {item.children.map((item, index) =>
            item.children.length > 0 ? (
              <NavSubMenu item={item} key={index} fonts={fonts} />
            ) : (
              <DropdownMenuItem key={index} className="group cursor-pointer">
                <Link
                  href={item.href}
                  className={`group-hover:text-custom-purple-400 transition-all duration-300 group-hover:bg-transparent group-focus:bg-transparent uppercase text-xl ${fonts.className}`}
                >
                  {item.title}
                </Link>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuSubContent>
      </div>
    </DropdownMenuSub>
  );
};
