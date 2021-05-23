import SoundDetecter from './SoundDetecter'
import React, { useState } from 'react';
import HeadPhone from '../assets/images/headphone.png'


const SoundMeter = () => {
  const [audioData, setAudioData] = useState(null);
  const [averageDecibel, setAverageDecibel] = useState(null);

  const enableMicrophone = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    setAudioData(audio);
  }

  const updateAverageDecibel = (value) => {
    setAverageDecibel(value.toFixed(2));
  }

  const disableMicrophone = () => {
    audioData.getTracks().forEach(track => track.stop());
    setAudioData(null);
  }

  const toggleMicrophone = () => {
    if (audioData) {
      disableMicrophone(); // otherwise this won't stop
    } else {
      enableMicrophone();
    }
  }

  return (
    <>
      <div onClick={() => toggleMicrophone()} className='fixed h-14 inset-x-12 bottom-60 mx-8 border font-medium border-white rounded-md flex justify-center items-center' style={{ backgroundColor: '#FBED96', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        {audioData ? 'Stop Testing' : `Start Recording`}
      </div>
      {audioData ? <SoundDetecter audioData={audioData} updateAverageDecibel={updateAverageDecibel} /> : ''}
      {/* #FFDC00 */}

      {averageDecibel && !audioData ?
        <div className='w-80 h-80 ml-auto mr-auto mt-24 text-center	rounded-full items-center justify-center flex' style={{ backgroundColor: '#FBED96' }}>
          <div style={{ fontSize: '72px', fontWeight: '700', lineHeight: '108px' }}>
            {averageDecibel}
          </div>dbi

        </div> : ''
      }
    </>
  )
}

export default SoundMeter
