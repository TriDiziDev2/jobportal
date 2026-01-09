import { useParams } from 'react-router-dom';
import './RaiseTicket.css';

const RaiseTicket = () => {
  const { ticket } = useParams();

  return (
    <div className='dashboard-container'>
      <h1 className='dashboard-heading'>{ticket}</h1>
    </div>
  );
};

export default RaiseTicket;
