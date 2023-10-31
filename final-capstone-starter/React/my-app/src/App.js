import React, { useState, useEffect } from 'react';
import './App.css';
import api from './api';
import UpdateSchedule from './UpdateSchedule';
import AddSchedule from './AddSchedule';
import GetAllSchedules from './GetAllSchedules'

function App() {
  const [data, setData] = useState([]);
  // const [sleepId, setSleepId] = useState('');
  

  // Fetch data from the backend when the component mounts
  // useEffect(() => {
  //   api.getSchedule()
  //     .then(response => {
  //       console.log("reached response")
  //       console.log(response)
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //     });
  // },
  //  []);
  
  return ( //note it returns only ONE element(similar to template in vue)
    <div className="App">
      <h1>Sleep Schedule</h1>
      <AddSchedule/>
      <br></br>
        <GetAllSchedules />
      < UpdateSchedule />
    </div>
  );
}

export default App;