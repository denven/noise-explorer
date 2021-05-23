

import React from 'react'

const Amplify = ({rate}) => {
  console.log(rate)

  let barsArray = ['green', 'gray', 'gray', 'gray', 'gray', 'gray'];
  switch (rate) {
    case 'good':
      barsArray =  ['green', 'gray', 'gray', 'gray', 'gray', 'gray'];
      break;
    case 'normal':
      barsArray =  ['yellow', 'yellow', 'yellow', 'gray', 'gray', 'gray'];
      break;
    case 'worse':
      barsArray =  ['red', 'red', 'red', 'red', 'red', 'gray'];
        break;
    default:
      barsArray =  ['yellow', 'yellow', 'yellow', 'gray', 'gray', 'gray'];
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
    case 'yellow':
      barColor = 'bg-yellow-400'
      break;
    case 'red':
      barColor = 'bg-red-400'
      break;
    case 'gray':
      barColor = 'bg-gray-200'
        break;
    default:
      barColor = 'bg-gray-200'
  }

  return (
    <div className={`${barStyle}${barColor}`} style={{width: 4, height: 12, marginLeft: 1.5, marginRight: 1.5}}></div>
  )

}

export default Amplify;

