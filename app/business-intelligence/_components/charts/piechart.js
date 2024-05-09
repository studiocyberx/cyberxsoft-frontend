import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: [
      "Data Analysis",
      "Data Visualization",
      "Data Mining",
      "Reporting",
      "Predictive Analytics",
    ],
    datasets: [
      {
        label: "Business Intelligence Tasks",
        data: [25, 20, 15, 20, 20],
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

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Business Intelligence Tasks Distribution",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 18,
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default PieChart;
