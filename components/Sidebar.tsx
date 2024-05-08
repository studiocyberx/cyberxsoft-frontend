"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FontProps, NavItemTypes } from "./Navbar";
import { MdOutlineMenu } from "react-icons/md";
import { Logo } from "./Logo";
import Link from "next/link";
import { NavDropDownMenu } from "./DropdownMenu";

const Sidebar = ({
  fonts,
  navItems,
}: {
  fonts: FontProps;
  navItems: NavItemTypes[];
}) => {
  const [sheetOpen, setSheetOpen] = React.useState(false);

  return (
    <div className="flex md:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger>
          <MdOutlineMenu className="text-2xl text-white block cursor-pointer" />
        </SheetTrigger>

        <SheetContent className="bg-custom-purple-500 border-none">
          <SheetHeader>
            <SheetTitle className="max-w-36">
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <nav className="py-8 px-2 h-full overflow-y-scroll">
            {navItems.map((item, index) => (
              <SheetClose asChild key={item.href}>
                <NavMenu
                  item={item}
                  fonts={fonts}
                  open={sheetOpen}
                  setSheetOpen={setSheetOpen}
                ></NavMenu>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex w-full justify-evenly items-center">
        {navItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <NavDropDownMenu fonts={fonts} item={item} />
            {idx < navItems.length - 1 && <div className="w-6" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const NavMenu = ({
  item,
  fonts,
  open,
  setSheetOpen,
}: {
  item: NavItemTypes;
  fonts: FontProps;
  open: boolean;
  setSheetOpen: (value: boolean) => void;
}) => {
  return (
    <div className="">
      <Link
        href={item.href}
        onClick={() => setSheetOpen(false)}
        className={`flex w-full items-center rounded-md p-2 text-white hover:text-gray-400 focus:text-gray-400 transition-all duration-300 uppercase text-xl font-bold ${fonts.className}`}
      >
        <p>{item.title}</p>
      </Link>
      {item.children.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={() => setSheetOpen(false)}
          className={`text-white hover:text-gray-400 focus:text-gray-400 transition-all duration-300 uppercase text-xl ${fonts.className} translate-x-4 flex w-full items-center rounded-md p-2`}
        >
          <p>
            {item.title}
            {item.children.map((child, index) => {
              return (
                <SheetClose asChild key={index}>
                  <NavMenu
                    fonts={fonts}
                    item={child}
                    open={open}
                    setSheetOpen={setSheetOpen}
                  ></NavMenu>
                </SheetClose>
              );
            })}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
