import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const opportunityData = {
  labels: [
    'Full-time Jobs',
    'Tutor Sessions',
    'Courses',
    'Freelance Gigs',
    'Internships',
  ],
  datasets: [
    {
      data: [650, 890, 234, 178, 287],
      backgroundColor: ['#FACC15', '#06B6D4', '#22C55E', '#8B5CF6', '#9CA3AF'],
      borderColor: '#FFFFFF',
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const PieChart = () => {
  return (
    <div className='chart-container'>
      <h2 className='chart-heading'>Opportunity Distribution</h2>
      <p className='chart-text'>All platform offerings</p>
      <div style={{ width: '430px', height: '300px' }}>
        <Pie options={pieOptions} data={opportunityData} />
      </div>
    </div>
  );
};

export default PieChart;
