import './CompanyOverview.css';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { BiGlobe } from 'react-icons/bi';
import { LuFileText } from 'react-icons/lu';
import { LuBuilding } from 'react-icons/lu';
import { GoPerson } from 'react-icons/go';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { LuLinkedin } from 'react-icons/lu';

const CompanyOverview = () => {
  return (
    <div className='company-overview-container'>
      <div className='company-info-container'>
        <h3 className='company-info-heading'>Company Information</h3>
        <div className='company-info-grid-container'>
          <div className='company-info-contact-details-container'>
            <h3 className='company-contact-details-heading'>Contact Details</h3>
            <div className='company-info-icon-container'>
              <HiOutlineLocationMarker /> New York, NY
            </div>
            <div className='company-info-icon-container'>
              <FiMail /> hr@techcorp.com
            </div>
            <div className='company-info-icon-container'>
              <FiPhone /> +1 (555) 123-4567
            </div>
            <div className='company-info-icon-container'>
              <BiGlobe /> techcorp.com
            </div>
          </div>
          <div className='company-info-contact-details-container'>
            <h3 className='company-contact-details-heading'>Company Details</h3>
            <div className='company-info-company-details-container'>
              <p className='company-info-company-detail-heading'>Industry</p>
              <p className='company-info-company-detail-text'>Technology</p>
            </div>
            <div className='company-info-company-details-container'>
              <p className='company-info-company-detail-heading'>
                Company Size
              </p>
              <p className='company-info-company-detail-text'>
                2,500 employees
              </p>
            </div>
            <div className='company-info-company-details-container'>
              <p className='company-info-company-detail-heading'>Founded</p>
              <p className='company-info-company-detail-text'>2010</p>
            </div>
            <div className='company-info-company-details-container'>
              <p className='company-info-company-detail-heading'>
                Joined PLatform
              </p>
              <p className='company-info-company-detail-text'>2023-01-15</p>
            </div>
          </div>
        </div>
      </div>
      <div className='company-info-about-container'>
        <h3 className='company-info-about-heading'>About</h3>
        <p className='company-info-about-text'>
          Tech Corp is a leading technology company specializing in innovative
          software solutions. We are committed to creating cutting-edge products
          that transform businesses and improve lives. Our team of talented
          professionals works on exciting projects using the latest
          technologies.
        </p>
      </div>
      <div className='company-info-legal-container'>
        <h3 className='company-info-about-heading'>
          Registration & Legal Information
        </h3>
        <div className='company-info-grid-container'>
          <div className='company-info-legal-flex-container'>
            <div className='company-info-legal-icon-content-container'>
              <div className='company-info-legal-icon-container'>
                <LuFileText />
              </div>
              <div className='company-info-legal-content-container'>
                <p className='company-info-company-detail-heading'>
                  Registration Number
                </p>
                <p className='company-info-company-detail-text'>
                  TC-2020-NY-45678
                </p>
              </div>
            </div>
            <div className='company-info-legal-icon-content-container'>
              <div className='company-info-legal-icon-two-container'>
                <LuBuilding />
              </div>
              <div className='company-info-legal-content-container'>
                <p className='company-info-company-detail-heading'>
                  Company Type
                </p>
                <p className='company-info-company-detail-text'>
                  Private Limited
                </p>
              </div>
            </div>
            <div className='company-info-legal-icon-content-container'>
              <div className='company-info-legal-icon-two-container'>
                <GoPerson />
              </div>
              <div className='company-info-legal-content-container'>
                <p className='company-info-company-detail-heading'>
                  CEO/Founder
                </p>
                <p className='company-info-company-detail-text'>
                  John Anderson
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='company-info-legal-icon-content-container'>
              <div className='company-info-legal-icon-container'>
                <LuFileText />
              </div>
              <div className='company-info-legal-content-container'>
                <p className='company-info-company-detail-heading'>
                  GST Number
                </p>
                <p className='company-info-company-detail-text'>
                  29AABCT1234F1Z5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='company-info-office-grid-container'>
        <div className='company-info-office-timings-container'>
          <h3 className='company-info-about-heading'>Office Timings</h3>
          <div className='company-info-office-icon-content-container'>
            <div className='company-info-office-icon-container'>
              <FaRegClock />
            </div>
            <div className='company-info-office-content-container'>
              <p className='company-info-office-title'>Working Hours</p>
              <p className='company-info-office-desc'>9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        <div className='company-info-office-timings-container'>
          <h3 className='company-info-about-heading'>Working Days</h3>
          <div className='company-info-office-icon-content-container'>
            <div className='company-info-working-icon-container'>
              <MdOutlineCalendarToday />
            </div>
            <div className='company-info-office-content-container'>
              <p className='company-info-office-title'>Work Week</p>
              <p className='company-info-office-desc'>Monday - Friday</p>
            </div>
          </div>
        </div>
      </div>
      <div className='company-info-social-media-links-container'>
        <h3 className='company-info-about-heading'>
          Social Media & Professional Links
        </h3>
        <div className='company-info-social-media-justify-container'>
          <div className='company-info-linked-in-icon-content-container'>
            <div className='company-info-working-icon-container'>
              <LuLinkedin />
            </div>
            <div className='company-info-linked-in-content-container'>
              <p className='company-info-linked-in-title'>
                LinkedIn Company Page
              </p>
              <p className='company-info-linked-in-text'>
                https://linkedin.com/company/techcorp
              </p>
            </div>
          </div>
          <button className='company-info-visit-link-btn'>
            Visit LinkedIn
          </button>
        </div>
      </div>
      <div className='company-info-office-grid-container'>
        <div className='company-info-location-container'>
          <h3 className='company-info-about-heading'>Office Locations</h3>
          <div className='company-info-icon-container'>
            <HiOutlineLocationMarker className='location-icon' /> New York, NY
          </div>
          <div className='company-info-icon-container'>
            <HiOutlineLocationMarker className='location-icon' /> San Francisco,
            CA
          </div>
          <div className='company-info-icon-container'>
            <HiOutlineLocationMarker className='location-icon' /> Austin, TX
          </div>
          <div className='company-info-icon-container'>
            <HiOutlineLocationMarker className='location-icon' /> Boston, MA
          </div>
        </div>
        <div className='company-info-location-container'>
          <h3 className='company-info-about-heading'>Company Culture</h3>
          <div className='company-info-culture-container'>
            <span>Innovation</span>
            <span>Work-Life Balance</span>
            <span>Growth Opportunities</span>
            <span>Diverse & Inclusive</span>
          </div>
        </div>
      </div>
      <div className='company-info-benefits-container'>
        <h3 className='company-info-about-heading'>Benefits & Perks</h3>
        <div className='company-info-benefits-flex-container'>
          <span>Health Insurance</span>
          <span>401(k) Matching</span>
          <span>Remote Work Options</span>
          <span>Professional Development</span>
          <span>Unlimited PTO</span>
          <span>Stock Options</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
