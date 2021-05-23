import React from 'react'
import Triangle from './Triangle'

const Filter = ({name}) => {
  return (
    <div className='flex justify-start items-center border border-black rounded-2xl ml-2 pr-2'>
      <div className="text-xs pl-1 mx-2 flex items-center" style={{lineHeight: 1.5, height: 23}}>{name}</div> 
      <Triangle />
    </div>

  )
}

export default Filter;
