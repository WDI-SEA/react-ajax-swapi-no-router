  
import { 
    useState, 
    useEffect 
  } from 'react'
  import axios from 'axios'
  import Starship from './Starship'
   
  export default function Starships(props) {
    // ships fetched from the SWAPI
    const [ships, setShips] = useState([])
  
    // SWAPI call
    useEffect(() => {
      // IIFE async function
      (async function getShips() {
        // all the urls we want to use
        const urls = [
          'https://swapi.dev/api/starships/',
          'https://swapi.dev/api/starships/?page=2',
          'https://swapi.dev/api/starships/?page=3',
          'https://swapi.dev/api/starships/?page=4'
        ]
  
        // map axios get reqs to each url
        let responses = urls.map(url => axios.get(url))
  
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
        // await for every response to resolve
        responses = await Promise.all(responses)
  
        // change the respnse data into a nice array for state
        let responseData = []
        responses.forEach(response => responseData = [...responseData, ...response.data.results])
        setShips(responseData)
      })()
    }, [])
  
    // for debug
    // useEffect(() => {
    //   console.log(ships)
    // }, [ships])
  
    const starships = ships.map((ship, index) => <Starship key={index} ship={ship} />)
  
    return (
      <div>
        <h3>Starships:</h3>
  
        <div>
          {starships}
        </div>
      </div>
    )
  }