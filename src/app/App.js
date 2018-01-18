import React, { Component } from 'react';
import AstronomyContainer from './components/AstronomyContainer';
import MarsRoverContainer from './components/MarsRoverContainer';

const App = () => {
  return (
    <div>
      <AstronomyContainer />
      <MarsRoverContainer />
    </div>,
    document.body
  )
}

export default App;
