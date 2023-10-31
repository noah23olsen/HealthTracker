import React, { Component } from 'react';
import api from './api';

class GetScheduleById extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:''
    };
  }
 handleGetById = (id, event) => {
    //prevents default submission, requires an EVENT argument
    event.preventDefault();
    api.getScheduleById(id)
    .then(response =>{
        console.log(response)
    })
    .catch(error => {
        console.error(error)
    })
 }
  render() {
    return (
      <div>
        <h2>Get Schedule By Id</h2>
        {/* //you can see the event arg(e) which is passed into our method */}
        <form onSubmit={(e) => this.handleGetById(this.state.id, e)}>
            <label>ID:</label>
                <input
                 type="text"
                 value={this.id}
                 onChange={(e)=> this.setState({ id : e.target.value})}
                >
            </input>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GetScheduleById;