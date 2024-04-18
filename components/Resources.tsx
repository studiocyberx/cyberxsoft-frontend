import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

const Resources = () => {
  return (
    <section className="w-full">
      <h2 className="font-tommy text-4xl uppercase">
        Explore Featured <br /> <span className="font-bold">Insights</span>
      </h2>

      <div className="space-y-6 py-8 px-0 lg:px-4">
        <Card className="flex items-center justify-between gap-8 p-4 bg-custom-purple-500 rounded-2xl">
          <Image src="/case-study.png" alt="" width={54} height={54} />
          <CardContent className="p-0">
            <CardTitle className="text-white">Case Studies</CardTitle>
            <CardDescription className="text-white">
              Discover how we have empowered businesses like yours with our
              bespoke AI, cloud, IoT, and BI services
            </CardDescription>
          </CardContent>

          <Link
            href="/case-studies"
            className="text-white hover:text-custom-purple-200 transition-all duration-200 cursor-pointer"
          >
            <FaChevronRight size={30} />
          </Link>
        </Card>

        <Card className="flex items-center justify-between gap-8 p-4 bg-custom-purple-500 rounded-2xl">
          <Image src="/blogging.png" alt="" width={54} height={54} />
          <CardContent className="p-0">
            <CardTitle className="text-white">Blogs</CardTitle>
            <CardDescription className="text-white">
              Discover how we have empowered businesses like yours with our
              bespoke AI, cloud, IoT, and BI services
            </CardDescription>
          </CardContent>

          <Link
            href="/blogs"
            className="text-white hover:text-custom-purple-200 transition-all duration-200 cursor-pointer"
          >
            <FaChevronRight size={30} />
          </Link>
        </Card>

        <Card className="flex items-center justify-between gap-8 p-4 bg-custom-purple-500 rounded-2xl">
          <Image src="/news.png" alt="" width={54} height={54} />
          <CardContent className="p-0">
            <CardTitle className="text-white">News</CardTitle>
            <CardDescription className="text-white">
              Discover how we have empowered businesses like yours with our
              bespoke AI, cloud, IoT, and BI services
            </CardDescription>
          </CardContent>

          <Link
            href="/news"
            className="text-white hover:text-custom-purple-200 transition-all duration-200 cursor-pointer"
          >
            <FaChevronRight size={30} />
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default Resources;
