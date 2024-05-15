import qs from "qs";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = null;
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getSubServicePage() {
  const url = new URL("/api/sub-service-pages", baseUrl);
  url.search = qs.stringify({
    populate: {
      fields: ["id", "slug", "navtitle", "servicetype"],
    },
    pagination: {
      limit: 50,
    },
  });
  return await fetchData(url.href);
}

export async function getSubServiceBySlug(slug: string) {
  noStore();
  const url = new URL(`/api/sub-service-pages/${slug}`, baseUrl);
  url.search = qs.stringify({
    populate: {
      cardsdata: {
        populate: "*",
      },
      introImage: {
        fields: ["name", "url", "alternativeText"],
      },
    },
  });

  return await fetchData(url.href);
}

export async function getInsights() {
  noStore();
  const url = new URL("/api/insights", baseUrl);
  url.search = qs.stringify({
    populate: {
      CardImage: {
        fields: ["name", "url", "alternativeText"],
      },
      InsightTags: {
        populate: true,
      },
    },
  });

  return await fetchData(url.href);
}

export async function getInsightsBySlug(slug: string) {
  noStore();
  const url = new URL(`/api/insights/${slug}`, baseUrl);
  url.search = qs.stringify({
    populate: {
      CardImage: {
        fields: ["name", "url", "alternativeText"],
      },
      InsightTags: {
        populate: true,
      },
    },
  });

  return await fetchData(url.href);
}
