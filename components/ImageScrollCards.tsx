import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface scrollCardsProps {
  imageSrc: string;
  cardTitle: string;
  cardDescription: string;
}

const ImageScrollCards = ({
  imageScrollCardsData,
}: {
  imageScrollCardsData: scrollCardsProps[];
}) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4">
        {imageScrollCardsData.map((card) => (
          <Card
            key={card.cardTitle}
            className="shrink-0 bg-custom-purple-400 overflow-hidden rounded-xl"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={card.imageSrc}
                alt={card.cardTitle}
                className="h-fit w-full object-cover"
                width={300}
                height={400}
              />
            </div>
            <CardContent className="p-4 max-w-[300px] whitespace-pre-wrap text-center space-y-2">
              <CardTitle className="text-white uppercase text-xl">
                {card.cardTitle}
              </CardTitle>
              <CardDescription className="text-white ">
                {card.cardDescription}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ImageScrollCards;
