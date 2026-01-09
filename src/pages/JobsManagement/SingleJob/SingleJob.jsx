import { useParams } from 'react-router-dom';
import './SingleJob.css';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuBriefcase } from 'react-icons/lu';
import { FiDollarSign } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';
import { MdOutlineFileDownload } from 'react-icons/md';

import JobCard from '../../../components/JobCard/JobCard';
import { useState } from 'react';
import ApplicationCard from '../../../components/ApplicationCard/ApplicationCard';

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
    icon: <LuBriefcase />,
    title: 'Job Type',
    text: 'Full-time',
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 3,
    icon: <FiDollarSign />,
    title: 'Salary',
    text: '$120K - $150K',
    backgroundColor: '#ffc300',
    color: '#023047',
  },
  {
    id: 4,
    icon: <FiCalendar />,
    title: 'Location',
    text: 'New York, NY',
    backgroundColor: '#6f6f6f',
    color: '#f6f6f6',
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
    title: 'Hired',
    number: '1',
    color: '#ffc300',
  },
];

const applications = [
  {
    id: 1,
    name: 'John Smith',
    rating: '4.5',
    type: 'Shortlisted',
    education: 'BS Computer Science - MIT',
    location: 'New York, NY',
    experience: '6 years exp',
    applied: 'Applied 2024-12-02',
    company: 'Google',
    skills: ['React', 'TypeScript', 'Node js', 'Redux', 'GraphQL'],
    hire: 'Hire',
    reject: '',
    shortList: '',
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: '4.8',
    type: 'Pending',
    education: 'MS Software Engineering - Stanford',
    location: 'Brooklyn, NY',
    experience: '5 years exp',
    applied: 'Applied 2024-12-03',
    company: 'Amazon',
    skills: ['React', 'JavaScript', 'AWS', 'Docker', 'MongoDB'],
    hire: '',
    reject: 'Reject',
    shortList: 'Shortlist',
    backgroundColor: '#d3d3d3',
    color: '#023047',
  },
  {
    id: 3,
    name: 'Michael Chen',
    rating: '4.6',
    type: 'Shortlisted',
    education: 'BS Computer Engineering - Berkeley',
    location: 'Queens, NY',
    experience: '7 years exp',
    applied: 'Applied 2024-12-04',
    company: 'Apple',
    skills: ['React', 'Vue js', 'TypeScript', 'Python', 'PostgreSQL'],
    hire: 'Hire',
    reject: '',
    shortList: '',
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 4,
    name: 'Emily Davis',
    rating: '3.9',
    type: 'Rejected',
    education: 'BS Information Systems - NYU',
    location: 'Manhattan, NY',
    experience: '4 years exp',
    applied: 'Applied 2024-12-05',
    company: 'IBM',
    skills: ['React', 'JavaScript', 'CSS', 'Firebase', 'Git'],
    hire: '',
    reject: '',
    shortList: '',
    backgroundColor: '#6f6f6f',
    color: '#f6f6f6',
  },
  {
    id: 5,
    name: 'David Wilson',
    rating: '4.9',
    type: 'Hired',
    education: 'MS Computer Science - CMU',
    location: 'Jersey City, NJ',
    experience: '8 years exp',
    applied: 'Applied 2024-12-01',
    company: 'LinkedIn',
    skills: ['React', 'Angular', 'Node js', 'Kubernetes', 'Jenkins'],
    hire: '',
    reject: '',
    shortList: '',
    backgroundColor: '#ffc300',
    color: '#023047',
  },
];

const btns = ['All', 'Pending', 'Shortlisted', 'Rejected', 'Hired'];

const SingleJob = () => {
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
          <h1 className='single-job-heading'>{title.join(' ')}</h1>
          <p className='single-job-text'>Tech Corp</p>
        </div>
        <button className='single-job-active-btn'>Active</button>
      </div>
      <div className='single-job-info-container'>
        <div className='single-job-info-grid-container'>
          {data.map((item) => (
            <JobCard key={item.id} {...item} />
          ))}
        </div>
        <div className='single-job-requirements-container'>
          <h3 className='single-job-description'>Description</h3>
          <p className='single-job-description-text'>
            We are looking for an experienced React Developer to join our
            growing team. You will be responsible for developing and maintaining
            web applications using React.js and related technologies.
          </p>
          <div className='single-job-requirements'>
            <h3 className='single-job-requirements-heading'>Requirements</h3>
            <ul>
              <li>5+ years of experience with React.js</li>
              <li>Strong knowledge of JavaScript/TypeScript</li>
              <li>Experience with Redux, React Router</li>
              <li>Familiarity with RESTful APIs</li>
              <li>Experience with Git version control</li>
              <li>Excellent problem-solving skills</li>
            </ul>
          </div>
          <div className='single-job-requirements'>
            <h3 className='single-job-requirements-heading'>
              Responsibilities
            </h3>
            <ul>
              <li>Develop new user-facing features using React.js</li>
              <li>Build reusable components and front-end libraries</li>
              <li>Optimize applications for maximum speed and scalability</li>
              <li>Collaborate with back-end developers and designers</li>
              <li>Participate in code reviews and mentoring</li>
            </ul>
          </div>
        </div>
        <div className='single-job-benifits-container'>
          <h3 className='single-job-description'>Benefits</h3>
          <div className='single-job-benefits'>
            <span>Health Insurance</span>
            <span>Remote Work</span>
            <span>401(k)</span>
            <span>Paid Time Off</span>
            <span>Professional Development</span>
          </div>
        </div>
      </div>
      <div className='single-job-applications-container'>
        <div className='single-job-applicants-header'>
          <div className='single-job-applicants-heading-container'>
            <h3 className='applicants-heading'>Applications (5)</h3>
            <button className='applicants-export-btn'>
              <MdOutlineFileDownload /> Export List
            </button>
          </div>
          <div className='single-job-applicants-grid-container'>
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
            <ApplicationCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
