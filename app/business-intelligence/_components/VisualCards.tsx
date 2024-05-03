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
            <DialogTrigger className="flex flex-col items-center text-center justify-center gap-2 cursor-pointer">
              <Image
                src={card.imageSrc}
                alt={card.heading}
                width={100}
                height={100}
                className="w-[150px] h-[150px"
              />

              <h2 className="font-bold">{card.heading}</h2>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>A Chart Will Be Shown Here</DialogTitle>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default VisualCards;
