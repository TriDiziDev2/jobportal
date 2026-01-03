import './RevenueCard.css';

const RevenueCard = ({
  icon,
  title,
  percentage,
  number,
  text,
  backgroundColor,
}) => {
  return (
    <div className='revenue-card-container'>
      <div className='revenue-card-icon-percent-container'>
        <div
          className='revenue-card-icon-container'
          style={{ background: backgroundColor, fontSize: '24px' }}
        >
          {icon}
        </div>
        <p className='revenue-card-percent'>{percentage}</p>
      </div>
      <p className='revenue-card-title'>{title}</p>
      <p className='revenue-card-number'>{number}</p>
      <p className='revenue-card-text'>{text}</p>
    </div>
  );
};

export default RevenueCard;
