import './Sidebar.css';

import { LuBriefcase } from 'react-icons/lu';
import { LuLayoutDashboard } from 'react-icons/lu';
import { RiGraduationCapLine } from 'react-icons/ri';
import { GoPencil } from 'react-icons/go';
import { LuBuilding2 } from 'react-icons/lu';
import { GoPeople } from 'react-icons/go';
import { BsPersonPlus } from 'react-icons/bs';
import { LuDollarSign } from 'react-icons/lu';
import { AiOutlineBarChart } from 'react-icons/ai';
import { RiHeadphoneLine } from 'react-icons/ri';
import { LuBuilding } from 'react-icons/lu';

import LinkCard from '../LinkCard/LinkCard';

const linksData = [
  {
    id: 1,
    icon: <LuLayoutDashboard />,
    title: 'Dashboard',
    link: '/',
  },
  {
    id: 2,
    icon: <LuBriefcase />,
    title: 'Job Management',
    link: '/job-management',
  },
  {
    id: 3,
    icon: <RiGraduationCapLine />,
    title: 'Internship Hub',
    link: '/internship-hub',
  },
  {
    id: 4,
    icon: <GoPencil />,
    title: 'Freelance Gigs',
    link: '/freelance-gigs',
  },
  {
    id: 5,
    icon: <LuBuilding2 />,
    title: 'Companies',
    link: '/companies',
  },
  {
    id: 6,
    icon: <GoPeople />,
    title: 'User Management',
    link: '/user-management',
  },
  {
    id: 7,
    icon: <BsPersonPlus />,
    title: 'Cold Leads',
    link: '/cold-leads',
  },
  {
    id: 8,
    icon: <GoPeople />,
    title: 'Employees',
    link: '/employees',
  },
  {
    id: 9,
    icon: <LuDollarSign />,
    title: 'Income',
    link: '/income',
  },
  {
    id: 10,
    icon: <AiOutlineBarChart />,
    title: 'Reports',
    link: '/reports',
  },
  {
    id: 11,
    icon: <RiHeadphoneLine />,
    title: 'Support',
    link: '/support',
  },
  {
    id: 12,
    icon: <LuBuilding />,
    title: 'Institutes',
    link: '/institutes',
  },
];

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-logo-container'>
        <div className='sidebar-briefcase-icon-container'>
          <LuBriefcase className='sidebar-briefcase-icon' />
        </div>
        <div className='sidebar-logo-content-container'>
          <h3 className='sidebar-logo-heading'>JobPortal</h3>
          <p className='sidebar-logo-caption'>Super Admin</p>
        </div>
      </div>
      <div className='sidebar-links-container'>
        {linksData.map((link) => (
          <LinkCard key={link.id} {...link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
