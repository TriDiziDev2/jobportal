import { useParams } from 'react-router-dom';
import './SingleCourse.css';

const SingleCourse = () => {
  const { course } = useParams();

  const courseName = course
    .replaceAll('-', ' ')
    .split(' ')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1));

  return (
    <div className='dashboard-container'>
      <div className='dashboard-heading'>{courseName.join(' ')}</div>
    </div>
  );
};

export default SingleCourse;
