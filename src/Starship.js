import React, { Component } from "react";
import Starships from "./Starships";
import Pilot from './Pilot';
import axios from "axios";

export default class Starship extends Component {

    state = {
        pilots: []
    };

    componentDidMount = async () => {
        try {
            const data = this.props.pilots.map((url) => axios.get(url))
            const promisedData = await Promise.all(data)
            const pilotInfo = []
            promisedData.forEach(pilot => {
                pilotInfo.push({
                    name: pilot.data.name,
                    url: pilot.data.url
                });
            });
            this.setState({
                pilots: pilotInfo
            });
        } catch (err) {
            console.log(err);
        };
    };

    render() {
        return (
            <>
                <h2>{this.props.name}</h2>
                <p>Class:{this.props.class}</p>
                <p>Cost:{this.props.cost}</p>
                <p>Pilots:</p>
                <ul>
                    {pilots.length > 0 ? pilots : 'No pilot'}
                </ul>
            </>
        )
    };
};



