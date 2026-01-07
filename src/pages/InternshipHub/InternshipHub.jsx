import InternshipFilterModal from '../../components/InternshipFilterModal/InternshipFilterModal';
import InternshipModal from '../../components/InternshipModal/InternshipModal';
import useAppContext from '../../context/AppContext';
import './InternshipHub.css';

import { GrFilter } from 'react-icons/gr';

const InternshipHub = () => {
  const {
    isInternshipModalOpen,
    setIsInternshipModalOpen,
    isInternshipFilterModalOpen,
    setIsInternshipFilterModalOpen,
  } = useAppContext();

  return (
    <div className='dashboard-container'>
      <div className='jobheader'>
        <div className='jobleft'>
          <h1 className='dashboard-heading'>Internship Hub</h1>
          <div className='jobcount'>
            <span className='count'>9</span>
            <span className='label'>Total Internships</span>
          </div>
        </div>
        <button
          className='addjob'
          onClick={() => setIsInternshipModalOpen(!isInternshipModalOpen)}
        >
          {' '}
          + Add New Internship{' '}
        </button>
      </div>
      <div className='internshiphubstats'>
        <div className='totalinternships'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Total Internships </span> <br></br>
          <span className='count'> 9 </span>
        </div>

        <div className='totalinternships'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Active Postings </span> <br></br>
          <span className='count'> 7 </span>
        </div>

        <div className='totalinternships'>
          <div className='totalinternshipsicon2'></div>
          <span className='label'> Total Applications </span> <br></br>
          <span className='count'> 822 </span>
        </div>

        <div className='totalinternships'>
          <div className='totalinternshipsicon2'></div>
          <span className='label'> Avg per Posting </span> <br></br>
          <span className='count'> 91 </span>
        </div>
      </div>
      <div className='internshipfilteroptions'>
        <div className='internshipfilters'>
          <div className='internshiptype'>
            <span>Category </span>
            <br></br>
            <span className='categoriesname'>All Categories </span>
            <button className='jobtypebutton'>Technology</button>
            <button className='jobtypebutton'>Marketing</button>
            <button className='jobtypebutton'>Design</button>
            <button className='jobtypebutton'>Finance</button>
            <button className='jobtypebutton'>Writing</button>
            <button className='jobtypebutton'>Human Resources</button>
            <button className='jobtypebutton'>Business</button>
          </div>

          <div className='internshiptype'>
            <span>Subscription Plans </span>
            <br></br>
            <span className='categoriesname'>All Plans (9) </span>
            <button className='jobtypebutton'>Pro (5)</button>
            <button className='jobtypebutton'>Free (4)</button>
          </div>
        </div>

        <div className='searchbar'>
          <span className='searchjobs'>Search Internships....</span>
          <button
            className='morefilters'
            onClick={() =>
              setIsInternshipFilterModalOpen(!isInternshipFilterModalOpen)
            }
          >
            <GrFilter /> More Filters{' '}
          </button>
        </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
          <div className='titlecard'>
            <span className='jobtitle'>Software Engineering Intern</span>
            <span className='protag'>Pro</span>
          </div>
          <div className='jobdetails'>
            New York, NY 3 Months $25/hr Starts: 2025-01-15
            <span className='depttag'>Technology</span>
            <span className='protag'>5 spots</span>
          </div>
          <div className='applicationstag'>
            112 Applications • Posted 2024-12-01
          </div>
        </div>
        <div className='jobactions'>
          <span className='activetag'>Active</span>
          <div className='editoption'></div>
          <div className='deleteoption'></div>{' '}
        </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
          <div className='titlecard'>
            <span className='jobtitle'>Summer Marketing Intern</span>
            <span className='protag'>Pro</span>
          </div>
          <div className='jobdetails'>
            Remote 3 Months $20/hr Starts: 2025-06-01
            <span className='depttag'>Marketing</span>
            <span className='protag'>3 spots</span>
          </div>
          <div className='applicationstag'>
            89 Applications • Posted 2024-12-04
          </div>
        </div>
        <div className='jobactions'>
          <span className='activetag'>Active</span>
          <div className='editoption'></div>
          <div className='deleteoption'></div>{' '}
        </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
          <div className='titlecard'>
            <span className='jobtitle'>UX Design Intern</span>
            <span className='protag'>Free</span>
          </div>
          <div className='jobdetails'>
            Austin, TX 6 Months $18/hr Starts: 2025-02-01
            <span className='depttag'>Design</span>
            <span className='protag'>2 spots</span>
          </div>
          <div className='applicationstag'>
            67 Applications • Posted 2024-12-05
          </div>
        </div>
        <div className='jobactions'>
          <span className='activetag'>Active</span>
          <div className='editoption'></div>
          <div className='deleteoption'></div>{' '}
        </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
          <div className='titlecard'>
            <span className='jobtitle'>Data Science Intern</span>
            <span className='protag'>Free</span>
          </div>
          <div className='jobdetails'>
            Bostan, MA 4 Months $30/hr Starts: 2025-01-20
            <span className='depttag'>Technology</span>
            <span className='protag'>4 spots</span>
          </div>
          <div className='applicationstag'>
            145 Applications • Posted 2024-11-28
          </div>
        </div>
        <div className='jobactions'>
          <span className='activetag'>Active</span>
          <div className='editoption'></div>
          <div className='deleteoption'></div>{' '}
        </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
          <div className='titlecard'>
            <span className='jobtitle'>Product Design Intern</span>
            <span className='protag'>Free</span>
          </div>
          <div className='jobdetails'>
            SanFrancisco, CA 3 Months $22/hr Starts: 2025-01-10
            <span className='depttag'>Design</span>
            <span className='protag'>2 spots</span>
          </div>
          <div className='applicationstag'>
            78 Applications • Posted 2024-12-03
          </div>
        </div>
        <div className='jobactions'>
          <span className='activetag'>Active</span>
          <div className='editoption'></div>
          <div className='deleteoption'></div>{' '}
        </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
          <div className='titlecard'>
            <span className='jobtitle'>Finance Intern</span>
            <span className='protag'>Free</span>
          </div>
          <div className='jobdetails'>
            Chicago, IL 6 Months $28/hr Starts: 2025-02-15
            <span className='depttag'>Finance</span>
            <span className='protag'>6 spots</span>
          </div>
          <div className='applicationstag'>
            134 Applications • Posted 2024-12-02
          </div>
        </div>
        <div className='jobactions'>
          <span className='activetag'>Active</span>
          <div className='editoption'></div>
          <div className='deleteoption'></div>{' '}
        </div>
      </div>
      <InternshipModal
        isOpen={isInternshipModalOpen}
        onClose={() => setIsInternshipModalOpen(false)}
      />
      <InternshipFilterModal
        isOpen={isInternshipFilterModalOpen}
        onClose={() => setIsInternshipFilterModalOpen(false)}
      />
    </div>
  );
};

export default InternshipHub;
