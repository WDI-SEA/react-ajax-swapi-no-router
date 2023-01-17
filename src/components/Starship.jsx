// import React, { Component } from 'react'
// import axios from 'axios'
// import Pilot from './Pilot.jsx'
  
//   export default class Starship extends Component {
//     state = {
//       pilots: {} 
//     } 
    
//     (() => {
//       (async function getPilots() {
//         const urls = ship.pilots
        
//         let responses = urls.map(url => axios.get(url))
        
//         responses = await Promise.all(responses)
//         let responseData = []
//         responses.forEach(response => responseData = [...responseData, response.data])
//         setPilots(responseData)
//       })()
//     }, [pilots])
    
    
//     render() {
//     const renderPilots = pilots.map((pilot, index) => {
//       return(
//         <Pilot
//         key={index}
//         pilot={pilot}
//         />
//         ) 
//       })
      
//     // const ship = ship
      
  
//     return (
//       <div>
//         <h3>{props.ship.name}</h3>
  
//         <p>Class: {props.ship.starship_class}</p>
  
//         <p>Hyperdrive Rating: {props.ship.hyperdrive_rating}</p>
  
//         <p>Manufacturer: {props.ship.manufacturer}</p>
  
//         <h4>Pilots:</h4>
  
//         { renderPilots.length > 0 ? renderPilots : "no pilots found" }
//       </div>
//     )
  //   }
  // }