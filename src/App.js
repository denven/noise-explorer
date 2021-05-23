import NewMap from './NewMap'
import Header from './components/Header';
import Search from './components/Search';
import Find from './components/Find';
import Posts from './components/Posts';
import TestButton from './components/TestSound';
import Map from './Map'

function App() {
  return (
    <div className='h-screen w-screen px-5 flex flex-col'>
      <Header />
      <Search />
      <Find />
      <div className="mt-4 h-1/3 border border-black"> <Map /></div>

      <Posts posts={[{name: 'Alex', rate: 'good'}, {name: 'Judy', rate: 'bad'}, {name: 'Bob', rate: 'worse'}]} />
      <TestButton />
    </div>
  );
}

export default App
