import React, {useState, useEffect} from 'react'
import Starship from './Components/Starship';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <h1>SWAPI: Starships</h1>
<Starship />
    </div>
  )
}

export default App;
