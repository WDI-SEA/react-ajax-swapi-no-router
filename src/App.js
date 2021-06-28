import React, {useState, useEffect} from 'react';
import Starship from './Starship'
import axios from 'axios'
import './App.css';

export default function App() {

  const [starship, setStarship] = useState([])

  useEffect(() => {
    async function starWars(){
      try{
        const url = `https://swapi.dev/api/starships/`
        const resData = await axios.get(url)
        console.log(resData.data.results)
        setStarship(resData.data.results)
      } catch(err){
        console.log(err)
      }
    }
    starWars()
  }, [])

  return (
    <div className="App">
      <Starship starship={starship} />
    </div>
  );
}


