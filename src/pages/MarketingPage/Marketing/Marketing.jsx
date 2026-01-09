import { Link, Outlet } from 'react-router-dom';
import './Marketing.css';

const Marketing = () => {
  return (
    <div className='dashboard-container'>
      <div className='incomeheader'>
        <div className='incomehead'>
          <span className='instituteheading'>Marketing & Analytics</span>{' '}
          <br></br>
          <span className='marketingdesc'>
            Track user acquisition, campaigns, and push notification performance
          </span>{' '}
        </div>
        <button className='exporttag'>Export Report</button>
      </div>

      <ul className='usercategories'>
        <li className='allusers'>
          <Link to='/marketing'>Overview</Link>
        </li>
        <li>
          <Link to='user-resources'>User Resources</Link>
        </li>
        <li>
          <Link to='push-notifications'>Push Notifications</Link>
        </li>
        <li>
          <Link to='campaigns'>Campaigns</Link>
        </li>
      </ul>
      <span className='thinborder'></span>

      <Outlet />
    </div>
  );
};

export default Marketing;
