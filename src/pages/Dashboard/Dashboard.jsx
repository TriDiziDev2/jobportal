import './Dashboard.css';

import { LuBriefcase } from 'react-icons/lu';
import { LuBuilding2 } from 'react-icons/lu';
import { GoPeople } from 'react-icons/go';
import { LuGraduationCap } from 'react-icons/lu';
import { GoPersonAdd } from 'react-icons/go';
import { FiDollarSign } from 'react-icons/fi';
import { TbBuildingCommunity } from 'react-icons/tb';
import { IoBookOutline } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { FiCreditCard } from 'react-icons/fi';
import { IoFlashOutline } from 'react-icons/io5';
import { FiTarget } from 'react-icons/fi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FiMousePointer } from 'react-icons/fi';
import { BsActivity } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineBarChart } from 'react-icons/ai';

import DashboardCard from '../../components/DashboardCard/DashboardCard';
import AreaChart from '../../components/AreaChart/AreaChart';
import PieChart from '../../components/PieChart/PieChart';

import PlatformSectionCard from '../../components/PlatformSectionCard/PlatformSectionCard';
import RevenueCard from '../../components/RevenueCard/RevenueCard';
import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import Card from '../../components/Card/Card';
import PerformanceCard from '../../components/PerformanceCard/PerformanceCard';
import FooterCard from '../../components/FooterCard/FooterCard';
import AreaCard from '../../components/AreaCard/AreaCard';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const data = [
  {
    id: 1,
    icon: <LuBriefcase />,
    title: 'Total Jobs',
    percentage: '+12%',
    number: '1,234',
    subTotal: '156 active postings',
    backgroundColor: '#ffc300',
  },
  {
    id: 2,
    icon: <LuBuilding2 />,
    title: 'Active Companies',
    percentage: '+15%',
    number: '456',
    subTotal: '89 verified, 123 pro',
    backgroundColor: '#ffc300',
  },
  {
    id: 3,
    icon: <GoPeople />,
    title: 'Total Users',
    percentage: '+8%',
    number: '8,456',
    subTotal: '567 active today',
    backgroundColor: '#ffc300',
  },
  {
    id: 4,
    icon: <GoPersonAdd />,
    title: 'Cold Leads',
    percentage: '+18%',
    number: '342',
    subTotal: '45 converted this week',
    backgroundColor: '#d3d3d3',
  },
];

const dashboardData = [
  {
    id: 1,
    icon: <TbBuildingCommunity />,
    title: 'Institutes',
    percentage: '+24%',
    number: '89',
    subTotal: '56 coaching, 33 trainers',
  },
  {
    id: 2,
    icon: <IoBookOutline />,
    title: 'Cources',
    percentage: '+31%',
    number: '234',
    subTotal: '189 published, 45 draft',
  },
  {
    id: 3,
    icon: <GoPerson />,
    title: 'Tutors',
    percentage: '+19%',
    number: '156',
    subTotal: '124 active, 890 bookings',
  },
  {
    id: 4,
    icon: <LuGraduationCap />,
    title: 'Internships',
    percentage: '+27%',
    number: '287',
    subTotal: '145 active postings',
  },
];

const cardsData = [
  {
    id: 1,
    icon: <FiDollarSign />,
    title: 'Total Revenue',
    percentage: '+32%',
    number: '4.8M',
    text: 'Last 30 days',
    backgroundColor: '#ffc300',
  },
  {
    id: 2,
    icon: <FiCreditCard />,
    title: 'Active Subscriptions',
    percentage: '+18%',
    number: '1,234',
    text: '89 expiring soon',
    backgroundColor: '#ffc300',
  },
  {
    id: 3,
    icon: <IoFlashOutline />,
    title: 'Quick Recruits',
    percentage: '+45%',
    number: '1.2M',
    text: '234 premium placements',
    backgroundColor: '#ffc300',
  },
  {
    id: 4,
    icon: <FiTarget />,
    title: 'Conversion Rate',
    percentage: '+2.3%',
    number: '12.4%',
    text: 'From cold leads',
    backgroundColor: '#22c55e',
  },
];

const subscriptionsData = [
  {
    id: 1,
    icon: <FiCreditCard />,
    title: 'Tutor Plan',
    percentage: '+24%',
    plan: '1,999/year',
    subscribers: '156 subscribers',
    cost: '312 K',
    backgroundColor: '#ffc300',
  },
  {
    id: 2,
    icon: <FiCreditCard />,
    title: 'Personal Trainer',
    percentage: '+31%',
    plan: '4,999/year',
    subscribers: '89 subscribers',
    cost: '445 K',
    backgroundColor: '#023047',
  },
  {
    id: 3,
    icon: <FiCreditCard />,
    title: 'Recruiter Elite',
    percentage: '+18%',
    plan: '2,999',
    subscribers: '234 subscribers',
    cost: '702 K',
    backgroundColor: '#6f6f6f',
  },
  {
    id: 4,
    icon: <FiCreditCard />,
    title: 'Recruiter Pro',
    percentage: '+22%',
    plan: '3,999',
    subscribers: '178 subscribers',
    cost: '712 K',
    backgroundColor: '#8b5cf6',
  },
  {
    id: 5,
    icon: <FiCreditCard />,
    title: 'Internship Plan',
    percentage: '+27%',
    plan: '99/post',
    subscribers: '445 posts',
    cost: '44 K',
    backgroundColor: '#22c55e',
  },
];

const notificationData = [
  {
    id: 1,
    icon: <LiaTelegramPlane />,
    title: 'Total Sent',
    number: '12,470',
    offer: '',
    color: '#ffc300',
  },
  {
    id: 2,
    icon: <IoNotificationsOutline />,
    title: 'Opened',
    number: '6,235',
    offer: '50% rate',
    color: '#06b6d4',
  },
  {
    id: 3,
    icon: <FiMousePointer />,
    title: 'Clicked',
    number: '1,871',
    offer: '15% rate',
    color: '#8b5cf6',
  },
  {
    id: 4,
    icon: <FiTarget />,
    title: 'Conversions',
    number: '549',
    offer: '644K revenue',
    color: '#22c55e',
  },
];

const upgradeData = [
  {
    id: 1,
    title: 'Upgrade to Pro',
    target: 'Free Users',
    sent: '3,250 sent',
    conversions: '146 conversions',
    cost: '145K',
    backgroundColor: '#22c55e',
    color: '#fff',
    type: 'sent',
  },
  {
    id: 2,
    title: 'Boost Your Job Search',
    target: 'All Users',
    sent: '4,850 sent',
    conversions: '175 conversions',
    cost: '173K',
    backgroundColor: '#ffc300',
    color: '#023047',
    type: 'active',
  },
  {
    id: 3,
    title: 'Year-End Special',
    target: 'All Users',
    sent: 'Scheduled',
    conversions: '',
    cost: '',
    backgroundColor: '#6f6f6f',
    color: '#fff',
    type: 'scheduled',
  },
];

const performanceData = [
  {
    id: 1,
    icon: <BsActivity />,
    title: 'Platform Health',
    number: '99.9%',
    performance: 'excellent',
    backgroundColor: '#22c55e',
  },
  {
    id: 2,
    icon: <GoPeople />,
    title: 'Active Sessions',
    number: '1,234',
    performance: 'high',
    backgroundColor: '#ffc300',
  },
  {
    id: 3,
    icon: <LiaTelegramPlane />,
    title: 'Push Delivery',
    number: '98.5%',
    performance: 'excellent',
    backgroundColor: '#22c55e',
  },
  {
    id: 4,
    icon: <IoFlashOutline />,
    title: 'Response Time',
    number: '142ms',
    performance: 'good',
    backgroundColor: '#06b6d4',
  },
];

const footerData = [
  {
    id: 1,
    icon: <FiPlus />,
    backgroundColor: '#ffc300',
    color: '#023047',
    borderColor: '',
    title: 'Post Job',
  },
  {
    id: 2,
    icon: <IoNotificationsOutline />,
    backgroundColor: '#023047',
    borderColor: '#ffc300',
    color: '#ffc300',
    title: 'Send Push',
  },
  {
    id: 3,
    icon: <TbBuildingCommunity />,
    backgroundColor: '#023047',
    borderColor: '#6f6f6f',
    color: '#f6f6f6',
    title: 'Add Institute',
  },
  {
    id: 4,
    icon: <IoBookOutline />,
    backgroundColor: '#023047',
    borderColor: '#6f6f6f',
    color: '#f6f6f6',
    title: 'Add Course',
  },
  {
    id: 5,
    icon: <GoPerson />,
    backgroundColor: '#023047',
    borderColor: '#6f6f6f',
    color: '#f6f6f6',
    title: 'Add Tutor',
  },
  {
    id: 6,
    icon: <AiOutlineBarChart />,
    backgroundColor: '#023047',
    borderColor: '#6f6f6f',
    color: '#f6f6f6',
    title: 'View Reports',
  },
];

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h2 className='dashboard-heading'>Welcome Sandeep</h2>
      <p className='dashboard-text'>
        Converting cold leads into active platform members - Real-time insights
        & analytics.
      </p>
      <div className='dashboard-card-grid-container'>
        {data.map((item) => (
          <DashboardCard key={item.id} {...item} />
        ))}
      </div>
      <div className='dashboard-platform-sections-container'>
        <h2 className='dashboard-platform-section-heading'>
          New Platform Sections
        </h2>
        <p className='dashboard-platform-section-text'>
          Institutes, Courses & Tutors - Expanding our services
        </p>
        <div className='dashboard-platform-section-grid-container'>
          {dashboardData.map((item) => (
            <PlatformSectionCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className='revenue-section-grid-container'>
        {cardsData.map((card) => (
          <RevenueCard key={card.id} {...card} />
        ))}
      </div>
      <div className='dashboard-charts-grid-container'>
        <AreaChart />
        <PieChart />
      </div>
      <div className='dashboard-subscription-card-container'>
        <div className='dashboard-subscription-heading-container'>
          <h2 className='dashboard-subscription-heading'>
            Subscription Plans Performance
          </h2>
          <p className='dashboard-subscription-text'>
            Revenue breakdown by plan type
          </p>
        </div>
        <div className='dashboard-subscription-grid-container'>
          {subscriptionsData.map((subscription) => (
            <SubscriptionCard key={subscription.id} {...subscription} />
          ))}
        </div>
      </div>
      <div className='dashboard-notification-card-container'>
        <div className='dashboard-notification-content-icon-container'>
          <div className='dashboard-notification-content-container'>
            <h2 className='dashboard-notification-heading'>
              Push Notification Performance
            </h2>
            <p className='dashboard-notification-text'>
              Converting users into paid subscribers
            </p>
          </div>
          <div className='dashboard-notification-icon-container'>
            <IoNotificationsOutline />
          </div>
        </div>
        <div className='dashboard-notification-grid-container'>
          {notificationData.map((item) => (
            <NotificationCard key={item.id} {...item} />
          ))}
        </div>
        <div className='dashboard-notification-upgarde-container'>
          {upgradeData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className='dashboard-user-conversion-funnel-container'>
        <div className='dashboard-user-conversion-funnel-heading-container'>
          <h2 className='dashboard-user-conversion-funnel-heading'>
            User Conversion Funnel
          </h2>
          <p className='dashboard-user-conversion-funnel-text'>
            From cold leads to paid subscribers
          </p>
        </div>
        <div className='dashboard-user-conversion-funnel-bar-container'>
          <div className='dashboard-user-conversion-funnel-content-container'>
            <h3 className='dashboard-user-conversion-funnel-title'>
              Cold Leads
            </h3>
            <div className='dashboard-user-conversion-funnel-users-percentage-container'>
              <p className='dashboard-user-conversion-funnel-users'>
                2,850 users
              </p>
              <p className='dashboard-user-conversion-funnel-percentage'>
                100%
              </p>
            </div>
          </div>
          <div className='dashboard-user-conversion-funnel-bar white'></div>
        </div>
        <div className='dashboard-user-conversion-funnel-bar-container'>
          <div className='dashboard-user-conversion-funnel-content-container'>
            <h3 className='dashboard-user-conversion-funnel-title'>
              Engaged Users
            </h3>
            <div className='dashboard-user-conversion-funnel-users-percentage-container'>
              <p className='dashboard-user-conversion-funnel-users'>
                1,425 users
              </p>
              <p className='dashboard-user-conversion-funnel-percentage'>50%</p>
            </div>
          </div>
          <div className='dashboard-user-conversion-funnel-bar grey'></div>
        </div>
        <div className='dashboard-user-conversion-funnel-bar-container'>
          <div className='dashboard-user-conversion-funnel-content-container'>
            <h3 className='dashboard-user-conversion-funnel-title'>
              Active Users
            </h3>
            <div className='dashboard-user-conversion-funnel-users-percentage-container'>
              <p className='dashboard-user-conversion-funnel-users'>
                855 users
              </p>
              <p className='dashboard-user-conversion-funnel-percentage'>30%</p>
            </div>
          </div>
          <div className='dashboard-user-conversion-funnel-bar grey'>
            <div className='dashboard-user-conversion-funnel-child-bar dark-blue'></div>
          </div>
        </div>
        <div className='dashboard-user-conversion-funnel-bar-container'>
          <div className='dashboard-user-conversion-funnel-content-container'>
            <h3 className='dashboard-user-conversion-funnel-title'>
              Trial Started
            </h3>
            <div className='dashboard-user-conversion-funnel-users-percentage-container'>
              <p className='dashboard-user-conversion-funnel-users'>
                428 users
              </p>
              <p className='dashboard-user-conversion-funnel-percentage'>15%</p>
            </div>
          </div>
          <div className='dashboard-user-conversion-funnel-bar grey'>
            <div className='dashboard-user-conversion-funnel-child-bar purple'></div>
          </div>
        </div>
        <div className='dashboard-user-conversion-funnel-bar-container'>
          <div className='dashboard-user-conversion-funnel-content-container'>
            <h3 className='dashboard-user-conversion-funnel-title'>
              Paid Subscribers
            </h3>
            <div className='dashboard-user-conversion-funnel-users-percentage-container'>
              <p className='dashboard-user-conversion-funnel-users'>
                342 users
              </p>
              <p className='dashboard-user-conversion-funnel-percentage'>12%</p>
            </div>
          </div>
          <div className='dashboard-user-conversion-funnel-bar grey'>
            <div className='dashboard-user-conversion-funnel-child-bar yellow'></div>
          </div>
        </div>
      </div>
      <div className='dashboard-area-activity-grid-container'>
        <AreaCard />
        <ActivityCard />
      </div>
      <div className='dashboard-system-performance-container'>
        <div className='dashboard-system-performance-heading-container'>
          <h2 className='dashboard-system-performance-heading'>
            System Performance
          </h2>
          <p className='dashboard-system-performance-text'>
            Real-time platform health metrics
          </p>
        </div>
        <div className='dashboard-system-performance-grid-container'>
          {performanceData.map((item) => (
            <PerformanceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className='dashboard-footer-grid-container'>
        {footerData.map((item) => (
          <FooterCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
