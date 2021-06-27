import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Starship = () => {

    // Hold ship data in state
    const [ships, setShips] = useState([])

    const getAPI = async () => {
    const response = await axios('https://swapi.dev/api/starships/')
    // console.log('Ships: ' + ships.data)
    // console.log(' results: ' + ships.data.results[0].name)
    // const shipsJson = ships.json()
    // console.log('ShipsJason: ' + shipsJson.results)
    const shipsArray = response.data.results

    const mapShips = shipsArray.map((ship, index) => {
        return (
            <>
            <div class="container">
                <div class="starshipItem" key={index}>
                    <h1></h1>Name: {ship.name}
                </div>
            </div>
            <div class="container">
                <div class="starshipItem" key={index}>
                    Starship Class: {ship.starship_class}
                </div>
            </div>
            <div class="container">
                <div class="starshipItem" key={index}>
                    Manufacturer: {ship.manufacturer}
                </div>
            </div>
            <div class="container">
                <div class="starshipItem" key={index}>
                    Max. Speed: {ship.max_atmosphering_speed}
                </div>
                                <hr/>
            </div>
            </>
                )
            })
    setShips(mapShips)
    }

    useEffect(() => {
        getAPI()
    }, [])


    return (
<>
        {ships}
</>
    )
}

export default Starship