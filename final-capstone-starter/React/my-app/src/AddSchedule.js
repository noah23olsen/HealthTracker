import React, { Component } from 'react';
import api from './api';

class AddSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
     sleepTime: '',
     wakeTime: ''
    };
  }
handleAddSchedule = (scheduleData) => {
    api.postSchedule(scheduleData)
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
          <input
            type="text"
            value={this.state.sleepTime}
            onChange={(e) => this.setState({sleepTime : e.target.value})}
            />
        </div>
        <div>
          <label>Wake Time:</label>
          <input
            type="text"
            value={this.wakeTime}
            onChange={(e) => this.setState({wakeTime : e.target.value})}
            />
        </div>
        <button type="submit">Submit</button>
      </form> 
      </div>
    );
  }
}

export default AddSchedule