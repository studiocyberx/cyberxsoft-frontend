import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import responsibleAiHeader from "@/public/responsible-ai-header.png";
import responsibleAiIntro from "@/public/ai-intro.png";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import BeyondSection from "@/components/BeyondSection";

const page = () => {
  const faqItems = [
    {
      value: "question-1",
      question: "What is IoT and how can it help businesses?",
      answer:
        "The Internet of Things, or IoT, refers to the interconnectedness of devices and systems. IoT provides businesses with increased output, real-time data insights, and decision-making skills through linking and automating multiple operations.",
    },
    {
      value: "question-2",
      question:
        "Can BigO's IoT services be tailored to cater to the needs of diverse industries?",
      answer:
        "BigO recognizes the different needs of industries. We provide customized IoT solutions, collaborating closely with clients to tailor our services to specific industry needs, whether in manufacturing, healthcare, logistics, or other.",
    },
    {
      value: "question-3",
      question: "How does BigO safeguard the confidentiality of IoT data?",
      answer:
        "Privacy is our top priority. BigO uses strong encryption, authentication, and compliance methods to protect IoT data. We follow industry guidelines and regulations to maintain the integrity and security of your information.",
    },
    {
      value: "question-4",
      question: "What makes BigO stand out in the IoT service industry?",
      answer:
        "BigO distinguishes itself with its experience, collaborative approach, and dedication to technological advances. We render our years of knowledge, cooperate closely with clients, and are always exploring emerging technologies to keep our IoT services at the forefront of industry innovations.",
    },
  ];
  const beyondSectionData = {
    title: "Explore Comprehensive Digital Solutions Beyond BI Services",
    description:
      "The tech-driven changes are fueling high competition, and the fittest will survive in the digital landscape. BigO, in collaboration with CyberX Studio, acknowledges the challenges in digitization and online visibility beyond Responsible AI expertise. It facilitates strategic planning, designing of course of action, and execution, empowering enterprises to excel in the digital realm by refining their online presence and elevating customer engagement. CyberX Studio is your one-stop shop for upscaling your business visibility and building worth in the global market. Connect and witness how this holistic suite of services accelerates your organization’s success!",
    image: "/beyond-ai.png",
    serviceHeading: "Benefit from the following holistic services suite:",
  };

  const servicesList = [
    "All-Inclusive Digital Marketing Strategy",
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
    <>
      <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20 overflow-hidden">
        <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
          <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
            Responsible <span className="font-bold">AI</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary">
            Develop and Deploy AI Capabilities that are Compliant and Inspire
            Confidence and Responsibility
          </p>

          <Button
            asChild
            variant="outline"
            className="bg-transparent text-white text-lg p-6"
          >
            <Link href="/">Learn More</Link>
          </Button>
        </div>

        <Image src={responsibleAiHeader} alt="" className="mix-blend-overlay" />
      </section>

      <section className="h-full flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full px-8 sm:px-14 lg:px-20 2xl:px-28 py-12 container">
        <Image src="/ai-intro.png" alt="" width={550} height={550} />

        <div className="space-y-4 text-center lg:text-left max-w-3xl">
          <h2 className="text-custom-purple-300 font-bold text-3xl uppercase">
            Limitless Possibilities to Deploy AI with Confidence
          </h2>

          <p className="">
            Organizations continue to embrace advanced emerging Artificial
            Intelligence (AI) technologies to automate their operations and reap
            competitive business benefits.
          </p>
          <p className="">
            What is AI doing, though? Are its decisions bias-aware, error-free,
            and accurate, or in any way violating privacy?
          </p>
          <p className="">
            With great power comes even greater responsibility, and BigO is your
            trusted partner in striking a balance between responsible AI use 
            with trust, transparency, and confidence. Our Responsible AI (RAI)
            service is designed to leverage tools, techniques, and frameworks
            necessary to uphold ethical and legal obligations. Fundamentally,
            the technology is capable of reshaping the business landscape with
            improved efficiency, promising heightened productivity,
            cost-effectiveness, increased customer satisfaction, and compliance.{" "}
          </p>

          <Button
            asChild
            className="bg-custom-purple-400 hover:bg-custom-purple-500 px-10 py-6 text-lg"
          >
            <Link href="/get-a-quote">Get A Quote</Link>
          </Button>
        </div>
      </section>

      <BeyondSection data={beyondSectionData} servicesList={servicesList} />

      <section className="container px-6 sm:px-8 mb-8 flex items-center justify-between gap-4 ">
        <Faqs faqItems={faqItems} />

        <Image
          src="/faq-illustration.png"
          alt="faq-illustration"
          width={550}
          height={550}
          className="hidden md:block"
        />
      </section>

      <GetInTouch />
    </>
  );
};

export default page;
