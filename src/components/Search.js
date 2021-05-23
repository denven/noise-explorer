import React from 'react'
import Magnifier from '../assets/images/search.png'
import Filter from '../assets/images/filter.png'

// 
const Search = () => {
  return (
    <div className="w-full h-8 mt-6 border-none outline-none rounded-xl flex items-center justify-between">
      <img className='m-2 h-3' src={Magnifier} />
      {/* <input type="text" className='flex-1 mr-4 text-xs' placeholder='Enter you address here'/> */}
      <img className='w-6 h-6' src={Filter} />
    </div>
  )
}

export default Search;