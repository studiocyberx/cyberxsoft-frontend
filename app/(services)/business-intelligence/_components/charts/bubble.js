import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

function ConnectivityChart() {
  const data = {
    datasets: [
      {
        label: "Machine Learning",
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 50, y: 25, r: 12 },
          { x: 10, y: 40, r: 8 },
          { x: 35, y: 15, r: 18 },
          { x: 60, y: 20, r: 20 },
          { x: 25, y: 35, r: 14 },
          { x: 45, y: 10, r: 16 },
        ],
        backgroundColor: "rgba(255, 167, 27,0.75)",
      },
      {
        label: "Natural Language Processing",
        data: [
          { x: 30, y: 20, r: 10 },
          { x: 60, y: 35, r: 15 },
          { x: 25, y: 15, r: 12 },
          { x: 45, y: 45, r: 8 },
          { x: 35, y: 25, r: 18 },
          { x: 50, y: 10, r: 20 },
          { x: 40, y: 40, r: 14 },
          { x: 40, y: 40, r: 14 },
          { x: 55, y: 30, r: 22 },
          { x: 30, y: 20, r: 12 },
        ],
        backgroundColor: "rgba(0, 120, 226, 0.75)",
      },
    ],
  };

  return <Bubble data={data} />;
}

export default ConnectivityChart;
