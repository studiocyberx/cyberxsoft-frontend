import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { StrapiImage } from "./StrapiImage";

interface Feature {
  id: number;
  heading: string;
  subHeading: string;
  image: {
    url: string;
  };
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <Card
      key={feature.id}
      className="space-y-4 px-6 py-4 bg-custom-purple-500 border-none"
    >
      <CardHeader className="items-center p-0 lg:-mt-14">
        <StrapiImage
          alt={feature.heading}
          className=""
          height={150}
          width={150}
          src={feature.image.url}
        />
      </CardHeader>
      <CardContent className="p-0 flex justify-between flex-col gap-2">
        <CardTitle className="mb-4 text-2xl font-bold text-white">
          {feature.heading}
        </CardTitle>
        <CardDescription className="text-gray-100">
          {feature.subHeading}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
