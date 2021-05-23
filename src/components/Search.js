import React from 'react'
import Magnifier from '../assets/images/search.png'
const Search = () => {
  return (
    <div className="w-full h-8 mt-6 border border-black rounded-xl flex justify-start">
      <img className='m-2 h-3' src={Magnifier} />
      <input type="text" className='flex-1 mr-4 text-xs' placeholder='Enter you address here'/>
    </div>
  )
}

export default Search;