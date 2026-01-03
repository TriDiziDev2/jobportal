import './NotificationCard.css';

const NotificationCard = ({ icon, title, number, offer, color }) => {
  return (
    <div className='notification-card-container'>
      <div className='notification-icon-title-container'>
        <span className='notification-card-icon' style={{ color: color }}>
          {icon}
        </span>
        <p className='notification-card-title'>{title}</p>
      </div>
      <h3 className='notification-card-number'>{number}</h3>
      <p className='notification-card-rate' style={{ color: color }}>
        {offer}
      </p>
    </div>
  );
};

export default NotificationCard;
