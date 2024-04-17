import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface Feature {
  id: number;
  heading: string;
  subHeading: string;
  image: {
    url: string;
  };
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const imageUrl = getStrapiMedia(feature.image.url);

  return (
    <Card
      key={feature.id}
      className="space-y-4 px-6 py-4 bg-custom-purple-500 border-none z-20"
    >
      <CardHeader className="items-center p-0 lg:-mt-14">
        <Image
          width={150}
          height={150}
          alt=""
          src={imageUrl ?? "https://placehold.co/150x150"}
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
