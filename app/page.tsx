import { FeatureSection } from "@/app/FeaturesSection";
import { HeroSection } from "@/app/HeroSection";
import { getHomePageData } from "@/data/loaders";
import IntroSection from "./IntroSection";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.features-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}

const Home = async () => {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData;
  if (!blocks) return <p>No sections found</p>;

  return (
    <main className="bg-gray-200 h-full">
      {/* {blocks.map((block: any) => blockRenderer(block))} */}
      {blockRenderer(blocks[0])}
      <IntroSection />
      {blockRenderer(blocks[1])}
    </main>
  );
};

export default Home;
