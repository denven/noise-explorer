import React, { useState } from 'react'
import HeadPhone from '../assets/images/headphone.png'
import Header from '../components/Header';
import SoundMeter from '../components/SoundMeter';
import axios from 'axios';

const NoiseTestPage = ({ onClick, setNewData }) => {

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const sendData = async () => {
    let volume = randomNumber(30, 130);
    let rate =' good';
    if(volume > 105) {
      rate = 'worse';
    } else if (volume >= 75) {
      rate = 'normal';
    } else {
      rate = 'good';
    }

    let data = {
        "address": "6781 No 3 Rd, Vancouver",
        "rate": rate,
        "volume": volume,
        "timestamp": parseInt(Date.now() / 1000),
        "user":  "Alex",
        "city": "Vancouver"
    };
    console.log('will send data', data);
    let res = await axios.post('http://158.101.6.188:8080/add-data', { data });
    console.log('updated data is:', res.data)
    // setNewData(res.data.reverse())
  }

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
          <div className='fixed h-14 inset-x-12 bottom-60 mx-8 border font-medium border-red rounded-md flex justify-center items-center' style={{ backgroundColor: '#d6d6d6', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            onClick={() => {
              console.log('clicked');
              sendData();
              userClickOnButton()
            }}
          >
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
          <div className='fixed h-14 inset-x-12 bottom-60 mx-8 border font-medium border-white rounded-md flex justify-center items-center' style={{ backgroundColor: '#FBED96', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            onClick={() => {
              console.log('clicked');
              sendData();
              userClickOnButton()
            }}>
            Lets Start
          </div>
        </>
      }
    </div>
  )
}

export default NoiseTestPage;
