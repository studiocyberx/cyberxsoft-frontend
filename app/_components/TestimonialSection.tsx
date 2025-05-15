import StackedCarousel from "@/app/_components/StackedCarousel";
import { Separator } from "@/components/ui/separator";
import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialSection = () => {
  return (
    <section className="py-8 container sm:px-0">
      <div className="relative px-5 sm:px-14 md:px-24 flex items-center justify-center gap-8 lg:h-40 min-[1200]:h-[100px] flex-wrap lg:flex-nowrap">
        <div>
          <h2 className="font-tommy uppercase text-2xl md:text-4xl">
            What Our  <span className="font-bold">Clients</span>{" "} Say
          </h2>
        </div>
        {/* <Separator orientation="vertical" className="bg-custom-purple-500" />
        <p className="lg:max-w-xl">
          Our advanced technology-driven approach allows us to put forth
          efficient BI services for SMEs from nearly every industry. We offer
          customizable AI, cloud, and IoT solutions that are best suitable for
          every niche, elevating business success to new and improved horizons.
        </p> */}
      </div>

      <TestimonialCarousel />
    </section>
  );
};

export default TestimonialSection;
