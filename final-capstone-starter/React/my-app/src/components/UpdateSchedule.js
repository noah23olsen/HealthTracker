import React, { useState } from 'react';
import api from '../services/api';
import DatePicker from 'react-datepicker';

function UpdateSchedule() {
  const [sleepTime, setSleepTime] = useState('');
  const [wakeTime, setWakeTime] = useState('')
  const [sleepId, setSleepId] = useState('')

  const handleUpdateSchedule = (schedule) => {
    const formattedSchedule = {
      ...schedule, //make a copy of schedule data that we can manipulate further
      //basically the DatePicker library formats time differently than my backend, so we need to reformat it
      sleep_time: schedule.sleep_time.toISOString().slice(0, 19).replace('T', ' '),
      wake_time: schedule.wake_time.toISOString().slice(0, 19).replace('T', ' '),
    }

    console.log("schedule" + JSON.stringify(schedule, null, 2));
    api.updateSchedule(formattedSchedule)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
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
          <DatePicker
            selected={sleepTime}
            onChange={(e) => setSleepTime(e)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm:ss"
          />
        </div>
        <div>
          <label>Update Wake Time:</label>
          <DatePicker
            selected={wakeTime}
            onChange={(e) => setWakeTime(e)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm:ss"
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