import { useState, useEffect } from "react"

const Film = (props) => {
    const [filmTitle, setFilmTitle] = useState("")
    const [releaseDate, setReleaseDate] = useState("")

    useEffect(() => {
        fetch(props.film)
        .then(res => res.json())
        .then(rdata => {
            setFilmTitle(rdata.title)
            setReleaseDate(rdata.release_date)
        })
        .catch(err => console.log(err))
    }, [props.film])

    return (
        <div id="altName">
            {filmTitle} ({releaseDate.substr(0,4)})
        </div>
    )
}
export default Film