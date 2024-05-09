import React, { Suspense } from "react";
import Loading from "../loading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ServiceTabs from "@/components/ServiceTabs";
import Faqs, { faqItemsProps } from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import { getSubServiceBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { getStrapiURL } from "@/lib/utils";
import { PageProps } from "@/lib/globaltypes";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const data = await getSubServiceBySlug(slug);
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

const Service = async ({ params }: { params: { slug: string } }) => {
  const data = await getSubServiceBySlug(params.slug);

  if (data.error?.status === 404) {
    notFound();
  }

  const baseUrl = getStrapiURL();
  //Parse faqs
  const faqItems = data.cardsdata
    .filter(
      (item: { __component: string }) => item.__component === "layout.faq"
    )
    .map((item: { faqitem: faqItemsProps }) => item.faqitem);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20 overflow-hidden">
          <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
            <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
              {data.introTitle}
            </h1>
            <p className="text-lg md:text-xl text-secondary">
              {data.introText}
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
            src={baseUrl + data.introImage.url}
            width={720}
            height={600}
            sizes="(min-width: 808px) 50vw, 100vw"
            alt={data.introImage.alternativeText}
            className="mix-blend-soft-light"
          />
        </section>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <section className="py-8 sm:pb-0 sm:pt-12 px-8 sm:px-10 lg:px-20 space-y-4 container">
          {data.TabSectionTitle && (
            <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
              {data.TabSectionTitle}
            </h2>
          )}

          {data.TabSectionDescription && (
            <p className="text-lg md:text-xl text-secondary-foreground text-center">
              {data?.TabSectionDescription}
            </p>
          )}

          <ServiceTabs tabsData={data.cardsdata} />
        </section>
      </Suspense>

      <section className="container px-6 sm:px-8 flex items-center justify-between gap-4">
        <Faqs faqItems={faqItems[0]} />
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
