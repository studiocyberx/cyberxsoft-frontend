import { Bubble } from "react-chartjs-2";

function ConnectivityChart() {
  const data = {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
          {
            x: 50,
            y: 25,
            r: 12,
          },
          {
            x: 10,
            y: 40,
            r: 8,
          },
        ],
        backgroundColor: "rgb(255, 167, 27)",
      },
      {
        label: "Second Dataset",
        data: [
          {
            x: 30,
            y: 20,
            r: 10,
          },
          {
            x: 60,
            y: 35,
            r: 15,
          },
          {
            x: 25,
            y: 15,
            r: 12,
          },
          {
            x: 45,
            y: 45,
            r: 8,
          },
        ],
        backgroundColor: "rgb(0, 120, 226)",
      },
    ],
  };
  return <Bubble data={data} />;
}

export default ConnectivityChart;
