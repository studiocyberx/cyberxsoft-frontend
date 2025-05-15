import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
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
  { title: "Who we are", href: "/about" },
  { title: "What we think", href: "/insights" },
  { title: "Get in touch", href: "/contact" },
  { title: "Request a quote", href: "/get-a-quote" },
];

const socialLinks = [
  // {
  //   icon: <FaFacebook />,
  //   href: "https://www.facebook.com/profile.php?id=61559667573420",
  // },
  // { icon: <FaInstagram />, href: "https://www.instagram.com/big0.dev/" },
  // {
  //   icon: <FaYoutube />,
  //   href: "https://www.youtube.com/channel/UCdFdgYjRGC53PPmE2XTlPhw",
  // },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/cyberx-soft/" },
];

export function Footer() {
  return (
    <footer className="dark bg-custom-purple-600 text-white py-8 space-y-8">
      <div className="max-w-[1400px] px-2 sm:px-8 mx-auto flex flex-row flex-wrap gap-4 md:flex-nowrap items-center justify-center md:justify-between">
        <Logo />

        <ul className="flex items-center justify-center sm:justify-normal gap-4 flex-row flex-wrap sm:flex-nowrap">
          {navItems.map((navLink, index) => (
            <li
              key={index}
              className="text-white hover:text-gray-400 focus-within:text-gray-400 transition-all duration-300 capitalize"
            >
              <Link href={navLink.href}>{navLink.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4 flex-row">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className="text-white hover:text-gray-400 focus-within:text-gray-400 capitalize transition-all duration-300"
            >
              <Link href={link.href} target="_blank">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
        <li className="text-white pointer-events-none">
          © 2025 CyberXSoft. All rights reserved.
        </li>
        <li className="text-gray-400 hover:text-white focus-within:text-white">
          <Link href="/policy">Privacy Policy</Link>
        </li>
        <li className="text-gray-400 hover:text-white focus-within:text-white">
          <Link href="/terms">Terms of Service</Link>
        </li>
        <li className="text-gray-400 hover:text-white focus-within:text-white">
          <Link href="/">Cookies Settings</Link>
        </li>
        <li className="text-gray-400 hover:text-white focus-within:text-white">
          <Link href="/sitemap.xml">Sitemap</Link>
        </li>
      </ul>
    </footer>
  );
}
