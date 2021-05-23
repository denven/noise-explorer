import React, { useEffect, useState } from 'react'
import AutoComplete from 'react-google-autocomplete'
import Magnifier from './assets/images/search.png'

const fetch = require('isomorphic-fetch')
const { compose, withProps, withHandlers, withStateHandlers } = require('recompose')
const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox')
const { withScriptjs, withGoogleMap, GoogleMap, Marker } = require('react-google-maps')
const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer')

let searchWidth = window.innerWidth - 32 * 2 - 10;

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyArxmStdE9PDwy92EsIBRmEUySRfX39PUk&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 25.0391667, lng: 121.525 }}>
    <AutoComplete
      className={'absolute px-6 top-8 h-8 inset-l-4 mt-6 border border-black rounded-xl flex justify-start text-xs'}
      style={{width: searchWidth}}
      placeholder='enter your address here'
      onPlaceSelected={(place) => {
        console.log(place)
      }}
    />
    <img className='absolute px-2 top-16 h-4 z-10' src={Magnifier} />
    <MarkerClusterer onClick={props.onMarkerClustererClick} averageCenter enableRetinaIcons gridSize={50}>
      {props.markers.map((marker) => (
        <Marker key={marker.photo_id} position={{ lat: marker.latitude, lng: marker.longitude }} />
      ))}
    </MarkerClusterer>
  </GoogleMap>
))

const NewMap = (props) => {
  const [state, setState] = useState({ markers: [] })

  const url = [
    // Length issue
    `https://gist.githubusercontent.com`,
    `/farrrr/dfda7dd7fccfec5474d3`,
    `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`,
  ].join('')

  const fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data.photos.slice(0, 10))
      setState({ markers: data.photos.slice(0, 10) })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [url])

  return <MapWithAMarkerClusterer markers={state.markers} />
}

export default NewMap
