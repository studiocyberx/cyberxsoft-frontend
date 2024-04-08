import FeatureCard from "@/components/FeatureCard";

interface ImageProps {
  id: number;
  url: string;
}

interface FeatureProps {
  id: number;
  heading: string;
  subHeading: string;
  image: ImageProps;
}

interface FeatureSectionProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    subtitle: string;
    feature: FeatureProps[];
  };
}

export function FeatureSection({ data }: Readonly<FeatureSectionProps>) {
  const { feature, title, description, subtitle } = data;
  //   console.dir(feature, { depth: null });

  return (
    <section className="px-4 py-6 mx-auto md:px-6 lg:px-14 lg:py-11">
      <div className="max-w-[1400px] mx-auto">
        <strong className="text-custom-purple-300 uppercase font-tommy font-normal">
          {subtitle}
        </strong>
        <h2 className="text-2xl md:text-4xl pb-4 font-tommy uppercase max-w-[550px]">
          Bring Impact with <span className="font-bold">no compromise</span> on
          trust{" "}
        </h2>
        <p className="">{description}</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-12 max-w-[1400px] mx-auto">
        {feature.map((feature) => (
          <FeatureCard feature={feature} key={feature.id} />
        ))}
      </div>
    </section>
  );
}
