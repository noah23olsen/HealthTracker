// import React, { useState, useEffect } from 'react';
import './App.css';
import UpdateSchedule from './UpdateSchedule';
import AddSchedule from './AddSchedule';
import GetAllSchedules from './GetAllSchedules'
import GetScheduleById from './GetScheduleById';
import DeleteScheduleById from './DeleteScheduleById';

function App() {
  //Functional components with hooks(seen below) 
  //apparently this is the more 'modern' way to manage state 
  //we should change our projects over at some point 
  // const [sleepId, setSleepId] = useState(''); // 
  
  return ( //note it returns only ONE element(similar to template in vue)
    <div className="App">
      <h1>Sleep Schedule</h1>
      <DeleteScheduleById />
      <GetScheduleById />
      <AddSchedule />
      <br></br>
      <GetAllSchedules />
      <UpdateSchedule />
    </div>
  );
}

export default App;