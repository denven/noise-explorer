import NewMap from './NewMap'
import Header from './components/Header';
import Search from './components/Search';
import Find from './components/Find';
import Posts from './components/Posts';
import Filters from './components/Filters';

import TestButton from './components/TestSound';
import NoiseTestPage from './pages/NoiseTestPage';

// import Map from './Map'

// import Sound from './components/Sound'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [mapData, setMapData] = useState([]);
  const [bShowFilters, showFilters] = useState(false);
  const [bShowSoundPage, showSoundPage] = useState(false);

  useEffect(() => {
    try {
      getMapData();
    } catch (error) {
      console.log('Get map data error')
    }
    async function getMapData() {
      // http://158.101.6.188:8080/map-data
      let res = await axios.get('http://158.101.6.188:8080/map-data');
      // let res =  await axios.get('http://127.0.0.1:8080/map-data');
      console.log('map data:', res.data.status, res.data.data);
      if (res.data.status === 0) {
        setMapData(res.data.data);
      }
    }

    return () => {
      console.log('clean up...')
    }
  }, [])


  return (
    <div className='h-screen w-screen px-5 flex flex-col' style={{ overflow: bShowSoundPage ? 'hidden' : 'auto' }}>
      <Header />
      <Search onClick={showFilters} />
      {/* <Find /> */}
      {bShowFilters && <Filters onClick={showFilters} />}
      <div style={{ height: window.innerWidth + 16 }}></div>
      <div className="w-full absolute left-0 top-24" style={{ height: window.innerWidth }}> <NewMap /></div>
      {/* <Sound /> */}
      <Posts posts={mapData} />
      <TestButton onClick={showSoundPage} />
      { bShowSoundPage && <NoiseTestPage onClick={showSoundPage} />}
    </div>
  );
}

export default App
