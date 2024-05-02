import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
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
const cardItems = [
  {
    title: "News Title 1",
    category: "news",
    subtitle: "Some text for the card Some text for the card",
    image: "/insights-1.jpeg",
  },
  {
    title: "News Title 2",
    category: "case study",
    subtitle: "Some text for the card Some text for the card",
    image: "/insights-2.png",
  },
  {
    title: "News Title 4",
    category: "blog",
    subtitle: "Some text for the card Some text for the card",
    image: "/insights-3.png",
  },
  {
    title: "News Title 5",
    category: "news",
    subtitle: "Some text for the card Some text for the card",
    image: "/insights-1.jpeg",
  },
  {
    title: "News Title 6",
    category: "case study",
    subtitle: "Some text for the card Some text for the card",
    image: "/insights-2.png",
  },
  {
    title: "News Title 7",
    category: "case study",
    subtitle: "Some text for the card Some text for the card",
    image: "/insights-1.jpeg",
  },
  {
    title: "News Title 8",
    category: "blog",
    subtitle: "Some text for the card Some text for the card",
    image: "/insights-4.png",
  },
  {
    title: "News Title 3",
    category: "case study",
    subtitle: "Some text for the card Some text for the card",
    image: "/insights-2.png",
  },
];

const ResourceSection = () => {
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 sm:px-12 md:px-20">
      {cardItems.map((item) => (
        <Link href="/" key={item.title} className="group">
          <Card className="relative h-[450px] flex flex-col justify-between items-center rounded-lg border-slate-700 overflow-hidden md:group-hover:scale-105 transition-transform">
            <Image
              src={item.image}
              alt={item.title}
              fill={true}
              className="group-hover:scale-110 transition-transform ease-in-out duration-300 object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <CardHeader className="z-20 h-full w-full bg-black/50 p-8 group-hover:bg-black/85 transition-all duration-300">
              <strong className="capitalize text-white">{item.category}</strong>
              <CardTitle className="text-white text-2xl">
                {item.title}
              </CardTitle>
              <CardDescription className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 text-white text-base">
                {item.subtitle}
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </section>
  );
};

export default ResourceSection;
