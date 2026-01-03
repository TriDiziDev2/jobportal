import './FreelanceGigs.css';

const FreelanceGigs = () => {
  return (
    <div className='dashboard-container'>
      <div className='jobheader'>
        <div className='jobleft'>
        <h1 className='dashboard-heading'>Freelance Gigs</h1>
        <div className='jobcount'>
        <span className='count'>10</span>
        <span className='label'>Total Gigs</span>
       </div>
        </div>
        <button className='addjob'> + Add Freelance Gig </button>
      </div>
      <div className='internshiphubstats'>
        <div className='totalinternships'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Total Gigs </span> <br></br>
          <span className='count'> 10 </span>
        </div>
      
        <div className='totalinternships'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Active Projects </span> <br></br>
          <span className='count'> 8 </span>
        </div>
    
        <div className='totalinternships'>
          <div className='totalinternshipsicon2'></div>
          <span className='label'> Total Proposals </span> <br></br>
          <span className='count'> 646 </span>
        </div>
  
        <div className='totalinternships'>
          <div className='totalinternshipsicon2'></div>
          <span className='label'> Avg per Gig </span> <br></br>
          <span className='count'> 65 </span>
        </div>

      </div>

      <div className='freelancegigsfilteroptions'>
             
        <div className='freelancetype'>
            <span>All Levels </span>
            <button className='jobtypebutton'>Entry Level</button>
            <button className='jobtypebutton'>Intermediate</button>
            <button className='jobtypebutton'>Expert</button>
            
          </div>

      

        <div className='freelancesearchbar'>
        <span className='searchjobs'>Search freelance gigs....</span>
        <button className='morefilters'> More Filters </button> 
        </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
       <div className='titlecard'>
        <span className='jobtitle'>Freelance Web Developer</span> <br></br>
        <span className='jobdetails'>Freelance Hub</span>
        </div>
        <div className='jobdetails'>Remote 2-3 Months $75 - $150/hr Deadline: 2024-12-15 
          <span className='depttag'>Technology</span>
          <span className='protag'>Hourly</span>
          </div>
        <div className='applicationstag'>56 Proposals • Posted 2024-12-02</div>
       </div>
        <div className='jobactions'>
        <span className='activetag'>Active</span>
        <span className='activetag'>Expert</span>
        <div className='editoption'></div>
        <div className='deleteoption'></div> </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
       <div className='titlecard'>
        <span className='jobtitle'>Freelance Content Writer</span> <br></br>
        <span className='jobdetails'>Media Group</span>
        </div>
        <div className='jobdetails'>Remote 1 Month $50 - $100/article Deadline: 2024-12-12 
          <span className='depttag'>Writing</span>
          <span className='protag'>Fixed</span>
          </div>
        <div className='applicationstag'>34 Proposals • Posted 2024-12-05</div>
       </div>
        <div className='jobactions'>
        <span className='activetag'>Active</span>
        <span className='activetag'>Intermediate</span>
        <div className='editoption'></div>
        <div className='deleteoption'></div> </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
       <div className='titlecard'>
        <span className='jobtitle'>Freelance Graphic Designer</span> <br></br>
        <span className='jobdetails'>Creative Co</span>
        </div>
        <div className='jobdetails'>Remote 3-4 Weeks $40 - $80/hr Deadline: 2024-12-10 
          <span className='depttag'>Design</span>
          <span className='protag'>Hourly</span>
          </div>
        <div className='applicationstag'>28 Proposals • Posted 2024-12-03</div>
       </div>
        <div className='jobactions'>
        <span className='activetag'>Active</span>
        <span className='activetag'>Intermediate</span>
        <div className='editoption'></div>
        <div className='deleteoption'></div> </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
       <div className='titlecard'>
        <span className='jobtitle'>Mobile App Developer</span> <br></br>
        <span className='jobdetails'>Startup Inc</span>
        </div>
        <div className='jobdetails'>Remote 4-6 Months $8,000 - $15,000  Deadline: 2024-12-20 
          <span className='depttag'>Technology</span>
          <span className='protag'>Fixed</span>
          </div>
        <div className='applicationstag'>89 Proposals • Posted 2024-11-28</div>
       </div>
        <div className='jobactions'>
        <span className='activetag'>Active</span>
        <span className='activetag'>Expert</span>
        <div className='editoption'></div>
        <div className='deleteoption'></div> </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
       <div className='titlecard'>
        <span className='jobtitle'>Social Media Manager</span> <br></br>
        <span className='jobdetails'>Brand Agency</span>
        </div>
        <div className='jobdetails'>Remote 2 Months $35 - $60/hr  Deadline: 2024-12-14 
          <span className='depttag'>Marketing</span>
          <span className='protag'>Hourly</span>
          </div>
        <div className='applicationstag'>42 Proposals • Posted 2024-12-06</div>
       </div>
        <div className='jobactions'>
        <span className='activetag'>Pending</span>
        <span className='activetag'>Intermediate</span>
        <div className='editoption'></div>
        <div className='deleteoption'></div> </div>
      </div>

      <div className='job1'>
        <div className='jobicon'></div>
        <div className='jobinfo'>
       <div className='titlecard'>
        <span className='jobtitle'>Video Editor</span> <br></br>
        <span className='jobdetails'>Production Studio</span>
        </div>
        <div className='jobdetails'>Remote 1 Month $2,500 - $4,000  Deadline: 2024-12-11 
          <span className='depttag'>Video Production</span>
          <span className='protag'>Fixed</span>
          </div>
        <div className='applicationstag'>67 Proposals • Posted 2024-12-04</div>
       </div>
        <div className='jobactions'>
        <span className='activetag'>Active</span>
        <span className='activetag'>Expert</span>
        <div className='editoption'></div>
        <div className='deleteoption'></div> </div>
      </div>
    </div>
  );
};

export default FreelanceGigs;
