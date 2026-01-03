import './SubscriptionCard.css';

const SubscriptionCard = ({
  icon,
  title,
  percentage,
  plan,
  subscribers,
  cost,
  backgroundColor,
}) => {
  return (
    <div className='subscription-card-container'>
      <div className='subscription-card-icon-percent-container'>
        <div
          className='subscription-card-icon-container'
          style={{
            background: backgroundColor,
            fontSize: '16px',
            color: '#fff',
          }}
        >
          {icon}
        </div>
        <p className='subscription-card-percent'>{percentage}</p>
      </div>
      <h3 className='subscription-card-title'>{title}</h3>
      <p className='subscription-card-plan'>&#8377;{plan}</p>
      <div className='subscription-card-cost-container'>
        <p className='subscription-card-subscribers'>{subscribers}</p>
        <p className='subscription-card-cost'>{cost}</p>
      </div>
    </div>
  );
};

export default SubscriptionCard;
