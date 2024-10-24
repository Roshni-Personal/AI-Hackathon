import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ ratingDistribution }) => {
  const data = {
    labels: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
    datasets: [
      {
        label: "Rating Distribution",
        data: [
          ratingDistribution.oneStar,
          ratingDistribution.twoStar,
          ratingDistribution.threeStar,
          ratingDistribution.fourStar,
          ratingDistribution.fiveStar,
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default PieChart;
