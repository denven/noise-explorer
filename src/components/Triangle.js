
import React from 'react'

const Triangle = ({onClick}) => {
  return (
    <div onClick={onClick} style={{      
      width: 0,
      height: 0,
      borderLeft: '6.5px solid transparent',
      borderRight: '6.5px solid transparent',
      borderTop: '13px solid black'}}></div>
  )
}

export default Triangle;
