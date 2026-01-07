import './Employees.css';

const Employees = () => {
  return (
    <div className='dashboard-container'>
      <div className='jobheader'>
      <div className='jobleft'>
      <h1 className='dashboard-heading'>Employees</h1>
      <div className='jobcount'>
        <span className='count'>8</span>
        <span className='label'>Total Employees</span>
       </div>
      </div>
      <button className='addjob'> + Add Employee </button>
    
    </div>

    <div className='coldleadsstats'>
      <div className='employeestats'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Total Employees </span> <br></br>
          <span className='count'> 8 </span> <br></br>
      </div>
      <div className='employeestats'>
        <div className='totalinternshipsicon1'></div>
          <span className='label'> Active </span> <br></br>
          <span className='count'> 6 </span> <br></br>
      </div>
      <div className='employeestats'>
        <div className='totalinternshipsicon1'></div>
          <span className='label'> On Leave </span> <br></br>
          <span className='count'> 1 </span> <br></br>
      </div>
      <div className='employeestats'>
        <div className='totalinternshipsicon1'></div>
          <span className='label'> Departments </span> <br></br>
          <span className='count'> 6 </span> <br></br>
      </div>
    </div>
    
    
    <div className='employeesearchbar'>
        <span className='searchleads'>Search Employees....</span>
        <button className='morefilters'> Filters </button>
    </div>
    
    <div className='employeerow'>
      <div className='employeeinfo'>
        <div className='employeetitle'>
          <div className='employeeicon'></div>
          <div className='employeename'>Sarah Johnson <br></br>
          <span className='employeecode'>EMP-001</span></div>
        </div>
        <ul>
          <li>Senior HR Manager</li>
          <li>Human Resources</li>
          <li>New York, NY</li>
          <li>sarah.johnson@jobportal.com</li>
          <li>+91 8989878378</li>
        </ul>

        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='employeecode'>Joined</div>
           <div className='joineddate'>Jan 2022</div> 
        </div>
      </div>
      
      <div className='employeeinfo'>
        <div className='employeetitle'>
          <div className='employeeicon'></div>
          <div className='employeename'>Michael Chen <br></br>
          <span className='employeecode'>EMP-002</span></div>
        </div>
        <ul>
          <li>Technical Lead</li>
          <li>Engineering</li>
          <li>Sanfrancisco, CA</li>
          <li>michael.chen@jobportal.com</li>
          <li>+91 8984983989</li>
        </ul>

        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='employeecode'>Joined</div>
           <div className='joineddate'>Aug 2021</div> 
        </div>

      </div>
      <div className='employeeinfo'>
        <div className='employeetitle'>
          <div className='employeeicon'></div>
          <div className='employeename'>Emily Rodriguez<br></br>
          <span className='employeecode'>EMP-003</span></div>
        </div>
        <ul>
          <li>Marketing Manager</li>
          <li>Marketing</li>
          <li>Austin, TX</li>
          <li>emily.rodriguez@jobportal.com</li>
          <li>+91 8983868378</li>
        </ul>

        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='employeecode'>Joined</div>
           <div className='joineddate'>May 2022</div> 
        </div>

      </div>
    </div>

    <div className='employeerow'>
      <div className='employeeinfo'>
        <div className='employeetitle'>
          <div className='employeeicon'></div>
          <div className='employeename'>James Wilson<br></br>
          <span className='employeecode'>EMP-004</span></div>
        </div>
        <ul>
          <li>Customer Success Lead</li>
          <li>Customer Success</li>
          <li>Remote</li>
          <li>james.wilson@jobportal.com</li>
          <li>+91 8989898989</li>
        </ul>

        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='employeecode'>Joined</div>
           <div className='joineddate'>Jan 2023</div> 
        </div>
      </div>
      
      <div className='employeeinfo'>
        <div className='employeetitle'>
          <div className='employeeicon'></div>
          <div className='employeename'>Lisa Anderson <br></br>
          <span className='employeecode'>EMP-005</span></div>
        </div>
        <ul>
          <li>Senior Developer</li>
          <li>Engineering</li>
          <li>Seattle, WA</li>
          <li>lisa.anderson@jobportal.com</li>
          <li>+91 9889898990</li>
        </ul>

        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='employeecode'>Joined</div>
           <div className='joineddate'>Nov 2021</div> 
        </div>

      </div>
      <div className='employeeinfo'>
        <div className='employeetitle'>
          <div className='employeeicon'></div>
          <div className='employeename'>Robert Martinez<br></br>
          <span className='employeecode'>EMP-006</span></div>
        </div>
        <ul>
          <li>Product Manager</li>
          <li>Product</li>
          <li>Boston, MA</li>
          <li>robert.martinez@jobportal.com</li>
          <li>+91 7873889889</li>
        </ul>

        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='employeecode'>Joined</div>
           <div className='joineddate'>May 2022</div> 
        </div>

      </div>
    </div>

    <div className='employeerow'>
      <div className='employeeinfo'>
        <div className='employeetitle'>
          <div className='employeeicon'></div>
          <div className='employeename'>Jessica Taylor<br></br>
          <span className='employeecode'>EMP-007</span></div>
        </div>
        <ul>
          <li>Content Writer</li>
          <li>Marketing</li>
          <li>Chicago, IL</li>
          <li>jessica.taylor@jobportal.com</li>
          <li>+91 8989878378</li>
        </ul>

        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='employeecode'>Joined</div>
           <div className='joineddate'>Feb 2023</div> 
        </div>
      </div>
      
      <div className='employeeinfo'>
        <div className='employeetitle'>
          <div className='employeeicon'></div>
          <div className='employeename'>David Kim <br></br>
          <span className='employeecode'>EMP-008</span></div>
        </div>
        <ul>
          <li>Sales Manager</li>
          <li>Sales</li>
          <li>Miami, FL</li>
          <li>david.kim@jobportal.com</li>
          <li>+91 8984983989</li>
        </ul>

        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='employeecode'>Joined</div>
           <div className='joineddate'>Sep 2022</div> 
        </div>

      </div>
      <div className='employeeinfo'>
        <div className='employeetitle'>
          <div className='employeeicon'></div>
          <div className='employeename'>Sandeep Sandy<br></br>
          <span className='employeecode'>EMP-009</span></div>
        </div>
        <ul>
          <li>Product Developer</li>
          <li>Product</li>
          <li>Hyderabad, TS</li>
          <li>sandeep.sandy@jobportal.com</li>
          <li>+91 8985622510</li>
        </ul>

        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='employeecode'>Joined</div>
           <div className='joineddate'>Jul 2023</div> 
        </div>

      </div>
    </div>
    </div>
  );
};

export default Employees;
