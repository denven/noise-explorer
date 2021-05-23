import NewMap from './NewMap'
import Header from './components/Header';
import Search from './components/Search';
import Find from './components/Find';
import Posts from './components/Posts';
import TestButton from './components/TestSound';
// import Map from './Map'

// import Sound from './components/Sound'

import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    async function getMapData () {
      let res =  await axios.get('http://127.0.0.1:8080/map-data');
      console.log('res', res);
      setMapData(res, mapData);

    }

    getMapData();
    return () => {
      console.log('clean up...')
    }
  }, [])


  return (
    <div className='h-screen w-screen px-5 flex flex-col'>
      <Header />
      <Search />
      <Find />
      {/* <div className="mt-4 h-1/3 border border-black"> <Map /></div> */}
      {/* <Sound /> */}

      <Posts posts={[{name: 'Alex', rate: 'good'}, {name: 'Judy', rate: 'bad'}, {name: 'Bob', rate: 'worse'}]} />
      <TestButton />
    </div>
  );
}

export default App
