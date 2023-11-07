import React, { useEffect, useState} from 'react';
import api from '../services/api';

function GetAllSchedules() {
    const [data,setData] = useState([]);

    useEffect(() =>{
        api.getSchedule()
          .then(response => {
            //notice we use setData and not data
            setData(response.data)
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      })
    return (
        <div>
        <h2 >Get All Schedules</h2>
          <ul>
          {/* .map creates a new array by applying a function to it(vs a foreach uses the original array) */}
          {data.map((item,index)=>(
            <li key={index}>
              ID: {item.id} - 
              Sleep Time: {item.sleep_time} - 
              Wake Time: {item.wake_time}
            </li>
          ))}
        </ul>
      </div>
    )
}

export default GetAllSchedules;