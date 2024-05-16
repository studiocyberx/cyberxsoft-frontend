"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import DynamicChart from "@/app/services/business-intelligence/_components/DynamicChart";

type ChartType =
  | "bar"
  | "linechart"
  | "piecharts"
  | "donutcharts"
  | "connectivitycharts"
  | "scatterplots"
  | "polarchart"
  | "radarchart";

export function MapDialog({
  alt,
  src,
  heading,
  chartType,
}: {
  alt: string;
  src: string;
  heading: string;
  chartType: ChartType;
}) {
  return (
    <Dialog>
      <DialogTrigger className="flex flex-col items-center text-center justify-center gap-2 cursor-pointer group">
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className="w-[150px]"
        />

        <h2 className="font-bold group-hover:text-custom-purple-300 group-focus:text-custom-purple-300">
          {heading}
        </h2>
      </DialogTrigger>
      <DialogContent>
        <DynamicChart chartType={chartType} />
      </DialogContent>
    </Dialog>
  );
}
