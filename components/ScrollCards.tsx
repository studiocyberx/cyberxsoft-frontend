import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface scrollCardsSectionProps {
  title: string;
  description: string;
}

interface scrollCardsDataProps {
  title: string;
  description: string;
}

const ScrollCards = ({
  scrollCardsSection,
  scrollCardsData,
}: {
  scrollCardsSection: scrollCardsSectionProps;
  scrollCardsData: scrollCardsDataProps[];
}) => {
  return (
    <section className="py-8 sm:py-12 px-8 sm:px-10 md:px-20 space-y-4 container">
      <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy">
        {scrollCardsSection.title}
      </h2>
      <p>{scrollCardsSection.description}</p>

      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4">
          {scrollCardsData.map((card) => (
            <Card
              key={card.title}
              className="p-8 w-full max-w-xs md:max-w-[400px] flex items-center gap-4 flex-col justify-center border-none text-center bg-custom-purple-500"
            >
              <CardTitle className="text-white  whitespace-pre-wrap">
                {card.title}
              </CardTitle>
              <CardDescription className="text-white whitespace-pre-wrap">
                {card.description}
              </CardDescription>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default ScrollCards;
