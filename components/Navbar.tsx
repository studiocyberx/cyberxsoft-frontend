"use client";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useActivePath } from "@/app/helper";
import { useEffect } from "react";

interface NavItemProps {
  href: string;
  title: string;
  subItems?: {
    title: string;
    href: string;
  }[];
}

interface FontProps {
  className: string;
  style: {
    fontFamily: string;
    fontWeight?: number;
    fontStyle?: string;
  };
  variable: string;
}

const navItems: NavItemProps[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Services",
    href: "/services",
    subItems: [
      { title: "Business Intelligence", href: "business-intelligence" },
      { title: "Responsible AI", href: "responsible-ai" },
      { title: "Cloud", href: "cloud" },
      { title: "Internet Of Things (IOT)", href: "iot" },
    ],
  },
  { title: "Industries", href: "/industries" },
  { title: "Resources", href: "/resources" },
  { title: "Contact", href: "/contact" },
  // { title: "Careers", href: "/careers" },
];

const Navbar = ({ fonts, isOpen }: { fonts: FontProps; isOpen: boolean }) => {
  const activepath = useActivePath();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav
      className={`absolute md:block md:static top-0 left-0 bg-custom-purple-600/95 md:bg-none min-h-full z-50 px-10 md:p-0 py-8 ${
        isOpen
          ? "flex items-center justify-start text-left animate-nav-slide h-full w-full"
          : "hidden"
      }`}
    >
      <ul
        className={`flex ${
          isOpen ? "items-start" : "items-center"
        } gap-4 flex-col md:flex-row`}
      >
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
              <DropdownMenu subItems={navLink.subItems} />
            ) : (
              <Link href={navLink.href}>{navLink.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
