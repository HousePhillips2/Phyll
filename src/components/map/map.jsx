import React, { Component } from 'react';
import { L } from 'leaflet';

// let map = L.map('map', {
//   center: [51.505, -0.09],
//   zoom:   13
// });

export default class Map extends React.Component {
  constructor() {
    super();

  }

  render() {
    console.log(L);
    return(
      <div id="map">
      </div>
    );
  }
}
