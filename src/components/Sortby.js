
import React from 'react'

const Sortby = () => {
  return (
    <div className="w-full flex items-center mt-3">
      <span className="font-medium">Sort by:</span>
      <span className='font-medium underline ml-2'>Latest</span>
      <span className='font-medium text-gray-400 ml-2'>Nearby</span>

      <div className="flex justify-start items-center">
        <span className='font-medium text-gray-400 ml-2 mr-1'>Noise level</span>
        <TriangleUp />
      </div>

      <div className="flex justify-start items-center">
        <span className='font-medium text-gray-400 ml-2 mr-1'>Time</span>
        <TriangleUp />
      </div>
      
      </div>
  )
}

const TriangleUp = ({onClick}) => {
  return (
    <div onClick={onClick} style={{      
      width: 0,
      height: 0,
      borderLeft: '4.5px solid transparent',
      borderRight: '4.5px solid transparent',
      borderBottom: '9px solid black'}}></div>
  )
}


export default Sortby;