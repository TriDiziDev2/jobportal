import './SupportTickects.css';

import { FiHeadphones } from 'react-icons/fi';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';

const supportTicketsData = [
  {
    id: 'TK-1234',
    user: 'John Doe',
    subject: 'Unable to post job listing',
    category: 'Technical',
    priority: 'High',
    status: 'Open',
    time: '15 mins ago',
  },
  {
    id: 'TK-1235',
    user: 'Sarah Wilson',
    subject: 'Payment issue with subscription',
    category: 'Billing',
    priority: 'Urgent',
    status: 'Open',
    time: '1 hour ago',
  },
  {
    id: 'TK-1236',
    user: 'Mike Chen',
    subject: 'Account verification pending',
    category: 'Account',
    priority: 'Medium',
    status: 'In Progress',
    time: '2 hours ago',
  },
  {
    id: 'TK-1237',
    user: 'Emma Brown',
    subject: 'How to upgrade to Pro plan?',
    category: 'General',
    priority: 'Low',
    status: 'Resolved',
    time: '3 hours ago',
  },
  {
    id: 'TK-1238',
    user: 'David Lee',
    subject: 'Cannot access applications',
    category: 'Technical',
    priority: 'High',
    status: 'Open',
    time: '5 hours ago',
  },
];

const SupportTickets = () => {
  return (
    <div className='support-tickets-container'>
      <div className='support-tickets-header'>
        <div className='support-tickets-icon-content-container'>
          <div className='support-ticket-icon-container'>
            <FiHeadphones className='headphone-icon' />
          </div>
          <div className='support-ticket-content-container'>
            <h3 className='support-ticket-heading'>Support Tickets</h3>
            <p className='support-ticket-text'>
              Recent support requests from users and companies
            </p>
          </div>
        </div>
        <button className='support-tickets-btn'>View All Tickets</button>
      </div>
      <table className='tickets-table'>
        <thead className='table-header'>
          <tr>
            <th>Ticket ID</th>
            <th>User</th>
            <th>Subject</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {supportTicketsData.map((ticket) => {
            return (
              <tr key={ticket.id}>
                <td className='ticket-id'>{ticket.id}</td>
                <td className='ticket-user'>{ticket.user}</td>
                <td className='ticket-subject'>{ticket.subject}</td>
                <td className='ticket-category'>{ticket.category}</td>
                <td
                  className={`ticket-priority ${ticket.priority.toLowerCase()}`}
                >
                  {ticket.priority}
                </td>
                <td
                  className={`ticket-status ${ticket.status
                    .replace(' ', '')
                    .toLowerCase()}`}
                >
                  {ticket.status}
                </td>
                <td className='ticket-time'>{ticket.time}</td>
                <td className='ticket-view-container'>
                  <div className='view-container'>
                    <MdOutlineRemoveRedEye />
                  </div>
                  <div className='message-container'>
                    <FiMessageSquare />
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

export default SupportTickets;
