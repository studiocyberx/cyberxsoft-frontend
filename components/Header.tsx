import Link from "next/link";
import { Logo } from "@/components/Logo";
import { FaFacebook } from "react-icons/fa";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import Navbar from "./Navbar";
import { bebas } from "@/app/fonts";
import Sidebar from "./Sidebar";

interface SocialIconProps {
  id: number;
  icon: JSX.Element;
  url: string;
}

const socialIcons: SocialIconProps[] = [
  { id: 1, icon: <FaFacebook />, url: "/" },
  { id: 2, icon: <FaInstagram />, url: "/" },
  { id: 3, icon: <FaXTwitter />, url: "/" },
  { id: 4, icon: <FaLinkedin />, url: "/" },
];

export function Header() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Who we are", href: "/about" },
    {
      title: "What we do",
      href: "/services",
      subItems: [
        { title: "Business Intelligence", href: "/business-intelligence" },
        { title: "Responsible AI", href: "/responsible-ai" },
        { title: "Cloud", href: "/cloud" },
        { title: "Internet Of Things (IOT)", href: "/iot" },
      ],
    },
    // { title: "Industries", href: "/industries" },
    { title: "What we think", href: "/insights" },
    { title: "Get in touch", href: "/contact" },
    // { title: "Careers", href: "/careers" },
  ];
  return (
    <header className="relative">
      <div className="hidden sm:flex items-center flex-wrap lg:flex-nowrap justify-center md:justify-between gap-4 md:gap-8 px-10 lg:px-20 py-4 md:py-1 bg-custom-purple-500">
        <div className="flex items-center gap-6 text-white">
          {socialIcons.map((icon) => (
            <Link
              key={icon.id}
              href={icon.url}
              target="_blank"
              className="text-white hover:text-custom-purple-100 text-xl"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 justify-center md:justify-start flex-wrap md:flex-nowrap">
          <Link
            href="tel:+923165143252"
            className="flex items-center gap-2 text-white hover:text-custom-purple-100 transition-all duration-300"
          >
            <FaPhone size={20} />
            +92-316-514-3252
          </Link>
          <Link
            href="https://maps.app.goo.gl/2L9f9WYFS6Anjjg39"
            target="_blank"
            className="flex items-center text-center md:text-left gap-2 text-white hover:text-custom-purple-100 transition-all duration-300"
          >
            <FaLocationDot size={20} />
            First Floor, Plaza #54, Sector F, DHA Phase 1, Rawalpindi{" "}
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-between px-10 lg:px-20 py-2 bg-custom-purple-600">
        <Logo />
        <Navbar fonts={bebas} navItems={navItems} />
        <Sidebar fonts={bebas} navItems={navItems} />
      </div>
    </header>
  );
}
