import './Dashboard.css';

import { LuBriefcase } from 'react-icons/lu';
import { LuBuilding2 } from 'react-icons/lu';
import { GoPeople } from 'react-icons/go';
import { FiFileText } from 'react-icons/fi';
import { LuGraduationCap } from 'react-icons/lu';
import { LuPencil } from 'react-icons/lu';
import { GoPersonAdd } from 'react-icons/go';
import { FiDollarSign } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { BsActivity } from 'react-icons/bs';

import DashboardCard from '../../components/DashboardCard/DashboardCard';
import OverviewCard from '../../components/OverviewCard/OverviewCard';
import ActionsCard from '../../components/ActionsCard/ActionsCard';

import TopCompaniesCard from '../../components/TopCompaniesCard/TopCompaniesCard';
import ActivitiesCard from '../../components/ActivitiesCard/ActivitiesCard';
import SystemHealthCard from '../../components/SystemHealthCard/SystemHealthCard';
import SupportTickets from '../../components/SupportTickets/SupportTickets';
import RecentApplications from '../../components/RecentApplications/RecentApplications';
import AreaChart from '../../components/AreaChart/AreaChart';
import PieChart from '../../components/PieChart/PieChart';
import BarChart from '../../components/BarChart/BarChart';
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';

const data = [
  {
    id: 1,
    icon: <LuBriefcase />,
    title: 'Total Jobs',
    percentage: '+12%',
    number: '1,234',
    subTotal: '156 active postings',
  },
  {
    id: 2,
    icon: <LuBuilding2 />,
    title: 'Active Companies',
    percentage: '+15%',
    number: '456',
    subTotal: '89 verified, 123 pro',
  },
  {
    id: 3,
    icon: <GoPeople />,
    title: 'Total Users',
    percentage: '+8%',
    number: '8,456',
    subTotal: '567 active today',
  },
  {
    id: 4,
    icon: <FiFileText />,
    title: 'Applications',
    percentage: '+23%',
    number: '3,892',
    subTotal: '234 pending review',
  },
];

const dashboardData = [
  {
    id: 1,
    icon: <LuGraduationCap />,
    title: 'Internships',
    number: '234',
  },
  {
    id: 2,
    icon: <LuPencil />,
    title: 'Freelance Gigs',
    number: '178',
  },
  {
    id: 3,
    icon: <GoPersonAdd />,
    title: 'Cold Leads',
    number: '342',
  },
  {
    id: 4,
    icon: <FiDollarSign />,
    title: 'Revenue',
    number: '2.4M',
  },
];

const actionsData = [
  {
    id: 1,
    icon: <FiPlus />,
    title: 'Post New Job',
  },
  {
    id: 2,
    icon: <LuBuilding2 />,
    title: 'Add Company',
  },
  {
    id: 3,
    icon: <BsActivity />,
    title: 'View Reports',
  },
  {
    id: 4,
    icon: <GoPeople />,
    title: 'Manage Users',
  },
];

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h2 className='dashboard-heading'>Dashboard Overview</h2>
      <p className='dashboard-text'>
        Welcome back! Here's a comprehensive view of your job portal.
      </p>
      <div className='dashboard-card-grid-container'>
        {data.map((item) => (
          <DashboardCard key={item.id} {...item} />
        ))}
      </div>
      <div className='dashboard-overview-grid-container'>
        {dashboardData.map((item) => (
          <OverviewCard key={item.id} {...item} />
        ))}
      </div>
      <div className='dashboard-actions-container'>
        <h3 className='dashboard-actions-heading'>Quick Actions</h3>
        <div className='dashboard-actions-grid-container'>
          {actionsData.map((item) => (
            <ActionsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className='dashboard-charts-grid-container'>
        <AreaChart />
        <PieChart />
        <BarChart />
        <DoughnutChart />
      </div>
      <div className='dashboard-company-activity-health-grid-container'>
        <TopCompaniesCard />
        <ActivitiesCard />
        <SystemHealthCard />
      </div>
      <SupportTickets />
      <RecentApplications />
    </div>
  );
};

export default Dashboard;
