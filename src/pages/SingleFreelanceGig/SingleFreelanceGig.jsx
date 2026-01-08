import { Link, useParams } from 'react-router-dom';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiDollarSign } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import { GoPeople } from 'react-icons/go';
import { LuPencil } from 'react-icons/lu';

import JobCard from '../../components/JobCard/JobCard';
import { useState } from 'react';
import InternshipCard from '../../components/InternshipCard/InternshipCard';
import FreelanceGigsCard from '../../components/FreelanceGigsCard/FreelanceGigsCard';

const data = [
  {
    id: 1,
    icon: <HiOutlineLocationMarker />,
    title: 'Location',
    text: 'Remote',
    backgroundColor: '#ffc300',
    color: '#023047',
  },
  {
    id: 2,
    icon: <IoMdTime />,
    title: 'Duration',
    text: '2-3 months',
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 3,
    icon: <FiDollarSign />,
    title: 'Budget',
    text: '$75 - $150/hr',
    backgroundColor: '#ffc300',
    color: '#023047',
  },
  {
    id: 4,
    icon: <FiCalendar />,
    title: 'Deadline',
    text: '2025-12-15',
    backgroundColor: '#6f6f6f',
    color: '#f6f6f6',
  },
  {
    id: 5,
    icon: <LuPencil />,
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
    title: 'Hired',
    number: '1',
    color: '#ffc300',
  },
];

const applications = [
  {
    id: 1,
    name: 'Marcus Johnson',
    rating: '4.9',
    type: 'Shortlisted',
    experience: '8 years of experience',
    location: 'San Francisco, CA',
    time: 'Available immediately',
    projects: '87 projects',
    salary: '$120/hr',
    skills: ['React', 'Nodejs', 'MongoDB', 'AWS', 'Stripe', 'Docker'],
    hire: 'Hire',
    reject: '',
    shortList: '',
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 2,
    name: 'Lisa Anderson',
    rating: '4.8',
    type: 'Pending',
    experience: '6 years of experience',
    location: 'Austin, TX',
    time: 'Available in 1 week',
    projects: '65 projects',
    salary: '$100/hr',
    skills: ['React', 'Nodejs', 'PostgreSQL', 'PayPal', 'GraphQL', 'Redis'],
    hire: '',
    reject: 'Reject',
    shortList: 'Shortlist',
    backgroundColor: '#d3d3d3',
    color: '#023047',
  },
  {
    id: 3,
    name: 'Kevin Park',
    rating: '5',
    type: 'Shortlisted',
    experience: '10 years of experience',
    location: 'Seattle, WA',
    time: 'Available in 2 weeks',
    projects: '32 projects',
    salary: '$150/hr',
    skills: ['React', 'Vue js', 'TypeScript', 'Python', 'PostgreSQL'],
    hire: 'Hire',
    reject: '',
    shortList: '',
    backgroundColor: '#023047',
    color: '#f6f6f6',
  },
  {
    id: 4,
    name: 'Rachel Green',
    rating: '4.5',
    type: 'Rejected',
    experience: '4 years of experience',
    location: 'Boston, MA',
    time: 'Available in 2 weeks',
    projects: '32 projects',
    salary: '$80/hr',
    skills: ['React', 'Express', 'MongoDB', 'Stripe', 'Firebase', 'Tailwind'],
    hire: '',
    reject: 'Rejected',
    shortList: '',
    backgroundColor: '#6f6f6f',
    color: '#f6f6f6',
  },
  {
    id: 5,
    name: 'Daniel Kim',
    rating: '4.9',
    type: 'Hired',
    experience: '7 years of experience',
    location: 'Los Angeles, CA',
    time: 'Available immediately',
    projects: '95 projects',
    salary: '$130/hr',
    skills: ['React', 'Next.js', 'Node.js', 'Prisma', 'Stripe', 'Vercel'],
    hire: '',
    reject: '',
    shortList: '',
    backgroundColor: '#ffc300',
    color: '#023047',
  },
];

const btns = ['All', 'Pending', 'Shortlisted', 'Rejected', 'Hired'];

const SingleFreelanceGig = () => {
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
          <Link to='/freelance-gigs'>
            <p className='back-to-internship'>
              <FaArrowLeft /> Back to Freelance Gigs
            </p>
          </Link>
          <h1 className='single-job-heading'>{title.join(' ')}</h1>
          <p className='single-job-text'>Tech Corp</p>
        </div>
        <div className='single-internship-btn-container'>
          <button className='single-job-active-btn'>Active</button>
          <button className='single-job-active-btn'>Expert</button>
        </div>
      </div>
      <div className='single-job-info-container'>
        <div className='single-internship-info-grid-container'>
          {data.map((item) => (
            <JobCard key={item.id} {...item} />
          ))}
        </div>
        <div className='single-job-requirements-container'>
          <h3 className='single-job-description'>Project Description</h3>
          <p className='single-job-description-text'>
            We are looking for an experienced freelance web developer to build a
            modern e-commerce platform. The project requires expertise in React,
            Node.js, and payment gateway integration.
          </p>
          <div className='single-job-requirements'>
            <h3 className='single-job-requirements-heading'>Requirements</h3>
            <ul>
              <li>5+ years of professional web development experience</li>
              <li>Strong portfolio with e-commerce projects</li>
              <li>Expertise in React.js and Node.js</li>
              <li>Experience with payment gateway integration</li>
              <li>Strong communication and project management skills</li>
              <li>Ability to work independently and meet deadlines</li>
            </ul>
          </div>
          <div className='single-job-requirements'>
            <h3 className='single-job-requirements-heading'>Deliverables</h3>
            <ul>
              <li>Fully functional e-commerce website</li>
              <li>Admin dashboard for product management</li>
              <li>Payment gateway integration</li>
              <li>User authentication and authorization</li>
              <li>Responsive design for all devices</li>
              <li>Documentation and source code</li>
            </ul>
          </div>
        </div>
        <div className='single-job-benifits-container'>
          <h3 className='single-job-description'>Required Skills</h3>
          <div className='single-job-benefits'>
            <span>React</span>
            <span>Node js</span>
            <span>MongoDB</span>
            <span>Payment APIs</span>
            <span>REST APIs</span>
            <span>AWS</span>
          </div>
        </div>
      </div>
      <div className='single-job-applications-container'>
        <div className='single-job-applicants-header'>
          <div className='single-job-applicants-heading-container'>
            <h3 className='applicants-heading'>Freelancer Proposals (5)</h3>
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
            <FreelanceGigsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleFreelanceGig;
