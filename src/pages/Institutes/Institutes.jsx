import { Link } from 'react-router-dom';
import './Institutes.css';

const Institutes = () => {
  return (
    <div className='dashboard-container'>
      <span className='instituteheading'>Institutes</span>
      <span className='institutedesc'>
        Manage coaching institutes and personal trainers offering
        virtual/physical training
      </span>

      <div className='institutestats'>
        <div className='totalinstitutes'>
          <div className='institutestathead'>
            <div className='totalinternshipsicon1'></div>{' '}
            <span className='count'>6</span>{' '}
          </div>
          <span className='label'> Total Institutes </span> <br></br>
        </div>

        <div className='totalinstitutes'>
          <div className='institutestathead'>
            <div className='totalinternshipsicon1'></div>{' '}
            <span className='count'> 3 </span>{' '}
          </div>
          <span className='label'> Coaching Institutes </span> <br></br>
        </div>

        <div className='totalinstitutes'>
          <div className='institutestathead'>
            <div className='totalinternshipsicon1'></div>{' '}
            <span className='count'> 3 </span>{' '}
          </div>
          <span className='label'> Personal Trainers </span> <br></br>
        </div>

        <div className='totalinstitutes'>
          <div className='institutestathead'>
            <div className='totalinternshipsicon1'></div>{' '}
            <span className='count'> 993 </span>{' '}
          </div>
          <span className='label'> Total Leads Generated </span> <br></br>
        </div>
      </div>

      <div className='institutefilters'>
        <div className='instutefilterssub'>
          {' '}
          <div className='totalinternshipsicon1'></div>
          <span className='filterstext'>Filters: </span>
          <span className='filtertag1'>All Institutes</span>
          <span className='filtertag2'>Coaching Institutes</span>
          <span className='filtertag2'>Personal Trainers</span>
          <div className='filtersearchbar'>Search Institutes....</div>
        </div>
      </div>
      <div className='companyrow'>
        <Link to='techmaster-academy'>
          <div className='companyinfo'>
            <div className='institutename'>
              TechMaster Academy <span className='activetag'>Pro</span>
              <div className='instituteicon'></div>
            </div>
            <span className='institutedesc'>Coaching Institute</span> <br></br>
            <br></br>
            <span className='institutedesc'>San Francisco, CA </span> <br></br>
            <br></br>
            <span className='institutedesc'>4.8 | 2,500 Students</span>
            <br></br>
            <div className='skillset'>
              {' '}
              <span className='skilltag'>Full Stack Development</span>
              <span className='skilltag'>Data Science</span>
              <span className='skilltag'>Cloud Computing</span>
              <span className='skilltag'>+1 more</span>
            </div>
            <div className='borderline'></div>
            <div className='bottomstats'>
              <div className='institutedesc'>450 Leads</div>
              <div className='institutedesc'>68% Conversation</div>
            </div>
          </div>
        </Link>

        <Link to='sarah-williams'>
          <div className='companyinfo'>
            <div className='institutename'>
              Sarah Williams<span className='activetag'>Pro</span>
              <div className='instituteicon'></div>
            </div>
            <span className='institutedesc'>Personal Trainer</span> <br></br>
            <br></br>
            <span className='institutedesc'>Remote </span> <br></br>
            <br></br>
            <span className='institutedesc'>4.9 | 380 Students</span>
            <br></br>
            <div className='skillset'>
              {' '}
              <span className='skilltag'>React Development</span>
              <span className='skilltag'>JavaScript</span>
              <span className='skilltag'>Web Performance</span>
            </div>
            <div className='borderline'></div>
            <div className='bottomstats'>
              <div className='institutedesc'>125 Leads</div>
              <div className='institutedesc'>75% Conversation</div>
            </div>
          </div>
        </Link>
      </div>

      <div className='companyrow'>
        <Link to='codecraft-institute'>
          <div className='companyinfo'>
            <div className='institutename'>
              CodeCraft Institute <span className='activetag'>Pro</span>
              <div className='instituteicon'></div>
            </div>
            <span className='institutedesc'>Coaching Institute</span> <br></br>
            <br></br>
            <span className='institutedesc'>New York, NY </span> <br></br>
            <br></br>
            <span className='institutedesc'>4.7 | 1,800 Students</span>
            <br></br>
            <div className='skillset'>
              {' '}
              <span className='skilltag'>Mobile App Development</span>
              <span className='skilltag'>iOS</span>
              <span className='skilltag'>Android</span>
              <span className='skilltag'>+1 more</span>
            </div>
            <div className='borderline'></div>
            <div className='bottomstats'>
              <div className='institutedesc'>320 Leads</div>
              <div className='institutedesc'>62% Conversation</div>
            </div>
          </div>
        </Link>

        <Link to='david-rodriguez'>
          <div className='companyinfo'>
            <div className='institutename'>
              David Rodriguez<span className='activetag'>Pro</span>
              <div className='instituteicon'></div>
            </div>
            <span className='institutedesc'>Personal Trainer</span> <br></br>
            <br></br>
            <span className='institutedesc'>Austin, TX </span> <br></br>
            <br></br>
            <span className='skilltag'>Cold Lead</span>
            <br></br>
            <div className='skillset'>
              {' '}
              <span className='skilltag'>Python</span>
              <span className='skilltag'>Machine Learning</span>
              <span className='skilltag'>AI</span>
            </div>
          </div>
        </Link>
      </div>

      <div className='companyrow'>
        <Link to='digital-skills-academy'>
          <div className='companyinfo'>
            <div className='institutename'>
              Digital Skills Academy
              <div className='instituteicon'></div>
            </div>
            <span className='institutedesc'>Coaching Institute</span> <br></br>
            <br></br>
            <span className='institutedesc'>Chicago, IL </span> <br></br>
            <br></br>
            <span className='skilltag'>Cold Lead</span>
            <br></br>
            <div className='skillset'>
              {' '}
              <span className='skilltag'>Digital Marketing</span>
              <span className='skilltag'>SEO</span>
              <span className='skilltag'>Social Media</span>
              <span className='skilltag'>+1 more</span>
            </div>
          </div>
        </Link>

        <Link to='alex-kumar'>
          <div className='companyinfo'>
            <div className='institutename'>
              Alex Kumar<span className='activetag'>Pro</span>
              <div className='instituteicon'></div>
            </div>
            <span className='institutedesc'>Personal Trainer</span> <br></br>
            <br></br>
            <span className='institutedesc'>Seattle, WA </span> <br></br>
            <br></br>
            <span className='institutedesc'>4.8 | 290 Students</span>
            <br></br>
            <div className='skillset'>
              {' '}
              <span className='skilltag'>Backend Development</span>
              <span className='skilltag'>Node.Js</span>
              <span className='skilltag'>Database Design</span>
              <span className='skilltag'>+1 more</span>
            </div>
            <div className='borderline'></div>
            <div className='bottomstats'>
              <div className='institutedesc'>98 Leads</div>
              <div className='institutedesc'>72% Conversation</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Institutes;
