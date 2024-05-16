import React from "react";
import BarChart from "./charts/barchart";
import PieChart from "./charts/piechart";
import LineChart from "./charts/linechart";
import ScatterChart from "./charts/scatter";
import DoughnutChart from "./charts/dounut";
import RadarChart from "./charts/raddarchart";
import ConnectivityChart from "./charts/bubble";
import PolarAreaChart from "./charts/polarareachart";

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
