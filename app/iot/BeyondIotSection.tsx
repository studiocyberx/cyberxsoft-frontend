import Image from "next/image";

const BeyondIotSection = () => {
  const servicesList = [
    "Comprehensive Digital Marketing Strategy",
    "UI/UX Designing",
    "Website Design and Development",
    "SEO Mastery",
    "PPC and Ad Campaigns",
    "Social Media Management",
    "Email Marketing",
    "Content Marketing",
    "Graphics and Animations",
  ];
  return (
    <section className="py-8 sm:py-12 px-8 sm:px-10 md:px-20 container">
      <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy">
        Discover Full-Scale Digital Services Beyond IoT Solutions{" "}
      </h2>
      <p className="mt-2 max-w-6xl">
        We understand the ever evolving demands of businesses, and finding the
        finest services has become a challenge for business owners. BigO in
        collaboration with CyberX Studio fulfills the holistic digital marketing
        requirements of its clients. If you are looking for services other than
        the Internet of Things (IoT), then look no further! Let CyberX Studio be
        your digital marketing partner and upscale your business&apos;s online
        visibility.
      </p>

      <div className="flex items-start justify-between flex-col lg:flex-row gap-8 mt-8">
        <div className="lg:min-w-[450px]">
          <h6 className="font-bold">
            Benefit from the following holistic services suite:
          </h6>

          <ul className="space-y-2 pt-4">
            {servicesList.map((service, index) => (
              <li
                key={index}
                className="relative before:content-[''] before:w-1 before:h-1 before:bg-black before:inline-block before:rounded-full flex items-center gap-3"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/beyond-iot.png"
          alt=""
          width={800}
          height={500}
          className="w-full h-full max-w-[850px]"
        />
      </div>
    </section>
  );
};

export default BeyondIotSection;
