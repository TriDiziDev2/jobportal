import './ActivityCard.css';

import { FiCreditCard } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { IoBookOutline } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';

const activityData = [
  {
    id: 1,
    icon: <FiCreditCard />,
    title: 'New subscription',
    text: 'Tech Corp subscribed to Recruiter Elite',
    time: '5 mins ago',
    backgroundColor: '#ffc300',
  },
  {
    id: 2,
    icon: <GoPerson />,
    title: 'Tutor booking',
    text: 'Sarah booked 1-on-1 session with John (Web Dev)',
    time: '12 mins ago',
    backgroundColor: '#023047',
  },
  {
    id: 3,
    icon: <IoBookOutline />,
    title: 'Course published',
    text: 'Advanced React Patterns by Mike Johnson',
    time: '5 mins ago',
    backgroundColor: '#6f6f6f',
  },
  {
    id: 4,
    icon: <IoNotificationsOutline />,
    title: 'Push notification sent',
    text: 'Notification sent to the user',
    time: '5 mins ago',
    backgroundColor: '#8b5cf6',
  },
];

const ActivityCard = () => {
  return (
    <div className='activity-card-container'>
      <div className='activity-card-header'>
        <h3 className='activity-card-heading'>Recent Activities</h3>
        <p className='activity-card-text'>Live platform updates</p>
      </div>
      <div className='activity-card-data-container'>
        {activityData.map((item) => {
          const { id, icon, title, text, time, backgroundColor } = item;
          return (
            <div className='activity-card-item-container' key={id}>
              <div
                className='activity-card-icon-container'
                style={{ background: backgroundColor }}
              >
                {icon}
              </div>
              <div className='activity-card-content-container'>
                <h3 className='activity-card-title'>{title}</h3>
                <p className='activity-card-text'>{text}</p>
                <p className='activity-card-time'>{time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityCard;
