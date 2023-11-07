import React from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import GetAllSchedules from './components/GetAllSchedules';

function App() {
    return (
      <div>
        <NavBar />
        <GetAllSchedules />
      </div>
    );
}

export default App;