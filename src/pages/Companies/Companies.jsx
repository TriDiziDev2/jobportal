import './Companies.css';

const Companies = () => {
  return (
    <div className='dashboard-container'>
      <div className='jobheader'>
      <div className='jobleft'>
      <h1 className='dashboard-heading'>Compaies</h1>
      <div className='jobcount'>
        <span className='count'>8</span>
        <span className='label'>Total Companies</span>
       </div>
      </div>
      <button className='addjob'> + Add Company </button>
    </div>

    <div className='compstats'>
      <div className='compstat'>
        <span className='compstatheading'>Total Companies</span> <br></br>
        <span className='compstatnum1'>8</span>
      </div>
      <div className='compstat'>
        <span className='compstatheading'>Active</span> <br></br>
        <span className='compstatnum2'>7</span>
      </div>
      <div className='compstat'>
        <span className='compstatheading'>Pending Approval</span> <br></br>
        <span className='compstatnum2'>1</span>
      </div>
      <div className='compstat'>
        <span className='compstatheading'>Verified</span> <br></br>
        <span className='compstatnum2'>6</span>
      </div>
    </div>

    <div className='filteroptions'>
      <div className='filters'>
      <div className='jobtype'>
        <span>Subscription Plan </span><br></br>
        <button className='jobtypebutton'>All Plans (8) </button>
        <button className='jobtypebutton'>Pro (5) </button>
        <button className='jobtypebutton'>Quick Recruit (0) </button>
        <button className='jobtypebutton'>Free (3) </button>
      </div>
      <div className='jobtype'>
        <span>Verification Status </span><br></br>
        <button className='jobtypebutton'>All Companies (8) </button>
        <button className='jobtypebutton'>Verified (6) </button>
        <button className='jobtypebutton'>Unverified (2) </button>
        </div>
      </div>
      <div className='searchbar'>
        <span className='searchjobs'>Search Companies....</span>
        <button className='morefilters'> More Filters </button> 
      </div>
    </div>

    <div className='companyrow'>
      <div className='companyinfo'>
        <div className='companyinfohead'>
          <div className='companyinfoicon'></div>
          <div className='companytitle'>Analytics Co <span className='activetag'> Pro </span> <br></br>
          <span className='companyindustry'>Data & Analytics</span> <br></br>
          <span className='companyindustry'>4.7 </span> </div>
          <div className='companyactivetag'>Active</div>
        </div>
        <span className='companyindustry'> Data analytics firm providing insights and solutions to Fortune 500 companies.</span>
        <div className='companyinfostats'>
          <div className='companyinfodetail'> 
          <span>Boston, MA</span> <br></br>
          <span>12 Active</span>
        </div>

        <div className='companyinfodetail'> 
          <span>500-1,000</span> <br></br>
          <span>298 Applications</span>
        </div>

        </div>
        <div className='companyactions'>
          <div className='compactions'><div className='deleteoption'></div> <div className='deleteoption'></div></div>
        <span className='companywebsite'>Website</span>
        </div>
        
      </div>
      <div className='companyinfo'>
        <div className='companyinfohead'>
          <div className='companyinfoicon'></div>
          <div className='companytitle'>Cloud Systems<span className='activetag'> Pro </span> <br></br>
          <span className='companyindustry'>Technology</span> <br></br>
          <span className='companyindustry'>4.6 </span> </div>
          <div className='companyactivetag'>Active</div>
        </div>
        <span className='companyindustry'> Enterprise cloud infrastructure provider serving global clients.</span>
        <div className='companyinfostats'>
          <div className='companyinfodetail'> 
          <span>Austin, TX</span> <br></br>
          <span>18 Active</span>
        </div>

        <div className='companyinfodetail'> 
          <span>5,000+</span> <br></br>
          <span>412 Applications</span>
        </div>

        </div>
        <div className='companyactions'>
          <div className='compactions'><div className='deleteoption'></div> <div className='deleteoption'></div></div>
        <span className='companywebsite'>Website</span>
        </div>

      </div>
    </div>

    <div className='companyrow'>
      <div className='companyinfo'>
        <div className='companyinfohead'>
          <div className='companyinfoicon'></div>
          <div className='companytitle'>Tech Corp<span className='activetag'> Pro </span> <br></br>
          <span className='companyindustry'>Technology</span> <br></br>
          <span className='companyindustry'>4.5</span> </div>
          <div className='companyactivetag'>Active</div>
        </div>
        <span className='companyindustry'> Leading technology company specializing in software development and cloud solutions.</span>
        <div className='companyinfostats'>
          <div className='companyinfodetail'> 
          <span>New York, NY</span> <br></br>
          <span>15 Active</span>
        </div>

        <div className='companyinfodetail'> 
          <span>1000-5000</span> <br></br>
          <span>234 Applications</span>
        </div>

        </div>
        <div className='companyactions'>
          <div className='compactions'><div className='deleteoption'></div> <div className='deleteoption'></div></div>
        <span className='companywebsite'>Website</span>
        </div>
        
      </div>
      <div className='companyinfo'>
        <div className='companyinfohead'>
          <div className='companyinfoicon'></div>
          <div className='companytitle'>Design Studio<span className='activetag'> Pro </span> <br></br>
          <span className='companyindustry'>Design</span> <br></br>
          <span className='companyindustry'>4</span> </div>
          <div className='companyactivetag'>Active</div>
        </div>
        <span className='companyindustry'> Creative design agency offering freelance opportunities and internships.</span>
        <div className='companyinfostats'>
          <div className='companyinfodetail'> 
          <span>Los Angeles, CA</span> <br></br>
          <span>5 Active</span>
        </div>

        <div className='companyinfodetail'> 
          <span>10-50</span> <br></br>
          <span>89 Applications</span>
        </div>

        </div>
        <div className='companyactions'>
          <div className='compactions'><div className='deleteoption'></div> <div className='deleteoption'></div></div>
        <span className='companywebsite'>Website</span>
        </div>

      </div>
    </div>

    </div>
  );
};

export default Companies;
