
import React from 'react'
import Filter from './Filter';

const Find = () => {
  return (
    <div className="w-full flex items-center mt-3">
      <span className="font-semibold">Find:</span>
      <Filter name='City' />
      <Filter name='Noise level' />
      <Filter name='Time zone' />

      </div>
  )
}

export default Find;

