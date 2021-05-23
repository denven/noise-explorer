import React, { useEffect, useState } from 'react'
const fetch = require('isomorphic-fetch')
const { compose, withProps, withHandlers } = require('recompose')
const { withScriptjs, withGoogleMap, GoogleMap, Marker } = require('react-google-maps')
const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer')

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
    <MarkerClusterer onClick={props.onMarkerClustererClick} averageCenter enableRetinaIcons gridSize={60}>
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
      setState({ markers: data.photos })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [url])

  return <MapWithAMarkerClusterer markers={state.markers} />
}

// class DemoApp extends React.PureComponent {
//   UNSAFE_componentWillMount() {
//     this.setState({ markers: [] })
//   }

//   componentDidMount() {
//     const url = [
//       // Length issue
//       `https://gist.githubusercontent.com`,
//       `/farrrr/dfda7dd7fccfec5474d3`,
//       `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`,
//     ].join('')

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({ markers: data.photos })
//       })
//   }

//   render() {
//     return <MapWithAMarkerClusterer markers={this.state.markers} />
//   }
// }
export default NewMap