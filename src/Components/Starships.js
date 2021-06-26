import React, { useEffect, useState } from 'react'
import Starship from './Starship'

const Starships = () => {
    const [ships,setShips] = useState([])

    useEffect(() => {
        const getShips = async (url) => {
            try {
                let response = await fetch(url)
                let rdata = await response.json()
                let newShips = rdata.results
                if(rdata.next) {
                    let nextShips = await getShips(rdata.next)
                    newShips = newShips.concat(nextShips)
                }
                return newShips
            } catch(err) {
                console.log(err)
            }
        }
        
        const fetchShips = async () => {
            const url = 'https://swapi.dev/api/starships'
            let shipRes = await getShips(url)
            setShips(shipRes)
        }
        fetchShips()
    },[])

    

    return (
        <div>
            <h1>List of Starships</h1>
            {ships.map((ship,index) => {
                return (
                    <Starship key={index} name={ship.name} starship_class={ship.starship_class} />
                )
            })}
        </div>
    )
}

export default Starships