import React, { Component } from 'react';

class SoundCanvas extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    const { audioData } = this.props;
    const canvas = this.canvas.current;
    const height = canvas.height;
    const width = canvas.width;
    const canvasCtx = canvas.getContext('2d');
    let x = 0;
    const sliceWidth = (width * 1.0) / audioData.length;

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = '#d6d6d6';
    canvasCtx.clearRect(0, 0, width, height);

    canvasCtx.beginPath();
    canvasCtx.moveTo(0, height / 2);
    let highest = audioData[0];
    for (const item of audioData) {
      const y = (item / 255.0) * height;
      canvasCtx.lineTo(x, y);
      x += sliceWidth;
      if (highest < item) {
        highest = item;
      }
    }
    canvasCtx.lineTo(x, height / 2);
    canvasCtx.stroke();
  }

  render() {
    return (
      <canvas ref={this.canvas} width='300' height='300' />
    );
  }
}

export default SoundCanvas;