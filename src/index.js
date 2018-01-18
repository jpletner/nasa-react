import './assets/stylesheets/styles.scss';

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import AstronomyContainer from '../src/app/components/AstronomyContainer';
import MarsRoverContainer from '../src/app/components/MarsRoverContainer';
// import App from './app/App'; // import the main app component

ReactDOM.render(
  <div>
    <AstronomyContainer />
    <MarsRoverContainer />
  </div>,
  document.getElementById('root')
); // render our App component and mount it to our #root element
