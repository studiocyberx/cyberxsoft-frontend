import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    labels: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Function as a Service (FaaS)",
    ],
    datasets: [
      {
        label: "Cloud Services Usage",
        data: [35, 25, 30, 10],
        backgroundColor: ["#02AFBB", "#0885F3", "#FAB13F", "#005EB7"],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Cloud Services Usage Distribution",
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

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
