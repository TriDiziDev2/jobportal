import './DashboardCard.css';

import { MdArrowOutward } from 'react-icons/md';

const DashboardCard = ({
  icon,
  title,
  percentage,
  number,
  subTotal,
  backgroundColor,
}) => {
  return (
    <div className='dashboard-card-container'>
      <div className='dashboard-card-icon-percent-container'>
        <div
          className='dashboard-card-icon-container'
          style={{ background: backgroundColor, fontSize: '24px' }}
        >
          {icon}
        </div>
        <div className='dashboard-card-percentage-container'>
          <MdArrowOutward className='dashboard-card-up-icon' />
          <p className='dashboard-card-percentage-text'>{percentage}</p>
        </div>
      </div>
      <p className='dashboard-card-title'>{title}</p>
      <p className='dashboard-card-number'>{number}</p>
      <p className='dashboard-card-sub-total'>{subTotal}</p>
      <div className='dashboard-card-gradient-container'></div>
    </div>
  );
};

export default DashboardCard;
