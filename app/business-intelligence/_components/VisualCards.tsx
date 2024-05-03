import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface VisualCardProps {
  heading: string;
  imageSrc: string;
}

const VisualCards = ({ visualCards }: { visualCards: VisualCardProps[] }) => {
  return (
    <>
      <div className="grid items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {visualCards.map((card) => (
          <Dialog key={card.heading}>
            <DialogTrigger className="flex flex-col items-center text-center justify-center gap-2 cursor-pointer group">
              <Image
                src={card.imageSrc}
                alt={card.heading}
                width={100}
                height={100}
                className="w-[150px]"
              />

              <h2 className="font-bold group-hover:text-custom-purple-300 group-focus:text-custom-purple-300">
                {card.heading}
              </h2>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>{card.heading} Will Be Displayed Here</DialogTitle>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default VisualCards;
