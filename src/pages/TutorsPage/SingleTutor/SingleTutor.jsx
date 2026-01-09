import { useParams } from 'react-router-dom';
import './SingleTutor.css';

const SingleTutor = () => {
  const { tutor } = useParams();

  const tutorName = tutor
    .replaceAll('-', ' ')
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1));

  return (
    <div className='dashboard-container'>
      <h2 className='dashboard-heading'>{tutorName.join(' ')}</h2>
    </div>
  );
};

export default SingleTutor;
