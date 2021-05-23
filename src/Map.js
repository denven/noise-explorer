

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.1666,
      lng: -123.1336
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyArxmStdE9PDwy92EsIBRmEUySRfX39PUk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.1666}
            lng={-123.1336}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
