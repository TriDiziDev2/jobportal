import './Reports.css';

const Reports = () => {
  return (
    <div className='dashboard-container'>
      <div className='incomeheader'>
        <div className='incomehead'>
        <span className='instituteheading'>Reports & Analytics</span> <br></br>
      <span className='marketingdesc'>Comprehensive insights and data analysis by category</span> </div>
      <button className='exporttag'>Export Report</button>
      </div>
      <div className='reportcats'>
      <ul className='usercategories'>
        <li className='allusers'>Jobs</li>
        <li>Internship Hub</li>
        <li>Freelance Gigs</li>
        <li>Companies</li>
        <li>Tutors</li>
        <li>Institutes</li>
        <li>Personal Trainers</li>
      </ul>
      </div>
      <span className='thinborder'></span>

      <div className='incomestats'>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'>Total Jobs Posted</span> <br></br>
          <span className='count'>1,260</span> <br></br>
          <span className='text'>+12.5% from last month</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'>Total Applications</span> <br></br>
          <span className='count'>5,480</span> <br></br>
          <span className='text'>+18.2% from last month</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'>Positions Filled</span> <br></br>
          <span className='count'>104</span> <br></br>
          <span className='text'>+8.3% from last month</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Avg Applications/Job </span> <br></br>
          <span className='count'> 4.3 </span> <br></br>
          <span className='text'>+5.1% from last month</span>
        </div>
      </div>
      <div className='funnel'>
        <div className='funnelheader'>
          Job Posting Trends <br></br>
          <span className='funneldesc'>Monthly job postings, applications, and positions filled</span>
        </div>
      </div>
      <div className='jobstats'>
        <div className='jobcategory'>
          <div className='funnelheader'>
          Jobs by Category <br></br>
          <span className='funneldesc'>Distribution across different categories</span>
        </div>
        </div>
        <div className='jobcategory'>
          <div className='funnelheader'>
          Top Performing Jobs <br></br>
          <span className='funneldesc'>Most applied positions this month</span>
        </div>
        <div className='performingjob'>
          <div>
            <span className='topjobtitle'>Senior React Developer</span> <br></br>
            <span className='topcompany'>Tech Corp</span>
          </div>
          <div className='jobappcount'>89 Apps</div>
        </div>
        <div className='performingjob'>
          <div>
            <span className='topjobtitle'>Product Manager</span> <br></br>
            <span className='topcompany'>Startup Inc</span>
          </div>
          <div className='jobappcount'>67 Apps</div>
        </div>
        <div className='performingjob'>
          <div>
            <span className='topjobtitle'>Data Scientist</span> <br></br>
            <span className='topcompany'>Analyst Co</span>
          </div>
          <div className='jobappcount'>62 Apps</div>
        </div>
        <div className='performingjob'>
          <div>
            <span className='topjobtitle'>UX Designer</span> <br></br>
            <span className='topcompany'>Design Studio</span>
          </div>
          <div className='jobappcount'>56 Apps</div>
        </div>
        <div className='performingjob'>
          <div>
            <span className='topjobtitle'>Marketing Manager</span> <br></br>
            <span className='topcompany'>Brand Agency</span>
          </div>
          <div className='jobappcount'>45 Apps</div>
        </div>
        <div className='performingjob'>
          <div>
            <span className='topjobtitle'>Senior React Developer</span> <br></br>
            <span className='topcompany'>Tech Corp</span>
          </div>
          <div className='jobappcount'>89 Apps</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
