import React, { Component } from "react"

export default class Pilot extends Component {
    render() {
        return(
            <>
                <p><a href={this.props.url}>{this.props.name}</a></p>
            </>
        )
    }
}