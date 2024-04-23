import Image from "next/image";
import bgImage from "@/public/about-intro.png";
import GetInTouch from "@/components/GetInTouch";

interface valuesDataProps {
  title: string;
  description: string;
  imageSrc: string;
}

interface whyUsProps {
  title: string;
  description: string;
}

const page = () => {
  const valuesData: valuesDataProps[] = [
    {
      title: "Innovation",
      description:
        "We are curious to incorporate advanced technology, and look out for breakthroughs.",
      imageSrc: "/innovation.png",
    },
    {
      title: "commitment",
      description:
        "We are dedicated to helping businesses grow and progress like never before.",
      imageSrc: "/commitment.png",
    },
    {
      title: "integrity",
      description:
        "We are reliable, transparent, and genuine partners for our clients.",
      imageSrc: "/integrity.png",
    },
    {
      title: "Customer Centric Approach",
      description:
        "Customers are our pride, and customer satisfaction is at the heart of our operations.",
      imageSrc: "/customer-centric-approach.png",
    },
  ];

  const whyUs: whyUsProps[] = [
    {
      title: "Expertise That Speaks Volumes",
      description:
        "Achieve excellence with our team of seasoned data analysts, AI project architects, and data experts. We are masters at harnessing the potential of cutting-edge BI tools like Power BI, Tableau, Qlik, and more.",
    },
    {
      title: "Tailored Solutions for Your Unique Business",
      description:
        "Achieve excellence with our team of seasoned data analysts, AI project architects, and data experts. We are masters at harnessing the potential of cutting-edge BI tools like Power BI, Tableau, Qlik, and more.",
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
  return (
    <>
      <section className="h-full flex flex-col xl:flex-row gap-10 xl:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 md:px-28 pt-10 sm:pt-20">
        <div className="pb-0 md:pb-20 space-y-4 container">
          <h1 className="text-white font-tommy uppercase text-center md:text-left text-5xl lg:text-6xl">
            <span className="font-bold">Who</span> <br /> we are?
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left text-secondary">
            At BigO, we take pride in our significant role as catalysts for
            transformative shifts. We actively engage in investing in
            cutting-edge capabilities to level up and stay ahead of the curve.
            Our commitment extends to fostering a culture of continuous
            improvement by channeling resources into talent acquisition,
            ensuring our team possesses specialized skills adept at solving
            intricate business challenges. 
          </p>
          <p className="text-lg md:text-xl text-center md:text-left text-secondary">
            We are devoted to delivering sustainable and substantial value to
            every industry vertical. Empowered by our collective proficiency, we
            redefine possibilities and offer enduring contributions to the
            realms we influence.
          </p>
        </div>

        <Image
          src={bgImage}
          alt=""
          className="max-h-[650px] h-full w-full self-end"
        />
      </section>

      <section className="flex items-center justify-between flex-col md:flex-row gap-10 pt-12 pb-8 sm:py-12 px-8 sm:px-10 md:px-20 container">
        <div className="space-y-4">
          <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy">
            Vision
          </h2>
          <p className="">
            We envision a future where BigO revolutionizes industries through
            the smooth integration of responsive AI, cloud services, IoT, and
            business intelligence. Our vision is to be the driving force behind
            businesses&apos; operational excellence, fostering unparalleled
            efficiency and convenience. By relentlessly innovating and adapting,
            we aspire to create a future where organizations effortlessly
            optimize their work processes and achieve unprecedented levels of
            success by continuously innovating and adapting.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy">
            Mission
          </h2>
          <p className="">
            The mission of BigO is centered around delivering a suite of
            cutting-edge technologies and services in the fields of Artificial
            Intelligence (AI), cloud computing, the Internet of Things (IoT),
            and business intelligence. The primary goal is to offer businesses
            responsive and adaptable solutions that automate and streamline
            their operational processes. By harnessing the power of AI, BigO
            aims to create tools and offer services that not only enhance
            efficiency but also respond dynamically to the evolving needs of
            businesses.
          </p>
        </div>
      </section>

      <div className="sm:pt-8 px-8 sm:px-10 md:px-20 container">
        <Image
          src="/about-vision-mission.png"
          alt=""
          width={1500}
          height={450}
        />
      </div>

      <section className="py-20 px-8 sm:px-10 md:px-20 space-y-8 container">
        <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
          Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          {valuesData.map((value, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <Image
                src={value.imageSrc}
                alt={value.title}
                width={150}
                height={150}
              />
              <h4 className="text-custom-purple-300 uppercase text-lg font-bold text-center">
                {value.title}
              </h4>
              <p className="text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="h-full w-full bg-custom-purple-700 px-8 sm:px-14 md:px-28 pt-10 sm:pt-20 relative overflow-hidden">
        <div className="container flex flex-col gap-10 xl:gap-20 justify-between">
          <h2 className="text-white font-tommy uppercase text-center md:text-left text-5xl lg:text-6xl">
            <span className="font-bold">Why</span> <br /> choose us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl pb-10 md:pb-20">
            {whyUs.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 items-start">
                <h4 className="text-custom-purple-300 uppercase text-lg font-bold">
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
          className="hidden md:block object-contain max-w-[350px] !right-0 !left-auto top-0"
        />
      </section>

      <GetInTouch />
    </>
  );
};

export default page;
