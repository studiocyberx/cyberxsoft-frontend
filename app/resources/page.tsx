import BackgroundVideo from "@/components/BackgroundVideo";
import GetInTouch from "@/components/GetInTouch";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface cardProps {
  title: string;
  description: string;
  href: string;
}

const page = () => {
  const cardItems: cardProps[] = [
    {
      title: "Our Case Studies",
      description:
        "Real-World Stories of Client Success Fueled by Our Transformative IT Solutions",
      href: "/",
    },
    {
      title: "Our Blogs",
      description:
        "Informative Insights, Best Practices, and Thought Leadership Compilations",
      href: "/",
    },
    {
      title: "News",
      description:
        "Latest Updates, Industry Trends, and News of What’s Latest in Tech World",
      href: "/",
    },
  ];
  return (
    <>
      <BackgroundVideo videoSrc="/resource-bg.mp4">
        <div className="absolute top-0 bottom-0 w-full flex items-center justify-center px-8 sm:px-20 flex-col bg-custom-purple-700 bg-opacity-80 space-y-8">
          <h1 className="text-5xl md:text-6xl 2xl:text-7xl uppercase font-tommy text-white">
            Resources
          </h1>
          <p className="text-white text-center text-xl 2xl:text-2xl max-w-2xl 2xl:max-w-3xl mx-auto">
            <span className="font-bold">All In One Place:</span> client success
            stories, expert insights, latest industry updates, and upcoming
            developments in compliance.{" "}
            <span className="font-bold">Explore</span>,{" "}
            <span className="font-bold">Learn</span>, and{" "}
            <span className="font-bold">Stay Ahead</span> of the Competitive
            Curve with our resources.
          </p>
        </div>
      </BackgroundVideo>

      <section>
        <Card className="max-w-[95%] lg:max-w-4xl xl:max-w-5xl bg-gray-200 mx-auto my-8 md:mb-12 lg:-mt-20 z-30 relative border-none flex flex-wrap md:flex-nowrap items-center justify-between shadow-md overflow-hidden gap-8">
          <Image
            src="/resource-card.jpeg"
            alt=""
            width={300}
            height={300}
            className="h-[250px] sm:h-full md:min-h-[330px] object-cover w-full md:w-[400px]"
          />

          <CardContent className="p-4 space-y-6 w-full">
            {cardItems.map((card, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center justify-between gap-4 relative">
                  <div className="">
                    <CardTitle className="text-custom-purple-300 uppercase">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-gray-900">
                      {card.description}
                    </CardDescription>
                  </div>
                  <Link
                    href={card.href}
                    className="text-custom-purple-300 hover:text-custom-purple-200 transition-all duration-200 cursor-pointer"
                  >
                    <FaChevronRight size={30} />
                  </Link>
                </div>
                {index < cardItems.length - 1 && (
                  <Separator className="max-w-[80%] mx-auto bg-custom-purple-50" />
                )}{" "}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <GetInTouch />
    </>
  );
};

export default page;
