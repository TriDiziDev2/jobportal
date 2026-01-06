import './Courses.css';

const Courses = () => {
  return (
    <div className='dashboard-container'>
      <span className='instituteheading'>Courses</span>
      <span className='institutedesc'>Browse courses published by institutes and personal trainers with complete details</span>

      <div className='institutestats'>
        <div className='totalinstitutes'>
          <div className='institutestathead'>
          <div className='totalinternshipsicon1'></div> <span className='count'>6</span> </div>
          <span className='label'> Total Courses </span> <br></br>
          
        </div>
      
        <div className='totalinstitutes'>
          <div className='institutestathead'>
          <div className='totalinternshipsicon1'></div> <span className='count'> 5,230 </span> </div>
          <span className='label'> Total Students </span> <br></br>
          
        </div>
    
        <div className='totalinstitutes'>
          <div className='institutestathead'>
          <div className='totalinternshipsicon1'></div> <span className='count'> 4.8 </span> </div>
          <span className='label'> Avg Rating </span> <br></br>
          
        </div>
  
        <div className='totalinstitutes'>
          <div className='institutestathead'>
          <div className='totalinternshipsicon1'></div> <span className='count'> 3 </span> </div>
          <span className='label'> Best Sellers </span> <br></br>
          
        </div>

      </div>

      <div className='institutefilters'>
        <div className='coursesfilterssub'> <div className='totalinternshipsicon1'></div> 
        <span className='filterstext'>Filters: </span>
        <span className='filtertag1'>Beginner</span>
        <span className='filtertag2'>Intermediate</span>
        <span className='filtertag2'>Advanced</span>
        <div className='coursefiltersearchbar'>Search Courses....</div> 
      </div>
      </div>
      
      <div className='companyrow'>
        <div className='companyinfo'>
        <div className='institutename'>Complete Full Stack Web Development Bootcamp
        <span className='skilltag'>Bestseller</span></div>
        <span className='institutedesc'>by TechMaster Academy</span> <br></br>
        <br></br>
        <span className='institutedesc'>4.8 | 1,250 Students | 16 Weeks </span> <br></br>
        <br></br>
        <span className='institutedesc'>Master modern web development from frontend to backend. Build real-world projects using React, Node.js, and MongoDB.</span> 
        <br></br>
        <div className='skillset'> <span className='skilltag'>HTML/CSS</span>
            <span className='skilltag'>JavaScript</span>
            <span className='skilltag'>React</span>
            <span className='skilltag'>Node.Js</span>
            <span className='skilltag'>+4 More</span>

        </div>
        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='skilltag'>Beginner</div>
           <div className='Pricetag'>₹2,999</div> 
        </div>
        </div>
        <div className='companyinfo'>
        <div className='institutename'>Advanced React Performance Optimization</div> <br></br>
        <span className='institutedesc'>by Sarah Williams</span> <br></br>
        <br></br>
        <span className='institutedesc'>4.9 | 340 Students | 6 Weeks </span> <br></br>
        <br></br>
        <span className='institutedesc'>Deep dive into React performance optimization techniques. Learn advanced patterns, profiling, and best practices for building.</span> 
        <br></br>
        <div className='skillset'> <span className='skilltag'>React Profiler</span>
            <span className='skilltag'>Memorization</span>
            <span className='skilltag'>Code Splitting</span>
            <span className='skilltag'>Lazy Loading</span>
            <span className='skilltag'>+2 More</span>

        </div>
        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='skilltag'>Advanced</div>
           <div className='Pricetag'>₹799</div> 
        </div>
        </div>
      </div>
      
      <div className='companyrow'>
        <div className='companyinfo'>
        <div className='institutename'>Mobile App Development with React Native
        <span className='skilltag'>Bestseller</span></div>
        <span className='institutedesc'>by CodeCraft Institute</span> <br></br>
        <br></br>
        <span className='institutedesc'>4.7 | 890 Students | 12 Weeks </span> <br></br>
        <br></br>
        <span className='institutedesc'>Build native mobile apps for iOS and Android using React Native. Learn navigation, animations, native modules, and app development.</span> 
        <br></br>
        <div className='skillset'> <span className='skilltag'>React Native</span>
            <span className='skilltag'>Expo</span>
            <span className='skilltag'>Navigation</span>
            <span className='skilltag'>Animations</span>
            <span className='skilltag'>+2 More</span>

        </div>
        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='skilltag'>Intermediate</div>
           <div className='Pricetag'>₹2,499</div> 
        </div>
        </div>
        <div className='companyinfo'>
        <div className='institutename'>Backend Development with Node.Js and Express</div> <br></br>
        <span className='institutedesc'>by Alex Kumar</span> <br></br>
        <br></br>
        <span className='institutedesc'>4.8 | 580 Students | 10 Weeks </span> <br></br>
        <br></br>
        <span className='institutedesc'>Comprehensive course on building scalable backend systems. Learn Node.js, Express, databases, authentication, and API development.</span> 
        <br></br>
        <div className='skillset'> <span className='skilltag'>Node.js</span>
            <span className='skilltag'>Express</span>
            <span className='skilltag'>PostgreSQL</span>
            <span className='skilltag'>MongoDB</span>
            <span className='skilltag'>+4 More</span>

        </div>
        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='skilltag'>Intermediate</div>
           <div className='Pricetag'>₹1,499</div> 
        </div>
        </div>
      </div>

      <div className='companyrow'>
        <div className='companyinfo'>
        <div className='institutename'>Data Structures and Algorithms Masterclass
        <span className='skilltag'>Bestseller</span></div>
        <span className='institutedesc'>by TechMaster Academy</span> <br></br>
        <br></br>
        <span className='institutedesc'>4.9 | 1,450 Students | 14 Weeks </span> <br></br>
        <br></br>
        <span className='institutedesc'>Master essential data structures and algorithms. Perfect preparation for technical interviews at top tech companies.</span> 
        <br></br>
        <div className='skillset'> <span className='skilltag'>Arrays</span>
            <span className='skilltag'>Linked Lists</span>
            <span className='skilltag'>Trees</span>
            <span className='skilltag'>Graphs</span>
            <span className='skilltag'>+4 More</span>

        </div>
        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='skilltag'>Intermediate</div>
           <div className='Pricetag'>₹1,999</div> 
        </div>
        </div>
        <div className='companyinfo'>
        <div className='institutename'>Cloud Computing</div> <br></br>
        <span className='institutedesc'>by TechMaster Academy</span> <br></br>
        <br></br>
        <span className='institutedesc'>4.7 | 720 Students | 8 Weeks </span> <br></br>
        <br></br>
        <span className='institutedesc'>Complete AWS cloud practitioner to solutions architect path. Learn EC2, S3, Lambda, DynamoDB, and more.</span> 
        <br></br>
        <div className='skillset'> <span className='skilltag'>EC2</span>
            <span className='skilltag'>S3</span>
            <span className='skilltag'>Lambda</span>
            <span className='skilltag'>DynamoDB</span>
            <span className='skilltag'>+4 More</span>

        </div>
        <div className='borderline'></div>
        <div className='bottomstats'>
          <div className='skilltag'>Beginner</div>
           <div className='Pricetag'>₹1,299</div> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
