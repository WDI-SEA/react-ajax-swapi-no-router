import React, { Component } from 'react'
import Starship from "./Starship"
import axios from 'axios'


// https://swapi.dev/api/


export default class Starships extends Component {
    state = {
        starships: []
    }
//     async componentDidMount() {
//         const options = {
//             headers: {
//                 Accept: 'application/json'
//             }
//         }
//         axios.get('https://swapi.dev/api/starships/', options)
//             .then(response => {
//                 // console.log('API check', response.data.results)
//                 response.data.results.map((ship, i) => {
//                     return (
//                         // console.log('ship name: ', ship.name),
//                         // console.log('ship class: ', ship.starship_class)
//                         <>
//                         {ship.name}
//                         </>
//                     )
//                 })

//                 // this.setState({starship: response.data.name})
//             })
//             .catch(console.warn)
        
//     }
//     componentWillUnmount() {}
//     componentDidUpdate() {}
//     handleStarshipChange() {}
//   render() {


//     return (
//       <div>
//         STARSHIPS YEAH!!!!
//       </div>
//     )
//   }

// }




componentDidMount = async () => {
  try {
      const response = await axios.get('https://swapi.dev/api/starships/')
console.log("SHIPS:", response.data.results)
      this.setState({
          starships: response.data.results
      })
  } catch(err) {
      console.log(err)
  }
}
render() {
  const shipsInState = this.state.starships.map((ship, i) =>{ return(
      <Starship 
          key={`ship${i}`}
          name={ship.name}
          hyperdriveRating={ship.hyperdrive_rating}
          url={ship.url}
          cost={ship.cost_in_credits}
          class={ship.starship_class}
          pilots={ship.pilots}
      />
  )})
  return(
      <>
          <h1>Starships</h1>
          {shipsInState}
      </>
  )
}
}

