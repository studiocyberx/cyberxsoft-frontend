import ParseRichText from "@/components/ParseRichText";
import VideoCta from "@/components/VideoCta";
import { getInsightsBySlug } from "@/data/loaders";
import { PageProps } from "@/lib/definitions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const data = await getInsightsBySlug(slug);
  return {
    title: data.MetaTitle,
    description: data.MetaDescription,
  };
}

const CaseStudy = async ({ params }: { params: { slug: string } }) => {
  const data = await getInsightsBySlug(params.slug);

  if (data.error?.status === 404) {
    notFound();
  }

  const videoCtaData = {
    title: "Scale AI for Business Responsibly",
    description:
      "Gain the Competitive Edge For Your Business with Our Responsible AI Services",
    height: "h-screen md:h-[500px]",
    videoSrc: "/subservice-cta.mp4",
  };
  return (
    <>
      <section className="p-8 sm:p-10 md:px-20 space-y-8 container">
        <h1 className="text-3xl sm:text-4xl text-center font-bold">
          {data?.Title}
        </h1>
        <div className="space-y-4">
          <ParseRichText content={data.insightContent} />
        </div>
      </section>

      <VideoCta videoCtaData={videoCtaData} />
    </>
  );
};

export default CaseStudy;
