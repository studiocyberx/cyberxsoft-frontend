import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
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

interface HeaderProps {
  data: {
    logoText: {
      id: number;
      text: string;
      url: string;
    };
    ctaButton: {
      id: number;
      text: string;
      url: string;
    };
  };
}

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

export async function Header({ data }: Readonly<HeaderProps>) {
  return (
    <>
      <div className="flex items-center justify-between px-20 py-1 bg-custom-purple-500">
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
        <div className="flex items-center gap-4">
          <Link
            href="tel:9232132121"
            className="flex items-center gap-2 text-white hover:text-custom-purple-100 transition-all duration-300"
          >
            <FaPhone size={20} />
            +92-321-2311231
          </Link>
          <Link
            href="maps.google.com"
            className="flex items-center gap-2 text-white hover:text-custom-purple-100 transition-all duration-300"
          >
            <FaLocationDot size={20} />
            First Floor, Plaza #54, Sector F, DHA Phase 1, Rawalpindi{" "}
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between px-20 py-1 bg-custom-purple-600">
        <Logo />

        <Navbar fonts={bebas} />

        {/* <div className="flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="bg-transparent text-white px-8 rounded-sm uppercase text-lg"
            >
              Login
            </Button>
          </Link>
        </div> */}
      </div>
    </>
  );
}
