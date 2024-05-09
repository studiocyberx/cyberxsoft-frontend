import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const data = {
    labels: ["jan", "feb", "mar", "april", "may", "june", "july"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "My Second Dataset",
        data: [60, 99, 20, 45, 36, 54, 30],
        fill: false,
        borderColor: "rgb(25, 199, 142)",
        tension: 0.2,
      },
    ],
  };
  return <Line data={data} />;
}
export default LineChart;
