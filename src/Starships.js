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
        //set state to ship
        setShips(shipData.results) 
        //ships.push(shipData.results)
      })
      .catch(err => console.log(err))
  }, [])

  
  const printShips = ships.map((ship, index) => {
    return (
      <div className="col-sm-1 col-md-6 col-lg-4" key={index}>
        <div className="card h-100">
          <h4 className="card-header h-100">{ship.name}</h4>
          <div className="card-body">
            <p className="card-text">Length: {ship.length}</p>
            <p className="card-text">Max speed: {ship.max_atmosphering_speed}</p>
            <p className="card-text">Crew: {ship.crew}</p>
            <p className="card-text">No. of passengers: {ship.passengers}</p>
            {/* {ship.pilots ? 
            ship.pilots.map((pilot) => {
              return  (<ul>
                <li>{pilot}</li>
              </ul>)
            }): <p>No pilots</p> } */}
        </div>
      </div>
    </div>
  )
}) 

  return (
    <>
      {printShips}
    </>
  )

}