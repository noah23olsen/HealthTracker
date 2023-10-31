import React, { Component } from 'react';
import api from './api';

class DeleteScheduleById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:''
    };
  }
 handleDelete = (id,e) => {
    e.preventDefault();

    api.deleteScheduleById(id)
    .then(response => {
        console.log(response)
    })
    .catch(e => {
        console.error(e);
    })
 }

  render() {
    return (
      <div>
        <h2>Delete Schedule By Id</h2>
        <form onSubmit={(e) => this.handleDelete( this.state.id,e )}>
            <label>DELETE ID</label>
             <input
              type="text"
              value={this.state.id}
              onChange={(e) => this.setState({id: e.target.value})}
             />
            <button type="submit">
                Submit
            </button>
        </form>
      </div>
    );
  }
}

export default DeleteScheduleById