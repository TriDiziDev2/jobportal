import { useParams } from 'react-router-dom';
import './SingleJob.css';

const SingleJob = () => {
  const { id } = useParams();

  return (
    <div className='single-job-container'>
      <div className='single-job-header'>
        <div className='single-job-heading-container'>
          <h1 className='single-job-heading'>{id.replaceAll('-', ' ')}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
