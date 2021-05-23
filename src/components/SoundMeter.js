import SoundDetecter from './SoundDetecter'
import React, { useState } from 'react';

const SoundMeter = () => {
  const [audioData, setAudioData] = useState(null);

  const enableMicrophone = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    setAudioData(audio);
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
        {audioData ? 'Stop microphone' : 'Get microphone input'}
      </button>
      {audioData ? <SoundDetecter audioData={audioData} /> : ''}
    </>
  )
}

export default SoundMeter
