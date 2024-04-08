import Link from "next/link";
import { Button } from "@/components/ui/button";
import BackgroundVideo from "next-video/background-video";
import introBackground from "@/videos/intro-background.mp4";

interface ImageProps {
  id: number;
  url: string;
  alternavtiveText: string;
}

interface LinkProps {
  id: number;
  url: string;
  text: string;
  isExternal: boolean;
}

interface HeroSectionProps {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: ImageProps;
    link: LinkProps;
  };
}

export function HeroSection({ data }: Readonly<HeroSectionProps>) {
  return (
    <header className="relative min-h-screen overflow-hidden z-0">
      <BackgroundVideo src={introBackground}>
        <div className="absolute top-0 bottom-0 w-full flex items-start justify-center px-20 flex-col bg-custom-purple-700 bg-opacity-70 space-y-10">
          <h1 className="font-tommy text-4xl text-primary-foreground md:text-5xl lg:text-6xl max-w-5xl uppercase">
            Next Level{" "}
            <span className="font-tommy font-bold">Innovation Grounded in</span>{" "}
            responsibility
          </h1>
          <div className="flex items-center justify-between gap-8 w-full">
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 text-lg bg-transparent text-white"
            >
              <Link href="/">Learn More</Link>
            </Button>
            <p className="text-lg md:text-xl text-secondary max-w-lg ">
              Enabling Businesses to Make Smart Choices by Bringing Endless
              Automation Possibilities to their Disposal
            </p>
          </div>
        </div>
      </BackgroundVideo>
    </header>
  );
}
