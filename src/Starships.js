import { useState, useEffect } from 'react'
import axios from 'axios'
import Starship from './Starship'

const Starships = () => {

    const [starships, setStarships] = useState([])

    useEffect (() => {
      async function fetchStarships() {
        try {
          const urls = [
          `https://swapi.dev/api/starships/`,
          `https://swapi.dev/api/starships/?page=2`,
          `https://swapi.dev/api/starships/?page=3`,
          `https://swapi.dev/api/starships/?page=4`,
        ]

        let responses = urls.map(url => axios.get(url))
        responses = await Promise.all(responses)
        
        let responseData = []
        responses.forEach(response => responseData = [...responseData, ...response.data.results])
        console.log(responseData)

          setStarships(responseData)
        } catch (err) {
          console.log(err)
        }
      }
      fetchStarships()
      // the [] means to only run when array is empty (ie. once on first load of page)
    }, [])
  
  const renderedStarships = starships.map((starship, index) =>
    <Starship key={index} starship={starship} />)
  

    return(
        <div>
            {renderedStarships}
        </div>
    )
}
export default Starships