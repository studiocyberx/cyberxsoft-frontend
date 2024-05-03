import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const FilterAccordion = () => {
  const accordionItems = [
    { category: "Topic", list: ["Cloud", "Cybersecurity"] },
    {
      category: "Industry",
      list: ["Aerospace & Defence", "Cybersecurity", "Banking", "Hitech"],
    },
    {
      category: "Content Type",
      list: ["Blog", "Case Study", "Podcast", "News"],
    },
  ];
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 sm:grid-cols-3"
      >
        {accordionItems.map((item, index) => (
          <AccordionItem value={item.category} className="px-8" key={index}>
            <AccordionTrigger
              icon={
                <FaPlus className="h-4 w-4 shrink-0 transition-transform duration-200" />
              }
            >
              {item.category}
            </AccordionTrigger>
            <AccordionContent className="flex gap-2 flex-wrap">
              {item.list.map((list, index) => (
                <Button
                  key={index}
                  asChild
                  className="rounded-sm capitalize bg-transparent text-primary hover:bg-gray-800 hover:text-primary-foreground border-gray-800 border-2"
                >
                  <Link href="/insights">{list}</Link>
                </Button>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default FilterAccordion;
