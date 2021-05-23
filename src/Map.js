import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
// import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'
import { useGlobalContext } from './context';
import AutoComplete from 'react-google-autocomplete';

//HOCs

const Map = () => {
  const { isInfoBoxShown, toggleInforBox, onPlaceSelected, userPos } = useGlobalContext();
  const [city, setCity] = useState();

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={12} defaultCenter={userPos}>
        <AutoComplete
          className={'border-2 border-yellow-500 block w-full p-2 mt-2 rounded md:w-1/3 m-auto'}
          onPlaceSelected={(place) => {
            onPlaceSelected(place);
            console.log(userPos);
          }}
        />
        <Marker position={userPos} onClick={toggleInforBox}>
          <InfoWindow>
            <div>Spot infomation</div>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    )),
  );
  return (
    <MapWithAMarker
      googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyArxmStdE9PDwy92EsIBRmEUySRfX39PUk&v=3.exp&libraries=geometry,drawing,places'
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};
export default Map;
