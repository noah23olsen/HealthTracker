import React, { useState, useEffect } from 'react';
import './App.css';
import api from './api';
import UpdateSchedule from './UpdateSchedule';

function App() {
  const [data, setData] = useState([]);
  const[sleepTime, setSleepTime] = useState('');
  const [wakeTime, setWakeTime] = useState('');
  // const [sleepId, setSleepId] = useState('');
  

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    api.getSchedule()
      .then(response => {
        console.log("reached response")
        console.log(response)
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  },
   []);

   const handleAddSchedule = (scheduleData) => {
    api.postSchedule(scheduleData)
   .then(response=>{
     console.log(response)
   })
   .catch(error=>{
     console.error(error)
   })
  };
  const handleSubmit = (e)=> {
    e.preventDefault();

    const newSchedule = {
      sleep_time: sleepTime,
      wake_time: wakeTime
    }
    handleAddSchedule(newSchedule);
  }
  
  // const handleUpdateSchedule = (id, schedule) => {
  //   console.log("id:" + id)
  //   console.log("schedule" +JSON.stringify(schedule, null, 2));
  //   api.updateSchedule(id, schedule)
  //   .then(response=>{
  //     console.log(response);
  //   })
  //   .catch(error =>{
  //     console.error(error)
  //   })
  // };
  // const handleSubmit2 = (e) => {
  //   console.log("reached handle submit 2")
  //   e.preventDefault();

  //   const updateSchedule = {
  //     sleep_time: sleepTime,
  //     wake_time: wakeTime,
  //     id: sleepId
  //   }
  //   handleUpdateSchedule(sleepId, updateSchedule);

  // }  
  return ( //note it returns only ONE element(similar to template in vue)
    <div className="App">
      <h1>Sleep Schedule</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Sleep Time:</label>
          <input
            type="text"
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
            />
        </div>
        <div>
          <label>Wake Time:</label>
          <input
            type="text"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
            />
        </div>
        <button type="submit">Submit</button>
      </form>
      <br></br>



      {/* <form onSubmit={handleSubmit2}>
        <div>
          <label>Update Sleep Time:</label>
          <input
            type="text"
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
            />
        </div>
        <div>
          <label>Update Wake Time:</label>
          <input
            type="text"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
            />
        </div>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={sleepId}
            onChange={(e) => setSleepId(e.target.value)}
            />
        </div>
        <button type="submit">Submit</button>
      </form> */}
        <ul>
          {data.map((item,index)=>(
            <li key={index}>
              Sleep Time: {item.sleep_time} - 
              Wake Time: {item.wake_time}
            </li>
          ))}
        </ul>
      < UpdateSchedule />
    </div>
  );
}

export default App;