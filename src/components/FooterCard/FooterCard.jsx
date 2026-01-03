import './FooterCard.css';

const FooterCard = ({ icon, backgroundColor, color, title }) => {
  return (
    <div
      className='footer-card-container'
      style={{ background: backgroundColor, border: `1px solid ${color}` }}
    >
      <span className='footer-card-icon'>{icon}</span>
      <p className='footer-card-title'>{title}</p>
    </div>
  );
};

export default FooterCard;
