import React, { Component } from "react";
import axios from "axios";
import Starship from "./Starship";
import PaginationButtons from "./PaginationButtons";

class StarshipContainer extends Component {
    state = {
      starshipArray: [],
      page: 1
    }
    async componentDidMount() {
      try {
        const response = await axios.get("https://swapi.dev/api/starships?page=1");
        this.setState({starshipArray: response.data.results});
      }
      catch (err) {
        console.warn(err);
      }
    }
    handlePaginationClick = async (button) => {
      try {
        let response = {};
        switch (button) {
          case "prev":
            response = await axios.get(`https://swapi.dev/api/starships?page=${this.state.page - 1}`);
            this.setState(prevState => {
              return {
                starshipArray: response.data.results,
                page: prevState.page - 1
              }
            });
            break;
          case "next":
            response = await axios.get(`https://swapi.dev/api/starships?page=${this.state.page + 1}`);
            this.setState(prevState => {
              return {
                starshipArray: response.data.results,
                page: prevState.page + 1
              }
            });
            break;
          default:
            console.log("No matching pagination button");
            break;
        }
      }
      catch (err) {
        console.warn(err);
      }
    }
    render() {
        const starshipComponents = this.state.starshipArray.map((starship, index) => {
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
                    handlePaginationClick={this.handlePaginationClick}
                    page={this.state.page}
                />
            </div>
        );
    }
}

export default StarshipContainer;
