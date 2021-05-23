import React from 'react'
import HeadPhone from '../assets/images/headphone.png'
import Header from '../components/Header'

const SoudMeter = ({onClick}) => {


  return (
    <div className='absolute top-0 left-0 z-50 overflow-hidden bg-white h-screen w-screen flex flex-col' >
      <Header />
      <div className='text-2xl font-medium mt-8'>Back to Home</div>
      <img src={HeadPhone} alt=""/>
      <div className='fixed h-14 inset-x-12 bottom-60 mx-8 border font-medium border-white rounded-md flex justify-center items-center' 
        style={{backgroundColor: '#FBED96', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}
      >
        Lets Start
      </div>
    </div>
  )
}

export default SoudMeter;
