import { useState, useEffect } from "react"
import axios from 'axios'

const Pilot = (props) => {
    const [pilotName, setPilotName] = useState("")

    useEffect(() => {
        axios.get(props.pilot)
        .then(res => {
            setPilotName(res.data.name)
        })
        .catch(err => console.log(err))
    }, [props.pilot])

    return <div id="altName">{pilotName}</div>
}
export default Pilot

// FETCH VERSION
// useEffect(() => {
//     fetch(props.pilot)
//     .then(res => res.json())
//     .then(rdata => {
//         setPilotName(rdata.name)
//     })
//     .catch(err => console.log(err))
// }, [props.pilot])