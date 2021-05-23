import React from 'react'
import HeadPhone from '../assets/images/headphone.png'
import Header from '../components/Header'
import axios from 'axios';

const SoudMeter = ({onClick, setNewData}) => {

  function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
  }  

  const sendData = async () => {
    let data = {
        "address": "6781 No 3 Rd, Vancouver",
        "rate": "worse",
        "volume": randomNumber(30, 130),
        "timestamp": parseInt(Date.now() / 1000),
        "user":  "Alex",
        "city": "Vancouver"
    };
    console.log('will send data', data);
    let res = await axios.post('http://158.101.6.188:8080/add-data', {data});
    console.log('updated data is:', res.data)
    // setNewData(res.data.reverse())
  }

  return (
    <div className='absolute top-0 left-0 z-50 overflow-hidden bg-white h-screen w-screen flex flex-col' >
      <Header />
      <div className='text-2xl font-medium mt-8' onClick={() => onClick(false)}>Back to Home</div>
      <img src={HeadPhone} alt=""/>
      <div className='fixed h-14 inset-x-12 bottom-60 mx-8 border font-medium border-white rounded-md flex justify-center items-center' 
        style={{backgroundColor: '#FBED96', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}
        // onClick={() => { console.log('clicked'); sendData()}}
        onClick={() => {
          console.log('clicked');
          sendData();
        }}

      >
        Lets Start
      </div>
    </div>
  )
}

export default SoudMeter;
