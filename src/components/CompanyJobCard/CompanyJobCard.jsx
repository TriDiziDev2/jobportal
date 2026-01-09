import './CompanyJobCard.css';

import { LuBriefcase } from 'react-icons/lu';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiDollarSign } from 'react-icons/fi';
import { LuCalendar } from 'react-icons/lu';
import { GoPeople } from 'react-icons/go';
import { LuEye } from 'react-icons/lu';

const CompanyJobCard = ({
  role,
  title,
  type,
  location,
  salary,
  posted,
  applicants,
}) => {
  return (
    <div className='company-job-card-container'>
      <div className='company-job-card-header'>
        <div className='company-job-card-title-container'>
          <p className='company-job-card-role'>{role}</p>
          <p className='company-job-card-title'>{title}</p>
        </div>
        <button className='company-job-card-active-btn'>Active</button>
      </div>
      <div className='company-job-card-grid-container'>
        <div className='company-job-card-icon-container'>
          <LuBriefcase /> {type}
        </div>
        <div className='company-job-card-icon-container'>
          <HiOutlineLocationMarker /> {location}
        </div>
        <div className='company-job-card-icon-container'>
          <FiDollarSign /> {salary}
        </div>
        <div className='company-job-card-icon-container'>
          <LuCalendar /> {posted}
        </div>
      </div>
      <div className='company-job-card-footer-container'>
        <div className='company-job-card-icon-container'>
          <GoPeople /> {applicants}
        </div>
        <div className='company-job-card-icon-container'>
          <LuEye /> View Details & Applicants
        </div>
      </div>
    </div>
  );
};

export default CompanyJobCard;
