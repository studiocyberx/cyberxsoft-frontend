import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  id: number;
  url: string;
}

interface FeatureProps {
  id: number;
  heading: string;
  subHeading: string;
  image: ImageProps;
}

interface FeatureSectionProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    subtitle: string;
    feature: FeatureProps[];
  };
}

export function FeatureSection({ data }: Readonly<FeatureSectionProps>) {
  const { feature, description, subtitle } = data;

  return (
    <>
      <section className="container px-4 py-6 mx-auto md:px-6 lg:px-14 lg:py-11 relative">
        <h2 className="text-3xl uppercase font-semibold">What we can do</h2>
        <Separator className="w-full bg-gray-500 mt-5 mb-8 relative after:absolute after:content-[''] after:bg-drop-pattern after:w-full after:min-h-[420px] after:bg-no-repeat after:z-0" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 relative z-10">
          <strong className="text-custom-purple-300 uppercase font-tommy font-normal">
            {subtitle}
          </strong>
          <h2 className="text-2xl md:text-4xl pb-4 font-tommy uppercase max-w-[550px]">
            Bring Impact with <span className="font-bold">no compromise</span>{" "}
            on trust{" "}
          </h2>
          <p>{description}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-12 max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 ">
          {feature.map((feature) => (
            <FeatureCard feature={feature} key={feature.id} />
          ))}
        </div>

        <Image
          fill={true}
          src="/bg-globe.png"
          alt=""
          className="hidden md:block  !left-auto !right-0 !-bottom-1/2 !w-auto"
        />
      </section>

      <section className="flex items-center justify-center flex-col py-8 px-4 sm:px-5 md:px-10 relative">
        <h5 className="text-xl font-bold uppercase text-center">
          Amplify Your Business Success
        </h5>
        <p className="mt-1 mb-4 text-center">
          Request a Personalized, Responsible AI, BI, IoT, or Cloud Service to
          Find Out Best-Suited Solution for Your Business
        </p>

        <Button
          asChild
          className="bg-custom-purple-500 hover:bg-custom-purple-400 duration-200 transition-all px-12 py-6 text-lg uppercase"
        >
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </section>
    </>
  );
}
