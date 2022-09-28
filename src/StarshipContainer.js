import React, { Component } from "react";
import Starship from "./Starship";
import PaginationButtons from "./PaginationButtons";

class StarshipContainer extends Component {
    render() {
        const starshipComponents = this.props.starshipArray.map((starship, index) => {
            return (
                <Starship 
                    starship={starship}
                    key={`starship-${index}`}
                />
            );
        })
        return (
            <div>
                <h2 className="text-center text-5xl">Starships</h2>
                <div className="mt-3 flex gap-3 flex-wrap justify-center">
                    {starshipComponents}
                </div>
                <PaginationButtons 
                    handlePaginationClick={this.props.handlePaginationClick}
                    page={this.props.page}
                />
            </div>
        );
    }
}

export default StarshipContainer;
