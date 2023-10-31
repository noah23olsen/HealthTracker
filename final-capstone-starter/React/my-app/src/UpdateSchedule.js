import React, { Component } from 'react';
import api from './api';

class UpdateSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepTime:'',
      wakeTime:'',
      sleepId:'',
    };
  }

  handleUpdateSchedule = (schedule) => {
    console.log("schedule" +JSON.stringify(schedule, null, 2));
    api.updateSchedule(schedule)
    .then(response=>{
      console.log(response);
    })
    .catch(error =>{
      console.error(error)
    })
  };
  handleSubmit2 = (e) => {
    console.log("reached handle submit 2")
    e.preventDefault();

    const updateSchedule = {
      sleep_time: this.state.sleepTime,
      wake_time: this.state.wakeTime,
      id: this.state.sleepId
    }
    this.handleUpdateSchedule(updateSchedule);

  }  

  render() {
    return (
      <div>
        <h2>Update Schedule</h2>
      <form onSubmit={this.handleSubmit2}>
        <div>
          <label>Update Sleep Time:</label>
          <input
            type="text"
            value={this.state.sleepTime}
            onChange={(e) => this.setState({sleepTime: e.target.value})}
            />
        </div>
        <div>
          <label>Update Wake Time:</label>
          <input
            type="text"
            value={this.state.wakeTime}
            onChange={(e) => this.setState({wakeTime: e.target.value})}
            />
        </div>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={this.state.sleepId}
            onChange={(e) => this.setState({sleepId :e.target.value})}
            />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default UpdateSchedule;