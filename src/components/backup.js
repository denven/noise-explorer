import React, { useEffect, useState } from 'react';
import AudioVisualiser from './AudioVisualiser';

const AudioAnalyser = (props) => {
  // console.log(Object.values(props));
  // console.log(props.props);
  const [audioData, setAudioData] = useState(new Uint8Array(0));
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  let dataArray = new Uint8Array(analyser.frequencyBinCount);
  let rafId;


  useEffect(() => {
    // console.log(audio);
    let source = audioContext.createMediaStreamSource(props.props);
    source.connect(analyser);
    rafId = requestAnimationFrame(tick);
    // navigator.getUserMedia({ audio: true, video: false }, function (stream) {
    //   source = audioContext.createMediaStreamSource(stream);
    //   source.connect(analyser);
    //   rafId = requestAnimationFrame(tick);
    //   // console.log(dataArray);
    // }, function () { console.log('Error getting Microphone stream'); });

    return (() => {
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tick = () => {
    analyser.getByteTimeDomainData(dataArray);
    setAudioData(dataArray);
    rafId = requestAnimationFrame(tick);
  }

  return (
    <>
      <AudioVisualiser audioData={audioData} />
    </>
  )
}

export default AudioAnalyser;
