import FiltersModal from '../../components/FiltersModal/FiltersModal';
import NewJobModal from '../../components/NewJobModal/NewJobModal';
import useAppContext from '../../context/AppContext';
import './JobManagement.css';

import { GrFilter } from 'react-icons/gr';
import { LuBuilding2 } from 'react-icons/lu';
import { FiEdit } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const JobManagement = () => {
  const {
    isJobModalOpen,
    setIsJobModalOpen,
    isFilterModalOpen,
    setIsFilterModalOpen,
  } = useAppContext();

  return (
    <div className='dashboard-container'>
      <div className='jobheader'>
        <div className='jobleft'>
          <h1 className='dashboard-heading'>Job Management</h1>
          <div className='jobcount'>
            <span className='count'> 12</span>
            <span className='label'>Total Jobs</span>
          </div>
        </div>
        <button
          className='addjob'
          onClick={() => setIsJobModalOpen(!isJobModalOpen)}
        >
          {' '}
          + Add New Job{' '}
        </button>
      </div>
      <div className='filteroptions'>
        <div className='filters'>
          <div className='jobtype'>
            <span>Job Type </span>
            <br></br>
            <button className='jobtypebutton'>All Jobs (0) </button>
            <button className='jobtypebutton'>Full-time (0) </button>
            <button className='jobtypebutton'>Part-time (0) </button>
          </div>
          <div className='jobtype'>
            <span>Subscription Plan </span>
            <br></br>
            <button className='jobtypebutton'>All Plans (0) </button>
            <button className='jobtypebutton'>Pro (0) </button>
            <button className='jobtypebutton'>Quick Recruit (0) </button>
            <button className='jobtypebutton'>Free Plan (0) </button>
          </div>
        </div>
        <div className='searchbar'>
          <span className='searchjobs'>Search Jobs....</span>
          <button
            className='morefilters'
            onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
          >
            <GrFilter /> More Filters{' '}
          </button>
        </div>
      </div>
      <Link to='senior-react-developer'>
        <div className='job1'>
          <div className='jobicon'>
            <LuBuilding2 />
          </div>
          <div className='jobinfo'>
            <div className='titlecard'>
              <span className='jobtitle'>Senior React Developer</span>
              <span className='protag'>Pro</span>
            </div>
            <div className='jobdetails'>
              New York, NY $120K - $150K 2024-12-01
              <span className='jobtypetag'>Full time</span>
              <span className='depttag'>Technology</span>
            </div>
            <div className='applicationstag'>45 Applications</div>
          </div>
          <div className='jobactions'>
            <span className='activetag'>Active</span>
            <div className='editoption'>
              <FiEdit />
            </div>
            <div className='deleteoption'>
              <FaRegTrashCan />
            </div>{' '}
          </div>
        </div>
      </Link>
      <Link to='product-manager'>
        <div className='job1'>
          <div className='jobicon'>
            <LuBuilding2 />
          </div>
          <div className='jobinfo'>
            <div className='titlecard'>
              <span className='jobtitle'>Product Manager</span>
              <span className='protag'>Quick Recruit</span>
            </div>
            <div className='jobdetails'>
              San Francisco, CA $130K - $160K 2024-12-03
              <span className='jobtypetag'>Full time</span>
              <span className='depttag'>Management</span>
            </div>
            <div className='applicationstag'>67 Applications</div>
          </div>
          <div className='jobactions'>
            <span className='activetag'>Active</span>
            <div className='editoption'>
              <FiEdit />
            </div>
            <div className='deleteoption'>
              <FaRegTrashCan />
            </div>{' '}
          </div>
        </div>
      </Link>
      <Link to='data-scientist'>
        <div className='job1'>
          <div className='jobicon'>
            <LuBuilding2 />
          </div>
          <div className='jobinfo'>
            <div className='titlecard'>
              <span className='jobtitle'>Data Scientist</span>
              <span className='protag'>Pro</span>
            </div>
            <div className='jobdetails'>
              Boston, MA $110K - $140K 2024-11-28
              <span className='jobtypetag'>Full time</span>
              <span className='depttag'>Technology</span>
            </div>
            <div className='applicationstag'>89 Applications</div>
          </div>
          <div className='jobactions'>
            <span className='activetag'>Active</span>
            <div className='editoption'>
              <FiEdit />
            </div>
            <div className='deleteoption'>
              <FaRegTrashCan />
            </div>{' '}
          </div>
        </div>
      </Link>
      <Link to='devops-engineer'>
        <div className='job1'>
          <div className='jobicon'>
            <LuBuilding2 />
          </div>
          <div className='jobinfo'>
            <div className='titlecard'>
              <span className='jobtitle'>DevOps Engineer</span>
              <span className='protag'>Free</span>
            </div>
            <div className='jobdetails'>
              Austin, TX $100K - $130K 2024-11-20
              <span className='jobtypetag'>Full time</span>
              <span className='depttag'>Technology</span>
            </div>
            <div className='applicationstag'>56 Applications</div>
          </div>
          <div className='jobactions'>
            <span className='activetag'>Active</span>
            <div className='editoption'>
              <FiEdit />
            </div>
            <div className='deleteoption'>
              <FaRegTrashCan />
            </div>{' '}
          </div>
        </div>
      </Link>
      <Link to='sales-associate'>
        <div className='job1'>
          <div className='jobicon'>
            <LuBuilding2 />
          </div>
          <div className='jobinfo'>
            <div className='titlecard'>
              <span className='jobtitle'>Part-time Sales Associate</span>
              <span className='protag'>Free</span>
            </div>
            <div className='jobdetails'>
              Chicago, IL $15 - $18/hr 2024-12-04
              <span className='jobtypetag'>Part-time</span>
              <span className='depttag'>Sales</span>
            </div>
            <div className='applicationstag'>41 Applications</div>
          </div>
          <div className='jobactions'>
            <span className='activetag'>Active</span>
            <div className='editoption'>
              <FiEdit />
            </div>
            <div className='deleteoption'>
              <FaRegTrashCan />
            </div>{' '}
          </div>
        </div>
      </Link>
      <Link to='marketing-manager'>
        <div className='job1'>
          <div className='jobicon'>
            <LuBuilding2 />
          </div>
          <div className='jobinfo'>
            <div className='titlecard'>
              <span className='jobtitle'>Marketing Manager</span>
              <span className='protag'>Quick Recruit</span>
            </div>
            <div className='jobdetails'>
              Chicago, IL $90K - $120K 2024-12-02
              <span className='jobtypetag'>Full time</span>
              <span className='depttag'>Marketing</span>
            </div>
            <div className='applicationstag'>34 Applications</div>
          </div>
          <div className='jobactions'>
            <span className='activetag'>Active</span>
            <div className='editoption'>
              <FiEdit />
            </div>
            <div className='deleteoption'>
              <FaRegTrashCan />
            </div>{' '}
          </div>
        </div>
      </Link>
      <NewJobModal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
      />
      <FiltersModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </div>
  );
};

export default JobManagement;
