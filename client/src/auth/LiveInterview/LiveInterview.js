import React, { Component } from "react";
import Navbar from "../../layout/Navbar";

class LiveInterview extends Component {
  render() {
    return (
      <div>
        <Navbar auth={true} />
        LiveInterview
      </div>
    );
  }
}
export default LiveInterview;
