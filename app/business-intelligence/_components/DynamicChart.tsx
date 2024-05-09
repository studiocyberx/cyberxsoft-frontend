import React from "react";
import BarChart from "@/app/business-intelligence/_components/charts/barchart";
import PieChart from "@/app/business-intelligence/_components/charts/piechart";
import LineChart from "@/app/business-intelligence/_components/charts/linechart";
import ScatterChart from "@/app/business-intelligence/_components/charts/scatter";
import DoughnutChart from "@/app/business-intelligence/_components/charts/dounut";
import RadarChart from "@/app/business-intelligence/_components/charts/raddarchart";
import ConnectivityChart from "@/app/business-intelligence/_components/charts/bubble";
import PolarAreaChart from "@/app/business-intelligence/_components/charts/polarareachart";

export type ChartType =
  | "bar"
  | "linechart"
  | "piecharts"
  | "donutcharts"
  | "connectivitycharts"
  | "scatterplots"
  | "polarchart"
  | "radarchart";

interface ChartProps {
  chartType: ChartType;
}
const DynamicChart: React.FC<ChartProps> = ({ chartType }: ChartProps) => {
  switch (chartType) {
    case "linechart":
      return <LineChart />;
    case "piecharts":
      return <PieChart />;
    case "donutcharts":
      return <DoughnutChart />;
    case "connectivitycharts":
      return <ConnectivityChart />;
    case "scatterplots":
      return <ScatterChart />;
    case "polarchart":
      return <PolarAreaChart />;
    case "radarchart":
      return <RadarChart />;
    case "bar":
    default:
      return <BarChart />;
  }
};

export default DynamicChart;
