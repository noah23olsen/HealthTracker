import React, { useState } from 'react';
import api from './api';

function UpdateSchedule(){
    const [sleepTime, setSleepTime] = useState('');
    const [wakeTime, setWakeTime] = useState('')
    const [sleepId,setSleepId] = useState('')

  const handleUpdateSchedule = (schedule) => {
    console.log("schedule" +JSON.stringify(schedule, null, 2));
    api.updateSchedule(schedule)
    .then(response=>{
      console.log(response);
    })
    .catch(error =>{
      console.error(error)
    })
  };
  const handleSubmit2 = (e) => {
    console.log("reached handle submit 2")
    e.preventDefault();

    const updateSchedule = {
      sleep_time: sleepTime,
      wake_time: wakeTime,
      id: sleepId
    }
    handleUpdateSchedule(updateSchedule);

  }  

    return (
      <div>
        <h2>Update Schedule</h2>
      <form onSubmit={handleSubmit2}>
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
      </form>
      </div>
    );
  }

export default UpdateSchedule;