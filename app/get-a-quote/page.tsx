import BackgroundVideo from "@/components/BackgroundVideo";
import GetInTouch from "@/components/GetInTouch";
import { Metadata } from "next";
import GetQuoteForm from "./_components/GetQuoteForm";
import Link from "next/link";
import { MdOutlineExpandCircleDown } from "react-icons/md";

export const metadata: Metadata = {
  title: "CyberXSoft - Get A Quote",
};

const GetAQuote = () => {
  return (
    <>
      <BackgroundVideo videoSrc="/resource-bg.mp4">
        <div className="absolute top-0 bottom-0 w-full flex items-center justify-center px-8 sm:px-20 flex-col bg-custom-purple-500 bg-opacity-80 space-y-8">
          <h1 className="text-5xl md:text-6xl 2xl:text-7xl text-center uppercase font-tommy text-white">
            Tap Your{" "}
            <span className="font-bold">Business&apos;s Full Potential</span>{" "}
            with CyberXSoft
          </h1>
          <p className="text-white text-center text-xl 2xl:text-2xl max-w-2xl 2xl:max-w-3xl mx-auto">
            Without the integration of innovative technology, your business will
            miss out on experiencing its true potential. Collaborate with us and
            step up to achieve new heights of success and growth.
          </p>

          <Link href="#quote" className="mx-auto animate-bounce pt-10">
            <MdOutlineExpandCircleDown
              size={25}
              className="cursor-pointer text-gray-300 hover:text-white transition-all duration-200"
            />
          </Link>
        </div>
      </BackgroundVideo>
      <GetQuoteForm />
    </>
  );
};

export default GetAQuote;
