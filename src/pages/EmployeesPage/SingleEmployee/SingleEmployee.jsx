import { useParams } from 'react-router-dom';

const SingleEmployee = () => {
  const { employee } = useParams();

  const employeeName = employee
    .replaceAll('-', ' ')
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1));

  return (
    <div className='dashboard-container'>
      <h2 className='dashboard-heading'>{employeeName.join(' ')}</h2>
    </div>
  );
};

export default SingleEmployee;
