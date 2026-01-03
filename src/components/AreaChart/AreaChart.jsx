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

const platformActivityData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Full-time Jobs',
      data: [65, 78, 90, 82, 95, 110],
      borderColor: '#FFC107',
      backgroundColor: 'rgba(255, 193, 7, 0.25)',
      tension: 0.4,
      fill: true,
      pointRadius: 0,
    },
    {
      label: 'Internships',
      data: [25, 30, 35, 28, 36, 40],
      borderColor: '#4DD0E1',
      backgroundColor: 'rgba(77, 208, 225, 0.15)',
      tension: 0.4,
      fill: true,
      pointRadius: 0,
    },
    {
      label: 'Part-time Jobs',
      data: [15, 18, 22, 20, 28, 32],
      borderColor: '#90A4AE',
      backgroundColor: 'rgba(144, 164, 174, 0.15)',
      tension: 0.4,
      fill: true,
      pointRadius: 0,
    },
  ],
};

const options = {};

const AreaChart = () => {
  return (
    <div className='chart-container'>
      <h2 className='chart-heading'>Platform Activity Trends</h2>
      <div className='chart-content-container'>
        <Line options={options} data={platformActivityData} />
      </div>
    </div>
  );
};

export default AreaChart;
