import React, { useState } from 'react';
import api from './api';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

function AddSchedule() {
  const [sleepTime, setSleepTime] = useState('');
  const [wakeTime, setWakeTime] = useState('');


  const handleAddSchedule = (scheduleData) => {

    const formattedSchedule = {
      ...scheduleData, //make a copy of schedule data that we can manipulate further
      //basically the DatePicker library formats time differently than my backend, so we need to reformat it
      sleep_time: scheduleData.sleep_time.toISOString().slice(0, 19).replace('T', ' '),
      wake_time: scheduleData.wake_time.toISOString().slice(0, 19).replace('T', ' '),
    }
    console.log(formattedSchedule);
    api.postSchedule(formattedSchedule)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newSchedule = {
      sleep_time: sleepTime,
      wake_time: wakeTime,
    }
    handleAddSchedule(newSchedule);
  }

  return (
    <div>
      <h2>Add Schedule</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sleep Time:</label>
          <DatePicker
            selected={sleepTime}
            onChange={(date) => setSleepTime(date)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm:ss"
          />
        </div>
        <div>
          <label>Wake Time:</label>
          <DatePicker
            selected={wakeTime}
            onChange={(date) => setWakeTime(date)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm:ss"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddSchedule