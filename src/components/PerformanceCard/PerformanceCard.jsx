import './PerformanceCard.css';

const PerformanceCard = ({
  icon,
  title,
  number,
  performance,
  backgroundColor,
}) => {
  return (
    <div className='performance-card-container'>
      <div
        className='performance-card-icon-container'
        style={{ background: backgroundColor, fontSize: '24px' }}
      >
        {icon}
      </div>
      <p className='performance-card-title'>{title}</p>
      <h3 className='performance-card-number'>{number}</h3>
      <div
        className='performance-card-text-container'
        style={{ background: backgroundColor }}
      >
        {performance}
      </div>
    </div>
  );
};

export default PerformanceCard;
