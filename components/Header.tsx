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
import Navbar, { NavItemTypes } from "./Navbar";
import { bebas } from "@/app/fonts";
import Sidebar from "./Sidebar";
import { getSubServicePage } from "@/data/loaders";

interface SocialIconProps {
  id: number;
  icon: JSX.Element;
  url: string;
}

interface ServiceItem {
  navtitle: string;
  servicetype: string;
  slug: string;
}

const socialIcons: SocialIconProps[] = [
  { id: 1, icon: <FaFacebook />, url: "https://www.facebook.com" },
  { id: 2, icon: <FaInstagram />, url: "https://www.instagram.com/" },
  { id: 3, icon: <FaXTwitter />, url: "https://www.twitter.com" },
  { id: 4, icon: <FaLinkedin />, url: "https://www.linkedin.com/" },
];

export async function Header() {
  const serviceItems = await getSubServicePage();
  const navItems: NavItemTypes[] = [
    { title: "Home", href: "/", children: [] },
    { title: "Who we are", href: "/about", children: [] },
    {
      title: "What we do",
      href: "",
      children: [
        {
          title: "Business Intelligence",
          href: "/business-intelligence",
          children: [],
        },
        { title: "Cloud", href: "/cloud", children: [] },
        { title: "Responsible AI", href: "/responsible-ai", children: [] },
        {
          title: "Internet Of Things",
          href: "/iot",
          children: [],
        },
      ],
    },
    { title: "What we think", href: "/insights", children: [] },
    { title: "Get in touch", href: "/contact", children: [] },
  ];

  //Append subservice pages to the navitems
  serviceItems.data.forEach((item: ServiceItem) => {
    // Check if servicetype is "Internet of Things" and replace it with "iot"
    const serviceType =
      item.servicetype.toLowerCase() === "internet of things"
        ? "iot"
        : item.servicetype.toLowerCase().replace(/\s+/g, "-");

    const existingServiceType = navItems[2].children.find(
      (child) => child.title.toLowerCase() === item.servicetype.toLowerCase()
    );
    if (existingServiceType) {
      existingServiceType.children.push({
        title: item.navtitle,
        href: `/${serviceType}/${item.slug}`,
        children: [],
      });
    } else {
      navItems[2].children.push({
        title: item.servicetype,
        href: `/${serviceType}`,
        children: [
          {
            title: item.navtitle,
            href: `/${serviceType}/${item.slug}`,
            children: [],
          },
        ],
      });
    }
  });

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
            href="tel:+1-437-365-9377"
            className="flex items-center gap-2 text-white hover:text-custom-purple-100 transition-all duration-300"
          >
            <FaPhone size={20} />
            +1-437-365-9377
          </Link>
          <Link
            href="https://maps.app.goo.gl/3MQpn7aqJ6H7wCrG8"
            target="_blank"
            className="flex items-center text-center md:text-left gap-2 text-white hover:text-custom-purple-100 transition-all duration-300"
          >
            <FaLocationDot size={20} />
            1054, East Avenue, Mississauga, Ontario L5E 1W9
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
