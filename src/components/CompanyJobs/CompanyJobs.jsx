import useAppContext from '../../context/AppContext';
import CompanyJobCard from '../CompanyJobCard/CompanyJobCard';
import NewJobModal from '../NewJobModal/NewJobModal';
import './CompanyJobs.css';

const jobsData = [
  {
    id: 1,
    role: 'Senior React Developer',
    title: 'Technology',
    type: 'Full-time',
    location: 'New York, NY',
    salary: '$120k - $150k',
    posted: 'Posted 2024-12-01',
    applicants: '89 applicants',
  },
  {
    id: 2,
    role: 'Product Manager',
    title: 'Management',
    type: 'Full-time',
    location: 'San Francisco, CA',
    salary: '$130k - $160k',
    posted: 'Posted 2024-12-03',
    applicants: '67 applicants',
  },
  {
    id: 3,
    role: 'UX Designer',
    title: 'Design',
    type: 'Full-time',
    location: 'Austin, TX',
    salary: '$90k - $120k',
    posted: 'Posted 2024-12-05',
    applicants: '56 applicants',
  },
  {
    id: 4,
    role: 'Data Scientist',
    title: 'Technology',
    type: 'Full-time',
    location: 'Boston, MA',
    salary: '$140k - $170k',
    posted: 'Posted 2024-11-28',
    applicants: '78 applicants',
  },
  {
    id: 5,
    role: 'DevOps Engineer',
    title: 'Technology',
    type: 'Full-time',
    location: 'Remote',
    salary: '$110k - $140k',
    posted: 'Posted 2024-12-04',
    applicants: '52 applicants',
  },
  {
    id: 6,
    role: 'Marketing Manager',
    title: 'Marketing',
    type: 'Full-time',
    location: 'New York, NY',
    salary: '$100k - $130k',
    posted: 'Posted 2024-12-02',
    applicants: '45 applicants',
  },
  {
    id: 7,
    role: 'Backend Developer',
    title: 'Technology',
    type: 'Full-time',
    location: 'San Francisco, CA',
    salary: '$115k - $145k',
    posted: 'Posted 2024-11-30',
    applicants: '62 applicants',
  },
  {
    id: 8,
    role: 'QA Engineer',
    title: 'Technology',
    type: 'Full-time',
    location: 'Austin, TX',
    salary: '$85k - $110k',
    posted: 'Posted 2024-12-06',
    applicants: '67 applicants',
  },
  {
    id: 10,
    role: 'Python Developer',
    title: 'Technology',
    type: 'Full-time',
    location: 'New York, NY',
    salary: '$100k - $120k',
    posted: 'Posted 2024-12-01',
    applicants: '75 applicants',
  },
];

const CompanyJobs = () => {
  const { isJobModalOpen, setIsJobModalOpen } = useAppContext();

  return (
    <div className='company-jobs-container'>
      <div className='company-jobs-header'>
        <p className='company-jobs-title'>Showing 12 postings</p>
        <button
          className='company-jobs-job-btn'
          onClick={() => setIsJobModalOpen(!isJobModalOpen)}
        >
          Add New Job
        </button>
      </div>
      <div className='company-jobs-job-container'>
        {jobsData.map((job) => (
          <CompanyJobCard key={job.id} {...job} />
        ))}
      </div>
      <NewJobModal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
      />
    </div>
  );
};

export default CompanyJobs;
