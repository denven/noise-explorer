import React, { useState } from 'react'
import HeadPhone from '../assets/images/headphone.png'
import Header from '../components/Header';
import SoundMeter from '../components/SoundMeter';

const NoiseTestPage = ({ onClick }) => {
  const [ifShowMeter, setIfShowMeter] = useState(false);

  const userClickOnButton = () => {
    if (ifShowMeter) {
      setIfShowMeter(false)
    } else {
      setIfShowMeter(true)
    }
  }

  return (
    <div className='absolute top-0 left-0 z-50 overflow-hidden bg-white h-screen w-screen flex flex-col' >
      <Header />
      {ifShowMeter ?
        <>
          <div className='text-2xl font-medium mt-8 ml-6' onClick={() => onClick()}>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 inline' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokelinejoin='round' strokeWidth='2' d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg> Back to Home
          </div>
          {/* <img src={HeadPhone} alt='header images' className='mt-32' /> */}
          <div className='fixed h-14 inset-x-12 bottom-60 mx-8 border font-medium border-red rounded-md flex justify-center items-center' style={{ backgroundColor: '#d6d6d6', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} onClick={() => userClickOnButton()}>
            Lets Start
          </div>
          <SoundMeter />
        </>

        :
        <>
          <div className='text-2xl font-medium mt-8 ml-6' onClick={() => onClick()}>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 inline' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokelinejoin='round' strokeWidth='2' d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg> Back to Home
          </div>

          <img src={HeadPhone} alt='header images' className='mt-32' />
          <div className='fixed h-14 inset-x-12 bottom-60 mx-8 border font-medium border-white rounded-md flex justify-center items-center' style={{ backgroundColor: '#FBED96', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} onClick={() => userClickOnButton()}>
            Lets Start
          </div>
        </>
      }
    </div>
  )
}

export default NoiseTestPage;
