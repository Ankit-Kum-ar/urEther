import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const BarChart = () => {
  const [selectedType, setSelectedType] = useState("Spending");
  const [selectedYear, setSelectedYear] = useState("2022");

  // Example data for "Spending" and "Saving"
  const chartData = {
    Spending: [4000, 6000, 7000, 7980, 5000, 8200, 7500, 4000, 6000, 8000, 7200, 6300],
    Saving: [2000, 3000, 4500, 5000, 4200, 6000, 5800, 2800, 3400, 4900, 4100, 3000],
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"], // Months
    datasets: [
      {
        label: selectedType,
        data: chartData[selectedType], // Dynamically switch dataset
        backgroundColor: (ctx) =>
          ctx.raw.index === 3
            ? "rgba(33, 113, 229, 1)" // Highlighted color for April
            : "rgba(33, 113, 229, 0.2)", // Default light blue color
        borderColor: "rgba(33, 113, 229, 1)", // Blue borders
        borderWidth: 1,
        hoverBackgroundColor: "rgba(39, 82, 231, 1)", // Darker blue on hover
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#f1f1f1" },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `$${context.raw}`, // Show value with a $ sign
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Statistics</h3>
        <div className="flex gap-4">
          {/* Type Dropdown */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="p-2 border rounded-lg text-gray-600"
          >
            <option value="Spending">Spending</option>
            <option value="Saving">Saving</option>
          </select>

          {/* Year Dropdown */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 border rounded-lg text-gray-600"
          >
            <option value="2022">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
