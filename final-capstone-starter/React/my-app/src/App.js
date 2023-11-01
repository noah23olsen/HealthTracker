// import React, { useState, useEffect } from 'react';
import './App.css';
import UpdateSchedule from './UpdateSchedule';
import AddSchedule from './AddSchedule';
import GetAllSchedules from './GetAllSchedules'
import GetScheduleById from './GetScheduleById';
import DeleteScheduleById from './DeleteScheduleById';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  //Functional components with hooks(seen below) 
  //apparently this is the more 'modern' way to manage state 
  //we should change our projects over at some point 
  // const [sleepId, setSleepId] = useState(''); // 
  
  return ( //note it returns only ONE element(similar to template in vue)
    // <div className="App">
    //   <h1>Sleep Schedule</h1>
    //   <DeleteScheduleById />
    //   <GetScheduleById />
    //   <AddSchedule />
    //   <br></br>
    //   <GetAllSchedules />
    //   <UpdateSchedule />
    // </div>
    <Router>
      <div>
        <nav>
          <h1>Sleep Schedule</h1>
          <p>example format: "2023-10-19 18:00:00"</p>
          <Link to="/getSchedules">Get All Schedules</Link>
          <Link to="delete">Delete Schedule by ID</Link>
          <Link to="update">Update Schedule</Link>
          <Link to="getScheduleById">Get Schedule by ID</Link>
          <Link to="add">Add Schedule</Link>
        </nav>
        <Routes>
         <Route path="/getSchedules" element={<GetAllSchedules/>}></Route>
         <Route path="/delete" element={<DeleteScheduleById />}></Route>
         <Route path="update/" element={<UpdateSchedule/>}></Route>
         <Route path="/getScheduleById" element={<GetScheduleById/>}></Route>
         <Route path="/add" element={<AddSchedule/>}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;