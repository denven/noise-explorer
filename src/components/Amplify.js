

import React from 'react'

const Amplify = ({rate}) => {

  let barsArray = ['green', 'gray', 'gray', 'gray', 'gray', 'gray'];
  switch (rate) {
    case 'good':
      barsArray =  ['green', 'green', 'gray', 'gray', 'gray', 'gray'];
      break;
    case 'bad':
      barsArray =  ['red', 'red', 'red', 'gray', 'gray', 'gray'];
      break;
    case 'worse':
      barsArray =  ['yellow', 'yellow', 'gray', 'gray', 'gray', 'gray'];
        break;
    default:
      barsArray =  ['gray', 'gray', 'gray', 'gray', 'gray', 'gray'];
  }


  return (
    <div className="w-16 flex justify-start ">
      {
        barsArray.map((color, index) => <VerticalBar color={color} key={index}/>)
      }
    </div>
  )
}

const VerticalBar = ({color}) => {

  let barStyle = 'w-2 h-4 flex-shrink-0 ';
  let barColor = '';

  switch (color) {
    case 'green':
      barColor = 'bg-green-400'
      break;
    case 'red':
      barColor = 'bg-red-400'
      break;
    case 'yellow':
        barColor = 'bg-yellow-400'
        break;
    default:
      barColor = 'bg-gray-200'
  }

  return (
    <div className={`${barStyle}${barColor}`} style={{width: 8, marginLeft: 1.5, marginRight: 1.5}}></div>
  )

}

export default Amplify;

