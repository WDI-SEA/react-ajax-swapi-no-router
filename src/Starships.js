
import React, {Component} from 'react'
import Starship from './Starship'
import Buttons from './Buttons';

export default class Starships extends Component {
    render() {
        const singleStarship = this.props.starshipsList.map((starship, i) => {
            return (
                <Starship 
                    starship={starship}
                    key={`starship-${i}`}
                />
            );
        })
        return (
            <div>
                <h2 className="">Starships</h2>
                <div className="">
                    {singleStarship}
                </div>
                <Buttons 
                    handlePageClick={this.props.handlePageClick}
                    page={this.props.page}
                />
            </div>
        );
    }
}