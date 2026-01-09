import { Link, Outlet } from 'react-router-dom';
import './Income.css';

const Income = () => {
  return (
    <div className='dashboard-container'>
      <div className='incomeheader'>
        <div className='incomehead'>
          <span className='instituteheading'>Income & Plans</span> <br></br>
          <span className='institutedesc'>
            Manage revenue, subscriptions and pricing
          </span>{' '}
        </div>
        <button className='exporttag'>Export Report</button>
      </div>

      <ul className='usercategories'>
        <li className='allusers'>
          <Link to='/income'>Revenue Analytics</Link>
        </li>
        <li>
          <Link to='update-plans'>Update Plans</Link>
        </li>
        <li>
          <Link to='plan-settings'>Plan Settings</Link>
        </li>
      </ul>
      <span className='thinborder'></span>
      <Outlet />
    </div>
  );
};

export default Income;
