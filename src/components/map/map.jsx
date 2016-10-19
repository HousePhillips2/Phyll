import L                    from 'leaflet';
import React, { Component } from 'react';

export default class Map extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    var map = L.map('mapid', {
      // lat, long coordinates
      center: this.props.mapFocus,
      zoom: 16,
      scrollWheelZoom: false,
      dragging: true,
      touchZoom: false
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/echurchill/citnqe70i005j2ioep3anqchd/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 16,
      minZoom: 12,
      id: 'echurchill/citnqe70i005j2ioep3anqchd/tiles/256',
      accessToken: 'pk.eyJ1IjoiZWNodXJjaGlsbCIsImEiOiJjaXRuaWZ0aTAwNGJ3Mm9sNHE1aW1pd2liIn0.aiR47_bvY8qQtfQLVNDxvQ'
    }).addTo(map);

    var icon = L.icon({
      iconUrl: '../../images/logo.png',

      iconSize:     [38, 50],
      iconAnchor:   [22, 94]
    });

    L.marker(this.props.mapFocus, {icon: icon}).addTo(map);

  }

  render() {
    
    return(

      <div id="mapid" style={{ height: "550px" }}></div>

    );
    
  }
}
