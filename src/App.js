import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <><div className="main">
      <h1 className="heading"> WEATHER APP</h1>
      <input type="text" className="form" />
      <button className="btn btn-primary" type="button">Search</button>
    </div><div className="box">
        <h5 className="city">Mumbai</h5>
        <h6 className="temp">26</h6>
      </div></>
  );
}

export default App;
