import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";

import Navbar from "./Navbar";
import Essay from "./essay.jpg";
import Voice from "./voice.jpg";
import "./Dashboard.scss";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar auth={true} />
        <div className="dashboard">
          <h1>Choose your path</h1>

          <div className="path">
            <div className="path-left">
              <a href="#">
                <img src={Essay} alt="Essay Scoring" />
              </a>
              <a href="#">
                <h3>Essay Practice</h3>
              </a>
            </div>
            <div className="path-right">
              <Link to="/audio-practice">
                <img src={Voice} alt="Live Interview Practice" />
              </Link>
              <Link to="/audio-practice">
                <h3>Live Interview Practice</h3>
              </Link>
            </div>
            <Divider vertical>And</Divider>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
