import './UserManagement.css';

const UserManagement = () => {
  return (
    <div className='dashboard-container'>
            <div className='jobleft'>
      <h1 className='dashboard-heading'>User Management</h1>
      <div className='jobcount'>
        <span className='count'>60</span>
        <span className='label'>Total Users</span>
       </div>
      </div>

        <ui className='usercategories'>
          <li className='allusers'>All Users (60) </li>
          <li>Candidates (7)</li>
          <li>Employers (5)</li>
          <li>Tutors (12)</li>
          <li>Personal Trainers (12)</li>
          <li>Institutes (12)</li>
          <li>Freelancers (12)</li>
        </ui>
        <span className='thinborder'></span>
      <div className='usersearch'>
        <div className='usersearchbar'>
        <span className='searchjobs'>Search Users....</span>
        <button className='morefilters'> More Filters </button> 
        </div>
      </div>

      <div className='usertable'>
        <table className='user-table'>
          <thead>
            <tr>
              <th>User</th>
              <th>Contact</th>
              <th>Roles</th>
              <th>Status</th>
              <th>Activity</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>John Smith </span><br></br>
                    <span className='userdetail'>New York, NY</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>john.deo@email.com</span><br></br>
                <span className='userdetail'>+91 9876543210</span> </div>
              </td>

              <td>
                <div className='activetag'>Candidate</div>
              </td>

              <td>
                <div className='activetag'>Active</div>
              </td>

              <td>
                <div className='userdetail'>12 Candidates</div>
              </td>

              <td>
                <div className='userdetail'>2024-01-15</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Jane Smith </span><br></br>
                    <span className='userdetail'>San Francisco, CA</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>jane.smith@email.com</span><br></br>
                <span className='userdetail'>+91 8768565678</span> </div>
              </td>

              <td>
                <div className='activetag'>Employer</div>
              </td>

              <td>
                <div className='activetag'>Active</div>
              </td>

              <td>
                <div className='userdetail'>8 Jobs Posted</div>
              </td>

              <td>
                <div className='userdetail'>2024-02-20</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Mike Johnson</span><br></br>
                    <span className='userdetail'>Los Angeles, CA</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>mike.j@email.com</span><br></br>
                <span className='userdetail'>+91 9128937979</span> </div>
              </td>

              <td>
                <div className='activetag'>Candidate</div>
              </td>

              <td>
                <div className='activetag'>Active</div>
              </td>

              <td>
                <div className='userdetail'>5 Applications</div>
              </td>

              <td>
                <div className='userdetail'>2024-03-10</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Sarah Williams</span><br></br>
                    <span className='userdetail'>Boston, MA</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>sarah.w@email.com</span><br></br>
                <span className='userdetail'>+91 7878649987</span> </div>
              </td>

              <td>
                <div className='activetag'>Employer</div>
              </td>

              <td>
                <div className='activetag'>Active</div>
              </td>

              <td>
                <div className='userdetail'>15 Jobs Posted</div>
              </td>

              <td>
                <div className='userdetail'>2024-02-15</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Tom Brown</span><br></br>
                    <span className='userdetail'>Chicago, IL</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>tom.brown@email.com</span><br></br>
                <span className='userdetail'>+91 8986576727</span> </div>
              </td>

              <td>
                <div className='activetag'>Candidate</div>
              </td>

              <td>
                <div className='activetag'>Inactive</div>
              </td>

              <td>
                <div className='userdetail'>3 Applications</div>
              </td>

              <td>
                <div className='userdetail'>2024-01-05</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Emily Davis</span><br></br>
                    <span className='userdetail'>Austin, TX</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>emily.d@email.com</span><br></br>
                <span className='userdetail'>+91 7875467877</span> </div>
              </td>

              <td>
                <div className='activetag'>Employer</div>
              </td>

              <td>
                <div className='activetag'>Suspended</div>
              </td>

              <td>
                <div className='userdetail'>4 Jobs Posted</div>
              </td>

              <td>
                <div className='userdetail'>2024-03-01</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>John Smith </span><br></br>
                    <span className='userdetail'>New York, NY</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>john.deo@email.com</span><br></br>
                <span className='userdetail'>+91 9876543210</span> </div>
              </td>

              <td>
                <div className='activetag'>Candidate</div>
              </td>

              <td>
                <div className='activetag'>Active</div>
              </td>

              <td>
                <div className='userdetail'>12 Candidates</div>
              </td>

              <td>
                <div className='userdetail'>2024-01-15</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Jane Smith </span><br></br>
                    <span className='userdetail'>San Francisco, CA</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>jane.smith@email.com</span><br></br>
                <span className='userdetail'>+91 8768565678</span> </div>
              </td>

              <td>
                <div className='activetag'>Employer</div>
              </td>

              <td>
                <div className='activetag'>Active</div>
              </td>

              <td>
                <div className='userdetail'>8 Jobs Posted</div>
              </td>

              <td>
                <div className='userdetail'>2024-02-20</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Mike Johnson</span><br></br>
                    <span className='userdetail'>Los Angeles, CA</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>mike.j@email.com</span><br></br>
                <span className='userdetail'>+91 9128937979</span> </div>
              </td>

              <td>
                <div className='activetag'>Candidate</div>
              </td>

              <td>
                <div className='activetag'>Active</div>
              </td>

              <td>
                <div className='userdetail'>5 Applications</div>
              </td>

              <td>
                <div className='userdetail'>2024-03-10</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Sarah Williams</span><br></br>
                    <span className='userdetail'>Boston, MA</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>sarah.w@email.com</span><br></br>
                <span className='userdetail'>+91 7878649987</span> </div>
              </td>

              <td>
                <div className='activetag'>Employer</div>
              </td>

              <td>
                <div className='activetag'>Active</div>
              </td>

              <td>
                <div className='userdetail'>15 Jobs Posted</div>
              </td>

              <td>
                <div className='userdetail'>2024-02-15</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Tom Brown</span><br></br>
                    <span className='userdetail'>Chicago, IL</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>tom.brown@email.com</span><br></br>
                <span className='userdetail'>+91 8986576727</span> </div>
              </td>

              <td>
                <div className='activetag'>Candidate</div>
              </td>

              <td>
                <div className='activetag'>Inactive</div>
              </td>

              <td>
                <div className='userdetail'>3 Applications</div>
              </td>

              <td>
                <div className='userdetail'>2024-01-05</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='user-cell'>
                  <div className='usericon'> </div>
                  <div>
                    <span className='username'>Emily Davis</span><br></br>
                    <span className='userdetail'>Austin, TX</span>
                  </div>
                </div>
              </td>

              <td>
                <div><span className='userdetail'>emily.d@email.com</span><br></br>
                <span className='userdetail'>+91 7875467877</span> </div>
              </td>

              <td>
                <div className='activetag'>Employer</div>
              </td>

              <td>
                <div className='activetag'>Suspended</div>
              </td>

              <td>
                <div className='userdetail'>4 Jobs Posted</div>
              </td>

              <td>
                <div className='userdetail'>2024-03-01</div>
              </td>

              <td>
                <div className='actions'>
                <div className='editoption'></div>
                <div className='deleteoption'></div> </div>
              </td>
            </tr>
            
          </tbody>
        </table>


      </div>
    </div>
  );
};

export default UserManagement;
