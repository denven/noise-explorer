import NewMap from './NewMap'
import Header from './components/Header'
import Search from './components/Search'
import Find from './components/Find'
import Posts from './components/Posts'

import TestButton from './components/TestSound'
// import Map from './Map'

// import Sound from './components/Sound'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useGlobalContext } from './context'
import Geocode from 'react-geocode'

function App() {
  const { placeGeo } = useGlobalContext()
  const [mapData, setMapData] = useState([])
  Geocode.setApiKey('AIzaSyArxmStdE9PDwy92EsIBRmEUySRfX39PUk')
  // Geocode.fromAddress(address)

  useEffect(() => {
    try {
      getMapData()
    } catch (error) {
      // console.log('Get map data error')
    }
    async function getMapData() {
      let res = await axios.get('http://158.101.6.188:8080/map-data')
      // console.log('map data:', res.data.status, res.data.data)
      let markers = []
      if (res.data.status === 0) {
        let arr = res.data.data.map((addr) => Geocode.fromAddress(addr.address))
        Promise.all(arr).then((data) => {
          for (let locationGeo of data) {
            markers.push(locationGeo.results[0].geometry.location)
          }
          // console.log('this is the arrOfMarkers', markers)
        })
        setMapData(markers)
      }
    }

    return () => {
      console.log('clean up...')
    }
  }, [])

  return (
    <div className='h-screen w-screen px-5 flex flex-col'>
      <Header />
      <Search />
      {/* <Find /> */}
      <div style={{ height: window.innerWidth + 16 }}></div>
      <div className='w-full absolute left-0 top-24' style={{ height: window.innerWidth }}>
        {' '}
        <NewMap markers={mapData} />
      </div>
      {/* <Sound /> */}
      <Posts posts={mapData} />
      <TestButton />
    </div>
  )
}

export default App
