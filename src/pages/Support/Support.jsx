import './Support.css';

const Support = () => {
  return (
    <div className='dashboard-container'>
      <div className='jobheader'>
        <div className='jobleft'>
          <h1 className='dashboard-heading'>Support Tickets</h1>
        </div>
        <button className='addjob'> + Create Ticket </button>
      </div>

      <div className='reportstat'>
      <div className='reportstats'>
          <div><span className='label'> Total Tickets </span> <br></br>
          <span className='count'> 8 </span></div>
          <div className='totalinternshipsicon1'></div>
      </div>
      <div className='reportstats'>
          <div><span className='label'> Open </span> <br></br>
          <span className='count'> 3</span></div>
          <div className='totalinternshipsicon1'></div>
      </div>
      <div className='reportstats'>
          <div><span className='label'> In Progress </span> <br></br>
          <span className='count'> 3 </span></div>
          <div className='totalinternshipsicon1'></div>
      </div>
      <div className='reportstats'>
          <div><span className='label'> Resolved </span> <br></br>
          <span className='count'> 1 </span></div>
          <div className='totalinternshipsicon1'></div>
      </div>
    </div>
    
    
    <div className='employeesearchbar'>
        <span className='searchleads'>Search tickets by ID, title, description, or submitter....</span>
        <button className='morefilters'> Filters </button>
    </div>

    <div className='ticket'>
      <div className='tktinfo'>
        <span className='tktid'>TKT - 001</span>
        <span className='usertag'>Company</span>
        <span className='progresstag'>In Progress</span>
        <span className='tktstage'>High</span>
        <span className='tktdept'>Technical Issue</span>
      </div>
      <div className='tktdetails'><span className='tkttitle'>Unable to post job listings</span><br></br>
      <span className='tktdesc'>Getting error message when trying to submit a new job posting. Error code: 500</span> </div>
      <span className='tktfooter'> John Smith (TechCorp Inc) | 2024-12-10 09-30 AM | Assigned to: Sarah Johnson | 2 Responses</span>
    </div>
    <div className='ticket'>
      <div className='tktinfo'>
        <span className='tktid'>TKT - 002</span>
        <span className='progresstag'>User</span>
        <span className='usertag'>Open</span>
        <span className='usertag'>Medium</span>
        <span className='tktdept'>Technical Issue</span>
      </div>
      <div className='tktdetails'><span className='tkttitle'>Cannot update my profile information</span><br></br>
      <span className='tktdesc'>The save button is not working when I try to update my profile details.</span> </div>
      <span className='tktfooter'> Emily Davis | 2024-12-11 11:20 AM </span>
    </div>
    <div className='ticket'>
      <div className='tktinfo'>
        <span className='tktid'>TKT - 003</span>
        <span className='usertag'>Company</span>
        <span className='resolvetag'>Resolved</span>
        <span className='tktstage'>Urgent</span>
        <span className='tktdept'>Bug Report</span>
      </div>
      <div className='tktdetails'><span className='tkttitle'>Dashboard analytics not loading</span><br></br>
      <span className='tktdesc'>The dashboard page is blank and analytics widgets are not showing any data.</span> </div>
      <span className='tktfooter'> Michael Chen (Innovate Solutions) | 2024-12-09 03:45 PM | Assigned to: Mike Wilson | 3 Responses</span>
    </div>
    <div className='ticket'>
      <div className='tktinfo'>
        <span className='tktid'>TKT - 004</span>
        <span className='progresstag'>User</span>
        <span className='resolvetag'>Closed</span>
        <span className='tktstage'>High</span>
        <span className='tktdept'>Account Issue</span>
      </div>
      <div className='tktdetails'><span className='tkttitle'>Password reset email not received</span><br></br>
      <span className='tktdesc'>I requested a password reset 30 minutes ago but haven't received any email yet.</span> </div>
      <span className='tktfooter'> Lisa Anderson | 2024-12-08 01:30 PM   | Assigned to: Sarah Johnson | 2 Responses</span>
    </div>
    <div className='ticket'>
      <div className='tktinfo'>
        <span className='tktid'>TKT - 005</span>
        <span className='usertag'>Company</span>
        <span className='progresstag'>In Progress</span>
        <span className='usertag'>Medium</span>
        <span className='tktdept'>General Inquiry</span>
      </div>
      <div className='tktdetails'><span className='tkttitle'>Request to upgrade company account to Pro</span><br></br>
      <span className='tktdesc'>We would like to upgrade our company account to Pro tier to access advanced features.</span> </div>
      <span className='tktfooter'> Robert Taylor (Hiring Solutions LLC) | 2024-12-11 08:15 AM | Assigned to: David Brown | 1 Response</span>
    </div>
    <div className='ticket'>
      <div className='tktinfo'>
        <span className='tktid'>TKT - 006</span>
        <span className='progresstag'>User</span>
        <span className='usertag'>Open</span>
        <span className='tktstage'>High</span>
        <span className='tktdept'>Bug Report</span>
      </div>
      <div className='tktdetails'><span className='tkttitle'>Job application not submitted</span><br></br>
      <span className='tktdesc'>I filled out the entire application form but it says submission failed.</span> </div>
      <span className='tktfooter'> Amanda White | 2024-12-12 05:30 PM </span>
    </div>
    <div className='ticket'>
      <div className='tktinfo'>
        <span className='tktid'>TKT - 007</span>
        <span className='usertag'>Company</span>
        <span className='usertag'>Open</span>
        <span className='resolvetag'>low</span>
        <span className='tktdept'>Feature Request</span>
      </div>
      <div className='tktdetails'><span className='tkttitle'>Request API documentation for job posting</span><br></br>
      <span className='tktdesc'>We need API documentation to integrate job posting functionality into our system.</span> </div>
      <span className='tktfooter'> David Martinez (Tech Startup Inc.) | 2024-12-11 02:15 PM </span>
    </div>
    <div className='ticket'>
      <div className='tktinfo'>
        <span className='tktid'>TKT - 008</span>
        <span className='progresstag'>User</span>
        <span className='progresstag'>In Progress</span>
        <span className='usertag'>Medium</span>
        <span className='tktdept'>Technical Issue</span>
      </div>
      <div className='tktdetails'><span className='tkttitle'>Notifications not working on mobile</span><br></br>
      <span className='tktdesc'>I'm not receiving push notifications on my mobile device for new job matches.</span> </div>
      <span className='tktfooter'> Sarah Williams | 2024-12-10 11:00 AM | Assigned to: Jennifer Lee | 1 Responses</span>
    </div>
    </div>
  );
};

export default Support;
