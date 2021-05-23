import SoundDetecter from './SoundDetecter'
import React, { useState } from 'react';

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
      <button onClick={toggleMicrophone}>
        {audioData ? 'Stop Testing' : `Let's Start`}
      </button>
      {audioData ? <SoundDetecter audioData={audioData} updateAverageDecibel={updateAverageDecibel} /> : ''}
      {averageDecibel ? <div>{averageDecibel}dbi</div> : ''
      }
    </>
  )
}

export default SoundMeter
