import { useState, useEffect } from "react"

const Pilot = (props) => {
    const [pilotName, setPilotName] = useState("")
    useEffect(() => {
        fetch(props.pilot)
        .then(res => res.json())
        .then(rdata => {
            setPilotName(rdata.name)
        })
        .catch(err => console.log(err))
    }, [props.pilot])

    return (
        <div id="altName">
            {pilotName}
        </div>
    )
}
export default Pilot