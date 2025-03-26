import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart({ data }) {
  const chartData = {
    labels: ['Approved', 'Rejected', 'Pending'],
    datasets: [
      {
        data: [data.approved, data.rejected, data.pending],
        backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          generateLabels: (chart) => {
            const data = chart.data;
            return data.labels.map((label, i) => ({
              text: `${label} (${data.datasets[0].data[i]}%)`,
              fillStyle: data.datasets[0].backgroundColor[i],
              pointStyle: 'circle',
            }));
          },
        },
      },
    },
    cutout: '70%',
  };

  return (
    <div className="chart-container">
      <h5>Policy Status Distribution</h5>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

export default DonutChart;
