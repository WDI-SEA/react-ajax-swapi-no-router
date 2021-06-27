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
    })

    return (
        <div>
            {pilotName}
        </div>
    )
}
export default Pilot