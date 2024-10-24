import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChart = ({ reviewDates }) => {
  const dates = reviewDates.map((date) => new Date(date).toLocaleDateString());
  const counts = Array(dates.length).fill(1); // You can modify this logic based on actual trends data

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Review Trends",
        data: counts,
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        fill: true,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
