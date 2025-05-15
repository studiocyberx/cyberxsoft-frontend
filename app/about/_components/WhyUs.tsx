import Image from "next/image";

interface whyUsProps {
  title: string;
  description: string;
}

const whyUs: whyUsProps[] = [
  {
    title: "Expertise That Speaks Volumes",
    description:
      "Achieve excellence with our team of seasoned data analysts, AI project architects, and data experts. We are masters at harnessing the potential of cutting-edge BI tools.",
  },
  {
    title: "Tailored Solutions for Your Business",
    description:
      "Achieve excellence with our team of seasoned data analysts. Our AI project architects are here to elevate your projects. Benefit from the expertise of our dedicated data experts. ",
  },
  {
    title: "User-Friendly Dashboards",
    description:
      "Bid farewell to complexity. Our BI dashboards are visually stunning and have a simple navigational architecture. Extracting insights becomes a breeze, empowering every member of your organization to be a data analyst.",
  },
  {
    title: "Data Security",
    description:
      "We take data security seriously, ensuring your sensitive information is treated with the utmost care. You can trust us with your confidential data. We adhere to international standards such as HIPAA, GDPR etc",
  },
];
const WhyUs = () => {
  return (
    <section className="h-full w-full bg-custom-purple-700 px-8 sm:px-14 md:px-28 pt-10 sm:pt-20 relative overflow-hidden">
      <div className="container flex flex-col gap-10 xl:gap-16 justify-between">
        <h2 className="text-white font-tommy uppercase text-center md:text-left text-4xl md:text-5xl lg:text-7xl">
          <span className="font-bold">Why</span> choose us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-4xl pb-10 md:pb-20">
          {whyUs.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 items-start">
              <h4 className="text-white uppercase text-lg font-bold">
                {item.title}
              </h4>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/about-why-us.png"
        alt=""
        fill={true}
        sizes="(min-width: 808px) 50vw, 100vw"
        className="hidden md:block object-contain max-w-[350px] !right-0 !left-auto top-0 z-10"
      />
    </section>
  );
};

export default WhyUs;
