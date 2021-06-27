import React, {useState, useEffect} from 'react'
import Starship from './Components/Starship';
import './App.css';
import imageHead from './images/MF-icon.png'

const App = () => {
  return (
    <div className="App">
    <h1 class="titleTop space-bg"><img src={imageHead} alt="Millenium Falcon Icon" />
    <br/>
    STAR WARS api: Starships</h1>
    {/* <hr /> */}
<Starship />
    </div>
  )
}

export default App;
