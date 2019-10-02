import React, { Component } from "react";
import Webcam from "react-webcam";
class Webcamera extends Component {
  render() {
    const videoConstraints = {
      width: 280,
      height: 180,
      facingMode: "user"
    };
    return (
      <div className="webcamera">
        <Webcam audio={false} videoConstraints={videoConstraints} />
      </div>
    );
  }
}
export default Webcamera;
