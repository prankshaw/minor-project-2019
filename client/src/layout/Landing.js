import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
import { Container, Button } from "semantic-ui-react";

import Navbar from "./Navbar";
import Background from "./bg.jpg";
import Services from "./Services";
class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="landing">
          <Container>
            <div className="landing-top">
              <div className="landing-top--left">
                <p className="landing-top--left-title">
                  Ace your next video interview and essay writing interview.
                </p>
                <p className="landing-top--left-subtitle">
                  We use machine learning models and functionalities to simulate
                  real environment and scoring.
                </p>
                <Button
                  as={Link}
                  to="/register"
                  size="big"
                  content="Get Started"
                  circular
                />
              </div>
              <div className="landing-top--right">
                <img src={Background} alt="hemant garg" />
              </div>
            </div>
          </Container>
        </section>
        <Services />
      </div>
    );
  }
}
export default Landing;
