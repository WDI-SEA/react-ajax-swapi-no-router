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
                <div class="starship-item" key={index}>
                <span class="itl1">Name:</span> <span class="bld1">{ship.name}</span>
                </div>
            </div>
            <div class="container">
                <div class="starship-item" key={index}>
                <span class="itl1">Starship Class:</span> <span class="bld1">{ship.starship_class}</span>
                </div>
            </div>
            <div class="container">
                <div class="starship-item" key={index}>
                <span class="itl1">Manufacturer:</span> <span class="bld1">{ship.manufacturer}</span>
                </div>
            </div>
            <div class="container">
                <div class="starship-item" key={index}>
                    <span class="itl1">Max. Speed:</span> <span class="bld1">{ship.max_atmosphering_speed}</span>
                </div>
                                <hr/>
            </div>
            <hr/>
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