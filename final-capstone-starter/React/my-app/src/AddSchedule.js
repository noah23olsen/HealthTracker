import React, { Component } from 'react';
import api from './api';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

class AddSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepTime: '',
      wakeTime: '', // You can initialize with the desired default time
    };
  }
  //method
handleAddSchedule = (scheduleData) => {
  
  const formattedSchedule = {
    ...scheduleData, //make a copy of schedule data that we can manipulate further
    //basically the DatePicker library formats time differently than my backend, so we need to reformat it
    sleep_time: scheduleData.sleep_time.toISOString().slice(0,19).replace('T',' '),
    wake_time: scheduleData.wake_time.toISOString().slice(0, 19).replace('T', ' '),
  }
  console.log(formattedSchedule);
    api.postSchedule(formattedSchedule)
   .then(response=>{
     console.log(response)
   })
   .catch(error=>{
     console.error(error)
   })
  };
 handleSubmit = (e)=> {
    e.preventDefault();

    const newSchedule = {
      sleep_time: this.state.sleepTime,
      wake_time: this.state.wakeTime
    }
    this.handleAddSchedule(newSchedule);
  }
  

  render() {
    return (
      <div>
         <h2>Add Schedule</h2>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Sleep Time:</label>  
          {/* //for future reference, delete later//} */}
          {/* <input
            type="text"
            value={this.state.sleepTime}
            onChange={(e) => this.setState({sleepTime : e.target.value})}
            /> */}
          <DatePicker
              selected={this.state.sleepTime}
              onChange={(date) => this.setState({sleepTime : date })}
              showTimeSelect
              timeIntervals={15}
              dateFormat="yyyy-MM-dd HH:mm:ss"
            />
        </div>
        <div>
          <label>Wake Time:</label>
          {/* <input
            type="text"
            value={this.wakeTime}
            onChange={(e) => this.setState({wakeTime : e.target.value})}
            /> */}
          <DatePicker
              selected={this.state.wakeTime}
              onChange={(date) => this.setState({wakeTime : date})}
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
}

export default AddSchedule