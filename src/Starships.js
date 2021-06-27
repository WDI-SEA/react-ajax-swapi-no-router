import React from 'react'
import { useEffect, useState } from 'react'


export default function Starships() {

  const [ships, setShips] = useState([])

  useEffect(() => {
    // hit the API endpoint - ex Fetch
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(shipData => {
        //set state to ship
        // console.log(shipData.results[0].name)
        // const shipResults = shipData.results.map(shipData => {
        //   return shipData.name 
        // })
        setShips(shipData.results) 
      })
      .catch(err => console.log(err))
  }, [])
   const printShips = ships.map((ship, index) => {
   
      return (
        <div key={index}>
          <h2>{ship.name}</h2>
          <p>{ship.manufacturer}</p>
        </div>
      )
    }) 

   
  return (
      <div>
       {printShips}
      </div>

  )

}