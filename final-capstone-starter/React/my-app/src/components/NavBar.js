import UpdateSchedule from '../components/UpdateSchedule';
import AddSchedule from '../components/AddSchedule';
// import GetAllSchedules from '../components/GetAllSchedules'
import GetScheduleById from '../components/GetScheduleById';
import DeleteScheduleById from '../components/DeleteScheduleById';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
function NavBar() {
  //Functional components with hooks(seen below) 
  //apparently this is the more 'modern' way to manage state 
  //we should change our projects over at some point 
  
  return ( //note it returns only ONE element(similar to template in vue)
    <Router>
      <div>
        <nav>
          <h1>Sleep Schedule</h1>
          <p>example format: "2023-10-19 18:00:00"</p>
          {/* <Link to="/getSchedules">Get All Schedules</Link> */}
          <Link to="getScheduleById">Get Schedule by ID</Link>
          <Link to="delete">Delete Schedule by ID</Link>
          <Link to="update">Update Schedule</Link>
          <Link to="add">Add Schedule</Link>
        </nav>
        <Routes>
         {/* <Route path="/getSchedules" element={<GetAllSchedules/>}></Route> */}
         <Route path="/delete" element={<DeleteScheduleById />}></Route>
         <Route path="update/" element={<UpdateSchedule/>}></Route>
         <Route path="/getScheduleById" element={<GetScheduleById/>}></Route>
         <Route path="/add" element={<AddSchedule/>}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default NavBar;