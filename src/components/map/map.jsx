import React, { Component } from 'react';
import L from 'leaflet';


export default class Map extends React.Component {
  constructor() {
    super();

  }

  componentDidMount() {
    var map = L.map('mapid', {
      // lat, long coordinates
      center: [37.7758, -122.4128],
      zoom: 15
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/echurchill/citnqe70i005j2ioep3anqchd/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'echurchill/citnqe70i005j2ioep3anqchd/tiles/256',
      accessToken: 'pk.eyJ1IjoiZWNodXJjaGlsbCIsImEiOiJjaXRuaWZ0aTAwNGJ3Mm9sNHE1aW1pd2liIn0.aiR47_bvY8qQtfQLVNDxvQ'
    }).addTo(map);

    var icon = L.icon({
      iconUrl: '../../images/logo.png',

      iconSize:     [38, 50],
      iconAnchor:   [22, 94]
    });

    L.marker([37.7758, -122.4128], {icon: icon}).addTo(map);

  }

  render() {

    return(
      <div id="mapid" style={{ height: "570px" }}>
      </div>
    );
  }
}
