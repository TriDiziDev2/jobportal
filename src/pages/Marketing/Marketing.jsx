import './Marketing.css';

const Marketing = () => {
  return (
    <div className='dashboard-container'>
      <div className='incomeheader'>
        <div className='incomehead'>
        <span className='instituteheading'>Marketing & Analytics</span> <br></br>
      <span className='marketingdesc'>Track user acquisition, campaigns, and push notification performance</span> </div>
      <button className='exporttag'>Export Report</button>
      </div>

      <ul className='usercategories'>
        <li className='allusers'>Overview</li>
        <li>User Sources</li>
        <li>Push Notifications</li>
        <li>Campaigns</li>
      </ul>
      <span className='thinborder'></span>

      <div className='incomestats'>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'>Total Users</span> <br></br>
          <span className='count'>15,600</span> <br></br>
          <span className='text'>+18.2% from last month</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'>Conversions</span> <br></br>
          <span className='count'>1,858</span> <br></br>
          <span className='text'>+22.5% from last month</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'>Marketing Revenue</span> <br></br>
          <span className='count'>₹18.58L</span> <br></br>
          <span className='text'>+25.3% from last month</span>
        </div>
        <div className='incomestat'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> Avg Conversion Rate </span> <br></br>
          <span className='count'> 11.9% </span> <br></br>
          <span className='text'>+1.8% from last month</span>
        </div>

      </div>
      <div className='funnel'>
        <div className='funnelheader'>
          Conversion Funnel <br></br>
          <span className='funneldesc'>User journey from visitor to paid customer</span>
        </div>

        <div className='funnelstat'>
          <div>Visitors</div>
          <div>
            <span className='count'>15,600 users</span>
            <span className='funnlepercentage'>100%</span>
            </div>
        </div>
        <div className='progressbar'></div>
        
        <div className='funnelstat'>
          <div>Sign Ups</div>
          <div>
            <span className='count'>6,240 users</span>
            <span className='funnlepercentage'>40%</span>
            </div>
        </div>
        <div className='progressbar'></div>
        <div className='funnelstat'>
          <div>Active Users</div>
          <div>
            <span className='count'>3,744 users</span>
            <span className='funnlepercentage'>24%</span>
            </div>
        </div>
        <div className='progressbar'></div>
        <div className='funnelstat'>
          <div>Trial Started</div>
          <div>
            <span className='count'>1,872 users</span>
            <span className='funnlepercentage'>12%</span>
            </div>
        </div>
        <div className='progressbar'></div>
        <div className='funnelstat'>
          <div>Paid Conversion</div>
          <div>
            <span className='count'>936 users</span>
            <span className='funnlepercentage'>6%</span>
            </div>
        </div>
        <div className='progressbar'></div>
      </div>

      <div className='funnel'>
        <div className='funnelheader'>
          Monthly Traffic by Source <br></br>
          <span className='funneldesc'>User acquisition trends across different channels</span>
        </div>
      </div>

      <div className='pushnotifications'>
        <div className='funnelheader'>
          Top Performing Push Notifications <br></br>
          <span className='funneldesc'>Highest revenue generating notifications</span>
          <div className='pushstats'>
            <div className='pushstatcontent'>
              <span className='notificationtitle'>Boost Your Job Search</span> <br></br>
              <span className='notificationdesc'>Premium members get 3x more interview calls. Try it now!</span> <br></br>
              <span className='notificationvalues'>Sent: 4,850 | Opened: 2,425 (50.0%) | Clicked: 728 (15.0%)</span>
            </div>
            <div className='pushststvalues'>
              <span className='notificationrev'>₹173K</span><br></br>
              <span className='notificationconv'>175 conversions</span>
            </div>
          </div>
          <div className='pushstats'>
            <div className='pushstatcontent'>
              <span className='notificationtitle'>Upgrade to Pro - Limited Time Offer!</span> <br></br>
              <span className='notificationdesc'>Get 30% off on Pro Plan. Unlock premium features today!</span> <br></br>
              <span className='notificationvalues'>Sent: 3,250 | Opened: 1,625 (50.0%) | Clicked: 488 (15.0%)</span>
            </div>
            <div className='pushststvalues'>
              <span className='notificationrev'>₹145K</span><br></br>
              <span className='notificationconv'>146 conversions</span>
            </div>
          </div>
          <div className='pushstats'>
            <div className='pushstatcontent'>
              <span className='notificationtitle'>Your Trial is Ending Soon</span> <br></br>
              <span className='notificationdesc'>Upgrade now and save 25% before access expires</span> <br></br>
              <span className='notificationvalues'>Sent: 420 | Opened: 336 (80.0%) | Clicked: 202 (48.1%)</span>
            </div>
            <div className='pushststvalues'>
              <span className='notificationrev'>₹96K</span><br></br>
              <span className='notificationconv'>97 conversions</span>
            </div>
          </div>
          <div className='pushstats'>
            <div className='pushstatcontent'>
              <span className='notificationtitle'>Complete Your Profile</span> <br></br>
              <span className='notificationdesc'>Add your skills and get matched with better opportunities!</span> <br></br>
              <span className='notificationvalues'>Sent: 1,850 | Opened: 1,295 (70.0%) | Clicked: 555 (30.0%)</span>
            </div>
            <div className='pushststvalues'>
              <span className='notificationrev'>₹88K</span><br></br>
              <span className='notificationconv'>89 conversions</span>
            </div>
          </div>
          <div className='pushstats'>
            <div className='pushstatcontent'>
              <span className='notificationtitle'>We Miss You!</span> <br></br>
              <span className='notificationdesc'>Come back and explore new job opportunities waiting for you</span> <br></br>
              <span className='notificationvalues'>Sent: 2,100 | Opened: 840 (40.0%) | Clicked: 336 (16.0%)</span>
            </div>
            <div className='pushststvalues'>
              <span className='notificationrev'>₹42K</span><br></br>
              <span className='notificationconv'>42 conversions</span>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Marketing;
