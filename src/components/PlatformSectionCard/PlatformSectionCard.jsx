import './PlatformSectionCard.css';

const PlatformSectionCard = ({ icon, title, percentage, number, subTotal }) => {
  return (
    <div className='platform-section-card-container'>
      <div className='platform-section-card-icon-percent-container'>
        <div className='platform-section-card-icon-container'>{icon}</div>
        <p className='platform-section-card-percent'>{percentage}</p>
      </div>
      <p className='platform-section-card-title'>{title}</p>
      <h3 className='platform-section-card-number'>{number}</h3>
      <p className='platform-section-card-subtotal'>{subTotal}</p>
    </div>
  );
};

export default PlatformSectionCard;
