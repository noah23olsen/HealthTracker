import React, { Component } from 'react';
import api from './api';

class GetAllSchedules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  //after it's been added to DOM 
   componentDidMount(){
    api.getSchedule()
      .then(response => {
        this.setState({data : response.data})
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  render() {
    return (
      <div>
        <h2 >Get All Schedules</h2>
          <ul>
          {/* .map creates a new array by applying a function to it(vs a foreach uses the original array) */}
          {this.state.data.map((item,index)=>(
            <li key={index}>
              Sleep Time: {item.sleep_time} - 
              Wake Time: {item.wake_time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GetAllSchedules;