import React, { useEffect, useState } from 'react'
import AutoComplete from 'react-google-autocomplete'
// import Geocode from 'react-geocode'
import Magnifier from './assets/images/search.png'
import { useGlobalContext } from './context'

const fetch = require('isomorphic-fetch')
const { compose, withProps, withHandlers, withStateHandlers } = require('recompose')
const { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } = require('react-google-maps')
const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer')

let searchWidth = window.innerWidth - 32 * 2 - 10

const NewMap = (props) => {
  const { onPlaceSelected, userPos, address, placeGeo } = useGlobalContext()
  const [state, setState] = useState({ markers: [] })
  const [pos, setPos] = useState(userPos)

  //HOCS
  const MapWithAMarkerClusterer = compose(
    withProps({
      googleMapURL:
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyArxmStdE9PDwy92EsIBRmEUySRfX39PUk&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div className='h-full' />,
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
    <GoogleMap defaultZoom={10} defaultCenter={pos}>
      <AutoComplete
        className={
          'absolute z-20 -top-16 ml-4 px-6 h-8 inset-l-4 mt-6 border border-black rounded-xl flex justify-start text-xs'
        }
        style={{ width: searchWidth }}
        placeholder='enter your address here'
        onPlaceSelected={(place) => {
          const lat = place.geometry.location.lat()
          const lng = place.geometry.location.lng()
          setPos({ lat: lat, lng: lng })
        }}
      />
      <img className='absolute px-2 left-4 -top-8 h-4 z-20' src={Magnifier} />
      <MarkerClusterer onClick={props.onMarkerClustererClick} averageCenter enableRetinaIcons gridSize={50}>
        {props.markers.map((marker) => (
          <Marker key={marker.photo_id} position={{ lat: marker.latitude, lng: marker.longitude }} />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  ))
  //end of HOCs

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
      setState({ markers: data.photos })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [url])
  //   const Dummy_markers = [
  //     { latitude: 49.16973, longitude: -123.133003 },
  //     { latitude: 49.183804, longtitude: -123.134085 },
  //   ]
  //   setState({ markers: Dummy_markers })

  return <MapWithAMarkerClusterer markers={state.markers} />
}

export default NewMap
