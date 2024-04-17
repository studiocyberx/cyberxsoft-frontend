import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

interface NavItemProps {
  href: string;
  title: string;
  subItems?: {
    title: string;
    href: string;
  }[];
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
  { title: "Careers", href: "/careers" },
];

const socialLinks = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/" },
  { icon: <FaInstagram />, href: "https://www.instagram.com" },
  { icon: <FaXTwitter />, href: "https://www.twitter.com" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com" },
];

export function Footer() {
  return (
    <footer className="dark bg-custom-purple-600 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <Logo />

        <ul className="flex items-center gap-4 flex-col md:flex-row">
          {navItems.map((navLink, index) => (
            <li
              key={index}
              className="text-white hover:text-gray-400 transition-all duration-300 font-semibold"
            >
              <Link href={navLink.href}>{navLink.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4 flex-col md:flex-row">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className="text-white hover:text-gray-400 transition-all duration-300 font-semibold"
            >
              <Link href={link.href} target="_blank">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
