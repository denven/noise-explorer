import React from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow } from 'react-google-maps'
// import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'
import { useGlobalContext } from './context'

//HOCs

const Map = () => {
  const { isInfoBoxShown, toggleInforBox } = useGlobalContext()
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={12} defaultCenter={{ lat: 49.16659, lng: -123.133569 }}>
        <Marker position={{ lat: 49.16659, lng: -123.133569 }} onClick={console.log(isInfoBoxShown)}>
          {isInfoBoxShown && (
            <InfoWindow>
              <div>Spot infomation</div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    )),
  )
  return (
    <MapWithAMarker
      googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyArxmStdE9PDwy92EsIBRmEUySRfX39PUk&v=3.exp&libraries=geometry,drawing,places'
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}
export default Map
