import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const AreaChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Doanh thu",
      },
    },
  };

  const data = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
    datasets: [
      {
        label: "Doanh Thu",
        data: [140, 200, 178, 155, 211, 240, 260],
        fill: true,
        backgroundColor: "#FF8A48",
        // // background: 'rgb(255,255,255)',
        // // backgroundColor: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,138,72,0) 91%)',
        // // pointBorderColor:"#8884d8",
        // // pointBorderWidth:5,
        // // pointRadius:8,

        tension: 0.6,
      },
    ],
  };
  return <Line options={options} data={data} height="60vh" />;
};
export default AreaChart;
