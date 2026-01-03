import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Full-time Jobs', 'Freelance Gigs', 'Internships', 'Part-time Jobs'],
  datasets: [
    {
      data: [53, 14, 19, 14],
      backgroundColor: ['#ffc300', '#d3d3d3', '#6f6f6f', '#023047'],
      borderColor: '#fff',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  cutout: '55%',
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const PieChart = () => {
  return (
    <div className='chart-container'>
      <h2 className='chart-heading'>Job Type Distribution</h2>
      <div className='chart-content-container child'>
        <Pie options={options} data={data} />
      </div>
    </div>
  );
};

export default PieChart;
