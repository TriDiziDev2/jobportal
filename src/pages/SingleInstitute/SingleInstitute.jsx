import { Link, useParams } from 'react-router-dom';
import './SingleInstitute.css';

import { FaArrowLeft } from 'react-icons/fa6';
import { GoStarFill } from 'react-icons/go';
import { GoPeople } from 'react-icons/go';
import { PiMedalBold } from 'react-icons/pi';
import { FaTv } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const SingleInstitute = () => {
  const { institute } = useParams();

  const instituteTitle = institute
    .replaceAll('-', ' ')
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1));

  return (
    <div className='single-institute-container'>
      <div className='single-institute-header'>
        <div className='single-institute-header-icon-container'>
          <Link to='/institutes'>
            <FaArrowLeft className='left-arrow' />
          </Link>
        </div>
        <div className='single-institute-content-container'>
          <h2 className='single-institute-title'>{instituteTitle.join(' ')}</h2>
          <p className='single-institute-text'>
            Coaching Institute . San Francisco, CA
          </p>
        </div>
      </div>
      <div className='single-institute-grid-container'>
        <div className='single-institute-info-container'>
          <div className='single-institute-academy-container'>
            <div className='single-institute-academy-content-header'>
              <div className='single-institute-academy-title-container'>
                <h3 className='single-institute-academy-title'>
                  {instituteTitle.join(' ')}
                </h3>
                <span className='green'>VERIFIED</span>
                <span className='yellow'>PRO</span>
                <span className='light-green'>ACTIVE</span>
              </div>
              <p className='single-institute-academy-description'>
                Leading technology training institute offering comprehensive
                courses in software development, data science, and cloud
                technologies. Experienced instructors with industry expertise.
              </p>
              <div className='single-institute-academy-icons-container'>
                <div className='single-institute-star-icon-container'>
                  <GoStarFill className='star-icon' />
                  <p className='single-institute-rating-number'>4.8</p>
                  <span className='single-institute-rating-text'>Rating</span>
                </div>
                <div className='single-institute-star-icon-container'>
                  <GoPeople className='star-icon' />
                  <p
                    className='single-institute-rating-number'
                    style={{ color: '#f6f6f6' }}
                  >
                    2500
                  </p>
                  <span className='single-institute-rating-text'>Students</span>
                </div>
                <div className='single-institute-star-icon-container'>
                  <PiMedalBold className='star-icon' />
                  <p
                    className='single-institute-rating-number'
                    style={{ color: '#f6f6f6' }}
                  >
                    2500
                  </p>
                  <span className='single-institute-rating-text'>Students</span>
                </div>
              </div>
            </div>
            <div className='single-institute-academy-grid-container'>
              <div className='single-institute-academy-grid-item-one-container'>
                <div className='single-institute-grid-item-container'>
                  <p className='single-institute-grid-item-text'>
                    Training Mode
                  </p>
                  <div className='single-institute-grid-item-icon-container'>
                    <FaTv
                      className='grid-item-icon'
                      style={{ color: '#ffc300' }}
                    />{' '}
                    <span>Hybrid</span>
                  </div>
                </div>
                <div className='single-institute-grid-item-container'>
                  <p className='single-institute-grid-item-text'>
                    Training Mode
                  </p>
                  <div className='single-institute-grid-item-icon-container'>
                    <HiOutlineLocationMarker
                      className='grid-item-icon'
                      style={{ color: '#6f6f6f' }}
                    />{' '}
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <div className='single-institute-academy-grid-item-one-container'>
                <div className='single-institute-grid-item-container'>
                  <p className='single-institute-grid-item-text'>Experience</p>
                  <div className='single-institute-grid-item-icon-container'>
                    <span>10 years</span>
                  </div>
                </div>
                <div className='single-institute-grid-item-container'>
                  <p className='single-institute-grid-item-text'>Joined</p>
                  <div className='single-institute-grid-item-icon-container'>
                    <span>3/14/2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='single-institute-sidebar-container'></div>
      </div>
    </div>
  );
};

export default SingleInstitute;
