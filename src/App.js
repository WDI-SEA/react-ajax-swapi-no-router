import React, {Component} from 'react'
import './App.css'
import Starships from './Starships'
import axios from 'axios'

export default class App extends Component {
    state = {
      starships: [],
      page: 1
    }
    async componentDidMount() {
      try {
        const response = await axios.get("https://swapi.dev/api/starships?page=1");
        this.setState({starships: response.data.results});
      }
      catch (err) {
        console.warn(err);
      }
    }

    handlePageClick = async (button) => {
      try {
        let response = {};
        switch (button) {
          case "prev":
            response = await axios.get(`https://swapi.dev/api/starships?page=${this.state.page - 1}`);
            this.setState(prevState => {
              return {
                starships: response.data.results,
                page: prevState.page - 1
              }
            });
            break;
          case "next":
            response = await axios.get(`https://swapi.dev/api/starships?page=${this.state.page + 1}`);
            this.setState(prevState => {
              return {
                starships: response.data.results,
                page: prevState.page + 1
              }
            });
            break;
          default:
            console.log("error");
            break;
        }
      }
      catch (err) {
        console.warn(err);
      }
    }
    render() {
      return (
        <div className="">
          <Starships
            starshipsList={this.state.starships}
            page={this.state.page}
            handlePageClick={this.handlePageClick}
          />
        </div>
      )
    }
  }
  