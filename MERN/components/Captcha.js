import React, { Component } from 'react';
import { createCanvas } from 'canvas';

class Captcha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaCode: '',
      userCode: '',
      captchaValid: false
    };
  }

  componentDidMount() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    // Generate a random captcha code
    const captchaCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.setState({ captchaCode });

    // Draw the captcha on the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '40px Arial';
    ctx.fillText(captchaCode, 10, 50);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    // Check if the user's input matches the captcha code
    const { captchaCode } = this.state;
    const captchaValid = value.toUpperCase() === captchaCode;
    this.setState({ captchaValid });
  }

  render() {
    const { captchaValid } = this.state;

    return (
      <div>
        <canvas ref="canvas" width={200} height={100}  />
        <br />
        <label>
          Enter the code shown above:
          <input type="text" name="userCode" onChange={this.handleInputChange.bind(this)} />
        </label>
        <br />
        {captchaValid ? <p>Captcha valid!</p> : <p>Captcha invalid.</p>}
      </div>
    );
  }
}

export default Captcha;