import { 
    useState, 
    useEffect 
  } from 'react'
  import axios from 'axios'
  import Pilot from './pilot.jsx'
  
  export default function Starship(props) {
    const ship = props.ship
    const [pilots, setPilots] = useState([])
  
    useEffect(() => {
      (async function getPilots() {
        const urls = ship.pilots
  
        let responses = urls.map(url => axios.get(url))
  
        responses = await Promise.all(responses)
        let responseData = []
        responses.forEach(response => responseData = [...responseData, response.data])
  
        setPilots(responseData)
      })()
    }, [pilots, ship.pilots])
  
  
  
    const renderPilots = pilots.map((pilot, index) => {
      return(
        <Pilot
          key={index}
          pilot={pilot}
        />
      ) 
    })
  
  
  
    return (
      <div>
        <h3>{props.ship.name}</h3>
  
        <p>Class: {props.ship.starship_class}</p>
  
        <p>Hyperdrive Rating: {props.ship.hyperdrive_rating}</p>
  
        <p>Manufacturer: {props.ship.manufacturer}</p>
  
        <h4>Pilots:</h4>
  
        { renderPilots.length > 0 ? renderPilots : "no pilots found" }
      </div>
    )
  }