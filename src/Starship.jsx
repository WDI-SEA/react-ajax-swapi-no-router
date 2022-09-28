import React, {Component} from 'react';

export default class Starship extends Component {
    state = {
        filmsArray:[],
        film:''
    }
    render(){
    //     console.log(this.setState.filmsArray)
    //     if(this.props.films == '') {
    //         this.setState({
    //             film: ''
    //         })
    //     } else {
    //     const films = this.props.films.map((film, i)=> {
    //         this.setState({
    //             film: film
    //         })
    //         this.setState(prevState=> {
    //             return {
    //                 filmsArray: [...prevState.filmsArray,prevState.film],
    //                 film: ''
    //             }
    //         })
    //     })
    // }
        return(
            <div>
                <li><h3>{this.props.name}</h3></li>
                <p>Class: {this.props.class}</p>
                <p>Appears on:</p>
            </div>
        )
    }
}