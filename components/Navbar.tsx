"use client";

import { useActivePath } from "@/app/helper";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

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
  { title: "About Us", href: "/about-us" },
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
  { title: "Careers", href: "/careers" },
];

const Navbar = ({ fonts }: { fonts: FontProps }) => {
  const activepath = useActivePath();

  return (
    <nav>
      <ul className="flex items-center gap-4 ">
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
