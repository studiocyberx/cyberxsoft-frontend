import Link from "next/link";
import { Button } from "@/components/ui/button";
import BackgroundVideo from "@/components/BackgroundVideo";
import { MdOutlineExpandCircleDown } from "react-icons/md";

export function HeroSection() {
  return (
    <header className="relative h-screen sm:h-auto overflow-hidden z-0">
      <BackgroundVideo videoSrc="/intro-background.mp4">
        <div className="absolute top-0 bottom-0 w-full content-center px-8 sm:px-20 bg-custom-purple-700 bg-opacity-70 space-y-10 flex flex-col justify-center">
          <h1 className="font-tommy text-4xl md:text-5xl lg:text-7xl text-center md:text-left text-primary-foreground max-w-5xl uppercase">
            Next Level <span className="font-bold">Innovation </span>{" "}
          </h1>
          <div className="flex items-center justify-between gap-8 w-full flex-col-reverse md:flex-row">
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 text-lg bg-transparent text-white transition-all duration-200 ease-in"
            >
              <Link href="/about">Learn More</Link>
            </Button>
            <p className="text-lg md:text-xl text-center md:text-left text-secondary max-w-lg ">
              Enabling Businesses Smart Decision-Making by Integrating Endless
              Automation Possibilities Powered by Our responsible AI
            </p>
          </div>

          <Link href="#what-can-we-do" className="mx-auto animate-bounce pt-8">
            <MdOutlineExpandCircleDown
              size={25}
              className="cursor-pointer text-gray-300 hover:text-white transition-all duration-200"
            />
          </Link>
        </div>
      </BackgroundVideo>
    </header>
  );
}
