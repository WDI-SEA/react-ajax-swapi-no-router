import React, { useState, useEffect } from 'react';
import Starship from './Starship'
import axios from 'axios'
import './App.css';

export default function App() {

  const [starship, setStarship] = useState([])

  useEffect(() => {
    async function getShips() {
      try{
        const urls = ['https://swapi.dev/api/starships/',
              'https://swapi.dev/api/starships/?page=2',
              'https://swapi.dev/api/starships/?page=3',
              'https://swapi.dev/api/starships/?page=4'
            ]
        const res = urls.map ( url => axios.get(url))
        res = await Promise.all(res)
            console.log(res)
        let resData = []

        res.forEach(response => resData = [...resData, ...response.data.results])
        console.log(resData)
        setStarship(resData)
      } catch(err){
        console.log(err)
      }
    } 
    getShips()
  }, [])

  return (
    <div className="App">
      <Starship starship={starship} />
    </div>
  )
}