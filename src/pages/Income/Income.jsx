import './Income.css';

const Income = () => {
  return (
    <div className='dashboard-container'>
      <div className='incomeheader'>
        <div className='incomehead'>
        <span className='instituteheading'>Income & Plans</span> <br></br>
      <span className='institutedesc'>Manage revenue, subscriptions and pricing</span> </div>
      <button className='exporttag'>Export Report</button>
      </div>

      <ul className='usercategories'>
        <li className='allusers'>Revenue Analytics</li>
        <li>Update Plans</li>
        <li>Plan Settings</li>
      </ul>
      <span className='thinborder'></span>
      <div className='timeliencat'>
        <button className='addjob'>This Week</button>
        <button className='exporttag'>This Month</button>
        <button className='exporttag'>This Year</button>
      </div>
      <div className='incomestats'>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Total Revenue </span> <br></br>
          <span className='count'> ₹3,054,540 </span> <br></br>
          <span className='text'>All time earnings</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Company Plans </span> <br></br>
          <span className='count'> ₹984,560 </span> <br></br>
          <span className='text'>2,682 subscriptions</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> User Plans </span> <br></br>
          <span className='count'> ₹592,140 </span> <br></br>
          <span className='text'>4,607 users</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Freelancer Credits </span> <br></br>
          <span className='count'> ₹270,820 </span> <br></br>
          <span className='text'>542 purchases</span>
        </div>

      </div>

      <div className='incomestats'>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Tutor Plans </span> <br></br>
          <span className='count'> ₹358,020 </span> <br></br>
          <span className='text'>179 subscriptions</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Personal Trainer Plans </span> <br></br>
          <span className='count'> ₹253,000 </span> <br></br>
          <span className='text'>51 subscriptions</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Recruiter Database </span> <br></br>
          <span className='count'> ₹486,000 </span> <br></br>
          <span className='text'>146 subscriptions</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Internship Plans </span> <br></br>
          <span className='count'> ₹110,000 </span> <br></br>
          <span className='text'>1,111 purchases</span>
        </div>
      </div>

      <div className='revenuestats'>
        <div className='revenueheader'>
          <span className='text'>Revenue Trends</span>
          <span className='label'>Last 6 Months</span>
        </div>
      </div>
      <div className='revenueperformance'>
        <div className='revenuedistribution'>
          <span className='text'>Revenue Distribution</span>
          <div className='graph'></div>
          <ul className='values'>
            <li className='value'>
              <span>Companies</span> <span>₹984,560</span>
            </li>
             <li className='value'>
              <span>Users</span> <span>₹592,140</span>
            </li>
             <li className='value'>
              <span>Freelancers</span> <span>₹270,820</span>
            </li>
             <li className='value'>
              <span>Tutors</span> <span>₹358,020</span>
            </li>
             <li className='value'>
              <span>Trainers</span> <span>₹253,000</span>
            </li>
             <li className='value'>
              <span>Recruiters</span> <span>₹486,000</span>
            </li>
             <li className='value'>
              <span>Internships</span> <span>₹110,000</span>
            </li>
          </ul>
        </div>
        <div className='revenuedistribution'>
          <span className='text'>Subscription Plans Performance</span>
          <div className='scrollbox'>
            <ul className='complanyplans'> Company Plans
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Free Plan</span> <br></br>
                  <span className='count'>245 Companies</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹0</span> <br></br>
                  <span className='count'>Free</span>
                </div>
              </li>
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Pro Plan</span> <br></br>
                  <span className='count'>1842 Companies</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹182,358</span> <br></br>
                  <span className='count'>₹99</span>
                </div>
              </li>
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Quick Recruit</span> <br></br>
                  <span className='count'>456 companies</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹455,544</span> <br></br>
                  <span className='count'>₹999</span>
                </div>
              </li>
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Complete Recruit</span> <br></br>
                  <span className='count'>139 companies</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹347,361</span> <br></br>
                  <span className='count'>₹2499</span>
                </div>
              </li>
            </ul>
            <ul className='complanyplans'> User Plans
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Elite Plan</span> <br></br>
                  <span className='count'>3245 subscribers</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹321,255</span> <br></br>
                  <span className='count'>₹99</span>
                </div>
              </li>
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Pro Plan</span> <br></br>
                  <span className='count'>1362 subscribers</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹271,038</span> <br></br>
                  <span className='count'>₹199</span>
                </div>
              </li>
            </ul>

            <ul className='complanyplans'> Freelancer Plans
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Credit Plan</span> <br></br>
                  <span className='count'>542 purchases</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹1,083,458</span> <br></br>
                  <span className='count'>₹1999</span>
                </div>
              </li>
            </ul>
            <ul className='complanyplans'> Tutor Plans
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Tutor Plan</span> <br></br>
                  <span className='count'>179 subscribers</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹358,021</span> <br></br>
                  <span className='count'>₹1999</span>
                </div>
              </li>
            </ul>
            <ul className='complanyplans'> Personal Trainer Plans
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Personal Trainer Plan</span> <br></br>
                  <span className='count'>51 subscribers</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹254,949</span> <br></br>
                  <span className='count'>₹4999</span>
                </div>
              </li>
            </ul>
            <ul className='complanyplans'> Recruiter Database Plans
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Recruiter Database - Elite</span> <br></br>
                  <span className='count'>98 subscribers</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹293,902</span> <br></br>
                  <span className='count'>₹2999</span>
                </div>
              </li>
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Recruiter Database - Pro</span> <br></br>
                  <span className='count'>48 subscribers</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹191,952</span> <br></br>
                  <span className='count'>₹3999</span>
                </div>
              </li>
            </ul>
            <ul className='complanyplans'> Internship Plans
              <li className='companyplanstats'>
                <div>
                  <span className='plantitle'>Internship Plan</span> <br></br>
                  <span className='count'>1111 purchases</span>
                </div>

                <div className='pricevalues'>
                  <span className='price'>₹109,989</span> <br></br>
                  <span className='count'>₹99</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='transactiontable'>
        <div className='mainTitle'>
            <div>Recent Transactions </div>
                <div>
                <button className='selectcat'>All</button>
                <button className='tablecat'>Companies</button>
                <button className='tablecat'>Users</button>
                <button className='tablecat'>Freelancers</button>
                <button className='tablecat'>Tutors</button>
                <button className='tablecat'>Trainers</button>
                <button className='tablecat'>Recruiters</button>
                <button className='tablecat'>Internships</button>
                </div>
          </div>
        <table className='user-table'>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>User/Company</th>
              <th>Type</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <span className='userdetail1'>#000001</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>Tech Corp</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>Company</span> 
              </td>

              <td>
                <span className='userdetail1'>Complete Recruit</span> 
              </td>

              <td>
                <span className='companyplans'>₹2499</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-08</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000002</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>John Doe</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>User</span> 
              </td>

              <td>
                <span className='userdetail1'>Pro Plan</span> 
              </td>

              <td>
                <span className='companyplans'>₹1999</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-08</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000003</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>Sarah Wilson</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>Freelancer</span> 
              </td>

              <td>
                <span className='userdetail1'>Credit Plan</span> 
              </td>

              <td>
                <span className='companyplans'>₹1999</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-07</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000004</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>Rajesh Kumar</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>Tutor</span> 
              </td>

              <td>
                <span className='userdetail1'>Tutor Plan</span> 
              </td>

              <td>
                <span className='companyplans'>₹1999</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-07</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000005</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>TechMasters Academy</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>Trainer</span> 
              </td>

              <td>
                <span className='userdetail1'>Personal Trainer Plan</span> 
              </td>

              <td>
                <span className='companyplans'>₹4999</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-07</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000006</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>Startup Inc</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>Company</span> 
              </td>

              <td>
                <span className='userdetail1'>Quick Recruit</span> 
              </td>

              <td>
                <span className='companyplans'>₹999</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-07</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000007</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>Mike Johnson</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>User</span> 
              </td>

              <td>
                <span className='userdetail1'>Elite Plan</span> 
              </td>

              <td>
                <span className='companyplans'>₹99</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-07</span> 
              </td>

              <td>
                <span className='userdetail'>Pending</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000008</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>Design Studio</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>Company</span> 
              </td>

              <td>
                <span className='userdetail1'>Pro Plan</span> 
              </td>

              <td>
                <span className='companyplans'>₹99</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-06</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000009</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>Priya Sharma</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>Tutor</span> 
              </td>

              <td>
                <span className='userdetail1'>Tutor Plan</span> 
              </td>

              <td>
                <span className='companyplans'>₹1999</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-06</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000010</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>Emily Davis</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>Freelancer</span> 
              </td>

              <td>
                <span className='userdetail1'>Credit Plan</span> 
              </td>

              <td>
                <span className='companyplans'>₹1999</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-06</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>

            <tr>
              <td>
                <span className='userdetail1'>#000011</span> 
              </td>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div className='username1'>David Brown</div>
                </div>
              </td>

              <td>
                <span className='userdetail1'>User</span> 
              </td>

              <td>
                <span className='userdetail1'>Pro Plan</span> 
              </td>

              <td>
                <span className='companyplans'>₹199</span> 
              </td>

              <td>
                <span className='userdetail1'>2024-12-06</span> 
              </td>

              <td>
                <span className='completetag'>Completed</span> 
              </td>
            </tr>
            
          </tbody>
        </table>


      </div>
      
    </div>
  );
};

export default Income;
