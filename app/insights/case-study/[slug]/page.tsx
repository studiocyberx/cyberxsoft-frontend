import ParseRichText from "@/components/ParseRichText";
import { getInsightsBySlug } from "@/data/loaders";

const CaseStudy = async ({ params }: { params: { slug: string } }) => {
  const data = await getInsightsBySlug(params.slug);

  return (
    <section className="p-8 sm:p-10 md:px-20 space-y-8 container">
      <h1 className="text-3xl sm:text-4xl text-center font-bold">
        {data?.Title}
      </h1>
      <div className="space-y-4">
        <ParseRichText content={data.insightContent} />
      </div>
    </section>
  );
};

export default CaseStudy;
