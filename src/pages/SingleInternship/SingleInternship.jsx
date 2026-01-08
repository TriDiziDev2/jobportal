import { Link, useParams } from 'react-router-dom';
import './SingleInternship.css';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiDollarSign } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import { GoPeople } from 'react-icons/go';

import JobCard from '../../components/JobCard/JobCard';
import { useState } from 'react';
import InternshipCard from '../../components/InternshipCard/InternshipCard';

const data = [
  {
    id: 1,
    icon: <HiOutlineLocationMarker />,
    title: 'Location',
    text: 'New York, NY',
    backgroundColor: '#ffc300',
    color: '#023047',
  },
  {
    id: 2,
    icon: <IoMdTime />,
    title: 'Duration',
    text: '3 months',
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 3,
    icon: <FiDollarSign />,
    title: 'Stipend',
    text: '$25/hr',
    backgroundColor: '#ffc300',
    color: '#023047',
  },
  {
    id: 4,
    icon: <FiCalendar />,
    title: 'Start Date',
    text: '2025-01-15',
    backgroundColor: '#6f6f6f',
    color: '#f6f6f6',
  },
  {
    id: 5,
    icon: <GoPeople />,
    title: 'Spots',
    text: '5',
    backgroundColor: '#ffc300',
    color: '#023047',
  },
];

const applicantsData = [
  {
    id: 1,
    title: 'Total',
    number: '5',
    color: '#f6f6f6',
  },
  {
    id: 2,
    title: 'Pending',
    number: '1',
    color: '#ffc300',
  },
  {
    id: 3,
    title: 'Shortlisted',
    number: '',
    color: '',
  },
  {
    id: 4,
    title: 'Rejected',
    number: '1',
    color: '#6f6f6f',
  },
  {
    id: 5,
    title: 'Accepted',
    number: '1',
    color: '#ffc300',
  },
];

const applications = [
  {
    id: 1,
    name: 'Alex Johnson',
    rating: '4.7',
    type: 'Shortlisted',
    education: 'Mit - Computer Science',
    location: 'Boston, MA',
    gpa: 'GPA: 3.9',
    applied: 'Applied 2024-12-02',
    company: 'Class of 2026',
    skills: ['JavaScript', 'React', 'Python', 'Git', 'HTML/CSS'],
    accept: 'Accept',
    reject: '',
    shortList: '',
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 2,
    name: 'Emma Williams',
    rating: '4.5',
    type: 'Pending',
    education: 'Columbia University - Software Engineering',
    location: 'New York, NY',
    gpa: 'GPA: 3.8',
    applied: 'Applied 2024-12-03',
    company: 'Class of 2025',
    skills: ['Java', 'React', 'Node js', 'SQL', 'AWS'],
    accept: '',
    reject: 'Reject',
    shortList: 'Shortlist',
    backgroundColor: '#d3d3d3',
    color: '#023047',
  },
  {
    id: 3,
    name: 'James Chen',
    rating: '4.9',
    type: 'Shortlisted',
    education: 'Princeton University - Computer Science',
    location: 'Priceton, NJ',
    gpa: 'GPA: 4.0',
    applied: 'Applied 2024-12-04',
    company: 'Class of 2026',
    skills: [
      'Python',
      'JavaScript',
      'C++',
      'Machine Learning',
      'Data Structures',
    ],
    accept: 'Accept',
    reject: '',
    shortList: '',
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 4,
    name: 'Sophia Martinez',
    rating: '4.2',
    type: 'Rejected',
    education: 'UPenn - Information Systems',
    location: 'Philadelphia, PA',
    gpa: 'GPA: 3.7',
    applied: 'Applied 2024-12-05',
    company: 'Class of 2025',
    skills: ['React', 'JavaScript', 'MongoDB', 'Express', 'Node js '],
    accept: '',
    reject: '',
    shortList: '',
    backgroundColor: '#6f6f6f',
    color: '#f6f6f6',
  },
  {
    id: 5,
    name: 'Ryan Taylor',
    rating: '4.8',
    type: 'Accepted',
    education: 'Yale University - Computer Science',
    location: 'New Haven, CT',
    gpa: 'GPA: 3.9',
    applied: 'Applied 2024-12-01',
    company: 'Class of 2026',
    skills: ['TypeScript', 'React', 'GraphQL', 'Docker', 'PostgreSQL'],
    accept: '',
    reject: '',
    shortList: '',
    backgroundColor: '#ffc300',
    color: '#023047',
  },
];

const btns = ['All', 'Pending', 'Shortlisted', 'Rejected', 'Accepted'];

const SingleInternship = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');

  const { id } = useParams();

  const title = id
    .replaceAll('-', ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  const handleSelectBtn = (btn) => {
    setSelectedBtn(btn);
  };

  return (
    <div className='single-job-container'>
      <div className='single-job-header'>
        <div className='single-job-heading-container'>
          <Link to='/internship-hub'>
            <p className='back-to-internship'>
              <FaArrowLeft /> Back to Internship
            </p>
          </Link>
          <h1 className='single-job-heading'>{title.join(' ')}</h1>
          <p className='single-job-text'>Tech Corp</p>
        </div>
        <div className='single-internship-btn-container'>
          <button className='single-job-active-btn'>Active</button>
          <button className='single-internship-paid-btn'>Paid</button>
        </div>
      </div>
      <div className='single-job-info-container'>
        <div className='single-internship-info-grid-container'>
          {data.map((item) => (
            <JobCard key={item.id} {...item} />
          ))}
        </div>
        <div className='single-job-requirements-container'>
          <h3 className='single-job-description'>Description</h3>
          <p className='single-job-description-text'>
            Join our engineering team for an exciting summer internship. You
            will work on real projects and gain hands-on experience with modern
            technologies.
          </p>
          <div className='single-job-requirements'>
            <h3 className='single-job-requirements-heading'>Requirements</h3>
            <ul>
              <li>
                Currently pursuing a degree in Computer Science or related field
              </li>
              <li>Basic knowledge of JavaScript and React</li>
              <li>Strong problem-solving skills</li>
              <li>Good communication skills</li>
              <li>Ability to work in a team environment</li>
            </ul>
          </div>
          <div className='single-job-requirements'>
            <h3 className='single-job-requirements-heading'>
              Responsibilities
            </h3>
            <ul>
              <li>Assist in developing web applications</li>
              <li>Write clean, maintainable code</li>
              <li>Participate in code reviews</li>
              <li>Collaborate with senior developers</li>
              <li>Learn and apply new technologies</li>
            </ul>
          </div>
        </div>
        <div className='single-job-benifits-container'>
          <h3 className='single-job-description'>Benefits</h3>
          <div className='single-job-benefits'>
            <span>Paid Internship</span>
            <span>Mentorship Program</span>
            <span>Networking Opportunities</span>
            <span>Certificate of Completion</span>
            <span>Potential Full-time Offer</span>
          </div>
        </div>
      </div>
      <div className='single-job-applications-container'>
        <div className='single-job-applicants-header'>
          <div className='single-job-applicants-heading-container'>
            <h3 className='applicants-heading'>Student Applications (5)</h3>
            <button className='applicants-export-btn'>
              <MdOutlineFileDownload /> Export List
            </button>
          </div>
          <div className='single-internship-applicants-grid-container'>
            {applicantsData.map((item) => {
              const { id, title, number, color } = item;
              return (
                <div className='applicants-item-container' key={id}>
                  <p className='applicant-item-title'>{title}</p>
                  <p className='applicant-item-number' style={{ color: color }}>
                    {number}
                  </p>
                </div>
              );
            })}
          </div>
          <div className='single-job-applicants-btn-container'>
            {btns.map((btn) => (
              <button
                key={btn}
                className={
                  btn === selectedBtn
                    ? 'single-job-applicant-btn active'
                    : 'single-job-applicant-btn'
                }
                onClick={() => handleSelectBtn(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className='single-job-applications-flex-container'>
          {applications.map((item) => (
            <InternshipCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleInternship;
