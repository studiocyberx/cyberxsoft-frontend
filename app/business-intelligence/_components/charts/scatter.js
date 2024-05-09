import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function ScatterChart() {
  const data = {
    datasets: [
      {
        label: "Scatter Dataset 1",
        data: [
          { x: 20, y: 30 },
          { x: 40, y: 10 },
          { x: 50, y: 25 },
          { x: 10, y: 40 },
          { x: 35, y: 15 },
          { x: 60, y: 20 },
          { x: 25, y: 35 },
          { x: 45, y: 10 },
        ],
        backgroundColor: "rgb(255, 167, 27)",
      },
      {
        label: "Scatter Dataset 2",
        data: [
          { x: 30, y: 20 },
          { x: 60, y: 35 },
          { x: 25, y: 15 },
          { x: 45, y: 45 },
          { x: 35, y: 25 },
          { x: 50, y: 10 },
          { x: 40, y: 40 },
          { x: 40, y: 40 },
          { x: 55, y: 30 },
          { x: 30, y: 20 },
        ],
        backgroundColor: "rgb(0, 120, 226)",
      },
    ],
  };
  return <Scatter data={data} />;
}

export default ScatterChart;
