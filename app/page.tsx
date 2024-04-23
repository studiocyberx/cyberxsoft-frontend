import { FeatureSection } from "@/app/FeaturesSection";
import { HeroSection } from "@/app/HeroSection";
import { getHomePageData } from "@/data/loaders";
import IntroSection from "./IntroSection";
import CarouselSection from "./CarouselSection";
import Faqs from "@/components/Faqs";
import Resources from "@/components/Resources";
import { Separator } from "@/components/ui/separator";
import GetInTouch from "@/components/GetInTouch";

//Function to render the components from strapi
function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.features-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}

const faqItems = [
  {
    value: "question-1",
    question: "How Can Businesses Ensure Responsible AI Practices?",
    answer:
      "BI helps businesses integrate and manage responsible data usage by implementing data privacy policies, promoting ethical practices, and ensuring compliance with regulatory standards. Hence, organizations need to choose wisely for their BI service providers that fall on both ethical and legal criteria.",
  },
  {
    value: "question-2",
    question:
      "What Challenges Are Faced by Businesses in Integrating BI Solutions?",
    answer:
      "BI helps businesses integrate and manage responsible data usage by implementing data privacy policies, promoting ethical practices, and ensuring compliance with regulatory standards. Hence, organizations need to choose wisely for their BI service providers that fall on both ethical and legal criteria.",
  },
  {
    value: "question-3",
    question: "How Does Business Intelligence (BI) Support Data Usage?",
    answer:
      "BI helps businesses integrate and manage responsible data usage by implementing data privacy policies, promoting ethical practices, and ensuring compliance with regulatory standards. Hence, organizations need to choose wisely for their BI service providers that fall on both ethical and legal criteria.",
  },
  {
    value: "question-4",
    question:
      "What are the Key Considerations for Choosing a Cloud Service Provider?",
    answer:
      "BI helps businesses integrate and manage responsible data usage by implementing data privacy policies, promoting ethical practices, and ensuring compliance with regulatory standards. Hence, organizations need to choose wisely for their BI service providers that fall on both ethical and legal criteria.",
  },
];

const Home = async () => {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData;
  if (!blocks) return <p>No sections found</p>;

  return (
    <main className="bg-gray-200 h-full">
      <HeroSection />
      <IntroSection />
      {blockRenderer(blocks[1])}
      <CarouselSection />
      <section className="container px-6 sm:px-8 lg:h-screen 2xl:max-h-[800px] my-8 flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap">
        <Resources />
        <Separator
          className="bg-custom-purple-300 hidden sm:block h-[1px] w-full lg:h-full lg:w-[1.5px]"
          orientation="vertical"
        />
        <Faqs faqItems={faqItems} />
      </section>
      <GetInTouch />
    </main>
  );
};

export default Home;
