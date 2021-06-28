import { useState, useEffect } from "react"
import axios from 'axios'

const Film = (props) => {
    const [filmTitle, setFilmTitle] = useState("")
    const [releaseDate, setReleaseDate] = useState("")

    useEffect(() => {
        axios.get(props.film)
        .then(res => {
            setFilmTitle(res.data.title)
            setReleaseDate(res.data.release_date)
        })
        .catch(err => console.log(err))
    }, [props.film])

    return <div id="altName">{filmTitle} ({releaseDate.substr(0,4)})</div>
}
export default Film