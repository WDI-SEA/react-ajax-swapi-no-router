import React, { useEffect, useState } from 'react'
import Starship from './Starship'
import axios from 'axios'

function Starships() {
  // state holding starships
  const [starship, setStarship] = useState([])

  // use effect call to api
  useEffect(() => {
    async function fetchStarships() {
      try{
        // call
        const url = [
            `https://swapi.dev/api/starships`,
            `https://swapi.dev/api/starships/?page=2`,
            `https://swapi.dev/api/starships/?page=3`,
            `https://swapi.dev/api/starships/?page=4`
        ]

        let responses = url.map(youareel => axios.get(youareel))

        responses = await Promise.all(responses)

        let responseData = []
        responses.forEach(response => responseData = [...responseData, ...response.data.results])

        //setting state
        setStarship(responseData)
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
      <Starship stuff={renderedStarship}/>
    </div>
  )
}

export default Starships;






