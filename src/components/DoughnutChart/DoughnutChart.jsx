import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Approved', 'Pending', 'Rejected', 'In Review'],
  datasets: [
    {
      data: [567, 234, 123, 89],
      backgroundColor: ['#FFC107', '#E0E0E0', '#9E9E9E', '#0B3C5D'],
      borderColor: '#06283D',
      borderWidth: 2,
      cutout: '65%',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const DoughnutChart = () => {
  return (
    <div className='chart-container'>
      <h2 className='chart-heading'>Application Status Overview</h2>
      <div className='chart-content-container'>
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
