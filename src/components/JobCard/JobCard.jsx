import './JobCard.css';

const JobCard = ({ icon, title, text, backgroundColor, color }) => {
  return (
    <div className='job-card-container'>
      <div
        className='job-card-icon-container'
        style={{ background: backgroundColor, color: color, fontSize: '20px' }}
      >
        {icon}
      </div>
      <div className='job-card-content-container'>
        <p className='job-card-title'>{title}</p>
        <p className='job-card-text'>{text}</p>
      </div>
    </div>
  );
};

export default JobCard;
