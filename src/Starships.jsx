import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';







export default function Starships() {

    const [starships, setStarships] = useState([])


    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships`)
        .then((response) => {
          setStarships(response.data.results)
          console.log(response.data.results)
        })
        .catch((err) => console.log(err))
      }, [])

      const shipNames = starships.map((names, index) => {
        return <li >
            <br/>
            <p>SHIP: {names.name} || TYPE: {names['starship_class']} </p>
            <p>PASSENGERS: {names.passengers} || HYPERDRIVE RATING: {names['hyperdrive_rating']}</p>
            <br/>
            </li>
        console.log(names.name)
      })
      







      return(
        <div>
            <ul>
            {shipNames}

            </ul>
        </div>


      )







}