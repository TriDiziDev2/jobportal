import { Outlet } from 'react-router-dom';
import './Landing.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import useAppContext from '../../context/AppContext';

const LandingPage = () => {
  const { sidebarOpen } = useAppContext();

  return (
    <div className='landing-page-container'>
      {sidebarOpen && (
        <div className='landing-page-sidebar-container'>
          <Sidebar />
        </div>
      )}
      <div className='main-container'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPage;
