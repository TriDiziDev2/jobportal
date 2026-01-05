import './FooterCard.css';

const FooterCard = ({ icon, backgroundColor, color, title, borderColor }) => {
  return (
    <div
      className='footer-card-container'
      style={{
        background: backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <span className='footer-card-icon' style={{ color: color }}>
        {icon}
      </span>
      <p className='footer-card-title' style={{ color: color }}>
        {title}
      </p>
    </div>
  );
};

export default FooterCard;
