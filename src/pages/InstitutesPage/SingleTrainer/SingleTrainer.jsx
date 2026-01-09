import { useParams } from 'react-router-dom';
import './SingleTrainer.css';

const SingleTrainer = () => {
  const { trainer } = useParams();

  return <div className='single-trainer-container'>{trainer}</div>;
};

export default SingleTrainer;
