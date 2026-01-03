import './RecentApplications.css';

import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

const applications = [
  {
    candidate: 'John Doe',
    jobTitle: 'Senior React Developer',
    company: 'Tech Corp',
    type: 'Full-time',
    status: 'Pending',
    time: '2 hours ago',
  },
  {
    candidate: 'Jane Smith',
    jobTitle: 'Product Design Intern',
    company: 'Startup Inc',
    type: 'Internship',
    status: 'Approved',
    time: '4 hours ago',
  },
  {
    candidate: 'Mike Johnson',
    jobTitle: 'Freelance UX Designer',
    company: 'Design Studio',
    type: 'Freelance',
    status: 'Pending',
    time: '6 hours ago',
  },
  {
    candidate: 'Sarah Williams',
    jobTitle: 'Data Scientist',
    company: 'Analytics Co',
    type: 'Full-time',
    status: 'Rejected',
    time: '1 day ago',
  },
  {
    candidate: 'Tom Brown',
    jobTitle: 'DevOps Engineer',
    company: 'Cloud Systems',
    type: 'Full-time',
    status: 'Approved',
    time: '1 day ago',
  },
];

const RecentApplications = () => {
  return (
    <div className='support-tickets-container'>
      <div className='support-tickets-header'>
        <div className='support-ticket-content-container'>
          <h3 className='support-ticket-heading'>Recent Applications</h3>
          <p className='support-ticket-text'>
            Latest job applications submitted by candidates
          </p>
        </div>

        <button className='support-tickets-btn'>View All</button>
      </div>
      <table className='tickets-table'>
        <thead className='table-header'>
          <tr>
            <th>Candidate</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Type</th>
            <th>Status</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => {
            return (
              <tr key={application.candidate}>
                <td className='application-candidate'>
                  {application.candidate}
                </td>
                <td className='ticket-user'>{application.jobTitle}</td>
                <td className='ticket-subject'>{application.company}</td>
                <td
                  className={`ticket-category ${application.type
                    .replace('-', '')
                    .toLowerCase()}`}
                >
                  {application.type}
                </td>
                <td
                  className={`ticket-status ${application.status.toLowerCase()}`}
                >
                  {application.status}
                </td>
                <td className='ticket-time'>{application.time}</td>
                <td className='ticket-view-container'>
                  <div className='view-container'>
                    <MdOutlineRemoveRedEye />
                  </div>
                  <div className='message-container'>
                    <FiEdit />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentApplications;
