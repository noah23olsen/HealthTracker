import React, { useState } from 'react';
import api from './api';

function GetScheduleById() {
  const [id, setId] = useState('');
  const [item, setItem] = useState('');
  
  const handleGetById = (id, event) => {
    //prevents default submission, requires an EVENT argument
    event.preventDefault();
    api.getScheduleById(id)
    .then(response =>{
        console.log(response);
        setItem(response.data);
    })
    .catch(error => {
        console.error(error)
    })
 }
    return (
      <div>
        <h2>Get Schedule By Id</h2>
        {/* //you can see the event arg(e) which is passed into our method */}
        <form onSubmit={(e) => handleGetById(id, e)}>
            <label>ID:</label>
                <input
                 type="text"
                 value={id}
                 onChange={(e)=> setId(e.target.value)}
                >
            </input>
            <button type="submit">Submit</button>
            {item !== '' && (
           <p>ID: {id} | Sleep Time: {item.sleep_time} |Wake Time: {item.wake_time} |</p>
            )}
        </form>
      </div>
    );
  }

export default GetScheduleById;