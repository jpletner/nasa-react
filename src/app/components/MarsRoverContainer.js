import React, { Component } from 'react';
import MarsRoverCard from './MarsRoverCard';
import axios from 'axios';

class MarsRoverContainer extends Component {

  constructor() {
    super();

    this.state = {
      rover: []
    }

  }

  componentDidMount() {
    const API_KEY = 'cAp9FAIN5Z5pgavuNi31Vx1EkB45BMVTCih3wgJJ'
    const END_POINT = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key='

    axios.get(END_POINT+API_KEY)
      .then(response => {
        this.setState({
          rover: response.data
        })

        console.log(this.state.rover)

      })
      .catch(error => {
        console.log(error, 'failed to fetch data')
      });
  }


  render() {
    const { rover } = this.state;
    return (
      <MarsRoverCard data={rover} />
    )
  }
}

export default MarsRoverContainer;
