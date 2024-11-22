import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Graph = ({ dataPoints, color, label, xcolor }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels
    datasets: [
      {
        label: label, // Line label
        data: dataPoints, // Y-axis data
        borderColor: color, // Line color
        borderWidth: 2, // Line thickness
        fill: false, // Remove fill under the line
        tension: 0.4, // Curve of the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        ticks: {
          color: xcolor, // X-axis text color (optional for dark background)
        },
      },
      y: {
        ticks: {
          color: xcolor, // Y-axis text color (optional for dark background)
        },
      },
    },
  };

  return (
    <div style={{ width: '200px', height: '100px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
