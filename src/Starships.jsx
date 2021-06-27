import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'


const Starships = () => {

  const [starships, setStarships] = useState([])
  
    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships`)
        .then((response) => {
          setStarships(response.data.results)
          console.log(response.data.results)
        })
        .catch((err) => console.log(err))
      }, [])

  const shipData = starships.map((ships, i) => {
    // console.log('🚀 ship name: ' + ships.name )
    // console.log('🚀 ship pilot: ' + ships.pilots )

    return (
      <div class="shipCard">
        <li key={i}>
          <p>Ship: {ships.name} </p>
          <p>Class: {ships['starship_class']}</p>
          <p>Manufactorer: {ships.manufacturer}</p>
          <br/>
        </li>
      </div>
    )
  })


  return (
    <div>
      {shipData}
    </div>
  );
}

export default Starships;
