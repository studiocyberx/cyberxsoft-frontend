import React, { Suspense } from "react";
import Loading from "../loading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ServiceTabs from "@/components/ServiceTabs";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";

const removeHyphens: (slug: string) => string = (slug: string) =>
  slug.replace(/-/g, " ");

const Service = async ({ params }: { params: { slug: string } }) => {
  const faqItems = [
    {
      value: "question-1",
      question:
        "What is Business Intelligence (BI) and why is it significant for businesses?",
      answer:
        "Business Intelligence refers to technologies, processes, and tools that help businesses gather, scrutinize, and visualize data to make informed decisions. BI is crucial as it empowers organizations to gain insights, identify trends, and optimize strategies for improved outcomes.",
    },
    {
      value: "question-2",
      question:
        "How can BI services enhance collaboration within an organization?",
      answer:
        "BI fosters collaboration by providing a shared platform for accessing and interpreting data. Teams can collaborate more effectively as they base their decisions on a common understanding of the insights derived from BI analysis.",
    },
    {
      value: "question-3",
      question: "Is Business Intelligence suitable for small businesses?",
      answer:
        "Yes, BI services are scalable and can be customized to meet the specific needs of small, medium, or large enterprises. They offer valuable insights that are cost-effective for data-oriented decision-making.",
    },
    {
      value: "question-4",
      question:
        "What security measures does BigO put in place to protect sensitive business data in BI systems?",
      answer:
        "Our BI systems implement sound security measures, including user authentication, encryption, and access controls. These measures ensure that only authorized personnel can access and alter sensitive business data.",
    },
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20 overflow-hidden">
          <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
            <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
              {removeHyphens(params.slug)}
            </h1>
            <p className="text-lg md:text-xl text-secondary">
              At BigO, the core motive of our IoT services is to reveal
              analytical insights about operations, streamline work processes,
              minimize potential challenges, and empower businesses to make
              informed, data-driven decisions.
            </p>

            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white text-lg p-6"
            >
              <Link href="/get-a-quote">Request A Demo</Link>
            </Button>
          </div>

          <Image
            src="/service-header.png"
            width={720}
            height={600}
            sizes="(min-width: 808px) 50vw, 100vw"
            alt=""
            className="mix-blend-soft-light"
          />
        </section>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <section className="py-8 sm:pb-0 sm:pt-12 px-8 sm:px-10 lg:px-20 space-y-4 container">
          <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
            Crafting Business Success with Our BI Solutions
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground text-center">
            We help transform your decentralized operations into a cohesive,
            cutting-edge data visualization system that enhances everyday
            operations, KPI implementation, and goal accomplishment. Customize
            your BI systems as per your specific requirements.
          </p>

          <ServiceTabs />
        </section>
      </Suspense>

      <section className="container px-6 sm:px-8 flex items-center justify-between gap-4 xl:h-screen xl:max-h-[800px]">
        <Faqs faqItems={faqItems} />
        <Image
          src="/faq-illustration.png"
          alt="faq-illustration"
          width={800}
          height={720}
          className="hidden md:block"
        />
      </section>
      <GetInTouch />
    </>
  );
};

export default Service;
