import React, { Component } from 'react';
import SoundCanvas from './SoundCanvas';

class SoundDetecter extends Component {

  constructor(props) {
    super(props);
    this.state = { audioData: new Uint8Array(0) };
    this.recursion = this.recursion.bind(this);
    this.totalDecibel = 0;
    this.totalDataSet = 0;
  }

  componentDidMount() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source = this.audioContext.createMediaStreamSource(this.props.audioData);
    this.source.connect(this.analyser);
    this.rafId = requestAnimationFrame(this.recursion);
  }


  recursion() {
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.tmp = this.average(Object.values(this.dataArray), Object.keys(this.dataArray).length);
    this.totalDecibel += this.tmp - 95;
    this.totalDataSet += 1;
    // if (this.averageDecibel) { this.averageDecibel = this.tmp - 95 } else { this.averageDecibel = (this.tmp + this.averageDecibel - 95) / 2 }
    this.setState({ audioData: this.dataArray });
    this.rafId = requestAnimationFrame(this.recursion);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
    this.ifReady = 1;
    // console.log('ifReady', this.ifReady);
    // updateAverageDecibel
    // this.props.averageDecibel = this.totalDecibel / this.totalDataSet;
    // console.log('avarageDecibel', this.totalDecibel / this.totalDataSet);
    this.props.updateAverageDecibel(this.totalDecibel / this.totalDataSet / 5 * 10);
  }

  average(a, n) {
    var sum = 0;
    for (var i = 0; i < n; i++) sum += a[i];
    return parseFloat(sum / n);
  }

  render() {
    return (
      <>
        <SoundCanvas audioData={this.state.audioData} />
        <div>{this.avarageDecibel}</div>
        {/* {this.audioData ? <div>{this.avarageDecibel}</div> : ''} */}
        {/* {this.ifReady ? <div>{this.avarageDecibel}</div> : ''} */}
        {/* <div>{this.avarageDecibel}</div> */}
      </>
    );
  }
}

export default SoundDetecter;
