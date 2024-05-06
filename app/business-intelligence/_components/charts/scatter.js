import { Scatter } from "react-chartjs-2";

function ScatterChart() {
  const data = {
    datasets: [
      {
        label: "Scatter Dataset 1",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
          {
            x: 5,
            y: 2,
          },
          {
            x: -5,
            y: 8,
          },
          {
            x: 3,
            y: 4,
          },
          {
            x: -2,
            y: 6,
          },
          {
            x: 9,
            y: 1,
          },
          {
            x: -8,
            y: 3,
          },
          {
            x: 12,
            y: 7,
          },
          {
            x: -12,
            y: 9,
          },
        ],
        backgroundColor: "rgb(255, 167, 27)",
      },
      {
        label: "Scatter Dataset 2",
        data: [
          {
            x: 2,
            y: 3,
          },
          {
            x: 7,
            y: 11,
          },
          {
            x: -3,
            y: 2,
          },
          {
            x: 1,
            y: 9,
          },
          {
            x: 4,
            y: 1,
          },
          {
            x: -9,
            y: 4,
          },
          {
            x: 8,
            y: 6,
          },
          {
            x: -1,
            y: 8,
          },
          {
            x: 6,
            y: 5,
          },
          {
            x: -6,
            y: 10,
          },
          {
            x: 11,
            y: 2,
          },
        ],
        backgroundColor: "rgb(0, 120, 226)",
      },
    ],
  };
  return <Scatter data={data} />;
}

export default ScatterChart;
