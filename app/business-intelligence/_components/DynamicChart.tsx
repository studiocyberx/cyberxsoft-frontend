import React from "react";
import { UserData } from "./charts/data";
import BarChart from "@/app/business-intelligence/_components/charts/barchart";
import LineChart from "@/app/business-intelligence/_components/charts/linechart";
import PieChart from "@/app/business-intelligence/_components/charts/piechart";
import DoughnutChart from "@/app/business-intelligence/_components/charts/dounut";
import ScatterChart from "@/app/business-intelligence/_components/charts/scatter";
import ConnectivityChart from "@/app/business-intelligence/_components/charts/bubble";
import RadarChart from "@/app/business-intelligence/_components/charts/raddarchart";
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
  const chartData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#02AFBB",
          "#0885F3",
          "#FAB13F",
          "#005EB7",
          "#808080",
        ],
      },
    ],
  };

  switch (chartType) {
    case "linechart":
      return <LineChart />;
    case "piecharts":
      return <PieChart BarchartData={chartData} />;
    case "donutcharts":
      return <DoughnutChart BarchartData={chartData} />;
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
