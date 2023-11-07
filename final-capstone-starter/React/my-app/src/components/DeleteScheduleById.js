import React, { useState } from 'react';
import api from '../services/api';

function DeleteScheduleById() {
      const [id,setId] = useState('');

 const handleDelete = (id,e) => {
    e.preventDefault();

    api.deleteScheduleById(id)
    .then(response => {
        console.log(response)
    })
    .catch(e => {
        console.error(e);
    })
 }

    return (
      <div>
        <h2>Delete Schedule By Id</h2>
        <form onSubmit={(e) => handleDelete(id,e)}>
            <label>DELETE ID</label>
             <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
             />
            <button type="submit">
                Submit
            </button>
        </form>
      </div>
    );
}

export default DeleteScheduleById