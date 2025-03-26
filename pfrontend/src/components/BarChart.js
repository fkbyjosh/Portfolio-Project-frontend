import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart({ data }) {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Approved',
        data: data.map(item => item.approved),
        backgroundColor: '#28a745',
      },
      {
        label: 'Rejected',
        data: data.map(item => item.rejected),
        backgroundColor: '#dc3545',
      },
      {
        label: 'Pending',
        data: data.map(item => item.pending),
        backgroundColor: '#ffc107',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h5>Monthly Policy Trends</h5>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarChart;
