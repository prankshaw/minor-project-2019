import React from "react";
import { Divider } from "semantic-ui-react";

import Essay from "./essay.jpg";
import Voice from "./voice.jpg";
import "./services.scss";

export default function Services() {
  return (
    <section className="services">
      <h1 align="center">Services</h1>
      <div className="services-div">
        <div className="services-div-left">
          <img src={Essay} alt="essay scoring" />
          <h4>Automated Essay Scoring</h4>
          <p>
            A Deep Learning model that predicts the score of a given input
            essay.
          </p>
        </div>

        <div className="services-div-right">
          <img src={Voice} alt="essay scoring" />
          <h4>Voice Analysis</h4>
          <p>
            Live Interview functionality will help students gain confidence
            before actual interviews, and will help to prepare answers.
          </p>
        </div>
        <Divider vertical>And</Divider>
      </div>
    </section>
  );
}
