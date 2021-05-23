
import React from 'react'
import Amplify from './Amplify'
import Address from '../assets/images/venue.png'
import User from '../assets/images/user.png'
import Time from '../assets/images/clock.png'

const PostCard = ({content}) => {
  console.log(content)
  return (
    <div className="w-full h-24 flex justify-between rounded-xl my-2">

      <div className="left">
        <div className='flex items-center'>
          <div className="font-medium mr-1">Noise Level:</div>
          <Amplify rate={'good'} />
        </div>
        <div className="number">
          <span className='text-5xl' style={{color: '#BD3003'}}>108</span>
          <span className='font-medium'>dbi</span>
        </div>


        <div className="flex justify-start items-center">
          <img className='w-3 m-2' src={Address}/>
          <span className='text-xs'>Richmond</span>
        </div>
      </div>

      <div className="2/7 flex flex-col justify-between">
        <div>
          <div className="flex justify-start items-center"> 
            <img className='w-3 m-2' src={User} /> 
            <span className='text-xs'>{content.name}</span>
          </div>
          <div className="flex justify-start items-center"> 
            <img className='w-3 m-2' src={Time} /> 
            <span className='text-xs'>9:00pm May 24</span>
          </div>        
        </div>
        <div>
          <span className="text-xs w-auto" style={{backgroundColor: '#FBED96'}}>Read More v</span>
        </div>
      </div>


      </div>
  )
}

export default PostCard;

