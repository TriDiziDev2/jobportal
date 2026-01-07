import './ColdLeads.css';

const ColdLeads = () => {
  return (
    <div className='dashboard-container'>
      <div className='jobheader'>
      <div className='jobleft'>
      <h1 className='dashboard-heading'>Cold Leads Management</h1>
      <div className='jobcount'>
        <span className='count'>11</span>
        <span className='label'>Total Leads</span>
       </div>
      </div>
      <div>
      <button className='addjob'> + Add Lead </button>
      <button className='import'> + Import CSV </button> </div>
    </div>

    <div className='coldleadsstats'>
      <div className='leadstats'>
          <div className='totalinternshipsicon1'></div>
          <span className='label'> New Leads </span> <br></br>
          <span className='count'> 3 </span> <br></br>
          <span className='label'>Require attention</span>
      </div>
      <div className='leadstats'>
        <div className='totalinternshipsicon1'></div>
          <span className='label'> Contacted </span> <br></br>
          <span className='count'> 5 </span> <br></br>
          <span className='label'>In Progress</span>
      </div>
      <div className='leadstats'>
        <div className='totalinternshipsicon1'></div>
          <span className='label'> Interested </span> <br></br>
          <span className='count'> 3 </span> <br></br>
          <span className='label'>Ready to Convert</span>
      </div>
      <div className='leadstats'>
        <div className='totalinternshipsicon1'></div>
          <span className='label'> Converted </span> <br></br>
          <span className='count'> 0 </span> <br></br>
          <span className='label'>Success rate</span>
      </div>
      <div className='leadstats'>
        <div className='totalinternshipsicon1'></div>
          <span className='label'> Pending Actions </span> <br></br>
          <span className='count'> 3 </span> <br></br>
          <span className='label'>Follow-ups neeeded</span>
      </div>
    </div>

      <div className='usercategories'>
        <div className='allusers'>Users (3) </div>
        <div>Companies (2)</div>
        <div>Tutors (2) </div>
        <div>institutes (12) </div>
        <div>Personal Trainers (12) </div>
      </div>
    
    <div className='leadsearch'>
      <div className='leadsearchbar'>
        <span className='searchleads'>Search Users....</span>
        <button className='morefilters'> More Filters </button>
      </div>
    </div>
    
    <div className='usertable'>
        <table className='user-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Status</th>
              <th>Source</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username1'>Alex Thompson </span><br></br>
                    <span className='userdetail1'>Added 12/1/2024</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail1'>alex.t@email.com</span><br></br>
                <span className='userdetail1'>+91 9876543210</span> </div>
              </td>

              <td>
                <div className='userdetail1'>Mumbai, Maharashtra</div>
              </td>

              <td>
                <div className='activetag'>New</div>
              </td>

              <td>
                <div className='userdetail'>Linkedin</div>
              </td>

              <td>
                <div className='userdetail'>John Deo</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='assignoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username1'>Maria Garcia </span><br></br>
                    <span className='userdetail1'>Added 12/2/2024</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail1'>maria.g@email.com</span><br></br>
                <span className='userdetail1'>+91 8768565678</span> </div>
              </td>

              <td>
                <div className='userdetail1'>Bangalore, Karnataka</div>
              </td>

              <td>
                <div className='activetag'>Contacted</div>
              </td>

              <td>
                <div className='userdetail'>Indeed</div>
              </td>

              <td>
                <div className='userdetail'>Sarah Smith</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='assignoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username1'>James Wilson</span><br></br>
                    <span className='userdetail1'>Added 12/3/2024</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail1'>james.w@email.com</span><br></br>
                <span className='userdetail1'>+91 9128937979</span> </div>
              </td>

              <td>
                <div className='userdetail1'>Delhi, NCR</div>
              </td>

              <td>
                <div className='activetag'>Interested</div>
              </td>

              <td>
                <div className='userdetail'>Referral</div>
              </td>

              <td>
                <div className='userdetail'>Mike Johnson</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='assignoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username1'>Alex Thompson </span><br></br>
                    <span className='userdetail1'>Added 12/1/2024</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail1'>alex.t@email.com</span><br></br>
                <span className='userdetail1'>+91 9876543210</span> </div>
              </td>

              <td>
                <div className='userdetail1'>Mumbai, Maharashtra</div>
              </td>

              <td>
                <div className='activetag'>New</div>
              </td>

              <td>
                <div className='userdetail'>Linkedin</div>
              </td>

              <td>
                <div className='userdetail'>John Deo</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='assignoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username1'>Maria Garcia </span><br></br>
                    <span className='userdetail1'>Added 12/2/2024</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail1'>maria.g@email.com</span><br></br>
                <span className='userdetail1'>+91 8768565678</span> </div>
              </td>

              <td>
                <div className='userdetail1'>Bangalore, Karnataka</div>
              </td>

              <td>
                <div className='activetag'>Contacted</div>
              </td>

              <td>
                <div className='userdetail'>Indeed</div>
              </td>

              <td>
                <div className='userdetail'>Sarah Smith</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='assignoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username1'>James Wilson</span><br></br>
                    <span className='userdetail1'>Added 12/3/2024</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail1'>james.w@email.com</span><br></br>
                <span className='userdetail1'>+91 9128937979</span> </div>
              </td>

              <td>
                <div className='userdetail1'>Delhi, NCR</div>
              </td>

              <td>
                <div className='activetag'>Interested</div>
              </td>

              <td>
                <div className='userdetail'>Referral</div>
              </td>

              <td>
                <div className='userdetail'>Mike Johnson</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='assignoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username1'>Alex Thompson </span><br></br>
                    <span className='userdetail1'>Added 12/1/2024</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail1'>alex.t@email.com</span><br></br>
                <span className='userdetail1'>+91 9876543210</span> </div>
              </td>

              <td>
                <div className='userdetail1'>Mumbai, Maharashtra</div>
              </td>

              <td>
                <div className='activetag'>New</div>
              </td>

              <td>
                <div className='userdetail'>Linkedin</div>
              </td>

              <td>
                <div className='userdetail'>John Deo</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='assignoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username1'>Maria Garcia </span><br></br>
                    <span className='userdetail1'>Added 12/2/2024</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail1'>maria.g@email.com</span><br></br>
                <span className='userdetail1'>+91 8768565678</span> </div>
              </td>

              <td>
                <div className='userdetail1'>Bangalore, Karnataka</div>
              </td>

              <td>
                <div className='activetag'>Contacted</div>
              </td>

              <td>
                <div className='userdetail'>Indeed</div>
              </td>

              <td>
                <div className='userdetail'>Sarah Smith</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='assignoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username1'>James Wilson</span><br></br>
                    <span className='userdetail1'>Added 12/3/2024</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail1'>james.w@email.com</span><br></br>
                <span className='userdetail1'>+91 9128937979</span> </div>
              </td>

              <td>
                <div className='userdetail1'>Delhi, NCR</div>
              </td>

              <td>
                <div className='activetag'>Interested</div>
              </td>

              <td>
                <div className='userdetail'>Referral</div>
              </td>

              <td>
                <div className='userdetail'>Mike Johnson</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='assignoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>
          </tbody>
        </table>


      </div>


  </div>
  );
};

export default ColdLeads;
