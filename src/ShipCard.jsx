import { useState, useEffect } from "react"
import Pilot from './Pilot'

const ShipCard = (props) => {
    const [pilots, setPilots] = useState([])

    // useEffect(() => {
    //     Promise.all([
    //         props.ships.forEach(pilot => {
    //             fetch(pilot)
    //         })
    //     ]).then(resPlural => {
    //         return Promise.all(resPlural.map(resSing => {
    //             return resSing.json()
    //         }))
    //     }).then(data => {
    //         let pilotData = data.map(pilot => {
    //             return pilot.name
    //         })
    //         setPilots(pilotData)
    //         console.log(pilots)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }, [pilots])

    return (
        <>
            {props.ships}
            <Pilot />
        </>
    )
}
export default ShipCard