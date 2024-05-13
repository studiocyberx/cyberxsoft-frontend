import ParseRichText from "@/components/ParseRichText";
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

const Blog = async ({ params }: { params: { slug: string } }) => {
  const data = await getInsightsBySlug(params.slug);

  if (data.error?.status === 404) {
    notFound();
  }

  return (
    <section className="p-8 sm:p-10 md:px-20 space-y-8 container">
      <h1 className="text-4xl text-center font-bold">{data?.Title}</h1>
      <div className="space-y-4">
        <ParseRichText content={data.insightContent} />
      </div>
    </section>
  );
};

export default Blog;
