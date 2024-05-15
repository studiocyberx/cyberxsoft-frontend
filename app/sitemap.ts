import { getInsights, getSubServicePage } from "@/data/loaders";
import { MetadataRoute } from "next";

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  alternates?: {
    languages?: Record<string, string>;
  };
}>;

interface ServiceItemTypes {
  servicetype: string;
  slug: string;
  updatedAt: Date;
}

interface InsightTypes {
  InsightType: string;
  slug: string;
  updatedAt: Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links: Sitemap = [
    { url: "https://big0.dev/", lastModified: new Date() },
    { url: "https://big0.dev/about", lastModified: new Date() },
    { url: "https://big0.dev/insights", lastModified: new Date() },
    { url: "https://big0.dev/contact", lastModified: new Date() },
    { url: "https://big0.dev/business-intelligence", lastModified: new Date() },
    { url: "https://big0.dev/cloud", lastModified: new Date() },
    { url: "https://big0.dev/responsible-ai", lastModified: new Date() },
    { url: "https://big0.dev/iot", lastModified: new Date() },
    { url: "https://big0.dev/get-a-quote", lastModified: new Date() },
    { url: "https://big0.dev/policy", lastModified: new Date() },
    { url: "https://big0.dev/terms", lastModified: new Date() },
  ];

  const serviceItems = await getSubServicePage();
  const insights = await getInsights();

  await Promise.all([
    serviceItems.data.map(async (item: ServiceItemTypes) => {
      const serviceType = item.servicetype.toLowerCase();
      links.push({
        url:
          serviceType === "internet of things"
            ? `https://big0.dev/iot/${item.slug}`
            : `https://big0.dev/${serviceType.replace(/\s+/g, "-")}/${
                item.slug
              }`,
        lastModified: item.updatedAt,
      });
    }),

    insights.data.map(async (insight: InsightTypes) => {
      const insightType = insight.InsightType.toLowerCase().replace(
        /\s+/g,
        "-"
      );
      links.push({
        url: `https://big0.dev/insights/${insightType}/${insight.slug}`,
        lastModified: insight.updatedAt,
      });
    }),
  ]);

  return links;
}
