import React, { Component } from "react";
import { render } from "react-dom";
import { FloatingActionButton, MuiThemeProvider } from "material-ui";
import MicrophoneOn from "material-ui/svg-icons/av/mic";
import MicrophoneOff from "material-ui/svg-icons/av/stop";
import PauseIcon from "material-ui/svg-icons/av/pause";

import { ReactMic } from "react-mic";
// import sampleAudio from "./sample_audio.webm";
import ReactGA from "react-ga";

import Navbar from "../layout/Navbar";
import "./LiveInterview.scss";
import QuestionsSidebar from "./QuestionsSidebar";
import Webcamera from "./WebCamera";

ReactGA.initialize("UA-98862819-1");

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "Introduce Yourself ?",
      blobObject: null,
      isRecording: false,
      isPaused: false
    };
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  toggleSidebar = () => {
    let left = document.getElementsByClassName("interview-left")[0];
    let right = document.getElementsByClassName("interview-right")[0];
    let questionList = document.getElementsByClassName("question-list")[0];
    left.classList.toggle("show");
    right.classList.toggle("hide");
    questionList.classList.toggle("hide");
  };

  changeQues = question => {
    this.setState({ question });
    this.toggleSidebar();
  };

  startOrPauseRecording = () => {
    const { isPaused, isRecording } = this.state;

    if (isPaused) {
      this.setState({ isPaused: false });
    } else if (isRecording) {
      this.setState({ isPaused: true });
    } else {
      this.setState({ isRecording: true });
    }
  };

  stopRecording = () => {
    this.setState({ isRecording: false });
  };

  onSave = blobObject => {};

  onStart = () => {
    console.log("You can tap into the onStart callback");
  };

  onStop = blobObject => {
    this.setState({ blobURL: blobObject.blobURL });
  };

  onData(recordedBlob) {
    console.log("ONDATA CALL IS BEING CALLED! ", recordedBlob);
  }

  onBlock() {
    alert("ya blocked me!");
  }

  onPause() {
    alert("ya paused it");
  }

  render() {
    const { blobURL, isRecording, isPaused } = this.state;

    return (
      <div className="interviewCont">
        <Navbar auth={true} />
        <div className="interview">
          <div className="interview-left">
            <QuestionsSidebar
              changeQues={this.changeQues}
              toggleSidebar={this.toggleSidebar}
            />
          </div>
          <div className="interview-right">
            <Webcamera />
            <h1>Q. {this.state.question}</h1>
            <MuiThemeProvider>
              <div>
                <ReactMic
                  className="oscilloscope"
                  record={isRecording}
                  height={150}
                  // width={100}
                  pause={isPaused}
                  backgroundColor="#f7f8f9"
                  visualSetting="sinewave"
                  audioBitsPerSecond={128000}
                  onStop={this.onStop}
                  onStart={this.onStart}
                  onSave={this.onSave}
                  onData={this.onData}
                  strokeColor="#294F6D"
                />
                <div>
                  <audio
                    ref="audioSource"
                    controls="controls"
                    src={blobURL}
                  ></audio>
                </div>
                <br />
                <br />
                <FloatingActionButton
                  className="btn btn-record"
                  // secondary={true}
                  onClick={this.startOrPauseRecording}
                >
                  {isRecording && !isPaused ? <PauseIcon /> : <MicrophoneOn />}
                </FloatingActionButton>
                <FloatingActionButton
                  className="btn"
                  secondary={true}
                  disabled={!isRecording}
                  onClick={this.stopRecording}
                >
                  <MicrophoneOff />
                </FloatingActionButton>
              </div>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}
