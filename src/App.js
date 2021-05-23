import MapWithAMarker from './MapWithMarker'
// import SearchBar from './SearchBar'

function App() {
  return (
    <MapWithAMarker
      googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCUbB3C_RbOKP_Me16YWE76m-_Tj2yTF-k&v=3.exp&libraries=geometry'
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}

export default App
