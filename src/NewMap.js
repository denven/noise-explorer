import React, { useEffect, useState } from 'react'
import AutoComplete from 'react-google-autocomplete'
import Geocode from 'react-geocode'
import Magnifier from './assets/images/search.png'
import { useGlobalContext } from './context'

const fetch = require('isomorphic-fetch')
const { compose, withProps, withHandlers } = require('recompose')
const { withScriptjs, withGoogleMap, GoogleMap, Marker } = require('react-google-maps')
const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer')

let searchWidth = window.innerWidth - 32 * 2 - 10

const DummyData = [
  { id: 1, lat: 49.1231, lng: -123.6123 },
  { id: 2, lat: 49.1231, lng: -123.6123 },
  { id: 3, lat: 49.1231, lng: -123.6123 },
  { id: 4, lat: 49.1231, lng: -123.6123 },
  { id: 5, lat: 49.1231, lng: -123.6123 },
  { id: 6, lat: 49.1231, lng: -123.6123 },
  { id: 7, lat: 49.1231, lng: -123.6123 },
  { id: 8, lat: 49.1231, lng: -123.6123 },
  { id: 9, lat: 49.1231, lng: -123.6123 },
]

const DummyData2 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
const DummyData3 = [{ id: 1 }, { id: 2 }, { id: 3 }]
const DummyData4 = [{ id: 1 }, { id: 2 }]

const NewMap = (props) => {
  const { onPlaceSelected, userPos, address, placeGeo } = useGlobalContext()
  const [state, setState] = useState({ marker: [] })
  const [pos, setPos] = useState(userPos)

  Geocode.setApiKey('AIzaSyArxmStdE9PDwy92EsIBRmEUySRfX39PUk')

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
        {DummyData.map((marker) => (
          <Marker key={marker.id} position={{ lat: 49.1231, lng: -123 }} />
        ))}
        {DummyData2.map((marker) => (
          <Marker key={marker.id} position={{ lat: 49.2, lng: -123 }} />
        ))}
        {DummyData2.map((marker) => (
          <Marker key={marker.id} position={{ lat: 49.233, lng: -123.2 }} />
        ))}
        {DummyData3.map((marker) => (
          <Marker key={marker.id} position={{ lat: 49.333, lng: -122.999 }} />
        ))}
        {DummyData4.map((marker) => (
          <Marker key={marker.id} position={{ lat: 49.17, lng: -122.5 }} />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  ))
  //end of HOCs

  // const url = 'http://158.101.6.188:8080/map-data'

  // const fetchData = async (url) => {
  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log('newmap data', data.data)
  //     let nodes = []
  //     if (data.status === 0) {
  //       let arr = data.data.map((addr) => Geocode.fromAddress(addr.address))
  //       Promise.all(arr).then((data) => {
  //         for (let locationGeo of data) {
  //           nodes.push(locationGeo.results[0].geometry.location)
  //         }
  //         console.log('this is the new map', nodes)
  //       })
  //     }
  //     setState(nodes)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const url = [
    // Length issue
    `https://gist.githubusercontent.com`,
    `/farrrr/dfda7dd7fccfec5474d3`,
    `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`,
  ].join('')

  const fetchMarkers = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.photos) //data.photo is a array
      setState({ markers: data.photos }) //state = {markers: [{}, {},{}]}
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchMarkers(url)
  }, [url])

  return <MapWithAMarkerClusterer markers={state.markers} />
}

export default NewMap
