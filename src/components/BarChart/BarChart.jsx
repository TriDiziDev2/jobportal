import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [180000, 210000, 245000, 220000, 260000, 290000],
      backgroundColor: '#FFC300',
      borderRadius: 6,
      barThickness: 40,
    },
  ],
};

const BarChart = () => {
  return (
    <div className='chart-container'>
      <h2 className='chart-heading'>Revenue Growth</h2>
      <div className='chart-content-container'>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default BarChart;
