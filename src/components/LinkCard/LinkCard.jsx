import { NavLink } from 'react-router-dom';
import './LinkCard.css';

const LinkCard = ({ icon, title, link }) => {
  return (
    <div className='linkcard-container'>
      <NavLink to={link}>
        <span className='linkcard-icon'>{icon}</span>
        <span className='linkcard-title'>{title}</span>
      </NavLink>
    </div>
  );
};

export default LinkCard;
