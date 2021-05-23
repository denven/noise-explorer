

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
      barColor = '#9DC91F'
      break;
    case 'yellow':
      barColor = '#FFDC00'
      break;
    case 'red':
      barColor = '#BD3003'
      break;
    case 'gray':
      barColor = '#C4C4C4'
        break;
    default:
      barColor = '#C4C4C4'
  }

  return (
    <div className={barStyle} style={{width: 4, height: 12, marginLeft: 1.5, marginRight: 1.5, backgroundColor: barColor}}></div>
  )

}

export default Amplify;

