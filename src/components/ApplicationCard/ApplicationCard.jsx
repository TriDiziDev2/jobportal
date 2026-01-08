import './ApplicationCard.css';

import { FaRegStar } from 'react-icons/fa6';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { PiMedal } from 'react-icons/pi';
import { IoMdTime } from 'react-icons/io';
import { LuBuilding2 } from 'react-icons/lu';
import { LuEye } from 'react-icons/lu';
import { FiCheckCircle } from 'react-icons/fi';
import { RxCrossCircled } from 'react-icons/rx';
import { FiMessageSquare } from 'react-icons/fi';

const ApplicationCard = ({
  name,
  rating,
  type,
  education,
  location,
  experience,
  applied,
  company,
  skills,
  hire,
  reject,
  shortList,
  backgroundColor,
  color,
}) => {
  return (
    <div className='application-card-container'>
      <div className='application-icon-content-container'>
        <div className='application-icon-container'>{name[0]}</div>
        <div className='application-card-flex-container'>
          <div className='application-card-icon-header-container'>
            <div className='application-card-content-container'>
              <h3 className='application-card-name'>{name}</h3>
              <p className='application-card-education'>{education}</p>
            </div>
            <div className='application-card-star-type-container'>
              <div className='application-card-star-icon'>
                <FaRegStar className='star-icon' />{' '}
                <span className='application-card-rating'>{rating}</span>
              </div>
              <div
                className='application-card-type-container'
                style={{ background: backgroundColor, color: color }}
              >
                {type}
              </div>
            </div>
          </div>
          <div className='application-card-grid-container'>
            <div className='application-card-grid-item-container'>
              <HiOutlineLocationMarker /> <span>{location}</span>
            </div>
            <div className='application-card-grid-item-container'>
              <PiMedal /> <span>{experience}</span>
            </div>
            <div className='application-card-grid-item-container'>
              <IoMdTime /> <span>{applied}</span>
            </div>
            <div className='application-card-grid-item-container'>
              <LuBuilding2 /> <span>{company}</span>
            </div>
          </div>
          <div className='application-card-skills-container'>
            {skills.map((skill) => (
              <div className='skill-container' key={skill}>
                {skill}
              </div>
            ))}
          </div>
          <div className='application-card-view-message-container'>
            <div className='application-card-view-container'>
              <LuEye /> <span>View Profile</span>
            </div>
            {hire && (
              <div className='application-card-hire-container'>
                <FiCheckCircle /> <span>{hire}</span>
              </div>
            )}
            {shortList && (
              <div className='application-card-hire-container'>
                <FiCheckCircle /> <span>{shortList}</span>
              </div>
            )}
            {reject && (
              <div className='application-card-reject-container'>
                <RxCrossCircled /> <span>{reject}</span>
              </div>
            )}
            <div className='application-card-message-container'>
              <FiMessageSquare /> <span>Message</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
