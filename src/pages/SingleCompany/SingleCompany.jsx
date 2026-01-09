import { Link, useParams } from 'react-router-dom';
import './SingleCompany.css';

import { RiArrowLeftLine } from 'react-icons/ri';
import { LuBuilding2 } from 'react-icons/lu';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FiBriefcase } from 'react-icons/fi';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoPeople } from 'react-icons/go';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import { useState } from 'react';
import CompanyOverview from '../../components/CompanyOverview/CompanyOverview';
import CompanyJobs from '../../components/CompanyJobs/CompanyJobs';

const data = [
  {
    id: 1,
    icon: <FiBriefcase />,
    title: 'Total Jobs',
    number: 12,
    backgroundColor: '#ffc300',
    color: '#023047',
  },
  {
    id: 2,
    icon: <FaArrowTrendUp />,
    title: 'Active Jobs',
    number: 11,
    backgroundColor: '#ffc300',
    color: '#023047',
  },
  {
    id: 3,
    icon: <GoPeople />,
    title: 'Total Applications',
    number: 727,
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 4,
    icon: <FaArrowTrendUp />,
    title: 'Avg per Job',
    number: 61,
    backgroundColor: '#6f6f6f',
    color: '#f6f6f6',
  },
];

const SingleCompany = () => {
  const [selectedBtn, setSelectedBtn] = useState('overview');
  const { id } = useParams();

  const title = id
    .replaceAll('-', ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return (
    <div className='single-company-page-container'>
      <div className='single-company-page-header'>
        <Link to='/companies'>
          <p className='single-company-page-link'>
            <RiArrowLeftLine /> Back to Companies
          </p>
        </Link>
        <div className='single-company-page-content-btn-container'>
          <div className='single-company-page-icon-content-container'>
            <div className='single-company-page-icon-container'>
              <LuBuilding2 />
            </div>
            <div className='single-company-page-content-container'>
              <div className='single-company-page-heading-container'>
                <h3 className='single-company-page-heading'>
                  {title.join(' ')}
                </h3>
                <IoMdCheckmarkCircleOutline className='company-circle-icon' />
              </div>
              <p className='single-company-page-text'>Technology</p>
            </div>
          </div>
          <button className='single-company-page-active-btn'>Active</button>
        </div>
      </div>
      <div className='single-company-page-grid-container'>
        {data.map((item) => (
          <CompanyCard key={item.id} {...item} />
        ))}
      </div>
      <div className='single-company-page-btn-container'>
        <span
          className={selectedBtn === 'overview' ? 'btn selected-btn' : 'btn'}
          onClick={() => setSelectedBtn('overview')}
        >
          Overview
        </span>
        <span
          className={selectedBtn === 'jobs' ? 'btn selected-btn' : 'btn'}
          onClick={() => setSelectedBtn('jobs')}
        >
          Jobs (12)
        </span>
      </div>
      {selectedBtn === 'overview' && <CompanyOverview />}
      {selectedBtn === 'jobs' && <CompanyJobs />}
    </div>
  );
};

export default SingleCompany;
