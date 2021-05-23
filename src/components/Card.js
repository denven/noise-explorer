
import React from 'react'
import Amplify from './Amplify'
import Address from '../assets/images/venue.png'
import moment from 'moment';

const PostCard = ({content}) => {

  console.log(content)

  let timeAgo = moment.unix(content.timestamp).fromNow();
  let timeDate = moment.unix(content.timestamp).format('HH:mm a DD MMM')
  console.log(timeDate);
  let ampm = timeDate.slice(0,2);
  console.log(ampm)
  if(Number(ampm >= 12)) {
    ampm = 'Afernoon:';
  } else {
    ampm = 'Morning:';
  }

  return (
    <div className="py-2" style={{boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)'}}>
      <div className="w-full flex justify-between items-center rounded-xl">

      <div className="flex flex-col justify-between my-2">
        <div className='flex items-center mb-1'>
          <div className="font-medium mr-1">Noise Level:</div>
          <Amplify rate={content.rate} />
        </div>
      </div>

      <div className="right">
        <div className="">
          <SoundVolune rate={content.rate} value={content.volume} />
        </div>
      </div>

    </div>

      <div className="flex justify-between">
        <span className='text-xs font-light'>{ampm} {timeDate}</span>
        <span className='font-light text-xs pr-6'>{timeAgo}</span>
      </div>


      <div className='flex justify-between items-center mt-1'>
        <div className="flex justify-start items-center">
          <img className='w-3 pr-1' src={Address}/>
          <span className='text-xs'>{content.address}</span>
        </div>
        <span className="text-xs w-auto px-4 rounded-md" style={{backgroundColor: 'rgba(251, 237, 150, 0.3)'}}>More v</span>
      </div>
    </div>
  )
}
// backgroundColor: '#FBED96', filter: 'alpha(opacity=30)'
const SoundVolune = ({rate, value}) => {

  console.log(rate, value)

  let color = '#FFDC00'
  switch (rate) {
    case 'good': 
      color = '#9DC91F'      
      break;
    case 'normal':
      color = '#FFDC00'        
      break;
    case 'worse':
        color = '#BD3003'      
        break;
    default:
      color = '#FFDC00'  
    }
    console.log(rate, value, color)

  return (
    <div>
      <span className='text-5xl font-bold' style={{color: color}}>{value}</span>
      <span className='font-medium pl-1'>dbi</span>
    </div>
  )
}
export default PostCard;

