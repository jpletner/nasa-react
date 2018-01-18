import React, { Component } from 'react';
import AstronomyContainer from './AstronomyContainer';
import MarsRoverContainer from './MarsRoverContainer';

var Containers = React.createClass({
  render() {
    return (
      <div>
        <AstronomyContainer />
        <MarsRoverContainer />
      </div>
    )
  }
});

export default Containers;
