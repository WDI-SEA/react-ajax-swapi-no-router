import React, { useEffect, useState } from 'react'
import './App.css'
import Starships from './Starships'
import axios from 'axios'

function App() {
  // state holding starships
  const [starship, setStarship] = useState([])

  // use effect call to api
  useEffect(() => {
    async function fetchStarships() {
      try{
        // call
        const url = `https://swapi.dev/api/starships`
        const response = await axios.get(url)

        //setting state
        setStarship(response.data.results)
      } catch (err) {
        console.log(err)
      }
    }
    fetchStarships()
  }, [])

  const renderedStarship = starship.map((ship) => {
    // I need to manipulate this data to render to screen
     return (
         <div className="ship-card">
             <h2>{ship.name}</h2>
             Model: {ship.model}
             <br />
             Passengers: {ship.passengers}
             <br />
             Crew: {ship.crew}
         </div>
     )
  })
  return (
    // rendering simple header
    <div className="App">
      <h1>Star Wars Starships 🚀</h1>
      {/*connected starships component */}
      <Starships stuff={renderedStarship}/>
    </div>
  )
}

export default App;
