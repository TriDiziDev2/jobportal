import './AreaChart.css';

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
} from 'chart.js';

import { Line } from 'react-chartjs-2';

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

export const revenueTrendsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Courses',
      data: [35, 38, 42, 45, 48, 52],
      borderColor: '#6B7280',
      backgroundColor: 'rgba(107,114,128,0.25)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: 'Internships',
      data: [45, 48, 52, 55, 60, 65],
      borderColor: '#8B5CF6',
      backgroundColor: 'rgba(139,92,246,0.25)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: 'Subscriptions',
      data: [30, 32, 35, 38, 40, 43],
      borderColor: '#FACC15',
      backgroundColor: 'rgba(250,204,21,0.55)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

export const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#9CA3AF',
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255,255,255,0.15)',
        borderDash: [4, 4],
      },
      ticks: {
        color: '#9CA3AF',
      },
    },
    y: {
      grid: {
        color: 'rgba(255,255,255,0.15)',
        borderDash: [4, 4],
      },
      ticks: {
        color: '#9CA3AF',
      },
    },
  },
};

const AreaChart = () => {
  return (
    <div className='chart-container'>
      <h2 className='chart-heading'>Revenue Trends</h2>
      <p className='chart-text'>Multi-stream income growth</p>
      <Line options={lineOptions} data={revenueTrendsData} />
    </div>
  );
};

export default AreaChart;
