import './CompanyCard.css';

const CompanyCard = ({ icon, title, number, backgroundColor, color }) => {
  return (
    <div className='company-card-container'>
      <div
        className='company-card-icon-container'
        style={{ background: backgroundColor, color: color }}
      >
        {icon}
      </div>
      <p className='company-card-title'>{title}</p>
      <p className='company-card-number'>{number}</p>
    </div>
  );
};

export default CompanyCard;
